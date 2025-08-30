// Footer year
const y = document.querySelector("#footer-year");
if (y) y.textContent = new Date().getFullYear();

// Sticky navbar small shadow on scroll
const nav = document.querySelector(".navbar");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.style.boxShadow = window.scrollY > 10 ? "0 4px 10px rgba(0,0,0,.4)" : "0 4px 6px rgba(0,0,0,.2)";
  });
}

// Simple image preview overlay for gallery
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const o = document.createElement("div");
    o.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:9999;";
    o.innerHTML = `<img src="${img.src}" style="max-width:90%;max-height:90%;border-radius:12px">`;
    o.addEventListener("click", ()=>o.remove());
    document.body.appendChild(o);
  });
});
