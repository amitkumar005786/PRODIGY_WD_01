
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('#navbarNav');
    // console.log(navbar);
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let links = document.querySelectorAll(".nav-link");
links.forEach(link => {
    link.addEventListener(("mouseover"), () => {
        console.log("clicked");
        link.style.backgroundColor = '#ffcc00';
        link.style.color = 'black';
    })
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = 'transparent';
        link.style.color = 'white';
    });
});