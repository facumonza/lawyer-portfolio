// NAV fijo cuando scrolleo
window.onscroll = function() { stickyNavbar() };

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}

// SERVICIOS desplegables
document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Alternar la clase 'active' en el botón
        this.classList.toggle('active');

        // Obtener el contenido del servicio correspondiente
        let content = this.nextElementSibling;

        // Si el contenido está visible, lo ocultamos; si está oculto, lo mostramos
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
