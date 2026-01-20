// Récupérer les éléments
const range = document.getElementById('range');
const image = document.getElementById('monImage');

// Écouter les changements du range
range.addEventListener('input', function() {
    // Assigner la valeur du range à la largeur de l'image en pixels
    image.style.width = this.value + 'px';
});
