"use client";
import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic'; 
import { db, storage } from '@/firebase'; 
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Import Storage functions
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique filenames

// --- FIX FOR REACT 19 / NEXT.JS 15 ---
import ReactDOM from 'react-dom';
if (typeof window !== 'undefined' && !ReactDOM.findDOMNode) {
    // @ts-ignore
    ReactDOM.findDOMNode = (component) => {
        return component instanceof Element ? component : (component?.current || null);
    };
}

// --- DYNAMIC QUILL IMPORT ---
const ReactQuill = dynamic(async () => {
  const { default: RQ } = await import('react-quill');
  const { default: BlotFormatter } = await import('quill-blot-formatter');
  const { default: htmlEditButton } = await import('quill-html-edit-button');

  const ColorStyle = RQ.Quill.import('attributors/style/color');
  const BackgroundStyle = RQ.Quill.import('attributors/style/background');
  const SizeStyle = RQ.Quill.import('attributors/style/size');
  const AlignStyle = RQ.Quill.import('attributors/style/align');
  const FontStyle = RQ.Quill.import('attributors/style/font');

  RQ.Quill.register(ColorStyle, true);
  RQ.Quill.register(BackgroundStyle, true);
  RQ.Quill.register(SizeStyle, true);
  RQ.Quill.register(AlignStyle, true);
  RQ.Quill.register(FontStyle, true);
  RQ.Quill.register('modules/blotFormatter', BlotFormatter);
  RQ.Quill.register("modules/htmlEditButton", htmlEditButton);

  return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
}, { ssr: false });

const ManageBlogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [uploading, setUploading] = useState(false); // State for upload spinner
    const [dragActive, setDragActive] = useState(false); // State for drag visual

    // Form State
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Engineering');
    const [author, setAuthor] = useState('JEC Admin');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [image, setImage] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [isFeatured, setIsFeatured] = useState(false);

    // SEO State
    const [slug, setSlug] = useState(''); 
    const [imageAlt, setImageAlt] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDesc, setMetaDesc] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');

    const modules = useMemo(() => ({
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image', 'video'],
            ['clean']
        ],
        blotFormatter: {},
        htmlEditButton: {
            debug: true, msg: "Edit HTML Source", okText: "Update", buttonHTML: "&lt;&gt;",
            buttonTitle: "Show HTML Source",
            styleWrapper: `.ql-html-editorContainer { background: #f0f0f0; padding: 20px; border: 1px solid #ccc; }`
        }
    }), []);

    const fetchPosts = async () => {
        try {
            const q = query(collection(db, "blog_posts"), orderBy("date", "desc"));
            const querySnapshot = await getDocs(q);
            setPosts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        } catch (error) { console.error(error); }
    };

    useEffect(() => { fetchPosts(); }, []);

    // --- NEW IMAGE UPLOAD LOGIC (Centralized) ---
    const processFile = async (file) => {
        if (!file) return;

        // 1. Check File Size (1.00 MB = 1048576 bytes)
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        if (file.size > 1048576) {
            alert(`File is too large (${fileSizeMB}MB). Max allowed: 1.00MB`);
            return;
        }

        // 2. Upload to Firebase
        try {
            setUploading(true);
            const storageRef = ref(storage, `blog-covers/${uuidv4()}-${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Optional: You can track progress here
                },
                (error) => {
                    console.error(error);
                    toast.error("Upload failed!");
                    setUploading(false);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setImage(downloadURL);
                    setUploading(false);
                    toast.success("Image uploaded!");
                }
            );
        } catch (error) {
            console.error("Error uploading file:", error);
            setUploading(false);
            toast.error("Something went wrong.");
        }
    };

    // DRAG AND DROP HANDLERS
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processFile(e.dataTransfer.files[0]);
        }
    };

    const handleRemoveImage = () => {
        setImage('');
    };
    // ---------------------------------------------------

    const autoGenerateSlug = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content || !image) { toast.warn("Required: Title, Content, Image"); return; }

        const postData = {
            title, category, author, date, image, imageAlt, excerpt, content,
            slug: slug || autoGenerateSlug(title),
            isFeatured, metaTitle, metaDesc, metaKeywords, createdAt: new Date()
        };

        try {
            if (isEditing) { await updateDoc(doc(db, "blog_posts", editId), postData); toast.success("Updated!"); }
            else { await addDoc(collection(db, "blog_posts"), postData); toast.success("Published!"); }
            resetForm(); fetchPosts();
        } catch (error) { toast.error("Error saving post."); }
    };

    const handleEdit = (post) => {
        setTitle(post.title); setCategory(post.category); setAuthor(post.author);
        setDate(post.date); setImage(post.image); setExcerpt(post.excerpt);
        setContent(post.content); setIsFeatured(post.isFeatured || false);
        setSlug(post.slug || ''); 
        setImageAlt(post.imageAlt || ''); setMetaTitle(post.metaTitle || '');
        setMetaDesc(post.metaDesc || ''); setMetaKeywords(post.metaKeywords || '');
        setEditId(post.id); setIsEditing(true); window.scrollTo(0, 0);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete?")) { await deleteDoc(doc(db, "blog_posts", id)); fetchPosts(); }
    };

    const resetForm = () => {
        setTitle(''); setCategory('Engineering'); setAuthor('JEC Admin');
        setDate(new Date().toISOString().split('T')[0]); setImage(''); setExcerpt('');
        setContent(''); setIsFeatured(false); setSlug(''); setImageAlt('');
        setMetaTitle(''); setMetaDesc(''); setMetaKeywords('');
        setIsEditing(false); setEditId(null);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
            <ToastContainer />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>{isEditing ? "Edit Article" : "Write New Article"}</h2>
                {isEditing && <button onClick={resetForm} style={styles.cancelBtn}>Cancel Edit</button>}
            </div>

            <div style={styles.card}>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px' }}>
                        {/* Left Column */}
                        <div>
                            <label style={styles.label}>Title</label>
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={styles.input} placeholder="Enter article title..." />

                            <label style={styles.label}>Excerpt (Short summary)</label>
                            <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} style={{ ...styles.input, height: '80px' }} />

                            <label style={styles.label}>Main Content</label>
                            <div style={{ background: 'white', marginBottom: '20px' }}>
                                <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} style={{ height: '500px', marginBottom: '50px' }} />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', height: 'fit-content' }}>
                            
                            {/* --- CUSTOM IMAGE UPLOAD UI (UPDATED FOR DRAG & DROP) --- */}
                            <label style={styles.label}>Cover Image</label>
                            
                            {!image ? (
                                // Upload State (Drag & Drop + Click)
                                <label 
                                    style={{ 
                                        ...styles.uploadBox, 
                                        backgroundColor: dragActive ? '#e2e8f0' : 'white',
                                        borderColor: dragActive ? '#0072C6' : '#cbd5e1'
                                    }}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                >
                                    {uploading ? (
                                        <p style={{ color: '#0072C6', fontWeight: 'bold' }}>Uploading...</p>
                                    ) : (
                                        <>
                                            <input 
                                                type="file" 
                                                accept="image/*" 
                                                onChange={(e) => {
                                                    processFile(e.target.files[0]);
                                                    e.target.value = null; // Reset
                                                }}
                                                style={{ display: 'none' }} 
                                            />
                                            <div style={{ cursor: 'pointer', color: '#0072C6', fontWeight: '600' }}>
                                                <i className="fas fa-cloud-upload-alt" style={{ fontSize: '24px', marginBottom: '5px' }}></i><br/>
                                                Drag & Drop or Click to Upload
                                            </div>
                                            <small style={{ color: '#64748B', display: 'block', marginTop: '5px' }}>Max: 1.00 MB</small>
                                        </>
                                    )}
                                </label>
                            ) : (
                                // Preview State with Remove Button
                                <div style={{ position: 'relative', border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                                    <img src={image} alt="Preview" style={{ width: '100%', display: 'block' }} />
                                    <button 
                                        type="button" 
                                        onClick={handleRemoveImage}
                                        style={{
                                            position: 'absolute',
                                            top: '5px',
                                            right: '5px',
                                            background: 'rgba(255, 0, 0, 0.8)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '24px',
                                            height: '24px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        title="Remove Image"
                                    >
                                        &times;
                                    </button>
                                </div>
                            )}
                            {/* ---------------------------------- */}

                            <label style={styles.label}>Image Alt Text</label>
                            <input type="text" value={imageAlt} onChange={e => setImageAlt(e.target.value)} style={styles.input} placeholder="Description for accessibility" />

                            <label style={styles.label}>Category</label>
                            <select value={category} onChange={e => setCategory(e.target.value)} style={styles.input}>
                                <option>Engineering</option>
                                <option>Campus Life</option>
                                <option>Placements</option>
                                <option>Events</option>
                                <option>Career</option>
                                <option>Why JEC</option>
                                <option>Business</option>
                                <option>Motivational</option>
                                <option>Admissions</option>
                                <option>Science & Technology</option>
                                <option>Others</option>
                            </select>

                            <label style={styles.label}>Author & Date</label>
                            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} style={{ ...styles.input, marginBottom: '5px' }} />
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} style={styles.input} />

                            <div style={{ margin: '15px 0' }}>
                                <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600' }}>
                                    <input type="checkbox" checked={isFeatured} onChange={e => setIsFeatured(e.target.checked)} />
                                    Set as Featured Post
                                </label>
                            </div>

                            <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #cbd5e1' }} />

                            <h4 style={{ marginBottom: '10px' }}>SEO Settings</h4>

                            <label style={styles.label}>URL Slug</label>
                            <input
                                type="text"
                                value={slug}
                                onChange={e => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                                style={styles.input}
                            />
                            <small style={{ fontSize: '11px', color: '#64748B' }}>Leave empty to generate</small>

                            <label style={{ ...styles.label, marginTop: '15px' }}>Meta Title</label>
                            <input type="text" value={metaTitle} onChange={e => setMetaTitle(e.target.value)} style={styles.input} />

                            <label style={styles.label}>Meta Description</label>
                            <textarea value={metaDesc} onChange={e => setMetaDesc(e.target.value)} style={{ ...styles.input, height: '70px', fontSize: '13px' }} />

                            <label style={styles.label}>Keywords</label>
                            <input type="text" value={metaKeywords} onChange={e => setMetaKeywords(e.target.value)} style={styles.input} />

                            <button type="submit" style={styles.saveBtn}>{isEditing ? "Update Post" : "Publish Post"}</button>
                        </div>
                    </div>
                </form>
            </div>

            <div style={styles.listContainer}>
                <h3>Recent Articles</h3>
                {posts.length === 0 && <p>No posts found.</p>}
                {posts.map(post => (
                    <div key={post.id} style={styles.listItem}>
                        <img src={post.image} alt="thumb" style={styles.thumb} />
                        <div style={{ flex: 1 }}>
                            <h4 style={{ margin: '0 0 5px' }}>{post.title}</h4>
                            <small style={{ color: '#64748B' }}>{post.date} • {post.category}</small>
                        </div>
                        <div>
                            <button onClick={() => handleEdit(post)} style={styles.editBtn}>Edit</button>
                            <button onClick={() => handleDelete(post.id)} style={styles.deleteBtn}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    card: { background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' },
    label: { display: 'block', fontWeight: '600', margin: '12px 0 6px', fontSize: '13px', color: '#475569' },
    input: { width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', outline: 'none' },
    saveBtn: { width: '100%', padding: '14px', background: '#2563EB', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px', fontSize: '15px' },
    cancelBtn: { padding: '8px 15px', background: '#64748B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
    listContainer: { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '40px' },
    listItem: { display: 'flex', alignItems: 'center', gap: '15px', background: 'white', padding: '15px', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
    thumb: { width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' },
    editBtn: { padding: '6px 12px', background: '#E0F2FE', color: '#0284C7', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '5px', fontWeight: '600' },
    deleteBtn: { padding: '6px 12px', background: '#FEE2E2', color: '#DC2626', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600' },
    // ADDED STYLE FOR DRAG BOX
    uploadBox: { 
        border: '2px dashed #cbd5e1', 
        borderRadius: '6px', 
        padding: '20px', 
        textAlign: 'center', 
        display: 'block', 
        cursor: 'pointer', 
        transition: '0.2s all' 
    }
};

export default ManageBlogs;