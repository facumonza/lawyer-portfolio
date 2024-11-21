// Hacer el navbar fijo al hacer scroll
window.onscroll = function() { stickyNavbar() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}

// Funcionalidad para los servicios desplegables
document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Alternar la clase 'active' en el botón
        this.classList.toggle('active');

        // Obtener el contenido del servicio correspondiente
        var content = this.nextElementSibling;

        // Si el contenido está visible, lo ocultamos; si está oculto, lo mostramos
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
