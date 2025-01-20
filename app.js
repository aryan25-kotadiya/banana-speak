const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Function to transform text into banana speak
function convertToBananaSpeak(text) {
    return text
        .replace(/[aeiouAEIOU]/g, 'banana')  // Replace vowels with 'banana'
        .split(' ')
        .map(word => {
            // Add more rules here, for example making common words "banana-like"
            if (word.toLowerCase() === 'hello') return 'bananalo';
            if (word.toLowerCase() === 'good') return 'banood';
            if (word.toLowerCase() === 'morning') return 'banorning';
            return word;
        })
        .join(' ');
}

// Route to handle banana speak conversion
app.post('/banana-speak', (req, res) => {
    const inputText = req.body.text;
    
    // Get transformed text
    const bananaSpeak = convertToBananaSpeak(inputText);
    
    res.json({ bananaSpeak });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
