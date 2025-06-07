document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("rdv-form");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêche l'envoi réel
  
        // Récupération des valeurs
        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const tel = document.getElementById("tel").value.trim();
        const prestation = document.getElementById("prestation").value;
        const date = document.getElementById("date").value;
        const heure = document.getElementById("heure").value;
  
        // Vérification simple
        if (!nom || !email || !tel || !prestation || !date || !heure) {
          alert("Merci de remplir tous les champs obligatoires.");
          return;
        }
  
        // Message de confirmation
        alert("Votre demande de rendez-vous a bien été envoyée. Merci !");
        
        // Réinitialisation du formulaire
        form.reset();
      });
    }
  });
  