const contactPage = () => {
    const app = document.querySelector('#content');
    app.innerHTML = '';
    const heroSection = document.createElement('div');
    heroSection.id = 'hero';
    heroSection.classList.add('contact-hero');
    app.appendChild(heroSection);
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Contact The Odin Restaurant';
    heroSection.appendChild(heroTitle);
    const heroText = document.createElement('p');
    heroText.textContent = 'Get in touch!';
    heroSection.appendChild(heroText);
    const heroButton = document.createElement('button');
    heroButton.textContent = 'Book a table';
    heroSection.appendChild(heroButton);

    const contactSection = document.createElement('div');
    contactSection.id = 'contact';
    app.appendChild(contactSection);
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contactSection.appendChild(contactTitle);

    const contactForm = document.createElement('form');
    contactForm.id = 'contact-form';
    contactSection.appendChild(contactForm);

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.htmlFor = 'name';
    contactForm.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
    contactForm.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    emailLabel.htmlFor = 'email';
    contactForm.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    contactForm.appendChild(emailInput);

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    messageLabel.htmlFor = 'message';
    contactForm.appendChild(messageLabel);

    const messageInput = document.createElement('textarea');
    messageInput.id = 'message';
    messageInput.name = 'message';
    messageInput.required = true;
    contactForm.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    contactForm.appendChild(submitButton);
};

export default contactPage;