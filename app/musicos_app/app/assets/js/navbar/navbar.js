// Obtener la URL actual y el fragmento después del primer "/"
const url = window.location.pathname;
const url2 = "/" + url.split('/')[1];

// Obtener todos los elementos con la clase "nav-link"
const links = document.querySelectorAll(".nav-item a");

// Variable para rastrear si se encontró el enlace activo
let foundActiveLink = false;

// Iterar sobre los enlaces y agregar la clase 'active' al enlace activo
links.forEach(link => {
    // Verificar si el atributo "href" coincide con el fragmento de URL
    if (link.getAttribute("href") === url2) {
        link.classList.add("active");
        foundActiveLink = true;
    } else {
        link.classList.remove("active");
    }
});

// Si no se encontró el enlace activo, podemos agregar la clase "active" al primer enlace por defecto
if (!foundActiveLink && links.length > 0) {
    links[0].classList.add("active");
}