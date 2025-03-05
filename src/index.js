import './styles.css';
import homePage from './modules/home.js';
import aboutPage from './modules/about.js';
import menuPage from './modules/menu.js';
import contactPage from './modules/contact.js';

document.querySelector('#homeBtn').addEventListener('click', homePage);
document.querySelector('#aboutBtn').addEventListener('click', aboutPage);
document.querySelector('#menuBtn').addEventListener('click', menuPage);
document.querySelector('#contactBtn').addEventListener('click', contactPage);

homePage();
