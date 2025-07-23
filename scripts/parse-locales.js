const fs = require('fs');
const path = require('path');

/**
 * Parse combined locale file into individual JSON files
 * @param {string} localeDir - Path to locale directory (e.g., 'en', 'id', 'th', etc.)
 */
function parseCombinedLocales(localeDir) {
    const localesPath = path.join(__dirname, '..', 'public', 'locales');
    const targetDir = path.join(localesPath, localeDir);
    const combinedFile = path.join(targetDir, 'combined.json');
    
    // Check if combined file exists
    if (!fs.existsSync(combinedFile)) {
        console.log(`❌ Combined file not found: ${combinedFile}`);
        return;
    }
    
    try {
        // Read combined file
        const combinedContent = fs.readFileSync(combinedFile, 'utf8');
        const combinedData = JSON.parse(combinedContent);
        
        console.log(`📁 Processing locale: ${localeDir}`);
        
        // Process each section in combined file
        Object.keys(combinedData).forEach(sectionName => {
            const sectionData = combinedData[sectionName];
            const outputFile = path.join(targetDir, `${sectionName}.json`);
            
            // Write individual file
            fs.writeFileSync(outputFile, JSON.stringify(sectionData, null, 4));
            console.log(`✅ Created: ${sectionName}.json`);
        });
        
        console.log(`🎉 Successfully parsed ${Object.keys(combinedData).length} files for ${localeDir}`);
        
    } catch (error) {
        console.error(`❌ Error processing ${localeDir}:`, error.message);
    }
}

/**
 * Parse all locale directories
 */
function parseAllLocales() {
    const localesPath = path.join(__dirname, '..', 'public', 'locales');
    
    if (!fs.existsSync(localesPath)) {
        console.log('❌ Locales directory not found');
        return;
    }
    
    // Get all locale directories
    const localeDirs = fs.readdirSync(localesPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    
    console.log(`🔍 Found ${localeDirs.length} locale directories: ${localeDirs.join(', ')}`);
    
    // Process each locale directory
    localeDirs.forEach(localeDir => {
        parseCombinedLocales(localeDir);
    });
}

/**
 * Create combined file from individual JSON files
 * @param {string} localeDir - Path to locale directory
 */
function createCombinedFile(localeDir) {
    const localesPath = path.join(__dirname, '..', 'public', 'locales');
    const targetDir = path.join(localesPath, localeDir);
    const combinedFile = path.join(targetDir, 'combined.json');
    
    if (!fs.existsSync(targetDir)) {
        console.log(`❌ Locale directory not found: ${targetDir}`);
        return;
    }
    
    try {
        const combinedData = {};
        
        // Read all JSON files in the directory
        const files = fs.readdirSync(targetDir)
            .filter(file => file.endsWith('.json') && file !== 'combined.json');
        
        console.log(`📁 Creating combined file for: ${localeDir}`);
        
        files.forEach(file => {
            const filePath = path.join(targetDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const data = JSON.parse(content);
            
            // Use filename without extension as section name
            const sectionName = path.basename(file, '.json');
            combinedData[sectionName] = data;
            
            console.log(`📄 Added: ${file}`);
        });
        
        // Write combined file
        fs.writeFileSync(combinedFile, JSON.stringify(combinedData, null, 4));
        console.log(`✅ Created combined file: ${combinedFile}`);
        
    } catch (error) {
        console.error(`❌ Error creating combined file for ${localeDir}:`, error.message);
    }
}

// Command line interface
const args = process.argv.slice(2);
const command = args[0];
const locale = args[1];

if (command === 'parse') {
    if (locale) {
        parseCombinedLocales(locale);
    } else {
        parseAllLocales();
    }
} else if (command === 'combine') {
    if (locale) {
        createCombinedFile(locale);
    } else {
        console.log('❌ Please specify a locale directory (e.g., node parse-locales.js combine en)');
    }
} else {
    console.log(`
🌍 Locale Parser Script

Usage:
  node parse-locales.js <command> [locale]

Commands:
  parse [locale]  - Parse combined.json into individual files
                   If locale is not specified, processes all locales
  
  combine <locale> - Create combined.json from individual files
                    Requires locale parameter (e.g., 'en', 'id', 'th')

Examples:
  node parse-locales.js parse en
  node parse-locales.js parse
  node parse-locales.js combine en
    `);
} 