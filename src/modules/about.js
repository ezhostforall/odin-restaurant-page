const aboutPage = () => {
    const app = document.querySelector('#content');
    app.innerHTML = '';
    const heroSection = document.createElement('div');
    heroSection.id = 'hero';
    heroSection.classList.add('about-hero');
    app.appendChild(heroSection);
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'About The Odin Restaurant';
    heroSection.appendChild(heroTitle);
    const heroText = document.createElement('p');
    heroText.textContent = 'We are a family restaurant that has been in business for over 50 years.';
    heroSection.appendChild(heroText);
    const heroButton = document.createElement('button');
    heroButton.textContent = 'Book a table';
    heroSection.appendChild(heroButton);
};

export default aboutPage;