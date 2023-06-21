const openBtn = document.getElementById("openBtn");
const mySidenav = document.getElementById("mySidenav");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function() {
    mySidenav.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    mySidenav.style.display = "none";
});

const navbarToggle = document.querySelector('.navbar-toggler');
const article = document.querySelector('.article');

navbarToggle.addEventListener('click', function() {
    article.classList.toggle('article-down');
});