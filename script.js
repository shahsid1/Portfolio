// Function to load an external HTML file into a specified element
function loadSection(sectionId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(sectionId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load the header and footer in every page
document.addEventListener("DOMContentLoaded", function () {
    loadSection("footer-placeholder", "footer.html");
});