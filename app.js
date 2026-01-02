// Logika dla okienka Historii (Modal)
const modal = document.getElementById("storyModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-modal");
const dots = document.querySelectorAll(".timeline-dot");
const scrollArrow = document.getElementById("scrollArrow");

// Otwieranie modala po kliknięciu w kropkę
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const title = dot.getAttribute("data-title");
    const desc = dot.getAttribute("data-desc");

    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    modal.style.display = "flex";
    // Małe opóźnienie dla animacji fade-in
    setTimeout(() => {
      modal.style.opacity = "1";
      document.querySelector(".modal-content").style.transform =
        "translateY(0)";
    }, 10);
  });
});

// Zamykanie modala
function closeModal() {
  modal.style.opacity = "0";
  document.querySelector(".modal-content").style.transform = "translateY(20px)";
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// Obsługa przycisku zamknięcia
if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

// Zamykanie po kliknięciu poza okienkiem
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    closeModal();
  }
});

// Obsługa strzałki "Przewiń w dół"
if (scrollArrow) {
  scrollArrow.addEventListener("click", () => {
    document.getElementById("welcome").scrollIntoView({ behavior: "smooth" });
  });
}

// Płynne przewijanie dla linków nawigacji
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
