const WHATSAPP_NUMBER = "5581984421886"; 
const DEFAULT_MESSAGE = "Olá, gostaria de falar com um especialista";

function buildWhatsUrl() {
  const text = encodeURIComponent(DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function initWhats() {
  const btn = document.getElementById("whatsBtn");
  if (btn) btn.href = buildWhatsUrl();
}

function initYear(){
  const el = document.getElementById("year");
  if(el) el.textContent = String(new Date().getFullYear());
}

function initMobileNav(){
  const burger = document.querySelector(".hamburger");
  const mobile = document.querySelector(".mobile-nav");
  if(!burger || !mobile) return;

  const close = () => {
    burger.setAttribute("aria-expanded", "false");
    mobile.style.display = "none";
    mobile.setAttribute("aria-hidden", "true");
  };

  const open = () => {
    burger.setAttribute("aria-expanded", "true");
    mobile.style.display = "block";
    mobile.setAttribute("aria-hidden", "false");
  };

  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    expanded ? close() : open();
  });

  // Fecha ao clicar em um item
  mobile.querySelectorAll("a").forEach(a => a.addEventListener("click", close));

  // Fecha ao rolar
  window.addEventListener("scroll", close, { passive: true });
}

initWhats();
initYear();
initMobileNav();
