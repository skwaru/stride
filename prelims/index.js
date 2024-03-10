let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
};

// navbar 
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
};

// remove menu & search icon on scrooll
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}


// header animation
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});

// subscribe
const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z0-9]{6,12}$/;
form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});
form.addEventListener('submit', e => {
    e.preventDefault();
    // validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z0-9]{6,12}$/;
    if(usernamePattern.test(username)){
        feedback.textContent = "Thank you for subscribing!";
    } else {
        feedback.textContent = 'username must contain letters only & between 6 to 12 characters long!';
    }
});