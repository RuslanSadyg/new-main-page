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
  const rect = book.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const x = (e.clientX - centerX) / (rect.width / 2);
  const y = (e.clientY - centerY) / (rect.height / 2);

  const max = 12;

  book.style.transform = `
    rotateY(${x * max}deg)
    rotateX(${-y * max}deg)
  `;
});

document.addEventListener("mouseleave", () => {
  book.style.transform = "rotateY(0deg) rotateX(0deg)";
});
