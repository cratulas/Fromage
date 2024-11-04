// PopUp Bienvenida
function showWelcomePopup() {
    if (!localStorage.getItem("welcomeShown")) {
        alert("¡Bienvenido a Fromage! Explora nuestras ofertas especiales de hoy.");
        localStorage.setItem("welcomeShown", "true");
    }
}
document.addEventListener("DOMContentLoaded", showWelcomePopup);


// Noticias y Actualidades
const news = [
    {
        title: "Nueva Tienda en París",
        content: "¡Hemos abierto una nueva tienda en el centro de París!",
        img: "img/store_paris.jpg",
        url: "noticia1.html"
    },
    {
        title: "Lanzamiento de Nuevos Quesos",
        content: "Prueba nuestros nuevos sabores de queso artesanal.",
        img: "img/new_cheeses.jpg",
        url: "noticia2.html"
    },
    {
        title: "Evento de Degustación",
        content: "Únete a nuestro evento de degustación el próximo sábado.",
        img: "img/tasting_event.jpg",
        url: "noticia3.html"
    }
];

function displayNewsCarousel() {
    const carouselInner = document.getElementById("news-carousel-inner");
    carouselInner.innerHTML = ""; // Limpiar contenido anterior
    news.forEach((item, index) => {
        const newsItem = document.createElement("div");
        newsItem.className = `carousel-item ${index === 0 ? "active" : ""}`;
        newsItem.innerHTML = `
            <a href="${item.url}">
                <img src="${item.img}" class="d-block w-100" alt="${item.title}">
            </a>
            <div class="carousel-caption d-none d-md-block">
                <h5>${item.title}</h5>
                <p>${item.content}</p>
            </div>
        `;
        carouselInner.appendChild(newsItem);
    });
}

document.addEventListener("DOMContentLoaded", displayNewsCarousel);



// Ofertas
const offers = [
    { name: "Queso Camembert", description: "Descuento del 20%", img: "img/camembert.jpg" },
    { name: "Queso Brie", description: "Compra 1 y lleva otro a mitad de precio", img: "img/brie.jpg" },
    { name: "Queso Roquefort", description: "¡Descuento de 15% por hoy!", img: "img/roquefort.jpg" },
];

function displaySpecialOffer() {
    const offerContent = document.getElementById("offer-content");
    const randomOffer = offers[Math.floor(Math.random() * offers.length)];
    offerContent.innerHTML = `
        <div class="card text-center">
            <img src="${randomOffer.img}" class="card-img-top special-offer-image" alt="${randomOffer.name}">
            <div class="card-body">
                <h5 class="card-title">${randomOffer.name}</h5>
                <p class="card-text">${randomOffer.description}</p>
                <a href="shop.html" class="btn btn-primary">Ir a la Tienda</a>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", displaySpecialOffer);




//  Reviews
const reviews = [
    { name: "Ana", comment: "¡Excelentes quesos y servicio!", rating: 5 },
    { name: "Carlos", comment: "Me encantó la variedad francesa.", rating: 4 },
    { name: "Lucía", comment: "El queso azul es el mejor.", rating: 5 },
];

function displayReviews() {
    const reviewsContainer = document.getElementById("reviews-container");
    reviewsContainer.innerHTML = "";
    reviews.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.className = "col-md-4";
        reviewElement.innerHTML = `
            <div class="card p-3 mb-3">
                <h5>${review.name}</h5>
                <p>${review.comment}</p>
                <div>${"⭐".repeat(review.rating)}</div>
            </div>
            
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}
document.addEventListener("DOMContentLoaded", displayReviews);






