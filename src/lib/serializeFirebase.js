// Helper function to serialize Firebase data (especially Timestamps) for Next.js Server Components

export function serializeFirebaseData(obj) {
    if (obj === null || obj === undefined) return obj;

    // If it's a Firebase Timestamp (has toMillis method)
    if (typeof obj.toMillis === 'function') {
        return new Date(obj.toMillis()).toISOString(); // Convert to standard ISO string
    }

    // If it's an Array, map over it recursively
    if (Array.isArray(obj)) {
        return obj.map(item => serializeFirebaseData(item));
    }

    // If it's a standard JS Date object
    if (obj instanceof Date) {
        return obj.toISOString();
    }

    // If it's a plain object, iterate its keys
    if (typeof obj === 'object') {
        const newObj = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                newObj[key] = serializeFirebaseData(obj[key]);
            }
        }
        return newObj;
    }

    // Return primitive types (string, number, boolean) as-is
    return obj;
}
