"use client";
import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { db, storage } from '@/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';

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

    const Quill = RQ.Quill;
    if (!Quill.imports['modules/blotFormatter']) {
        Quill.register('modules/blotFormatter', BlotFormatter);
    }
    if (!Quill.imports['modules/htmlEditButton']) {
        Quill.register("modules/htmlEditButton", htmlEditButton);
    }

    const AlignStyle = Quill.import('attributors/style/align');
    Quill.register(AlignStyle, true);
    const SizeStyle = Quill.import('attributors/style/size');
    Quill.register(SizeStyle, true);
    const ColorStyle = Quill.import('attributors/style/color');
    Quill.register(ColorStyle, true);
    const BackgroundStyle = Quill.import('attributors/style/background');
    Quill.register(BackgroundStyle, true);

    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
}, { ssr: false });


const ManageDepartments = () => {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    // FORM STATES
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [bannerImage, setBannerImage] = useState('');
    const [content, setContent] = useState('');
    const [hodName, setHodName] = useState('');
    const [hodMessage, setHodMessage] = useState('');
    const [hodImage, setHodImage] = useState('');
    const [eligibility, setEligibility] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');

    // Upload States
    const [uploading, setUploading] = useState(false);
    const [dragActiveBanner, setDragActiveBanner] = useState(false);
    const [dragActiveHod, setDragActiveHod] = useState(false);

    const DEFAULT_ELIGIBILITY = `<table style="width: 100%; border-collapse: collapse; border: 1px solid #ccc;"><tr style="background: #f3f4f6;"><th style="border: 1px solid #ccc; padding: 10px; text-align: left;">Program</th><th style="border: 1px solid #ccc; padding: 10px; text-align: left;">Eligibility Criteria</th></tr><tr><td style="border: 1px solid #ccc; padding: 10px;">B.Tech</td><td style="border: 1px solid #ccc; padding: 10px;">10+2 with Physics, Maths and 45% Marks</td></tr></table>`;

    useEffect(() => { fetchDepartments(); }, []);

    const fetchDepartments = async () => {
        try {
            const q = query(collection(db, "departments"), orderBy("name"));
            const querySnapshot = await getDocs(q);
            setDepartments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (error) { console.error("Fetch Error:", error); }
        setLoading(false);
    };

    // --- NEW UPLOAD LOGIC (Shared for Banner & HOD) ---
    const processUpload = async (file, setUrlFunction) => {
        if (!file) return;

        // 1. Check Size (1.00 MB Limit)
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        if (file.size > 1048576) {
            alert(`File is too large (${fileSizeMB}MB). Max allowed: 1.00MB`);
            return;
        }

        // 2. Upload to Firebase
        try {
            setUploading(true);
            const storageRef = ref(storage, `departments/${Date.now()}-${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                null,
                (error) => {
                    console.error(error);
                    toast.error("Upload failed");
                    setUploading(false);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setUrlFunction(downloadURL); // Update the specific state passed
                    setUploading(false);
                    toast.success("Image uploaded!");
                }
            );
        } catch (error) {
            console.error(error);
            setUploading(false);
            toast.error("Something went wrong");
        }
    };

    // Drag & Drop Handlers
    const handleDrag = (e, setDragState) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragState(true);
        } else if (e.type === "dragleave") {
            setDragState(false);
        }
    };

    const handleDrop = (e, setUrlFunction, setDragState) => {
        e.preventDefault();
        e.stopPropagation();
        setDragState(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processUpload(e.dataTransfer.files[0], setUrlFunction);
        }
    };
    // ------------------------------------------

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'align': [] }],
                ['link', 'image', 'video'],
                ['table'],
                ['clean']
            ],
            handlers: {
                image: () => {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    input.click();
                    input.onchange = async () => {
                        const file = input.files[0];
                        if (file) {
                            try {
                                const toastId = toast.loading("Uploading image...");
                                const storageRef = ref(storage, `departments/content-${uuidv4()}`);
                                const uploadTask = uploadBytesResumable(storageRef, file);
                                uploadTask.on('state_changed', null, null, async () => {
                                    const url = await getDownloadURL(uploadTask.snapshot.ref);
                                    toast.dismiss(toastId);
                                    const quill = document.querySelector('.ql-editor:focus')?.parentElement?.__quill;
                                    if (quill) {
                                        const range = quill.getSelection(true);
                                        quill.insertEmbed(range.index, 'image', url);
                                    }
                                });
                            } catch (e) { toast.error("Upload failed"); }
                        }
                    };
                },
                table: () => {
                    const tableHtml = `<table style="width: 100%; border-collapse: collapse; margin: 15px 0; border: 1px solid #cbd5e1;"><tbody><tr><td style="border: 1px solid #cbd5e1; padding: 12px; background: #f8fafc;"><strong>Header 1</strong></td><td style="border: 1px solid #cbd5e1; padding: 12px; background: #f8fafc;"><strong>Header 2</strong></td></tr><tr><td style="border: 1px solid #cbd5e1; padding: 12px;">Data</td><td style="border: 1px solid #cbd5e1; padding: 12px;">Data</td></tr></tbody></table><p><br></p>`;
                    const quill = document.querySelector('.ql-editor:focus')?.parentElement?.__quill;
                    if (quill) {
                        const range = quill.getSelection(true);
                        quill.clipboard.dangerouslyPasteHTML(range.index, tableHtml);
                    } else { toast.warn("Click inside the editor first!"); }
                }
            }
        },
        blotFormatter: {},
        htmlEditButton: { msg: "Edit HTML", okText: "Update", buttonHTML: "&lt;&gt;" }
    }), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name, slug: slug || name.toLowerCase().replace(/ /g, '-'),
            title, subtitle, bannerImage, content,
            hodName, hodMessage, hodImage, eligibility,
            metaTitle, metaDescription, metaKeywords,
            updatedAt: new Date()
        };
        try {
            if (isEditing) { await updateDoc(doc(db, "departments", editId), data); toast.success("Updated!"); }
            else { await addDoc(collection(db, "departments"), data); toast.success("Created!"); }
            resetForm(); fetchDepartments();
        } catch (error) { toast.error("Save failed."); }
    };

    const handleEdit = (dept) => {
        setName(dept.name || ''); setSlug(dept.slug || ''); setTitle(dept.title || '');
        setSubtitle(dept.subtitle || ''); setBannerImage(dept.bannerImage || '');
        setContent(dept.content || ''); setHodName(dept.hodName || '');
        setHodMessage(dept.hodMessage || ''); setHodImage(dept.hodImage || '');
        setEligibility(dept.eligibility || '');
        setMetaTitle(dept.metaTitle || ''); setMetaDescription(dept.metaDescription || ''); setMetaKeywords(dept.metaKeywords || '');
        setEditId(dept.id); setIsEditing(true); window.scrollTo(0, 0);
    };

    const resetForm = () => {
        setIsEditing(false); setEditId(null);
        setName(''); setSlug(''); setTitle(''); setSubtitle('');
        setBannerImage(''); setContent(''); setHodName('');
        setHodMessage(''); setHodImage(''); setEligibility('');
        setMetaTitle(''); setMetaDescription(''); setMetaKeywords('');
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this page?")) {
            await deleteDoc(doc(db, "departments", id));
            toast.success("Deleted!");
            fetchDepartments();
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <style>{`
                .quill-wrapper { background: white; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; }
                .ql-toolbar.ql-snow { border: none !important; border-bottom: 1px solid #cbd5e1 !important; background: #f8fafc; }
                .ql-container.ql-snow { border: none !important; min-height: 350px !important; height: auto !important; }
                .ql-editor { min-height: 350px !important; font-size: 16px; line-height: 1.6; }
                .ql-editor table { border-collapse: collapse; width: 100%; margin: 10px 0; border: 1px solid #ccc; }
                .ql-editor td, .ql-editor th { border: 1px solid #ccc !important; padding: 12px; }
                .ql-snow.ql-toolbar button.ql-table::after {
                    content: "Table"; font-size: 10px; font-weight: bold; position: absolute; top: 5px; left: 4px; color: #444;
                }
            `}</style>

            <ToastContainer />
            <h2 style={{ marginBottom: '20px' }}>{isEditing ? `Editing: ${name}` : "Create Department"}</h2>

            <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 15px rgba(0,0,0,0.1)' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <h3 style={styles.head}>1. Settings</h3>
                            <label style={styles.label}>Department Name</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} required />
                            <label style={styles.label}>URL Slug</label>
                            <input type="text" value={slug} onChange={e => setSlug(e.target.value)} style={styles.input} />
                        </div>
                        <div>
                            <h3 style={styles.head}>2. Banner</h3>

                            {/* --- BANNER UPLOAD --- */}
                            <label style={styles.label}>Banner Image</label>
                            {!bannerImage ? (
                                <label
                                    style={{
                                        ...styles.uploadBox,
                                        backgroundColor: dragActiveBanner ? '#e2e8f0' : 'white',
                                        borderColor: dragActiveBanner ? '#0072c6' : '#cbd5e1'
                                    }}
                                    onDragEnter={(e) => handleDrag(e, setDragActiveBanner)}
                                    onDragLeave={(e) => handleDrag(e, setDragActiveBanner)}
                                    onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); handleDrag(e, setDragActiveBanner); }}
                                    onDrop={(e) => handleDrop(e, setBannerImage, setDragActiveBanner)}
                                >
                                    {uploading ? (
                                        <p style={{ color: '#0072c6', fontWeight: 'bold' }}>Uploading...</p>
                                    ) : (
                                        <>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    processUpload(e.target.files[0], setBannerImage);
                                                    e.target.value = null;
                                                }}
                                                style={{ display: 'none' }}
                                            />
                                            <div style={{ cursor: 'pointer', color: '#0072c6', fontWeight: '600' }}>
                                                <i className="fas fa-cloud-upload-alt" style={{ fontSize: '24px', marginBottom: '5px' }}></i><br />
                                                Drag & Drop or Click
                                            </div>
                                            <small style={{ color: '#64748B', display: 'block', marginTop: '5px' }}>Max: 1.00 MB</small>
                                        </>
                                    )}
                                </label>
                            ) : (
                                <div style={{ position: 'relative', marginTop: '10px' }}>
                                    <img src={bannerImage} alt="Banner" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                                    <button
                                        type="button"
                                        onClick={() => setBannerImage('')}
                                        style={{ position: 'absolute', top: 5, right: 5, background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer' }}
                                    >
                                        &times;
                                    </button>
                                </div>
                            )}
                            {/* ------------------- */}

                        </div>
                    </div>

                    <div>
                        <h3 style={styles.head}>3. Main Content</h3>
                        <div className="quill-wrapper">
                            <ReactQuill
                                key={isEditing ? 'edit-mode' : 'new-mode'}
                                theme="snow"
                                value={content}
                                onChange={setContent}
                                modules={modules}
                            />
                        </div>
                    </div>

                    <div style={{ background: '#F8FAFC', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h3 style={styles.head}>4. HOD Section</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
                            <div>
                                {/* --- HOD IMAGE UPLOAD --- */}
                                <label style={styles.label}>HOD Photo</label>
                                {!hodImage ? (
                                    <label
                                        style={{
                                            ...styles.uploadBox,
                                            backgroundColor: dragActiveHod ? '#e2e8f0' : 'white',
                                            borderColor: dragActiveHod ? '#0072c6' : '#cbd5e1'
                                        }}
                                        onDragEnter={(e) => handleDrag(e, setDragActiveHod)}
                                        onDragLeave={(e) => handleDrag(e, setDragActiveHod)}
                                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); handleDrag(e, setDragActiveHod); }}
                                        onDrop={(e) => handleDrop(e, setHodImage, setDragActiveHod)}
                                    >
                                        {uploading ? (
                                            <p style={{ color: '#0072c6', fontWeight: 'bold' }}>Uploading...</p>
                                        ) : (
                                            <>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        processUpload(e.target.files[0], setHodImage);
                                                        e.target.value = null;
                                                    }}
                                                    style={{ display: 'none' }}
                                                />
                                                <div style={{ cursor: 'pointer', color: '#0072c6', fontWeight: '600' }}>
                                                    <i className="fas fa-cloud-upload-alt" style={{ fontSize: '24px', marginBottom: '5px' }}></i><br />
                                                    Drag & Drop or Click
                                                </div>
                                                <small style={{ color: '#64748B', display: 'block', marginTop: '5px' }}>Max: 1.00 MB</small>
                                            </>
                                        )}
                                    </label>
                                ) : (
                                    <div style={{ position: 'relative', width: '120px' }}>
                                        <img src={hodImage} alt="HOD" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginTop: '10px' }} />
                                        <button
                                            type="button"
                                            onClick={() => setHodImage('')}
                                            style={{ position: 'absolute', top: 10, right: 0, background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                )}
                                {/* ----------------------- */}
                            </div>
                            <div>
                                <label style={styles.label}>HOD Name</label>
                                <input type="text" value={hodName} onChange={e => setHodName(e.target.value)} style={styles.input} />
                                <label style={styles.label}>HOD Message</label>
                                <textarea value={hodMessage} onChange={e => setHodMessage(e.target.value)} style={{ ...styles.input, height: '100px' }} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 style={styles.head}>5. Eligibility</h3>
                        <button type="button" onClick={() => setEligibility(DEFAULT_ELIGIBILITY)} style={{ marginBottom: '10px', padding: '5px 10px', cursor: 'pointer' }}>Use Table Template</button>
                        <div className="quill-wrapper">
                            <ReactQuill
                                key={isEditing ? 'edit-elig' : 'new-elig'}
                                theme="snow"
                                value={eligibility}
                                onChange={setEligibility}
                                modules={modules}
                            />
                        </div>
                    </div>

                    <div style={{ background: '#F0FDF4', padding: '25px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                        <h3 style={{ ...styles.head, color: '#16a34a' }}>6. SEO / Meta Tags</h3>
                        <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '15px' }}>These fields control what appears on Google search results for this department page.</p>
                        <label style={styles.label}>Meta Title <span style={{ fontWeight: 400, color: '#94a3b8' }}>(shown on browser tab &amp; Google — keep under 60 characters)</span></label>
                        <input
                            type="text"
                            value={metaTitle}
                            onChange={e => setMetaTitle(e.target.value)}
                            placeholder={`e.g. Computer Science Engineering | JEC Jaipur`}
                            style={styles.input}
                        />
                        <label style={styles.label}>Meta Description <span style={{ fontWeight: 400, color: '#94a3b8' }}>(shown under link on Google — keep under 160 characters)</span></label>
                        <textarea
                            value={metaDescription}
                            onChange={e => setMetaDescription(e.target.value)}
                            placeholder="e.g. Explore the CSE department at JEC Jaipur — modern labs, expert faculty, and 90%+ placement record."
                            style={{ ...styles.input, height: '80px', resize: 'vertical' }}
                        />
                        <label style={styles.label}>Meta Keywords <span style={{ fontWeight: 400, color: '#94a3b8' }}>(comma-separated)</span></label>
                        <input
                            type="text"
                            value={metaKeywords}
                            onChange={e => setMetaKeywords(e.target.value)}
                            placeholder="e.g. CSE JEC, computer science Jaipur, engineering college Rajasthan"
                            style={styles.input}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button type="submit" style={styles.saveBtn}>{isEditing ? "Update Page" : "Publish Page"}</button>
                        {isEditing && <button type="button" onClick={resetForm} style={styles.cancelBtn}>Cancel Edit</button>}
                    </div>
                </form>
            </div>

            <div style={{ marginTop: '50px' }}>
                <h3 style={styles.head}>Existing Departments</h3>
                {loading ? <p>Loading...</p> : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {departments.map(d => (
                            <div key={d.id} style={styles.listItem}>
                                <span style={{ fontWeight: '600' }}>{d.name}</span>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button onClick={() => handleEdit(d)} style={styles.editBtn}>Edit</button>
                                    <button onClick={() => handleDelete(d.id)} style={styles.deleteBtn}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const styles = {
    input: { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' },
    label: { display: 'block', marginBottom: '5px', fontWeight: '600', color: '#334155' },
    head: { borderBottom: '2px solid #e2e8f0', color: '#0072c6', marginBottom: '15px', paddingBottom: '5px', fontWeight: '700' },
    saveBtn: { padding: '15px 30px', background: '#0072c6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
    cancelBtn: { padding: '15px 30px', background: '#94a3b8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' },
    listItem: { padding: '15px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    editBtn: { padding: '6px 15px', background: '#e0f2fe', color: '#0369a1', border: 'none', borderRadius: '4px', cursor: 'pointer' },
    deleteBtn: { padding: '6px 15px', background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: '4px', cursor: 'pointer' },
    // ADDED STYLE FOR DRAG BOX
    uploadBox: {
        border: '2px dashed #cbd5e1',
        borderRadius: '6px',
        padding: '15px',
        textAlign: 'center',
        display: 'block',
        cursor: 'pointer',
        transition: '0.2s all'
    }
};

export default ManageDepartments;