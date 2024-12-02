let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;
const footer = document.querySelector('footer');
const prevLink = document.getElementById('previous');
const nextLink = document.getElementById('next');

console.log("sections: " + (currentSection + 1) + " - total des sections: " + totalSections);
updateFooterVisibility();

// Fonction pour faire défiler vers la section souhaitée
function scrollToSection(index) {
    if (index < 0 || index >= totalSections) return; // Vérifie si l'index est valide
    sections[index].scrollIntoView({
        behavior: 'smooth'
    });
    currentSection = index;
    updateFooterVisibility();
}

// Fonction pour mettre à jour la visibilité du footer
function updateFooterVisibility() {
    if (currentSection + 1 == totalSections) {
        footer.style.display = 'flex'; // Afficher le footer
    } else {
        footer.style.display = 'none'; // Masquer le footer
    }
}

// Gestion du défilement de la souris
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        scrollToSection(currentSection + 1);
    } else {
        scrollToSection(currentSection - 1);
    }
});

// Gestion des événements tactiles
let startY;
let isScrolling = false;

// Gestion du toucher
window.addEventListener('touchstart', (event) => {
    startY = event.touches[0].clientY; // Position initiale du doigt
});

window.addEventListener('touchmove', (event) => {
    if (isScrolling) return; // Si on est déjà en train de défiler, on ne fait rien

    const moveY = event.touches[0].clientY; // Position du doigt pendant le mouvement
    const threshold = 50; // Seuil de mouvement pour le changement de section

    if (startY > moveY + threshold) {
        // Glissement vers le bas
        isScrolling = true; // On marque que le défilement est en cours
        scrollToSection(currentSection + 1);
        setTimeout(() => { isScrolling = false; }, 500); // Délai avant de permettre un autre défilement
    } else if (startY < moveY - threshold) {
        // Glissement vers le haut
        isScrolling = true; // On marque que le défilement est en cours
        scrollToSection(currentSection - 1);
        setTimeout(() => { isScrolling = false; }, 500); // Délai avant de permettre un autre défilement
    }
});

/*
// Gestion des clics sur la navbar
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        scrollToSection(index); // Passe à la section correspondante
    });
});
*/

// Gestion des touches haut, bas, gauche et droite
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        // Touche bas
        scrollToSection(currentSection + 1);
    } else if (event.key === 'ArrowUp') {
        // Touche haut
        scrollToSection(currentSection - 1);
    } else if (event.key === 'ArrowLeft') {
        // Touche gauche - clic sur le lien précédent
        prevLink.click();
    } else if (event.key === 'ArrowRight') {
        // Touche droite - clic sur le lien suivant
        nextLink.click();
	} else if (event.key === 'Escape') {
		fermerPopup();
    }
});

// Empêcher le comportement de défilement par défaut
window.addEventListener('scroll', (event) => {
    event.preventDefault();
}, { passive: false });

// Fonction pour afficher la popup avec l'image sélectionnée
function afficherPopupImg(imageSrc) {
    console.log(imageSrc)
    const popup = document.getElementById('popup-img');
    let popupContent = document.getElementById('popup-content');
    popupContent.src = imageSrc; // Définit l'image sélectionnée comme source
    popup.style.display = 'block'; // Affiche la popup
}

// Fonction pour fermer la popup
function fermerPopup() {
    const popup = document.getElementById('popup-img');
    popup.style.display = 'none';
}

// Fonction pour afficher la popup avec le formulaire
function afficherPopupForm() {
    const popup = document.getElementById('popup-form');
    popup.style.display = 'flex'; // Affiche la popup (flex pour centrer le contenu)
}

document.getElementById("open-form").addEventListener("click", (event) => {
    event.preventDefault(); // Empêche le comportement par défaut
    afficherPopupForm(); // Appelle ta fonction existante avec l'index
});
// Fonction pour fermer la popup
function fermerPopupForm() {
    const popup = document.getElementById('popup-form');
    popup.style.display = 'none';
}

/*
var wordflick = function (words, speed = 70, skip_delay = 15) {
    var part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0;
    
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
  
      part = words[i].substr(0, offset);
      
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      
      $('.word').text(part); // Mettre à jour l'élément HTML avec la classe .word
  
    }, speed);
  };
  
  $(document).ready(function () {
    var myWords = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'];
    wordflick(myWords, 70, 15); // Appel de la fonction avec un tableau de phrases et des paramètres de vitesse
  });
  */

document.addEventListener('DOMContentLoaded', () => {
    const previousLink = document.getElementById('previous');

    if (previousLink) {
        previousLink.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            history.back(); // Revient à la page précédente dans l'historique
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour sauvegarder l'état des cases à cocher dans localStorage
    function saveCheckboxState() {
        const checkboxStates = [];
        // Récupérer l'état de chaque checkbox
        for (let i = 1; i <= 15; i++) {
            const checkbox = document.getElementById('c' + i);
            checkboxStates.push(checkbox.checked);
        }
        // Sauvegarder l'état dans localStorage
        localStorage.setItem('checkboxState', JSON.stringify(checkboxStates));
    }

    // Fonction pour charger l'état des cases à cocher depuis localStorage
    function loadCheckboxState() {
        const checkboxStates = JSON.parse(localStorage.getItem('checkboxState'));
        if (checkboxStates) {
            // Appliquer l'état sauvegardé aux checkboxes
            for (let i = 1; i <= 15; i++) {
                const checkbox = document.getElementById('c' + i);
                checkbox.checked = checkboxStates[i - 1];
            }
        }
    }

    // Charger l'état au chargement de la page
    loadCheckboxState();

    // Ajouter un écouteur d'événement pour chaque checkbox
    for (let i = 1; i <= 15; i++) {
        const checkbox = document.getElementById('c' + i);
        checkbox.addEventListener('change', saveCheckboxState);
    }
});

$(document).ready(function() {
	for(let i = 0; i <= 12; i++) {
		$('#' + i).click(function(e) {
			e.preventDefault();
			$('#' + i + '-1').toggle("slow");
			//$($(this).attr('href')).show();
		});
	}
});

// Ajout du clic sur l'élément <h1> pour défiler vers une section spécifique
const sqlThequeHeader = document.getElementById("a-sqltheque");
const dataWiperHeader = document.getElementById("a-datawiper");
if(dataWiperHeader){
dataWiperHeader.addEventListener("click", (event) => {
    event.preventDefault(); // Empêche le comportement par défaut
    const targetIndex = 3; // Index de la section vers laquelle scroller (section 2 ici)
    scrollToSection(targetIndex); // Appelle ta fonction existante avec l'index
});
}

$(document).ready(function () {
    // Lorsque l'utilisateur clique sur un <h2>
    $(".section h2").click(function () {
        // Récupérer l'ID de l'<h2> cliqué
        var h2Id = $(this).attr("id");

        // Construire l'ID du <p> correspondant
        var pId = h2Id + "-1";

        // Masquer tous les <p> qui ont un id correspondant à ce format chiffres-chiffres-chiffres, 
        // mais ne pas masquer les autres <p> sans un tel id
        $(".section p").each(function() {
            var paragraphId = $(this).attr("id");
            // Vérifier si l'ID du paragraphe correspond au format chiffres-chiffres-chiffres
            if (paragraphId && paragraphId.match(/^\d+-\d+-\d+$/)) {
                // Masquer les <p> qui ont un id de type chiffres-chiffres-chiffres sauf celui qui correspond à l'<h2> cliqué
                if (paragraphId !== pId) {
                    $(this).hide("slow");
                } else {
                    $(this).toggle("slow"); // Afficher ou masquer le paragraphe spécifique
                }
            }
        });
    });
});
