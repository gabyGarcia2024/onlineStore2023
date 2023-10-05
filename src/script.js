// Define una clase Banner
class Banner {
    constructor(imageSrc, linkUrl) {
        this.imageSrc = imageSrc;
        this.linkUrl = linkUrl;
    }

    render() {
        const bannerElement = document.createElement("a");
        bannerElement.href = this.linkUrl;

        const imgElement = document.createElement("img");
        imgElement.src = this.imageSrc;

        bannerElement.appendChild(imgElement);
        return bannerElement;
    }
}

// Crea instancias de banners
const banners = [
    new Banner("banner1.jpg", "enlace1.html"),
    new Banner("banner2.jpg", "enlace2.html"),
    new Banner("banner3.jpg", "enlace3.html"),
];

// Agrega los banners al contenedor
const bannerContainer = document.getElementById("bannerContainer");
banners.forEach((banner) => {
    const bannerElement = banner.render();
    bannerContainer.appendChild(bannerElement);
});

// Mostrar un banner cada 5 segundos
let currentIndex = 0;
function rotateBanner() {
    banners[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % banners.length;
    banners[currentIndex].style.display = "block";
}

setInterval(rotateBanner, 5000); // Cambia el banner cada 5 segundos
rotateBanner(); // Muestra el primer banner
