"use client";
import React, { useState, useEffect } from 'react';
import { db, storage } from '@/firebase'; 
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    // Form State
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [quote, setQuote] = useState('');
    const [placement, setPlacement] = useState('');
    const [salary, setSalary] = useState('');
    const [image, setImage] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [order, setOrder] = useState(1);

    // Upload State
    const [uploading, setUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    // 1. Fetch logic
    const fetchTestimonials = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, "student_testimonials"), orderBy("order"));
            const querySnapshot = await getDocs(q);
            const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTestimonials(list);
        } catch (error) {
            console.warn("Sorting failed, fetching normally:", error);
            const querySnapshot = await getDocs(collection(db, "student_testimonials"));
            const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTestimonials(list);
        }
        setLoading(false);
    };

    useEffect(() => { fetchTestimonials(); }, []);

    // --- NEW UPLOAD LOGIC ---
    const processUpload = async (file) => {
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
            const storageRef = ref(storage, `testimonials/${Date.now()}-${file.name}`);
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
                    setImage(downloadURL);
                    setUploading(false);
                    toast.success("Photo uploaded!");
                }
            );
        } catch (error) {
            console.error(error);
            setUploading(false);
            toast.error("Something went wrong");
        }
    };

    // Drag & Drop Handlers
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
            processUpload(e.dataTransfer.files[0]);
        }
    };

    const handleRemoveImage = () => {
        setImage('');
    };
    // ------------------------

    // 2. Submit Logic
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !quote || !course) {
            toast.warn("Name, Course, and Quote are required!");
            return;
        }

        const data = {
            name,
            course,
            quote,
            placement,
            salary,
            imageUrl: image,
            imageAlt,
            order: Number(order)
        };

        try {
            if (isEditing) {
                await updateDoc(doc(db, "student_testimonials", editId), data);
                toast.success("Testimonial updated!");
            } else {
                await addDoc(collection(db, "student_testimonials"), data);
                toast.success("Testimonial added!");
            }
            resetForm();
            fetchTestimonials();
        } catch (error) {
            console.error("Error saving:", error);
            toast.error("Error saving data.");
        }
    };

    // 3. Delete Logic
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this testimonial?")) {
            try {
                await deleteDoc(doc(db, "student_testimonials", id));
                toast.success("Deleted successfully!");
                fetchTestimonials();
            } catch (error) {
                toast.error("Error deleting item.");
            }
        }
    };

    // 4. Edit Logic
    const handleEdit = (item) => {
        setName(item.name);
        setCourse(item.course);
        setQuote(item.quote);
        setPlacement(item.placement || '');
        setSalary(item.salary || '');
        setImage(item.imageUrl || '');
        setImageAlt(item.imageAlt || '');
        setOrder(item.order || 1);

        setEditId(item.id);
        setIsEditing(true);
        window.scrollTo(0, 0);
    };

    const resetForm = () => {
        setName('');
        setCourse('');
        setQuote('');
        setPlacement('');
        setSalary('');
        setImage('');
        setImageAlt('');
        setOrder(1);
        setIsEditing(false);
        setEditId(null);
    };

    // 5. Filter logic
    const filteredList = testimonials.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.course.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
            <ToastContainer />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>{isEditing ? "Edit Testimonial" : "Add New Testimonial"}</h2>
                {isEditing && <button onClick={resetForm} style={styles.cancelBtn}>Cancel Edit</button>}
            </div>

            <div style={styles.card}>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>

                    {/* Left Column: Image (UPDATED WITH DRAG & DROP) */}
                    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                        <label style={styles.label}>Student Photo</label>
                        
                        {!image ? (
                            // Upload Box
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
                                                processUpload(e.target.files[0]);
                                                e.target.value = null; 
                                            }}
                                            style={{ display: 'none' }} 
                                        />
                                        <div style={{ cursor: 'pointer', color: '#0072C6', fontWeight: '600' }}>
                                            <i className="fas fa-cloud-upload-alt" style={{ fontSize: '24px', marginBottom: '5px' }}></i><br/>
                                            Drag & drop or click
                                        </div>
                                        <small style={{ color: '#64748B', display: 'block', marginTop: '5px' }}>Max: 1.00 MB</small>
                                    </>
                                )}
                            </label>
                        ) : (
                            // Preview with Remove Button
                            <div style={{ position: 'relative', width: '120px', margin: '0 auto' }}>
                                <img src={image} alt="Preview" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginTop: '15px', border: '3px solid #ddd' }} />
                                <button 
                                    type="button" 
                                    onClick={handleRemoveImage}
                                    style={{
                                        position: 'absolute',
                                        top: '15px',
                                        right: '0px',
                                        background: 'rgba(255, 0, 0, 0.9)',
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
                                    title="Remove Photo"
                                >
                                    &times;
                                </button>
                            </div>
                        )}

                        <div style={{ marginTop: '10px', textAlign: 'left' }}>
                            <label style={styles.label}>Image Alt Text</label>
                            <input
                                type="text"
                                value={imageAlt}
                                onChange={e => setImageAlt(e.target.value)}
                                style={styles.input}
                                placeholder="e.g. Photo of Rahul Sharma"
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div>
                            <label style={styles.label}>Student Name *</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} />
                        </div>
                        <div>
                            <label style={styles.label}>Course / Batch *</label>
                            <input type="text" value={course} onChange={e => setCourse(e.target.value)} style={styles.input} />
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={styles.label}>Testimonial Quote *</label>
                            <textarea value={quote} onChange={e => setQuote(e.target.value)} style={{ ...styles.input, height: '80px' }} />
                        </div>
                        <div>
                            <label style={styles.label}>Placement (Company)</label>
                            <input type="text" value={placement} onChange={e => setPlacement(e.target.value)} style={styles.input} />
                        </div>
                        <div>
                            <label style={styles.label}>Salary (LPA)</label>
                            <input type="text" value={salary} onChange={e => setSalary(e.target.value)} style={styles.input} />
                        </div>
                        <div>
                            <label style={styles.label}>Order</label>
                            <input type="number" value={order} onChange={e => setOrder(e.target.value)} style={styles.input} />
                        </div>
                        <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                            <button type="submit" style={styles.saveBtn}>
                                {isEditing ? "Update Testimonial" : "Add Testimonial"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* --- LIST SECTION --- */}
            <div style={{ marginTop: '50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3>Student Testimonials ({testimonials.length})</h3>
                    <input
                        type="text"
                        placeholder="Search by student or course..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: '8px 15px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
                    />
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead style={{ background: '#f4f4f4' }}>
                                <tr>
                                    <th style={styles.th}>Order</th>
                                    <th style={styles.th}>Student</th>
                                    <th style={styles.th}>Course</th>
                                    <th style={styles.th}>Placement</th>
                                    <th style={styles.th}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredList.map((item) => (
                                    <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={styles.td}>{item.order}</td>
                                        <td style={styles.td}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <img
                                                    src={item.imageUrl || 'https://via.placeholder.com/40'}
                                                    alt={item.name}
                                                    style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                                                />
                                                {item.name}
                                            </div>
                                        </td>
                                        <td style={styles.td}>{item.course}</td>
                                        <td style={styles.td}>{item.placement}</td>
                                        <td style={styles.td}>
                                            <button onClick={() => handleEdit(item)} style={styles.editBtn}>Edit</button>
                                            <button onClick={() => handleDelete(item.id)} style={styles.deleteBtn}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

const styles = {
    card: { background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' },
    label: { display: 'block', fontWeight: '600', margin: '0 0 5px', fontSize: '13px', color: '#444' },
    input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' },
    saveBtn: { width: '100%', padding: '12px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
    cancelBtn: { padding: '8px 15px', background: '#64748B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
    th: { padding: '15px', fontSize: '14px', color: '#666', borderBottom: '2px solid #eee' },
    td: { padding: '15px', fontSize: '14px', color: '#333' },
    editBtn: { background: '#FFC107', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', marginRight: '5px', fontWeight: '600' },
    deleteBtn: { background: '#DC3545', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', color: 'white', fontWeight: '600' },
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

export default EditTestimonials;