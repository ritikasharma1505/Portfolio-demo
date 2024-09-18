// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        form.reset(); // Clear the form after submission
    } else {
        alert('Please fill out all fields.');
    }
});

// Toggle navigation menu on small screens
const navToggle = document.createElement('button');
navToggle.innerText = '☰';
navToggle.classList.add('nav-toggle');

document.querySelector('header nav').prepend(navToggle);

navToggle.addEventListener('click', function() {
    document.querySelector('header nav ul').classList.toggle('open');
});

// Close menu when clicking a link
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('header nav ul').classList.remove('open');
    });
});
