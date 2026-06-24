import "../styles/home.css";

export default function createHomePage() {
    const container = document.querySelector('#content');
    container.classList.add('content');

    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section-home');
    heroSection.innerHTML = `
        <p class="hero-year-home">ESTABLISHED 2024</p>
        <h1 class="hero-title-home">Honest Ingredients. Crafted with Heart.</h1>
        <p class="hero-description-home">Experience the raw beauty of seasonal dining. We source every ingredient from local family farms to bring the purest flavors of the earth directly to your table.</p>
        <div class="hero-btn-container">
            <button class="menu-btn">EXPLORE MENU</button>
            <button class="about-btn">OUR STORY</button>
        </div>
        `

    container.appendChild(heroSection);
}