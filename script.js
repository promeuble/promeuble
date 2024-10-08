// Charger les avis existants depuis localStorage au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const avisDisplay = document.getElementById('avisDisplay');

    savedReviews.forEach(review => {
        const newAvis = document.createElement('p');
        newAvis.textContent = `Note : ${review.rating} étoiles - Commentaire : ${review.comment}`;
        avisDisplay.appendChild(newAvis);
    });
});

// Gestion des avis clients
document.getElementById('avisForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer la note et le commentaire
    let rating = document.getElementById('rating').value;
    let comment = document.getElementById('comment').value;

    // Ajouter l'avis dans l'interface
    let avisDisplay = document.getElementById('avisDisplay');
    let newAvis = document.createElement('p');
    newAvis.textContent = `Note : ${rating} étoiles - Commentaire : ${comment}`;
    avisDisplay.appendChild(newAvis);

    // Sauvegarder l'avis dans localStorage
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.push({ rating, comment });
    localStorage.setItem('reviews', JSON.stringify(savedReviews));

    // Réinitialiser le formulaire
    this.reset();
});

// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulation de l'envoi du formulaire
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
    }).then(() => {
        document.getElementById('merciMessage').style.display = 'block';
        setTimeout(() => {
            window.location.href = '#accueil';
        }, 3000); // Retour à l'accueil après 3 secondes
    });

    this.reset();
});
