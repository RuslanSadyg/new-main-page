// SCROLL TO SECTION
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
});

// STICKY CTA
const sticky = document.getElementById("stickyCTA");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    sticky.classList.add("show");
  } else {
    sticky.classList.remove("show");
  }
});

// BOOK PARALLAX (простая версия)
const book = document.querySelector(".book-cover");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  const max = 12; // ограничение угла

  book.style.transform = `
    rotateY(${x * max}deg)
    rotateX(${-y * max}deg)
  `;
});
