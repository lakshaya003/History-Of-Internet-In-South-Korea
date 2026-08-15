// Utility to load JSON
async function loadJSON(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Failed to load " + path);
    return res.json();
}

// Utility to load Mustache template from HTML or external file
async function loadTemplate(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Failed to load template " + path);
    return res.text();
}

// Render Timeline
async function renderTimeline() {
    try {
        const data = await loadJSON('timeline.json');
        const template = document.getElementById('timeline-template').innerHTML;
        document.getElementById('timeline-container').innerHTML = Mustache.render(template, data);
    } catch (err) {
        console.error('Failed to load timeline.json:', err);
        document.getElementById('timeline-container').innerHTML = '<p class="text-danger">Failed to load timeline data.</p>';
    }
}

// Render ISPs
async function renderISPs() {
    try {
        const data = await loadJSON('isps.json');
        const template = document.getElementById('isps-template').innerHTML;
        document.getElementById('isps-container').innerHTML = Mustache.render(template, data);
    } catch (err) {
        console.error('Failed to load isps.json:', err);
        document.getElementById('isps-container').innerHTML = '<p class="text-danger">Failed to load ISP data.</p>';
    }
}

//Render homepage
async function renderHomepage() {
    try {
        const data = await loadJSON('homepage.json'); // your JSON file
        const template = document.getElementById('homepage-template').innerHTML;
        document.getElementById('homepage-container').innerHTML = Mustache.render(template, data);
    } catch (err) {
        console.error('Failed to load homepage.json:', err);
        document.getElementById('homepage-container').innerHTML = '<p class="text-danger">Failed to load homepage data.</p>';
    }
}

// Initialize page content on DOM load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('timeline-container')) renderTimeline();
    if (document.getElementById('isps-container')) renderISPs();
    if (document.getElementById('homepage-container')) renderHomepage();
});
