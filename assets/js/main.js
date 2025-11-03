// Smooth-scrolling for in-page links
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href^='#']");
  if (!a) return;
  const id = a.getAttribute("href");
  if (!id || id === "#") return;
  const el = document.querySelector(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Back-to-top button visibility
const toTop = document.querySelector(".to-top");
const onScroll = () => {
  if (window.scrollY > 400) toTop.classList.add("show");
  else toTop.classList.remove("show");
};
window.addEventListener("scroll", onScroll);
onScroll();

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.style.display === "flex";
    links.style.display = open ? "none" : "flex";
    if (!open) links.style.flexDirection = "column";
  });
}
