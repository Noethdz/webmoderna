var menu = document.querySelector('.menu');
var smenu = document.querySelector('.menu-navegacion');

console.log(menu);
console.log(smenu);

menu.addEventListener('click', () => {
    menu.classList.toggle("spread");
});


window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != smenu && e.target != menu) {

        menu.classList.toggle("spread");
    }
});