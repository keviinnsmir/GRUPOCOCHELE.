// Función para activar o desactivar el menú en dispositivos móviles
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Añade o quita la clase 'active' para mostrar u ocultar el menú
}
document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los elementos del menú
    const navItems = document.querySelectorAll('.nav-item');

    // Abre o cierra el dropdown cuando se hace clic en un nav-item
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Previene que el clic en el propio dropdown lo cierre inmediatamente
            event.stopPropagation();

            // Cerrar todos los menús desplegables
            navItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove('active');
                }
            });

            // Alternar la visibilidad del dropdown actual
            item.classList.toggle('active');
        });
    });

    // Cerrar todos los dropdowns si el usuario hace clic fuera de ellos
    document.addEventListener('click', function(event) {
        // Verifica si el clic fue fuera de un nav-item
        if (!event.target.closest('.nav-item')) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});
