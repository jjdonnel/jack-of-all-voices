function displayCommercial() {
    // 1. Collapse the menu
closeMenu();
    // const menuToggle = document.getElementById('top');
    // const demoSubmenu = document.getElementById('A');
    // if (menuToggle) menuToggle.checked = false;
    // if (demoSubmenu) demoSubmenu.checked = false;

    // Optional: Stop any audio currently playing before loading new section
    const players = document.querySelectorAll('audio');
    players.forEach(player => player.pause());

    const main = document.getElementById('main');

    // 2. Prepare for the transition
    main.classList.remove('show');
    main.style.display = 'none';

    // 3. Inject the HTML with multiple reel spaces
    main.innerHTML = `
        <div class="section">
            <h1 class="title">Commercial Demos</h1>
            
            <div id="luxury-car"class="comps">
                <h3>Main Commercial Reel</h3>
                <p>Luxury Car Commercial.</p>
                <audio controls>
                    <source src="./audio/luxuryCar.mp3" type="audio/mpeg">
                </audio>
            </div>

            <!-- <hr style="width:100%; border: 0.5px solid rgba(255,255,255,0.2); margin: 1em 0;">

             <div id="automotive" class="comps">
                <h3>Automotive & Hard Sell</h3>
                <p>Fast-paced, high-impact retail delivery.</p>
                <audio controls>
                    <source src="./audio/commercial-auto.mp3" type="audio/mpeg">
                </audio>
            </div> -->


        </div>
    `;

    // 4. The Anti-Flash Hybrid Sequence
    main.style.display = 'flex';

    setTimeout(() => {
        main.classList.add('show');
    }, 50);
}