function displayNarration() {
    // 1. Collapse the menu
closeMenu();

    // Stop audio from other sections
    const players = document.querySelectorAll('audio');
    players.forEach(player => player.pause());

    const main = document.getElementById('main');

    // 2. Prepare for the transition
    main.classList.remove('show');
    main.style.display = 'none';

    // 3. Inject Content
    main.innerHTML = `
        <div class="section">
            <h1 class="title">Narration Demos</h1>
            
            <div id="romance" class="comps">
                <h3>Romance Sample</h3>
                <p>The "Luxury" read.</p>
                <audio controls>
                    <source src="./audio/romance.mp3" type="audio/mpeg">
                </audio>
            </div>

            <hr style="width:100%; border: 0.5px solid rgba(255,255,255,0.2); margin: 1em 0;">

            <div id="high-fantasy" class="comps">
                <h3>High Fantasy Sample</h3>
                <p>The "Epic Fantasy" read.</p>
                <audio controls>
                    <source src="./audio/Aethelgard.mp3" type="audio/mpeg">
                </audio>
            </div>

            <hr style="width:100%; border: 0.5px solid rgba(255,255,255,0.2); margin: 1em 0;">

            <div class="comps">
                <h3>Mystery</h3>
                <p>The "Haunting" read.</p>
                <audio controls>
                    <source src="./audio/darkTavern.mp3" type="audio/mpeg">
                </audio>
            </div>
        </div>
    `;

    // 4. Trigger Fade-In
    main.style.display = 'flex';
    setTimeout(() => {
        main.classList.add('show');
    }, 50);
}