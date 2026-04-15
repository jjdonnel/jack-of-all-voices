function displayHome() {
    // 1. Collapse the menu immediately
closeMenu();
    const main = document.getElementById('main');
    
   // Switch content back to the logo
    main.innerHTML = `
        <div class="logo-container fade-element show">
            <img src="./images/JackOfAllVoices-logo.jpg" alt="Logo" class="centered-logo">
        </div>
    `;

    // 2. The Hybrid trigger to fade it in
    main.style.display = 'flex'; 
    setTimeout(() => {
        main.classList.add('show');
    }, 50);
}