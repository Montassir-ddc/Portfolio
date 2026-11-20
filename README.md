# Portfolio – Montassir Didouche

Portfolio BTS SIO option SLAM, publié sur GitHub Pages :
https://montassir-ddc.github.io/Portfolio/

## Organisation des fichiers

| Fichier / dossier | Rôle |
|---|---|
| `index.html` | Le contenu de toutes les pages (accueil, projets, compétences, parcours, veille, épreuve E5, coordonnées, mentions légales) |
| `css/style.css` | La mise en forme (couleurs, cartes, menu, version mobile) |
| `js/script.js` | Le menu, le changement de page et les filtres des projets |
| `images/` | Toutes les images du site (photo, illustrations) |
| `cv/` | Le CV à télécharger |
| `docs/` | Le tableau de synthèse de l’épreuve E5 en PDF |
| `sitemap.xml` et `robots.txt` | Aident Google à trouver et indexer le site |

## Comment ça marche

- Chaque page est une `<section class="page">` avec un `id` (ex. `id="projets"`).
- Les liens du menu pointent vers `#projets`, `#veille`… Le script affiche la section qui a cet id et cache les autres.
- Chaque page a donc sa propre adresse, par exemple https://montassir-ddc.github.io/Portfolio/#projets

## Modifier le contenu

- **Ajouter un projet :** dans `index.html`, copier un bloc `<article class="carte projet" ...> ... </article>` et changer le texte. Mettre `data-type="formation"` ou `data-type="stage"` pour le filtre.
- **Ajouter une actualité de veille :** copier une ligne `<tr> ... </tr>` en haut du tableau de veille.
- **Changer la couleur principale :** modifier `--vert` au début de `css/style.css`.

## Publier

1. Dans le dépôt GitHub `Portfolio`, supprimer les anciens fichiers (ancien `index.html` et images à la racine).
2. Déposer tout le contenu de ce dossier à la racine du dépôt (Add file → Upload files).
3. Valider (Commit). GitHub Pages met le site à jour en une à deux minutes.

## Mode clair / mode sombre

Le bouton lune/soleil en haut à droite change de thème. Les couleurs des deux thèmes sont définies au début de `css/style.css` (`:root` pour le sombre, `[data-theme="clair"]` pour le clair).
