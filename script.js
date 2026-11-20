/* =========================================================
   SCRIPT DU PORTFOLIO
   1. Ouvrir / fermer le menu
   2. Afficher la bonne page selon l'adresse (#projets, #veille…)
   3. Filtrer les projets (tous / formation / stage)
   4. Mettre l'année à jour dans le pied de page
   5. Mode clair / mode sombre
   ========================================================= */


/* ---------- 1. Ouvrir / fermer le menu ---------- */
const menu = document.getElementById('menu');
const boutonMenu = document.getElementById('bouton-menu');

function ouvrirFermerMenu(ouvrir) {
    menu.classList.toggle('ouvert', ouvrir);              // ajoute ou enlève la classe "ouvert"
    boutonMenu.textContent = ouvrir ? '[ FERMER ]' : '[ MENU ]';
    boutonMenu.setAttribute('aria-expanded', ouvrir);     // pour les lecteurs d'écran
}

boutonMenu.addEventListener('click', function () {
    const estOuvert = menu.classList.contains('ouvert');
    ouvrirFermerMenu(!estOuvert);                         // on inverse l'état actuel
});


/* ---------- 2. Afficher la bonne page ---------- */
/* Chaque lien du site pointe vers une ancre (#accueil, #projets…).
   Quand l'ancre change dans l'adresse, on affiche la page correspondante.
   Avantage : chaque page a sa propre adresse, qu'on peut envoyer à quelqu'un. */
function afficherPage() {
    // Récupère le nom après le # (ou "accueil" s'il n'y en a pas)
    let id = window.location.hash.replace('#', '') || 'accueil';

    // Si l'ancre ne correspond à aucune page, on revient à l'accueil
    const page = document.getElementById(id);
    if (!page || !page.classList.contains('page')) {
        id = 'accueil';
    }

    // Affiche uniquement la page demandée
    document.querySelectorAll('.page').forEach(function (p) {
        p.classList.toggle('visible', p.id === id);
    });

    // Met en vert le lien de la page actuelle dans le menu
    document.querySelectorAll('#menu a').forEach(function (lien) {
        lien.classList.toggle('actif', lien.getAttribute('href') === '#' + id);
    });

    ouvrirFermerMenu(false);  // referme le menu
    window.scrollTo(0, 0);    // remonte en haut de la page
}

window.addEventListener('hashchange', afficherPage); // à chaque clic sur un lien #...
afficherPage();                                       // au chargement du site


/* ---------- 3. Filtrer les projets ---------- */
/* Chaque bouton a un attribut data-filtre ("tous", "formation" ou "stage")
   et chaque carte projet un attribut data-type ("formation" ou "stage"). */
document.querySelectorAll('.filtre').forEach(function (bouton) {
    bouton.addEventListener('click', function () {
        const filtre = bouton.dataset.filtre;

        // Le bouton cliqué devient le bouton actif
        document.querySelectorAll('.filtre').forEach(function (b) {
            b.classList.toggle('actif', b === bouton);
        });

        // On cache les cartes qui ne correspondent pas au filtre
        document.querySelectorAll('.projet').forEach(function (carte) {
            const aCacher = filtre !== 'tous' && carte.dataset.type !== filtre;
            carte.classList.toggle('cachee', aCacher);
        });
    });
});


/* ---------- 4. Année du pied de page ---------- */
document.getElementById('annee').textContent = new Date().getFullYear();


/* ---------- 5. Mode clair / mode sombre ---------- */
/* Le thème est indiqué par l'attribut data-theme="clair" sur la balise <html>.
   Les couleurs changent toutes seules grâce aux variables du fichier CSS.
   Le choix est mémorisé dans le navigateur (localStorage) pour la prochaine visite. */
const boutonTheme = document.getElementById('bouton-theme');
const racine = document.documentElement; // la balise <html>

boutonTheme.addEventListener('click', function () {
    const estClair = racine.getAttribute('data-theme') === 'clair';
    const nouveauTheme = estClair ? 'sombre' : 'clair';

    if (nouveauTheme === 'clair') {
        racine.setAttribute('data-theme', 'clair');
    } else {
        racine.removeAttribute('data-theme');
    }
    boutonTheme.setAttribute('aria-label', nouveauTheme === 'clair' ? 'Passer en mode sombre' : 'Passer en mode clair');

    try {
        localStorage.setItem('theme', nouveauTheme); // on retient le choix
    } catch (e) { /* mémoire indisponible : le thème marche quand même pour cette visite */ }
});
