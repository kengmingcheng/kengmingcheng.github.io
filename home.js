
var navToggle = document.querySelector('.nav-toggle');
var navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () =>  {
        document.body.classList.remove('nav-open');
    });
});