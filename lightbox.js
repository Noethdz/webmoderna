var imagenes = document.querySelectorAll('.img-galeria');
var imagenesLight = document.querySelector('.agregar-imagen');
var contenedorLight = document.querySelector('.imagen-light');
var menu = document.querySelector('.menu');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        menu.style.opacity = '1';
    }
});

var aparecerImagen = (imagen) => {
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menu.style.opacity = '0';
};