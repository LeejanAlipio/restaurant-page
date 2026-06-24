import "../styles/menu.css";

export default function createMenuPage() {
    const container = document.querySelector('#content');
    container.classList.add('content');

    const menuSection = document.createElement('div');
    menuSection.classList.add('hero-section-menu');
    
    menuSection.innerHTML = `
        <h1 class="menu-title">Our Menu</h1>
        <div class="menu-categories">
            <div class="menu-category">
                <h2>Starters</h2>
                <div class="menu-item">
                    <h3>Garden Salad</h3>
                    <p>Fresh seasonal vegetables with herb vinaigrette</p>
                    <span class="price">$12</span>
                </div>
                <div class="menu-item">
                    <h3>Woodland Mushroom Soup</h3>
                    <p>Creamy wild mushrooms with thyme</p>
                    <span class="price">$14</span>
                </div>
            </div>
            <div class="menu-category">
                <h2>Mains</h2>
                <div class="menu-item">
                    <h3>Herb-Crusted Lamb</h3>
                    <p>Local lamb with rosemary potatoes and seasonal vegetables</p>
                    <span class="price">$38</span>
                </div>
                <div class="menu-item">
                    <h3>Pan-Seared Sea Bass</h3>
                    <p>Wild-caught with lemon butter and garden herbs</p>
                    <span class="price">$34</span>
                </div>
            </div>
            <div class="menu-category">
                <h2>Desserts</h2>
                <div class="menu-item">
                    <h3>Honey Panna Cotta</h3>
                    <p>With seasonal berry compote</p>
                    <span class="price">$10</span>
                </div>
            </div>
        </div>
    `;

    container.appendChild(menuSection);
}