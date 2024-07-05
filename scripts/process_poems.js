const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const poemsFolderPath = './_poems'; // Replace with the actual path to your _poems folder

// Function to collect poem metadata
function collectPoemMetadata() {
    const metadata = [];

    // Read the _poems folder
    const files = fs.readdirSync(poemsFolderPath);

    // Loop through each file in the folder
    files.forEach((file) => {
        const poemPath = path.join(poemsFolderPath, file);

        // Check if the file is a poem (you can modify this condition based on your file naming convention)
        if (fs.statSync(poemPath).isFile() && file.endsWith('.md')) {
            // Read the poem file
            const poemContent = fs.readFileSync(poemPath, 'utf-8');
            const { data, content } = matter(poemContent);

            // Extract the slug, title, and date from the poem content (you can modify this based on your poem file structure)
            const slug = file.replace('.md', '');
            const title = data.title;
            const date = data.date;
            const author = data.author.name;

            // Add the metadata to the array
            metadata.push({ slug, title, date, author });
        }
    });

    // Organize the metadata by date
    metadata.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Number the poems in the order they appear
    metadata.forEach((poem, index) => {
        poem.number = index + 1;
    });

    return metadata;
}

// Function to save metadata to metadata.json file
function saveMetadata(metadata) {
    const metadataFilePath = path.join(poemsFolderPath, 'metadata.json');

    // Convert the metadata array to JSON string
    const metadataJson = JSON.stringify(metadata, null, 2);

    // Write the metadata to metadata.json file
    fs.writeFileSync(metadataFilePath, metadataJson);

    console.log('Metadata saved successfully!');
}

// Collect poem metadata and save it to metadata.json file
const poemMetadata = collectPoemMetadata();
saveMetadata(poemMetadata);