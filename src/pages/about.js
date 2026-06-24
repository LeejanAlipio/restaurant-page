import "../styles/about.css";

export default function createAboutPage() {
    const container = document.querySelector('#content');
    container.classList.add('content');

    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section-about');
    heroSection.innerHTML = `
        <p class="hero-year-about">EST 2024</p>
        <h1 class="hero-title-about">Cultivating Heritage, One Plate at a Time</h1>
        <p class="hero-description-about">Founded by passionate farmers and chefs, we believe in the power of honest food. Every dish tells a story of the land, the seasons, and the hands that nurtured it. Our kitchen works directly with local producers to bring you meals that celebrate community and craftsmanship.</p>
    `

    container.appendChild(heroSection);
}