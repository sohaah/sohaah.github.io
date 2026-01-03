document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".images img");

    // Create lightbox elements
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `
    <span class="close">&times;</span>
    <span class="prev">&#10094;</span>
    <img src="" alt="">
    <span class="next">&#10095;</span>
  `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector(".close");
    const prevBtn = lightbox.querySelector(".prev");
    const nextBtn = lightbox.querySelector(".next");

    let currentIndex = 0;
    let currentImages = [];

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            const parent = img.closest(".images");
            currentImages = Array.from(parent.querySelectorAll("img"));
            currentIndex = currentImages.indexOf(img);
            lightboxImage.src = currentImages[currentIndex].src;
            lightbox.classList.add("active");
        });
    });

    const showImage = (index) => {
        if (index < 0) index = currentImages.length - 1;
        if (index >= currentImages.length) index = 0;
        currentIndex = index;
        lightboxImage.src = currentImages[currentIndex].src;
    };

    prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
    nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
    closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.classList.remove("active");
    });
});