### Des notions de HTML

1. HTML

HyperText Markup Language (langage de balise hypertexte)

=> un fichier `.html` c'est d'abord du texte
=> il est écrit par un `développeur` (avec VSCode par exemple)
=> il est vu par un utilisateur (avec Firefox par exemple)


Une balise html s'écrit : `<maBalise></maBalise>`

**Ex:** `<h1></h1>`

Le texte s'écrit **entre les balises.**

**Ex:** `<h1>Mon texte</h1>`

Il existe aussi des balises orphelines :
`<!DOCTYPE html>, <br>, <img> ...`

Référence : Mozilla [https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements)

Une balise ouvrante peut contenir un attribut nottament `class = ""` :
`<h1 class = "maClasse"></h1>`

Quelques balises importantes :
- `<h1></h1>` : titres
- `<p></p>` : paragraphes
- `<a href=""></a>` : liens
- `<ul></ul>` : listes sans ordre
- `<ol></ol>` : listes avec ordre
- `<li></li>` : items de listes
- `<img src="">` : ajouter une image 

Pour trouver le chemin vers un fishier, on peut regarder :
- dans le dossier courant avec `./`
- dans un dossier extérieur avec `../`


2. CSS

Cascading Style Sheet : page de style en cascade

On peut écrire du CSS :
- directement dans le fishier HTML entre les balises `<style></style>`
- dans un fishier `.css` en indiquant le chemin dans le fichier HTML grâce 

Pour écrire du CSS, il faut un sélécteur (nom d'une balise ou d'une class), des accolades, des propriétés, et des valeurs.

```css
selecteur {
    propriete1 : valeur1;
    propriete2 : valeur2;
    ....
}
```

Il existe plus de 500 propriétés et encore davantage de valeur possibles. Cependant, les valeurs sont souvent :
- une couleur : un nom, un code (rgb(0-255, 0-255, 0-255))
- une taille : il existe de nombreuses unités, pixels (px), pourcentage (%)

Rem : on trouve toures les propriétés sur le site des développeur de mozila

Les propriétés CSS s'applique en cascade : des éléments les plus globaux (`body`, `div`) vers les éléments les plus internes (pour finir par les classes).

Rem : principe de modèle en boîte
Les éléments d'une page sont contenus dans une boîte entourée d'une bordure (invisible par defaut).
L'espace entre : 
- le contenu et la bordure s'appelle `padding`
- la bordure et les éléments autour s'appelle `margin`

La bordure `border` peut même avoir un style.

3. Javascript (JS)

C'est le langage de programation qui permet de gérer les éléments d'interactions étaient placés dans un formulaire `<form></form>` pour renvoyer des info. au serveur.

Dans le formulaire on place les éléments `<input type="">` :
- type="text"
- type="checkbox"
- type="button"
- type="range"

rem: Une balise `<button></button>` a été spécifiquement créée pour les boutons

On peut écrire le JS directement :
- dans le fichier HTML entre des balises `<script></script>`
- dans un fichier externe avec l'extension .js

On utilise la balise `script` pour lier le fichier js.

JS est utile pour réagir au évènements : `click`, `change`, `mouseover`, ...

La syntaxe basique est :
```js
elementHTML.addEventListener(`evenement`,function() {...});

```