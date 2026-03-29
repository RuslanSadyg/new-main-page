// ================= SCROLL =================
const scrollBtn = document.getElementById("scrollBtn");
const transform = document.getElementById("transform");

scrollBtn.addEventListener("click", () => {
  transform.scrollIntoView({ behavior: "smooth" });
});

// ================= STICKY CTA =================
const sticky = document.getElementById("stickyCTA");

window.addEventListener("scroll", () => {
  sticky.classList.toggle("show", window.scrollY > 200);
});

// ================= BOOK MOTION =================
const book = document.querySelector(".book-cover");

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

const clamp = (v) => Math.max(-1, Math.min(1, v));

// мышь → цель
document.addEventListener("mousemove", (e) => {
  const rect = book.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  targetX = clamp((e.clientX - centerX) / (rect.width / 2));
  targetY = clamp((e.clientY - centerY) / (rect.height / 2));
});

// плавное движение
function loop() {
  const max = 6;

  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  book.style.transform = `
    rotateY(${currentX * max}deg)
    rotateX(${-currentY * max}deg)
  `;

  requestAnimationFrame(loop);
}

loop();

// выход мыши → центр
document.addEventListener("mouseleave", () => {
  targetX = 0;
  targetY = 0;
});
