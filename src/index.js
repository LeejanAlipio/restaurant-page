import "./styles/footer.css";
import "./styles/header.css";
import "./styles/root.css";
import createHomePage from "./pages/home.js";
import createAboutPage from "./pages/about.js";
import createMenuPage from "./pages/menu.js";
import createContactPage from "./pages/contact.js";

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.className = '';
}

function initNavigation() {
    const navButtons = document.querySelectorAll('.btn-link');
    
    navButtons[0].addEventListener('click', () => {
        clearContent();
        createHomePage();
    });
    
    navButtons[1].addEventListener('click', () => {
        clearContent();
        createAboutPage();
    });
    
    navButtons[2].addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });
    
    navButtons[3].addEventListener('click', () => {
        clearContent();
        createContactPage();
    });
}

clearContent();
createHomePage();
initNavigation();