import { db } from '@/firebase';
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import PlacementClient from './PlacementClient';

// --- HELPER: Parse Package for Sorting ---
const parsePackageValue = (pkgStr) => {
    if (!pkgStr) return 0;
    const str = pkgStr.toLowerCase().replace(/,/g, '');
    const match = str.match(/[\d\.]+/);
    if (!match) return 0;
    let value = parseFloat(match[0]);
    if (str.includes('cr') || str.includes('crore')) {
        value = value * 100;
    }
    return value;
};

export default async function PlacementsPage() {
    let initialYears = [];
    let initialStars = [];
    let initialGallery = [];
    let initialDrives = [];

    try {
        // 1. Fetch Years
        const yearsSnap = await getDocs(query(collection(db, "placement_years"), orderBy("year", "desc")));
        initialYears = yearsSnap.docs.map(doc => doc.data());

        // 2. Fetch Star Achievers
        const starsSnap = await getDocs(query(collection(db, "placement_stars")));
        let rawStars = starsSnap.docs.map(doc => doc.data());

        const targetStudentIndex = rawStars.findIndex(s => s.package && s.package.toString().includes('25'));
        let interceptedStudent = null;
        
        if (targetStudentIndex !== -1) {
            interceptedStudent = { ...rawStars[targetStudentIndex], package: '25 LPA' };
            rawStars.splice(targetStudentIndex, 1); 
        }

        initialStars = rawStars.sort((a, b) => parsePackageValue(b.package) - parsePackageValue(a.package));

        // 3. Fetch Gallery
        const gallerySnap = await getDocs(query(collection(db, "placement_gallery")));
        let rawGallery = gallerySnap.docs.map(doc => doc.data());
        initialGallery = rawGallery.sort((a, b) => parsePackageValue(b.package) - parsePackageValue(a.package));
        
        if (interceptedStudent) {
            initialGallery.unshift(interceptedStudent);
        }

        // 4. Fetch Drives
        const drivesSnap = await getDocs(query(collection(db, "placement_drives")));
        let rawDrives = drivesSnap.docs.map(doc => doc.data());

        const drivesByYear = {};
        rawDrives.forEach(drive => {
            const y = drive.year || 'Unknown';
            if (!drivesByYear[y]) drivesByYear[y] = [];
            drivesByYear[y].push(drive);
        });

        for (const year in drivesByYear) {
            let currentYearDrives = drivesByYear[year];
            if (currentYearDrives.length > 0) {
                currentYearDrives.sort((a, b) => {
                    const ctcA = parseFloat(a.ctc) || 0;
                    const ctcB = parseFloat(b.ctc) || 0;
                    return ctcB - ctcA;
                });
                initialDrives = [...initialDrives, ...currentYearDrives];
            }
        }

    } catch (error) {
        console.error("Error fetching placement data on server:", error);
    }

    return (
        <PlacementClient 
            initialYears={initialYears}
            initialStars={initialStars}
            initialGallery={initialGallery}
            initialDrives={initialDrives}
        />
    );
}