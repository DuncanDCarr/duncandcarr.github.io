// Select DOM Elements
const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
const sentenceCount = document.getElementById('sentence-count');
const paragraphCount = document.getElementById('paragraph-count');
const clearBtn = document.getElementById('clear-btn');

// Update stats logic
function updateCounters() {
    const text = textInput.value;

    // 1. Character Count (includes spaces)
    charCount.textContent = text.length;

    // 2. Word Count
    // Trims spaces and splits by one or more whitespace characters
    const words = text.trim().split(/\s+/);
    // If the textarea is empty, .split() still returns an array with an empty string
    wordCount.textContent = text.trim() === '' ? 0 : words.length;

    // 3. Sentence Count
    // Splits by period, exclamation, or question mark followed by a space or end of text
    const sentences = text.trim().split(/[.!?]+(?:\s|$)/).filter(Boolean);
    sentenceCount.textContent = text.trim() === '' ? 0 : sentences.length;

    // 4. Paragraph Count
    // Splits by one or more newlines
    const paragraphs = text.split(/\n+/).filter(p => p.trim() !== '');
    paragraphCount.textContent = paragraphs.length;
}

// Event Listeners
textInput.addEventListener('input', updateCounters);

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    updateCounters();
});
