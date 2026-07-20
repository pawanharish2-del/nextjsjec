// Safe Firestore fetcher via REST API for Next.js 15 Server Components
// This avoids using the heavy Firebase Client SDK on the server, completely eliminating Vercel 503 crashes.

const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'jec-website-55397';
const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

/**
 * Normalizes a Firestore REST API document into a standard flat JavaScript object.
 */
function normalizeFirestoreData(fields) {
    if (!fields) return {};
    
    const result = {};
    for (const key in fields) {
        const field = fields[key];
        // Extract the value based on its type
        if (field.stringValue !== undefined) result[key] = field.stringValue;
        else if (field.integerValue !== undefined) result[key] = parseInt(field.integerValue, 10);
        else if (field.doubleValue !== undefined) result[key] = parseFloat(field.doubleValue);
        else if (field.booleanValue !== undefined) result[key] = field.booleanValue;
        else if (field.timestampValue !== undefined) result[key] = field.timestampValue; // Keep as standard ISO string
        else if (field.arrayValue !== undefined) {
            result[key] = (field.arrayValue.values || []).map(val => normalizeFirestoreData({ temp: val }).temp);
        }
        else if (field.mapValue !== undefined) {
            result[key] = normalizeFirestoreData(field.mapValue.fields);
        }
        else if (field.nullValue !== undefined) result[key] = null;
    }
    return result;
}

/**
 * Fetches all documents from a specific Firestore collection via REST API.
 * @param {string} collectionName - e.g., "blog_posts", "events"
 * @param {string} [orderByField] - optional field to sort by
 * @returns {Array} - Array of normalized document objects, including 'id'
 */
export async function fetchCollectionREST(collectionName, fieldsToInclude = []) {
    try {
        let url = `${BASE_URL}/${collectionName}?pageSize=1000`;
        if (fieldsToInclude.length > 0) {
            const queryParams = fieldsToInclude.map(f => `mask.fieldPaths=${encodeURIComponent(f)}`).join('&');
            url += `&${queryParams}`;
        }
        const res = await fetch(url, { 
            next: { revalidate: 60 } 
        });

        if (!res.ok) {
            console.error(`Failed to fetch ${collectionName} via REST:`, res.status, res.statusText);
            return [];
        }

        const data = await res.json();
        
        if (!data.documents) return [];

        // Normalize each document
        return data.documents.map(doc => {
            // Document name is something like: projects/PROJECT_ID/databases/(default)/documents/collection/docId
            const parts = doc.name.split('/');
            const id = parts[parts.length - 1];
            
            return {
                id,
                ...normalizeFirestoreData(doc.fields)
            };
        });

    } catch (error) {
        console.error(`Error in fetchCollectionREST for ${collectionName}:`, error);
        return [];
    }
}
