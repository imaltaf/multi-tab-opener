document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateButton").addEventListener("click", generateURL);
    document.getElementById("copyButton").addEventListener("click", copyToClipboard);
    document.getElementById("resetButton").addEventListener("click", resetFields);
});

function generateURL() {
    const idsInput = document.getElementById('idsInput').value;
    const urlInput = document.getElementById('urlInput').value;
    
    const idsArray = idsInput.split(' ');
    const generatedURLs = idsArray.map(id => `${urlInput}${id}`).join('\n');
    
    document.getElementById('output').value = generatedURLs;
}

function copyToClipboard() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}

function resetFields() {
    document.getElementById('idsInput').value = '';
    
    document.getElementById('output').value = '';
}