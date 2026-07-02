const carousel = document.getElementById("featuresCarousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (carousel && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left: 360,
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left: -360,
            behavior: "smooth"
        });
    });
}