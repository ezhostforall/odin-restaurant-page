const homePage = () => {
    const app = document.querySelector('#content');
    app.innerHTML = ''; 
    const heroSection = document.createElement('div');
    heroSection.id = 'hero';
    heroSection.classList.add('home-hero');
    app.appendChild(heroSection);
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Welcome to Odin Restaurant';
    heroSection.appendChild(heroTitle);
    const heroText = document.createElement('p');
    heroText.textContent = 'The best restaurant in the world!';
    heroSection.appendChild(heroText);
    const heroButton = document.createElement('button');
    heroButton.textContent = 'Book a table';
    heroSection.appendChild(heroButton);
};

export default homePage;