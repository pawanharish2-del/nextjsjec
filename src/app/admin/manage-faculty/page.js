"use client";
import React, { useState, useEffect } from 'react';
import { db, storage } from '@/firebase'; 
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const departments = [
    { id: 'cse', title: 'Computer Science Engineering' },
    { id: 'ai', title: 'Artificial Intelligence' },
    { id: 'ee', title: 'Electrical Engineering' },
    { id: 'ece', title: 'Electronics & Comm. Engg.' },
    { id: 'me', title: 'Mechanical Engineering' },
    { id: 'civil', title: 'Civil Engineering' },
    { id: 'ash', title: 'Applied Sciences & Humanities' }
];

const EditFaculty = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Editing State
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    // Form State
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [isHod, setIsHod] = useState(false); 
    const [qualification, setQualification] = useState('');
    const [experience, setExperience] = useState('');
    const [researchArea, setResearchArea] = useState('');
    const [email, setEmail] = useState('');

    // Multi-select Departments
    const [selectedDepartments, setSelectedDepartments] = useState(['cse']);

    const [image, setImage] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [order, setOrder] = useState(1);

    // Upload State
    const [uploading, setUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    // 1. Fetch Faculty Members
    const fetchMembers = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, "faculty_members"), orderBy("order"));
            const querySnapshot = await getDocs(q);
            const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMembers(list);
        } catch (error) {
            console.warn("Index might be missing, fetching without sort:", error);
            const querySnapshot = await getDocs(collection(db, "faculty_members"));
            const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMembers(list);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMembers();
    }, []);

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
            const storageRef = ref(storage, `faculty/${Date.now()}-${file.name}`);
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

    // Helper: Handle Checkbox Change
    const handleDeptChange = (deptId) => {
        setSelectedDepartments(prev => {
            if (prev.includes(deptId)) {
                return prev.filter(id => id !== deptId);
            } else {
                return [...prev, deptId];
            }
        });
    };

    // 2. Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !role || selectedDepartments.length === 0) {
            toast.warn("Name, Designation, and at least one Department are required!");
            return;
        }

        const facultyData = {
            name,
            role,
            isHod,
            qualification,
            experience,
            researchArea,
            email,
            department: selectedDepartments, 
            image,
            imageAlt,
            order: Number(order)
        };

        try {
            if (isEditing) {
                await updateDoc(doc(db, "faculty_members", editId), facultyData);
                toast.success("Faculty member updated!");
            } else {
                await addDoc(collection(db, "faculty_members"), facultyData);
                toast.success("Faculty member added!");
            }
            resetForm();
            fetchMembers();
        } catch (error) {
            console.error("Error saving:", error);
            toast.error("Error saving data.");
        }
    };

    // 3. Handle Delete
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to remove this member?")) {
            try {
                await deleteDoc(doc(db, "faculty_members", id));
                toast.success("Member removed.");
                fetchMembers();
            } catch (error) {
                toast.error("Failed to delete member.");
            }
        }
    };

    // 4. Handle Edit
    const handleEdit = (member) => {
        setName(member.name);
        setRole(member.role);
        setIsHod(member.isHod || false);
        setQualification(member.qualification);
        setExperience(member.experience);
        setResearchArea(member.researchArea);
        setEmail(member.email);

        if (Array.isArray(member.department)) {
            setSelectedDepartments(member.department);
        } else if (member.department) {
            setSelectedDepartments([member.department]);
        } else {
            setSelectedDepartments([]);
        }

        setImage(member.image);
        setImageAlt(member.imageAlt || '');
        setOrder(member.order || 1);

        setEditId(member.id);
        setIsEditing(true);
        window.scrollTo(0, 0);
    };

    const resetForm = () => {
        setName('');
        setRole('');
        setIsHod(false);
        setQualification('');
        setExperience('');
        setResearchArea('');
        setEmail('');
        setSelectedDepartments(['cse']);
        setImage('');
        setImageAlt('');
        setOrder(1);
        setIsEditing(false);
        setEditId(null);
    };

    // 5. Search Filtering
    const filteredMembers = members.filter(member => {
        const deptString = Array.isArray(member.department)
            ? member.department.join(' ')
            : member.department || '';

        return (
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            deptString.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <ToastContainer />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>{isEditing ? "Edit Faculty Member" : "Add New Faculty"}</h2>
                {isEditing && <button onClick={resetForm} style={styles.cancelBtn}>Cancel Edit</button>}
            </div>

            <div style={styles.card}>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>

                    {/* Left Column: Image (UPDATED WITH DRAG & DROP) */}
                    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                        <label style={styles.label}>Profile Photo</label>
                        
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
                            <div style={{ position: 'relative', width: '150px', margin: '0 auto' }}>
                                <img src={image} alt="Preview" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginTop: '15px', border: '3px solid #ddd' }} />
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

                        <div style={{ marginTop: '15px', textAlign: 'left' }}>
                            <label style={styles.label}>Photo Alt Text</label>
                            <input
                                type="text"
                                value={imageAlt}
                                onChange={e => setImageAlt(e.target.value)}
                                style={styles.input}
                                placeholder="e.g. Portrait of Dr. John Doe"
                            />
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={styles.label}>Full Name</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} placeholder="Dr. John Doe" />
                        </div>

                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={styles.label}>Designation</label>
                            <input type="text" value={role} onChange={e => setRole(e.target.value)} style={styles.input} placeholder="e.g. Assistant Professor" />

                            {/* HOD Checkbox */}
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', cursor: 'pointer', background: '#fff8e1', padding: '10px', borderRadius: '5px', border: '1px solid #ffe0b2' }}>
                                <input
                                    type="checkbox"
                                    checked={isHod}
                                    onChange={e => setIsHod(e.target.checked)}
                                    style={{ width: '20px', height: '20px' }}
                                />
                                <span style={{ color: '#d35400', fontWeight: 'bold' }}>Is Head of Department (HOD)?</span>
                            </label>
                        </div>

                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={styles.label}>Departments (Select one or more)</label>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', background: '#f9f9f9', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}>
                                {departments.map(dept => (
                                    <label key={dept.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
                                        <input
                                            type="checkbox"
                                            checked={selectedDepartments.includes(dept.id)}
                                            onChange={() => handleDeptChange(dept.id)}
                                        />
                                        {dept.title}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label style={styles.label}>Qualification</label>
                            <input type="text" value={qualification} onChange={e => setQualification(e.target.value)} style={styles.input} placeholder="Ph.D" />
                        </div>
                        <div>
                            <label style={styles.label}>Experience</label>
                            <input type="text" value={experience} onChange={e => setExperience(e.target.value)} style={styles.input} placeholder="12 Years" />
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={styles.label}>Research Area</label>
                            <input type="text" value={researchArea} onChange={e => setResearchArea(e.target.value)} style={styles.input} placeholder="AI, IoT" />
                        </div>
                        <div>
                            <label style={styles.label}>Email</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={styles.input} />
                        </div>
                        <div>
                            <label style={styles.label}>Order (Sort Priority)</label>
                            <input type="number" value={order} onChange={e => setOrder(e.target.value)} style={styles.input} />
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <button type="submit" style={styles.saveBtn}>
                                {isEditing ? "Update Faculty Member" : "Add Faculty Member"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* --- LIST SECTION --- */}
            <div style={{ marginTop: '50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3>Faculty Directory ({members.length})</h3>
                    <input
                        type="text"
                        placeholder="Search by name, role, or dept..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: '8px 15px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
                    />
                </div>

                {loading ? (
                    <p>Loading faculty list...</p>
                ) : (
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead style={{ background: '#f4f4f4' }}>
                                <tr>
                                    <th style={styles.th}>Order</th>
                                    <th style={styles.th}>Name</th>
                                    <th style={styles.th}>Departments</th>
                                    <th style={styles.th}>Role / Designation</th>
                                    <th style={styles.th}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredMembers.map((member) => (
                                    <tr key={member.id} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={styles.td}>{member.order}</td>
                                        <td style={styles.td}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <img
                                                    src={member.image || 'https://via.placeholder.com/40'}
                                                    alt={member.name}
                                                    style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                                                />
                                                <div>
                                                    {member.name}
                                                    {member.isHod && (
                                                        <span style={{
                                                            display: 'block',
                                                            fontSize: '10px',
                                                            background: '#FCA311',
                                                            color: 'white',
                                                            padding: '2px 6px',
                                                            borderRadius: '4px',
                                                            width: 'fit-content',
                                                            fontWeight: 'bold',
                                                            marginTop: '2px'
                                                        }}>
                                                            HOD
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td style={styles.td}>
                                            {Array.isArray(member.department) ? (
                                                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                                                    {member.department.map(d => (
                                                        <span key={d} style={{ padding: '2px 6px', background: '#e9ecef', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>
                                                            {d.toUpperCase()}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : (
                                                <span style={{ padding: '4px 8px', background: '#e9ecef', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>
                                                    {(member.department || '').toUpperCase()}
                                                </span>
                                            )}
                                        </td>
                                        <td style={styles.td}>{member.role}</td>
                                        <td style={styles.td}>
                                            <button onClick={() => handleEdit(member)} style={styles.editBtn}>Edit</button>
                                            <button onClick={() => handleDelete(member.id)} style={styles.deleteBtn}>Delete</button>
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
    saveBtn: { width: '100%', padding: '12px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' },
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

export default EditFaculty;