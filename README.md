cat <<EOL > README.md
# Math Equation Solver

Ce projet est une application React TypeScript permettant de résoudre des équations mathématiques et d'afficher leurs courbes graphiques.

## Lien du projet

[Visitez le dépôt GitHub ici](https://github.com/Chimie225/-quation.git)

## Fonctionnalités

- Résolution d'équations mathématiques saisies par l'utilisateur.
- Affichage graphique des solutions.
- Supporte des fonctions courantes comme \`x^2\`, \`sin(x)\`, \`cos(x)\`, \`log(x)\`, etc.
- Personnalisation de la plage de valeurs pour le graphique.

## Installation

### Prérequis

- **Node.js** (version 14 ou supérieure)
- **npm** ou **yarn**

### Étapes pour installer et lancer le projet

1. **Clone le dépôt** :

   \`\`\`bash
   git clone https://github.com/Chimie225/-quation.git
   cd -quation
   \`\`\`

2. **Installer les dépendances** :

   \`\`\`bash
   npm install
   \`\`\`

3. **Lancer le projet** :

   \`\`\`bash
   npm start
   \`\`\`

4. **Accéder à l'application** : Ouvrez votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

## Utilisation

1. Saisissez une équation mathématique dans le champ prévu.
2. Définissez la plage de valeurs (ex: de -10 à +10).
3. Cliquez sur "Solve and Plot" pour afficher la courbe correspondant à l'équation.

## Exemples d'équations

- Polynômes : \`x^2 + 2x + 1\`
- Trigonométrie : \`sin(x)\`, \`cos(x)\`
- Exponentielles : \`e^x\`
- Logarithmes : \`log(x)\`

## Dépendances

- [React](https://reactjs.org/) - Framework JS pour l'interface utilisateur.
- [mathjs](https://mathjs.org/) - Bibliothèque pour la manipulation des expressions mathématiques.
- [react-chartjs-2](https://react-chartjs-2.js.org/) - Wrapper React pour afficher des graphiques avec Chart.js.

EOL
