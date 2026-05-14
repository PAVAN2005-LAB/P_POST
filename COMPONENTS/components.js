function renderHeader(basePath) {
    document.write(`
    <nav class="navbar">
        <a href="${basePath}index.html" class="brand">
            <img src="${basePath}IMAGE/PPOST__1_-removebg-preview.png" alt="PPOST Logo">
        </a>
        <div class="nav-links">
            <a href="${basePath}index.html" class="nav-link">Home</a>
            <a href="${basePath}contact.html" class="nav-link">Contact</a>
            <a href="${basePath}privacy.html" class="nav-link">Privacy</a>
        </div>
    </nav>
    `);
}

function renderFooter() {
    document.write(`
    <footer>
        &copy; 2026 PPOST. All rights reserved. <br>Transforming India from consumers to creators.
    </footer>
    `);
}
