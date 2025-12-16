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
- dans un fishier `.css`

Pour écrire du CSS, il faut un sélécteur (nom d'une balise ou d'une class), des accolades, des propriétés, et des valeurs.

```css
selecteur {
    propriete1 : valeur1;
    propriete2 : valeur2;
    ....
}
```