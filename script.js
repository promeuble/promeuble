// Gestion des avis clients
document.getElementById('avisForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let rating = document.getElementById('rating').value;
    let comment = document.getElementById('comment').value;
    
    let avisDisplay = document.getElementById('avisDisplay');
    let newAvis = document.createElement('p');
    newAvis.textContent = `Note : ${rating} étoiles - Commentaire : ${comment}`;
    avisDisplay.appendChild(newAvis);

    this.reset(); // Réinitialiser le formulaire
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
