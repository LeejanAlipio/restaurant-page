import "./styles/footer.css";
import "./styles/header.css";
import "./styles/root.css";
import createHomePage from "./pages/home.js";
import createAboutPage from "./pages/about.js";
import createMenuPage from "./pages/menu.js";
import createContactPage from "./pages/contact.js";

const pages = {
    home: createHomePage,
    about: createAboutPage,
    menu: createMenuPage,
    contact: createContactPage,
}

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

function initNavigation() {
  const navButtons = document.querySelectorAll('.btn-link');
  
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const btnValue = button.dataset.page;
      
      if (pages[btnValue]) {
        clearContent();      
        pages[btnValue]();
      }
    });
  });
}

clearContent();
createHomePage();
initNavigation();