import menuItems from '../data/menuItems.js';

console.log(menuItems);

const appetizers = menuItems.appetizers;
const entrees = menuItems.entrees;
const desserts = menuItems.desserts;

console.log(appetizers);
console.log(entrees);
console.log(desserts);

const menuPage = () => {
    const app = document.querySelector('#content');
    app.innerHTML = '';
    const heroSection = document.createElement('div');
    heroSection.id = 'hero';
    heroSection.classList.add('menu-hero');
    app.appendChild(heroSection);
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Browse Our Menu';
    heroSection.appendChild(heroTitle);
    const heroText = document.createElement('p');
    heroText.textContent = 'See what we have to offer!';
    heroSection.appendChild(heroText);
    const heroButton = document.createElement('button');
    heroButton.textContent = 'Book a table';
    heroSection.appendChild(heroButton);

    const menuSection = document.createElement('div');
    menuSection.id = 'menu';
    app.appendChild(menuSection);
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Menu';
    menuSection.appendChild(menuTitle);

    const createMenuItem = (item) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;
        itemDiv.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('item-description');
        itemDescription.textContent = item.description;
        itemDiv.appendChild(itemDescription);

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;
        itemDiv.appendChild(itemPrice);

        return itemDiv;
    }

    const addMenuCategory = (category, items) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        items.forEach(item => {
            const menuItem = createMenuItem(item);
            categoryDiv.appendChild(menuItem);
        });

        menuSection.appendChild(categoryDiv);
    }

    addMenuCategory('Appetizers', appetizers);
    addMenuCategory('Entrees', entrees);
    addMenuCategory('Desserts', desserts);
};

export default menuPage;