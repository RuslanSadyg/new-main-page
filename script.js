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

// ===== BOOK PARALLAX (плавный и спокойный) =====

const book = document.querySelector(".book-cover");

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

// ограничение
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

document.addEventListener("mousemove", (e) => {
  const rect = book.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  let x = (e.clientX - centerX) / (rect.width / 2);
  let y = (e.clientY - centerY) / (rect.height / 2);

  targetX = clamp(x, -1, 1);
  targetY = clamp(y, -1, 1);
});

// плавная анимация
function animate() {
  const max = 6; // маленький угол = "дорого"

  // инерция (чем меньше число — тем плавнее)
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  book.style.transform = `
    rotateY(${currentX * max}deg)
    rotateX(${-currentY * max}deg)
  `;

  requestAnimationFrame(animate);
}

animate();

// возврат в исходное положение
document.addEventListener("mouseleave", () => {
  targetX = 0;
  targetY = 0;
});
