import React from 'react';
import PlacementClient from './PlacementClient';
import { fetchCollectionREST } from '@/lib/firestoreRest';

export const metadata = {
    title: "Placements | Jaipur Engineering College",
    description: "JEC has a stellar placement record with 84%+ placement rate, 1.6 Cr highest package, and over 500 active recruiters. Explore our star achievers and placement drives.",
    keywords: "JEC placements, engineering placements Jaipur, top recruiters JEC, highest package JEC, placement gallery",
    alternates: {
        canonical: "https://www.jeckukas.org.in/placement",
    },
    openGraph: {
        title: "Placements | Jaipur Engineering College",
        description: "Explore the outstanding placement records, top recruiters, and star achievers at JEC.",
        url: "https://www.jeckukas.org.in/placement",
        siteName: "Jaipur Engineering College",
        type: "website",
    },
};

export const revalidate = 60; // Refresh data periodically

// Helper for parsing package values server-side
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

export default async function PlacementPage() {
    // 1. Fetch Years
    let years = await fetchCollectionREST("placement_years");
    years.sort((a, b) => parseInt(b.year) - parseInt(a.year)); // Descending

    // 2. Fetch Star Achievers
    let rawStars = await fetchCollectionREST("placement_stars");
    const targetStudentIndex = rawStars.findIndex(s => s.package && s.package.toString().includes('25'));
    let interceptedStudent = null;
    
    if (targetStudentIndex !== -1) {
        interceptedStudent = { ...rawStars[targetStudentIndex], package: '25 LPA' };
        rawStars.splice(targetStudentIndex, 1); 
    }
    let sortedStars = rawStars.sort((a, b) => parsePackageValue(b.package) - parsePackageValue(a.package));

    // 3. Fetch Gallery
    let rawGallery = await fetchCollectionREST("placement_gallery");
    let sortedGallery = rawGallery.sort((a, b) => parsePackageValue(b.package) - parsePackageValue(a.package));
    if (interceptedStudent) {
        sortedGallery.unshift(interceptedStudent);
    }

    // 4. Fetch Drives
    let rawDrives = await fetchCollectionREST("placement_drives");
    const drivesByYear = {};
    rawDrives.forEach(drive => {
        const y = drive.year || 'Unknown';
        if (!drivesByYear[y]) drivesByYear[y] = [];
        drivesByYear[y].push(drive);
    });

    let finalProcessedDrives = [];
    for (const year in drivesByYear) {
        let currentYearDrives = drivesByYear[year];
        if (currentYearDrives.length > 0) {
            currentYearDrives.sort((a, b) => {
                const ctcA = parseFloat(a.ctc) || 0;
                const ctcB = parseFloat(b.ctc) || 0;
                return ctcB - ctcA; // Descending order
            });
            finalProcessedDrives = [...finalProcessedDrives, ...currentYearDrives];
        }
    }

    return (
        <PlacementClient 
            initialYears={years} 
            initialStars={sortedStars} 
            initialGallery={sortedGallery} 
            initialDrives={finalProcessedDrives} 
        />
    );
}
