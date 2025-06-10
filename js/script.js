document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rdv-form");

  // ----- Validation du formulaire -----
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nom = document.getElementById("nom").value.trim();
      const email = document.getElementById("email").value.trim();
      const tel = document.getElementById("tel").value.trim();
      const prestation = document.getElementById("prestation").value;
      const date = document.getElementById("date").value;
      const heure = document.getElementById("heure").value;

      if (!nom || !email || !tel || !prestation || !date || !heure) {
        alert("Merci de remplir tous les champs obligatoires.");
        return;
      }

      alert("Votre demande de rendez-vous a bien été envoyée. Merci !");
      form.reset();
    });
  }

  // ----- Popup modale contre-indications -----
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  if (openModal && closeModal && modal) {
    openModal.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.remove("hidden");
    });

    closeModal.addEventListener("click", function () {
      modal.classList.add("hidden");
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }
});

// ----- CARROUSEL -----
const track = document.querySelector(".carrousel-track");
const prevBtn = document.querySelector(".carrousel-btn.prev");
const nextBtn = document.querySelector(".carrousel-btn.next");

if (track && prevBtn && nextBtn) {
  let index = 0;
  const total = track.children.length;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    updateSlide();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateSlide();
  });

  // Optionnel : défilement automatique
  /*setInterval(() => {
    index = (index + 1) % total;
    updateSlide();
  }, 5000);*/
}
