let btBurger = document.getElementById("burger");
let btcrois = document.getElementById("crois");
let mainMenu = document.getElementById("menu");

btBurger.addEventListener('click', function () {
    mainMenu.classList.toggle('active');


});
btcrois.addEventListener('click', function () {
    mainMenu.classList.toggle('active');
});
