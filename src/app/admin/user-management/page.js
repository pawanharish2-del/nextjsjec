"use client";
import React, { useState, useEffect } from 'react';
import { db, auth } from '@/firebase'; // Ensure auth is imported
import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- PERMISSION STATES ---
  const [currentUserRole, setCurrentUserRole] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Form State
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserRole, setNewUserRole] = useState('editor');
  const [isCreating, setIsCreating] = useState(false);

  // --- 1. CHECK PERMISSION & FETCH USERS ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          const role = userDoc.exists() ? userDoc.data().role : 'guest';
          setCurrentUserRole(role);

          // Only fetch users if Admin
          if (role === 'admin') {
            fetchUsersList();
          }
        } catch (error) {
          console.error("Auth Check Error", error);
        }
      } else {
        setCurrentUserRole(null);
      }
      setCheckingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  const fetchUsersList = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(userList);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  // --- 2. ADD USER (Without Logging Out Admin) ---
  const handleAddUser = async (e) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      // TRICK: Initialize a secondary app to create a user without logging out the admin
      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
      };

      const secondaryApp = initializeApp(firebaseConfig, "Secondary");
      const secondaryAuth = getAuth(secondaryApp);

      // 1. Create User in Auth
      const userCredential = await createUserWithEmailAndPassword(secondaryAuth, newUserEmail, newUserPassword);
      const user = userCredential.user;

      // 2. Create User Entry in Firestore (This assigns the role)
      await setDoc(doc(db, "users", user.uid), {
        email: newUserEmail,
        role: newUserRole,
        createdAt: new Date().toISOString()
      });

      // 3. Cleanup secondary app
      await signOut(secondaryAuth); 

      toast.success(`User ${newUserEmail} created as ${newUserRole}!`);
      
      // Reset Form & Refresh List
      setNewUserEmail('');
      setNewUserPassword('');
      fetchUsersList();

    } catch (error) {
      console.error("Error adding user:", error);
      toast.error(error.message);
    } finally {
      setIsCreating(false);
    }
  };

  // --- 3. UPDATE ROLE ---
  const handleRoleChange = async (userId, newRole) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { role: newRole });
      
      toast.info(`Role updated to ${newRole}`);
      
      // Update local state UI instantly
      setUsers(users.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      ));
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Failed to update role");
    }
  };

  // --- 4. DELETE USER (Database Only) ---
  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure? This removes their access immediately.")) return;

    try {
      await deleteDoc(doc(db, "users", userId));
      toast.success("User access removed.");
      fetchUsersList();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete user.");
    }
  };

  // --- 5. RENDER LOGIC (ACCESS CONTROL) ---
  if (checkingAuth) {
    return <div style={{ padding: '50px', textAlign: 'center' }}>Verifying permissions...</div>;
  }

  if (currentUserRole !== 'admin') {
    return (
      <div style={{ padding: '50px', textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ color: '#DC2626', fontSize: '2rem', marginBottom: '10px' }}>Access Denied</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>You do not have permission to view this page.</p>
        <div style={{ marginTop: '20px', fontSize: '3rem' }}>🚫</div>
      </div>
    );
  }

  // --- ADMIN VIEW ---
  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <ToastContainer />
      <h1 style={{ borderBottom: '2px solid #0072C6', paddingBottom: '10px', color: '#0072C6' }}>
        User Management
      </h1>

      {/* --- ADD USER FORM --- */}
      <div style={styles.card}>
        <h3>Add New User</h3>
        <form onSubmit={handleAddUser} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '15px', alignItems: 'end' }}>
          <div>
            <label style={styles.label}>Email</label>
            <input 
              type="email" 
              required
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              style={styles.input}
              placeholder="newuser@jec.ac.in"
            />
          </div>
          <div>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              required
              value={newUserPassword}
              onChange={(e) => setNewUserPassword(e.target.value)}
              style={styles.input}
              placeholder="Min 6 chars"
            />
          </div>
          <div>
            <label style={styles.label}>Role</label>
            <select 
              value={newUserRole} 
              onChange={(e) => setNewUserRole(e.target.value)}
              style={styles.input}
            >
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" disabled={isCreating} style={styles.addButton}>
            {isCreating ? "Creating..." : "+ Add User"}
          </button>
        </form>
      </div>

      {/* --- USER LIST --- */}
      <div style={{ marginTop: '30px' }}>
        <h3>All Users</h3>
        {loading ? <p>Loading users...</p> : (
          <table style={styles.table}>
            <thead>
              <tr style={{ backgroundColor: '#f1f5f9', textAlign: 'left' }}>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Current Role</th>
                <th style={styles.th}>Change Role</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>
                    <span style={{ 
                      ...styles.badge, 
                      backgroundColor: user.role === 'admin' ? '#dbeafe' : '#fef3c7',
                      color: user.role === 'admin' ? '#1e40af' : '#92400e'
                    }}>
                      {user.role ? user.role.toUpperCase() : 'NO ROLE'}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <select 
                      value={user.role} 
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      style={styles.select}
                    >
                      <option value="guest">Guest (No Access)</option>
                      <option value="editor">Editor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td style={styles.td}>
                    <button 
                      onClick={() => handleDeleteUser(user.id)}
                      style={styles.deleteBtn}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginTop: '20px'
  },
  label: { display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#64748b' },
  input: { width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #cbd5e1' },
  addButton: { 
    padding: '10px 20px', 
    backgroundColor: '#0072C6', 
    color: 'white', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer',
    fontWeight: 'bold',
    height: '42px'
  },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
  th: { padding: '15px', borderBottom: '2px solid #e2e8f0', color: '#475569' },
  td: { padding: '15px', verticalAlign: 'middle' },
  badge: { padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' },
  select: { padding: '5px', borderRadius: '4px', border: '1px solid #cbd5e1' },
  deleteBtn: { padding: '5px 10px', backgroundColor: '#000000', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }
};

export default UserManagement;