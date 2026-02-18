// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const mobile = document.querySelector(".mobile-nav");

if (toggle && mobile) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    mobile.hidden = isOpen;
  });

  mobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      mobile.hidden = true;
    });
  });
}

// WhatsApp button
const waBtn = document.getElementById("waBtn");
if (waBtn) {
  const phone = "27824195453"; // SA format, no +
  const msg = encodeURIComponent(
    "Hi Stilbaai Sign Studio 👋\n\nI’d like a quote for:\n• Service:\n• Size (mm):\n• Quantity:\n• Material:\n• Install location:\n• When needed:\n\n(Attach artwork/photos if available)"
  );
  waBtn.href = `https://wa.me/${phone}?text=${msg}`;
}
