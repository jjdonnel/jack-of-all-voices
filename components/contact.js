// in contact.js
function displayContact() {
    closeMenu();
    const main = document.getElementById('main');
    main.classList.remove('show');

    main.innerHTML = `
        <div class="section glass-card">
            <h2 class="section-title">Get In Touch</h2>
            <p>Ready to start your next project? Drop me a line below.</p>
            
            <form class="contact-form" action="https://formspree.io/f/xlgagono" method="POST">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" placeholder="Project Details" rows="5" required></textarea>
                <button type="submit" class="btn-submit">Send Message</button>
            </form>
            
            <div class="direct-contact">
                <p>Or email directly: <a href="mailto:jack@jackofallvoices.com">jack@jackofallvoices.com</a></p>
            </div>
        </div>
    `;

    setTimeout(() => { main.classList.add('show'); }, 50);
}