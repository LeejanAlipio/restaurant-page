import "../styles/contact.css";

export default function createContactPage() {
    const container = document.querySelector('#content');
    container.classList.add('content');

    const contactSection = document.createElement('div');
    contactSection.classList.add('hero-section-contact');
    
    contactSection.innerHTML = `
        <h1 class="contact-title">Contact Us</h1>
        <div class="contact-info">
            <div class="contact-item">
                <h2>Location</h2>
                <p>123 Garden Lane<br>Farmington, FT 12345</p>
            </div>
            <div class="contact-item">
                <h2>Hours</h2>
                <p>Monday - Friday: 5pm - 10pm<br>Saturday - Sunday: 12pm - 11pm</p>
            </div>
            <div class="contact-item">
                <h2>Contact</h2>
                <p>Phone: (555) 123-4567<br>Email: hello@therusticspoon.com</p>
            </div>
        </div>
    `;

    container.appendChild(contactSection);
}