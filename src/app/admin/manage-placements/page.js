"use client";
import React, { useState, useEffect } from 'react';
import { db, storage } from '@/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPlacements = () => {
    const [activeTab, setActiveTab] = useState('drives');
    const [loading, setLoading] = useState(false);

    // --- YEARS STATE ---
    const [years, setYears] = useState([]);
    const [newYear, setNewYear] = useState('');

    // --- STAR ACHIEVERS STATE ---
    const [stars, setStars] = useState([]);
    const [starForm, setStarForm] = useState({ name: '', company: '', package: '', image: '' });
    const [editStarId, setEditStarId] = useState(null);

    // --- GALLERY STATE ---
    const [gallery, setGallery] = useState([]);
    const [galleryForm, setGalleryForm] = useState({ name: '', company: '', package: '', image: '', isPremium: false });
    const [editGalleryId, setEditGalleryId] = useState(null);

    // --- DRIVES STATE ---
    const [drives, setDrives] = useState([]);
    const [driveForm, setDriveForm] = useState({ year: '', date: '', company: '', ctc: '', branch: '' });
    const [editDriveId, setEditDriveId] = useState(null);

    // --- UPLOAD STATE ---
    const [uploading, setUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    // --- FETCH DATA ---
    const fetchData = async () => {
        setLoading(true);
        try {
            // Fetch Years
            const yearSnaps = await getDocs(query(collection(db, "placement_years"), orderBy("year", "desc")));
            const yearList = yearSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setYears(yearList);

            // Fetch Stars
            const starSnaps = await getDocs(query(collection(db, "placement_stars"), orderBy("package", "desc")));
            setStars(starSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() })));

            // Fetch Gallery
            const gallSnaps = await getDocs(query(collection(db, "placement_gallery")));
            setGallery(gallSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() })));

            // Fetch Drives
            const driveSnaps = await getDocs(query(collection(db, "placement_drives"), orderBy("date", "desc")));
            setDrives(driveSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        } catch (error) {
            console.error(error);
            toast.error("Error fetching data");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // --- NEW UPLOAD LOGIC ---
    const processUpload = async (file, onSuccess) => {
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
            const storageRef = ref(storage, `placements/${Date.now()}-${file.name}`);
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
                    onSuccess(downloadURL);
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

    const handleDrop = (e, onSuccess) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            processUpload(e.dataTransfer.files[0], onSuccess);
        }
    };
    // ------------------------

    // --- YEAR HANDLERS ---
    const handleYearSubmit = async (e) => {
        e.preventDefault();
        if (!newYear) return toast.warn("Enter a year");
        try {
            await addDoc(collection(db, "placement_years"), { year: newYear });
            toast.success("Year added");
            setNewYear('');
            fetchData();
        } catch (err) { toast.error("Failed to add year"); }
    };

    const deleteYear = async (id) => {
        if (window.confirm("Delete this year category?")) {
            await deleteDoc(doc(db, "placement_years", id));
            fetchData();
        }
    };

    // --- STAR HANDLERS ---
    const handleStarSubmit = async (e) => {
        e.preventDefault();
        if (!starForm.name || !starForm.image) return toast.warn("Details required");
        try {
            if (editStarId) {
                await updateDoc(doc(db, "placement_stars", editStarId), starForm);
                toast.success("Star Updated");
                setEditStarId(null);
            } else {
                await addDoc(collection(db, "placement_stars"), starForm);
                toast.success("Star Added");
            }
            setStarForm({ name: '', company: '', package: '', image: '' });
            fetchData();
        } catch (err) { toast.error("Failed to save"); }
    };

    const editStar = (item) => {
        setStarForm(item);
        setEditStarId(item.id);
        window.scrollTo(0, 0);
    };

    const deleteStar = async (id) => {
        if (window.confirm("Delete this achiever?")) {
            await deleteDoc(doc(db, "placement_stars", id));
            fetchData();
        }
    };

    // --- GALLERY HANDLERS ---
    const handleGallerySubmit = async (e) => {
        e.preventDefault();
        try {
            if (editGalleryId) {
                await updateDoc(doc(db, "placement_gallery", editGalleryId), galleryForm);
                toast.success("Gallery Updated");
                setEditGalleryId(null);
            } else {
                await addDoc(collection(db, "placement_gallery"), galleryForm);
                toast.success("Added to Gallery");
            }
            setGalleryForm({ name: '', company: '', package: '', image: '', isPremium: false });
            fetchData();
        } catch (err) { toast.error("Failed to save"); }
    };

    const editGallery = (item) => {
        setGalleryForm(item);
        setEditGalleryId(item.id);
        window.scrollTo(0, 0);
    };

    const deleteGallery = async (id) => {
        if (window.confirm("Delete?")) {
            await deleteDoc(doc(db, "placement_gallery", id));
            fetchData();
        }
    };

    // --- DRIVE HANDLERS ---
    const handleDriveSubmit = async (e) => {
        e.preventDefault();
        if (!driveForm.company || !driveForm.year) return toast.warn("Company and Year required");
        try {
            if (editDriveId) {
                await updateDoc(doc(db, "placement_drives", editDriveId), driveForm);
                toast.success("Drive Updated");
                setEditDriveId(null);
            } else {
                await addDoc(collection(db, "placement_drives"), driveForm);
                toast.success("Drive Added");
            }
            setDriveForm({ ...driveForm, company: '', ctc: '', branch: '' });
            fetchData();
        } catch (err) { toast.error("Failed to save"); }
    };

    const editDrive = (item) => {
        setDriveForm(item);
        setEditDriveId(item.id);
        window.scrollTo(0, 0);
    };

    const deleteDrive = async (id) => {
        if (window.confirm("Delete this drive entry?")) {
            await deleteDoc(doc(db, "placement_drives", id));
            fetchData();
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <ToastContainer />
            <h2>Manage Placements</h2>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <button onClick={() => setActiveTab('drives')} style={tabStyle(activeTab === 'drives')}>Placement Drives</button>
                <button onClick={() => setActiveTab('years')} style={tabStyle(activeTab === 'years')}>Manage Years</button>
                <button onClick={() => setActiveTab('star')} style={tabStyle(activeTab === 'star')}>Star Achievers</button>
                <button onClick={() => setActiveTab('gallery')} style={tabStyle(activeTab === 'gallery')}>Placement Gallery</button>
            </div>

            {/* --- MANAGE YEARS TAB --- */}
            {activeTab === 'years' && (
                <div style={{ maxWidth: '600px' }}>
                    <div style={styles.card}>
                        <h3>Add New Year Category</h3>
                        <form onSubmit={handleYearSubmit} style={{ display: 'flex', gap: '10px' }}>
                            <input
                                placeholder="e.g. 2025-26"
                                value={newYear}
                                onChange={e => setNewYear(e.target.value)}
                                style={{ ...styles.input, flex: 1 }}
                            />
                            <button type="submit" style={styles.btn}>Add Year</button>
                        </form>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <h4>Existing Years</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {years.map(y => (
                                <li key={y.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
                                    <span>{y.year}</span>
                                    <button onClick={() => deleteYear(y.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* --- STAR ACHIEVERS TAB --- */}
            {activeTab === 'star' && (
                <div>
                    <div style={styles.card}>
                        <h3>{editStarId ? "Edit Star Achiever" : "Add Star Achiever"}</h3>
                        <form onSubmit={handleStarSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <input placeholder="Student Name" value={starForm.name} onChange={e => setStarForm({ ...starForm, name: e.target.value })} style={styles.input} />
                            <input placeholder="Company" value={starForm.company} onChange={e => setStarForm({ ...starForm, company: e.target.value })} style={styles.input} />
                            <input placeholder="Package (e.g. 1.56 Cr)" value={starForm.package} onChange={e => setStarForm({ ...starForm, package: e.target.value })} style={styles.input} />

                            {/* --- STAR IMAGE UPLOAD --- */}
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Student Photo</label>
                                {!starForm.image ? (
                                    <label
                                        style={{
                                            ...styles.uploadBox,
                                            backgroundColor: dragActive ? '#e2e8f0' : '#fafafa',
                                            borderColor: dragActive ? '#0072C6' : '#ccc'
                                        }}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={(e) => handleDrop(e, (url) => setStarForm({ ...starForm, image: url }))}
                                    >
                                        {uploading ? (
                                            <p style={{ color: '#0072C6', fontWeight: 'bold', margin: 0 }}>Uploading...</p>
                                        ) : (
                                            <>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        processUpload(e.target.files[0], (url) => setStarForm({ ...starForm, image: url }));
                                                        e.target.value = null;
                                                    }}
                                                    style={{ display: 'none' }}
                                                />
                                                <div style={{ cursor: 'pointer', color: '#0072C6', fontWeight: '600' }}>
                                                    Drag & Drop or Click to Upload
                                                </div>
                                                <small style={{ color: '#64748B', display: 'block', marginTop: '5px' }}>Max: 1.00 MB</small>
                                            </>
                                        )}
                                    </label>
                                ) : (
                                    <div style={{ position: 'relative', width: '100px' }}>
                                        <img src={starForm.image} alt="Preview" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
                                        <button
                                            type="button"
                                            onClick={() => setStarForm({ ...starForm, image: '' })}
                                            style={{
                                                position: 'absolute', top: -5, right: -5, background: 'red', color: 'white',
                                                border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                            }}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                )}
                            </div>
                            {/* ------------------------- */}

                            <button type="submit" style={editStarId ? styles.updateBtn : styles.btn}>
                                {editStarId ? "Update Achiever" : "Add Achiever"}
                            </button>
                            {editStarId && <button type="button" onClick={() => { setEditStarId(null); setStarForm({ name: '', company: '', package: '', image: '' }); }} style={styles.cancelBtn}>Cancel</button>}
                        </form>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
                        {stars.map(item => (
                            <div key={item.id} style={styles.itemCard}>
                                <img src={item.image} alt="s" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
                                <h4>{item.name}</h4>
                                <p>{item.company} | {item.package}</p>
                                <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                                    <button onClick={() => editStar(item)} style={styles.editBtn}>Edit</button>
                                    <button onClick={() => deleteStar(item.id)} style={styles.delBtn}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* --- GALLERY TAB --- */}
            {activeTab === 'gallery' && (
                <div>
                    <div style={styles.card}>
                        <h3>{editGalleryId ? "Edit Gallery Item" : "Add to Gallery"}</h3>
                        <form onSubmit={handleGallerySubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <input placeholder="Student Name" value={galleryForm.name} onChange={e => setGalleryForm({ ...galleryForm, name: e.target.value })} style={styles.input} />
                            <input placeholder="Company" value={galleryForm.company} onChange={e => setGalleryForm({ ...galleryForm, company: e.target.value })} style={styles.input} />
                            <input placeholder="Package (e.g. 12 LPA)" value={galleryForm.package} onChange={e => setGalleryForm({ ...galleryForm, package: e.target.value })} style={styles.input} />
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                <input type="checkbox" checked={galleryForm.isPremium} onChange={e => setGalleryForm({ ...galleryForm, isPremium: e.target.checked })} />
                                Is Premium?
                            </label>

                            {/* --- GALLERY IMAGE UPLOAD --- */}
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Student Photo</label>
                                {!galleryForm.image ? (
                                    <label
                                        style={{
                                            ...styles.uploadBox,
                                            backgroundColor: dragActive ? '#e2e8f0' : '#fafafa',
                                            borderColor: dragActive ? '#0072C6' : '#ccc'
                                        }}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={(e) => handleDrop(e, (url) => setGalleryForm({ ...galleryForm, image: url }))}
                                    >
                                        {uploading ? (
                                            <p style={{ color: '#0072C6', fontWeight: 'bold', margin: 0 }}>Uploading...</p>
                                        ) : (
                                            <>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        processUpload(e.target.files[0], (url) => setGalleryForm({ ...galleryForm, image: url }));
                                                        e.target.value = null;
                                                    }}
                                                    style={{ display: 'none' }}
                                                />
                                                <div style={{ cursor: 'pointer', color: '#0072C6', fontWeight: '600' }}>
                                                    Drag & Drop or Click to Upload
                                                </div>
                                                <small style={{ color: '#64748B', display: 'block', marginTop: '5px' }}>Max: 1.00 MB</small>
                                            </>
                                        )}
                                    </label>
                                ) : (
                                    <div style={{ position: 'relative', width: '100px' }}>
                                        <img src={galleryForm.image} alt="Preview" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
                                        <button
                                            type="button"
                                            onClick={() => setGalleryForm({ ...galleryForm, image: '' })}
                                            style={{
                                                position: 'absolute', top: -5, right: -5, background: 'red', color: 'white',
                                                border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                            }}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                )}
                            </div>
                            {/* --------------------------- */}

                            <button type="submit" style={editGalleryId ? styles.updateBtn : styles.btn}>
                                {editGalleryId ? "Update Student" : "Add Student"}
                            </button>
                            {editGalleryId && <button type="button" onClick={() => { setEditGalleryId(null); setGalleryForm({ name: '', company: '', package: '', image: '', isPremium: false }); }} style={styles.cancelBtn}>Cancel</button>}
                        </form>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px', marginTop: '20px' }}>
                        {gallery.map(item => (
                            <div key={item.id} style={{ ...styles.itemCard, border: item.isPremium ? '2px solid gold' : '1px solid #eee' }}>
                                <img src={item.image} alt="s" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} />
                                <h5>{item.name}</h5>
                                <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', marginTop: '5px' }}>
                                    <button onClick={() => editGallery(item)} style={styles.editBtn}>Edit</button>
                                    <button onClick={() => deleteGallery(item.id)} style={styles.delBtn}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* --- DRIVES TAB --- */}
            {activeTab === 'drives' && (
                <div>
                    <div style={styles.card}>
                        <h3>{editDriveId ? "Edit Drive Entry" : "Add Drive Entry"}</h3>
                        <form onSubmit={handleDriveSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
                            <select
                                value={driveForm.year}
                                onChange={e => setDriveForm({ ...driveForm, year: e.target.value })}
                                style={styles.input}
                            >
                                <option value="">Select Year</option>
                                {years.map(y => (
                                    <option key={y.id} value={y.year}>{y.year}</option>
                                ))}
                            </select>
                            <input type="date" value={driveForm.date} onChange={e => setDriveForm({ ...driveForm, date: e.target.value })} style={styles.input} />
                            <input placeholder="Company Name" value={driveForm.company} onChange={e => setDriveForm({ ...driveForm, company: e.target.value })} style={styles.input} />
                            <input placeholder="CTC (e.g. 5.50)" value={driveForm.ctc} onChange={e => setDriveForm({ ...driveForm, ctc: e.target.value })} style={styles.input} />
                            <input placeholder="Branch (e.g. CS/IT)" value={driveForm.branch} onChange={e => setDriveForm({ ...driveForm, branch: e.target.value })} style={styles.input} />

                            <button type="submit" style={{ ...editDriveId ? styles.updateBtn : styles.btn, gridColumn: '1 / -1' }}>
                                {editDriveId ? "Update Drive" : "Add Drive"}
                            </button>
                            {editDriveId && <button type="button" onClick={() => { setEditDriveId(null); setDriveForm({ year: '', date: '', company: '', ctc: '', branch: '' }); }} style={{ ...styles.cancelBtn, gridColumn: '1 / -1' }}>Cancel Edit</button>}
                        </form>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        {years.map(yearObj => {
                            const year = yearObj.year;
                            const yearDrives = drives.filter(d => d.year === year);
                            if (yearDrives.length === 0) return null;
                            return (
                                <div key={yearObj.id} style={{ marginBottom: '30px' }}>
                                    <h4 style={{ borderBottom: '2px solid #0072C6', display: 'inline-block' }}>{year}</h4>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                                        <thead>
                                            <tr style={{ background: '#f0f0f0', textAlign: 'left' }}>
                                                <th style={{ padding: '8px' }}>Date</th>
                                                <th style={{ padding: '8px' }}>Company</th>
                                                <th style={{ padding: '8px' }}>CTC</th>
                                                <th style={{ padding: '8px' }}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {yearDrives.map((d, idx) => (
                                                <tr key={`${year}-${d.id}-${idx}`} style={{ borderBottom: '1px solid #eee' }}>
                                                    <td style={{ padding: '8px' }}>{d.date}</td>
                                                    <td style={{ padding: '8px' }}>{d.company}</td>
                                                    <td style={{ padding: '8px' }}>{d.ctc}</td>
                                                    <td style={{ padding: '8px', display: 'flex', gap: '10px' }}>
                                                        <button onClick={() => editDrive(d)} style={{ color: 'blue', border: 'none', background: 'none', cursor: 'pointer' }}>Edit</button>
                                                        <button onClick={() => deleteDrive(d.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>X</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

const tabStyle = (isActive) => ({
    padding: '10px 20px',
    border: 'none',
    background: isActive ? '#0072C6' : '#eee',
    color: isActive ? 'white' : 'black',
    cursor: 'pointer',
    borderRadius: '5px'
});

const styles = {
    card: { background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
    input: { padding: '10px', border: '1px solid #ddd', borderRadius: '5px' },
    btn: { padding: '10px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
    updateBtn: { padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
    cancelBtn: { padding: '10px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' },
    itemCard: { background: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' },
    editBtn: { padding: '5px 10px', background: '#e0f2fe', color: '#0072C6', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' },
    delBtn: { padding: '5px 10px', background: '#fee2e2', color: 'red', border: 'none', borderRadius: '4px', cursor: 'pointer' },
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

export default EditPlacements;