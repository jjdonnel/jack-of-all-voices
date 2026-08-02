// in components/contact.js
function displayContact() {
    loadPage('Contact Jack', (main) => {
        main.innerHTML = `
            <div class="section glass-card contact-card">
                <h2 class="section-title">Get In Touch</h2>
                <p class="contact-subtitle">Ready to start your next project? Drop me a line below.</p>
                
                <form class="contact-form" action="https://formspree.io/f/xlgagono" method="POST">
                    <div class="form-group">
                        <input type="text" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <textarea name="message" placeholder="Project Details" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn-submit">Send Message</button>
                </form>
                
                <div class="direct-contact">
                    <p>Or email directly: <a href="mailto:jack@jackofallvoices.com">jack@jackofallvoices.com</a></p>
                </div>
            </div>
        `;
    });
}