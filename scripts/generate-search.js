// scripts/generate-search.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const APP_DIR = path.join(process.cwd(), 'src', 'app');
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'search.json');

console.log("🔍 Scanning for CLEAN text (Code Removal Mode)...");

// 1. Manual Pages (These are hardcoded to always be perfect)
const MANUAL_PAGES = [
    { title: "Home", path: "/", content: "home jec jaipur engineering college welcome main" },
    { title: "Contact Us", path: "/contact", content: "contact phone email address map location lalit" },
];

const files = glob.sync('src/app/**/page.js');
let searchIndex = [...MANUAL_PAGES];

files.forEach((file) => {
    // Skip dynamic folders
    if (file.includes('[') || file.includes(']')) return;

    // Skip admin pages — never show in public search results
    if (file.includes('/admin/') || file.includes('\\admin\\')) return;


    let content = fs.readFileSync(file, 'utf8');
    if (content.length < 50) return;

    // --- STRATEGY: TAG EXTRACTOR ---
    // Instead of reading the whole file, we ONLY grab text that sits strictly between > and <
    // Example: <div>Hello World</div>  -> We grab "Hello World"

    // 1. Find all text segments between HTML tags
    const matches = content.match(/>([^<]+)</g);

    if (!matches) return;

    // 2. Filter and Clean the matches
    let cleanParts = matches.map(part => {
        // Remove the > and < symbols
        let text = part.replace(/[><]/g, '').trim();

        // --- THE FILTER: TRASH ANYTHING THAT LOOKS LIKE CODE ---
        if (text.includes('import ')) return '';
        if (text.includes('export ')) return '';
        if (text.includes('const ')) return '';
        if (text.includes('let ')) return '';
        if (text.includes('return ')) return '';
        if (text.includes('function')) return '';
        if (text.includes('useState')) return '';
        if (text.includes('useEffect')) return '';
        if (text.includes('useClient')) return '';
        if (text.includes('//')) return ''; // Comments

        // Remove lines with code symbols
        if (text.includes('{')) return '';
        if (text.includes('}')) return '';
        if (text.includes(';')) return '';
        if (text.includes('=')) return '';
        if (text.includes('(')) return '';
        if (text.includes(')')) return '';

        return text;
    }).filter(text => text.length > 2); // Keep only real words

    let cleanText = cleanParts.join(' ');

    // Final Polish: Collapse extra spaces
    cleanText = cleanText.replace(/\s+/g, ' ').trim();

    if (cleanText.length < 10) return;

    // URL Generation (Same as before - works perfectly)
    let folderPath = path.dirname(file);
    let relativePath = path.relative(APP_DIR, folderPath);
    relativePath = relativePath.split(path.sep).join('/');
    let url = relativePath === '' ? '/' : `/${relativePath}`;

    // Avoid duplicates
    if (searchIndex.some(p => p.path === url)) return;

    let title = relativePath.split('/').pop().replace(/-/g, ' ').toUpperCase();

    searchIndex.push({
        title: title,
        path: url,
        content: cleanText
    });
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchIndex, null, 2));
console.log(`✅ Success! Indexed ${searchIndex.length} pages. Code stripped successfully.`);