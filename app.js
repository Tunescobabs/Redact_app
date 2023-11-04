// app.js
document.getElementById('redactButton').addEventListener('click', redactText);

function redactText() {
    const inputText = document.getElementById('textInput').value;
    const redactWords = document.getElementById('redactWords').value.split(' ');
    const replacement = document.getElementById('replacement').value;

    const redactedText = inputText.split(' ').map(word => {
        if (redactWords.includes(word)) {
            return replacement;
        } else {
            return word;
        }
    }).join(' ');

    document.getElementById('redactedText').textContent = redactedText;
}
