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

  document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('li.dropdown > a');
  
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        // Autoriser le clic uniquement sur mobile
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parentLi = this.parentElement;
          const isOpen = parentLi.classList.contains('open');
  
          // Ferme les autres
          document.querySelectorAll('li.dropdown.open').forEach(item => {
            if (item !== parentLi) {
              item.classList.remove('open');
            }
          });
  
          // Toggle le menu cliqué
          parentLi.classList.toggle('open', !isOpen);
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carrousel-track");
    const prevBtn = document.querySelector(".carrousel-btn.prev");
    const nextBtn = document.querySelector(".carrousel-btn.next");
    const dots = document.querySelectorAll(".carrousel-pagination .dot");
    const slides = document.querySelectorAll(".carrousel-slide");
  
    if (!track || !prevBtn || !nextBtn || slides.length === 0) return;
  
    let index = 0;
    const total = slides.length;
  
    function updateSlide() {
      track.style.transform = `translateX(-${index * 100}%)`;
  
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[index]) dots[index].classList.add("active");
    }
  
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % total;
      updateSlide();
    });
  
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + total) % total;
      updateSlide();
    });
  
    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => {
        index = dotIndex;
        updateSlide();
      });
    });
  
    updateSlide(); 
  });

}
