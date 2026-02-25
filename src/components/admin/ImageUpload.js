"use client";
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { storage } from '@/firebase'; // Updated to use '@' alias
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import Cropper from 'react-easy-crop'; 

const ImageUpload = ({ onUploadComplete, label = "Upload Image", aspectRatio = 16 / 9 }) => {
  // Upload State
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  // Crop State
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // 1. Handle File Drop (Read file but don't upload yet)
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImageSrc(reader.result); // Set image for cropping
      });
      reader.readAsDataURL(file);
    }
  }, []);

  // 2. Store crop coordinates
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // 3. Process Crop & Upload
  const handleUploadCroppedImage = async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    setUploading(true);
    try {
      // A. Get Cropped Blob
      const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);

      // B. Upload to Firebase
      const storageRef = ref(storage, `images/blog-${uuidv4()}`);
      const uploadTask = uploadBytesResumable(storageRef, croppedImageBlob);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(p);
        },
        (error) => {
          console.error("Upload error:", error);
          setUploading(false);
          alert("Image upload failed!");
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUploading(false);
          setImageSrc(null); // Close cropper
          onUploadComplete(downloadURL); // Send URL to parent
        }
      );
    } catch (e) {
      console.error(e);
      setUploading(false);
      alert("Error cropping image");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: {'image/*': []},
    multiple: false
  });

  // --- RENDER ---
  return (
    <div className="image-upload-container" style={{ margin: '15px 0' }}>
      <label style={{display:'block', marginBottom:'8px', fontWeight:'bold', color: '#333'}}>{label}</label>

      {/* CASE 1: CROPPER INTERFACE (Visible when image is selected) */}
      {imageSrc ? (
        <div style={{ position: 'relative', height: '400px', background: '#333', borderRadius: '8px', overflow: 'hidden' }}>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={aspectRatio} // Forces resolution consistency
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          
          {/* Controls Overlay */}
          <div style={{
            position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '10px', width: '90%', justifyContent: 'center', zIndex: 10
          }}>
            <div style={{flex: 1, background: 'rgba(255,255,255,0.9)', padding: '10px', borderRadius: '8px', display:'flex', alignItems:'center', gap:'10px'}}>
               <span style={{fontSize:'12px', fontWeight:'bold'}}>Zoom</span>
               <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e) => setZoom(e.target.value)}
                style={{flex:1}}
              />
            </div>
            
            <button 
              onClick={() => setImageSrc(null)} // Cancel
              style={{padding: '0 20px', borderRadius: '8px', border: 'none', background: '#ef4444', color: 'white', fontWeight: 'bold', cursor:'pointer'}}
              type="button"
            >
              Cancel
            </button>
            <button 
              onClick={handleUploadCroppedImage} // Confirm
              style={{padding: '0 20px', borderRadius: '8px', border: 'none', background: '#22c55e', color: 'white', fontWeight: 'bold', cursor:'pointer'}}
              type="button"
            >
              {uploading ? `${Math.round(progress)}%` : 'Upload'}
            </button>
          </div>
        </div>
      ) : (
        /* CASE 2: DROPZONE (Visible by default) */
        <div 
          {...getRootProps()} 
          style={{
            border: '2px dashed #cbd5e1',
            padding: '30px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: isDragActive ? '#eff6ff' : '#f8fafc',
            borderRadius: '8px',
            transition: 'border .3s ease-in-out'
          }}
        >
          <input {...getInputProps()} />
          <div style={{color: '#64748b'}}>
            {/* Note: Ensure FontAwesome is loaded in layout.js or replace with SVG if needed */}
            <i className="fas fa-cloud-upload-alt" style={{fontSize:'24px', marginBottom:'10px', display:'block'}}></i>
            {uploading ? (
              <p>Uploading... {Math.round(progress)}%</p>
            ) : (
              <p style={{margin:0}}>Drag & drop to upload (Standard 16:9)</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// --- UTILITY: Create Blob from Crop ---
const getCroppedImg = (imageSrc, pixelCrop) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        resolve(blob);
      }, 'image/jpeg', 0.95); // High quality JPEG
    };
    image.onerror = (error) => reject(error);
  });
};

export default ImageUpload;