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

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    if (isOpen) {
      // 👉 фиксируем текущую высоту (если была auto)
      answer.style.height = answer.scrollHeight + "px";

      requestAnimationFrame(() => {
        answer.style.height = "0px";
        answer.style.opacity = "0";
      });

      item.classList.remove("active");
    } else {
      item.classList.add("active");

      answer.style.height = answer.scrollHeight + "px";
      answer.style.opacity = "1";

      setTimeout(() => {
        answer.style.height = "auto";
      }, 350);
    }
  });
});

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

const openContact = document.getElementById("openContact");
const openTerms = document.getElementById("openTerms");

// ---------- КОНТЕНТ ----------

const contactHTML = `
  <h1>Contact Information</h1>

  <p><strong>Support:</strong> lukemccarthy.ads@gmail.com</p>
  <p><strong>Collaboration:</strong> lukemccarthy.ads@gmail.com</p>
  <p>Barcelona, Spain</p>
`;

const termsHTML = `
<h1>Terms & Conditions</h1>
<p class="muted">Effective Date: Dec 2, 2024</p>
  <p>
    Welcome to my book, You and English, by Luke McCarthy! By purchasing and downloading our e-book,
    you agree to the following terms and conditions. Please read them carefully.
  </p>

  <h2>1. All Sales Are Final</h2>
  <ul>
    <li>All purchases made through this website are <strong>non-refundable</strong>.</li>
    <li>
      By completing your purchase, you acknowledge that you have read and understood the product
      description and agree to these terms.
    </li>
  </ul>

  <h2>2. No Unauthorized Sharing or Distribution</h2>
  <ul>
    <li>The e-book you purchase is for <strong>personal use only</strong>.</li>
    <li>
      You agree <strong>not to upload, share, or distribute</strong> the e-book, in whole or in part,
      to any platform, website, or person.
    </li>
    <li>
      Unauthorized sharing, copying, or distribution may result in legal action.
    </li>
  </ul>

  <h2>3. Intellectual Property Rights</h2>
  <ul>
    <li>
      The e-book and all related content are the <strong>intellectual property of Luke McCarthy</strong>
      and are protected by copyright laws.
    </li>
    <li>
      Purchasing the e-book does not transfer any ownership rights to you.
    </li>
    <li>
      You may not modify, reproduce, or create derivative works from the e-book.
    </li>
  </ul>

  <h2>4. Contact Information</h2>
  <ul>
    <li>
      For any inquiries regarding your purchase, please contact us at:
      <span class="email">lukemccarthy.ads@gmail.com</span>
    </li>
    <li>
      For any ideas or feedback, please contact us at:
      <span class="email">lukemccarthy.ads@gmail.com</span>
    </li>
  </ul>

  <p>
    By completing your purchase, you confirm that you have read, understood, and agree to these terms and conditions.
    Thank you for your support! Enjoy your e-book.
  </p>
`;

// ---------- ОТКРЫТИЕ ----------

openContact.addEventListener("click", (e) => {
  e.preventDefault();
  modalBody.innerHTML = contactHTML;
  modal.classList.add("active");
});

openTerms.addEventListener("click", (e) => {
  e.preventDefault();
  modalBody.innerHTML = termsHTML;
  modal.classList.add("active");
});

// ---------- ЗАКРЫТИЕ ----------

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    modal.classList.remove("active");
  }
});

const payModal = document.getElementById("payModal");
const openPayBtns = document.querySelectorAll(".open-pay");
const payClose = document.getElementById("payClose");

// открыть
openPayBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    payModal.classList.add("active");
  });
});

// закрыть крестом
payClose.addEventListener("click", () => {
  payModal.classList.remove("active");
});

// закрыть по клику вне окна
payModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("pay-overlay")) {
    payModal.classList.remove("active");
  }
});
