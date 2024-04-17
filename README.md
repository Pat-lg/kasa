# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Pour organiser votre projet React avec des pages distinctes (`HomePage` pour la page d'accueil et `AboutPage` pour la page à propos) utilisant chacune une bannière personnalisée, vous pouvez créer un composant `Banner` réutilisable qui accepte des props pour configurer l'image, le texte, et d'autres éléments spécifiques à chaque bannière.

Voici comment structurer votre application:

### **1. Création du composant `Banner`:**

Créez un fichier nommé `Banner.js` dans le dossier `src` pour le composant `Banner`:

```javascript
import React from 'react';
import './Banner.css'; // Importation du fichier CSS pour le style

const Banner = ({ src, alt, overlayText, height = '300px' }) => {
    return (
        <div className="banner" style={{ height }}>
            <img src={src} alt={alt} className="banner-image" />
            <div className="opacity"></div>
            {overlayText && <h1>{overlayText}</h1>}
        </div>
    );
};

export default Banner;
```

Explication du code:

- `Banner` accepte des props telles que `src` (source de l'image), `alt` (texte alternatif pour l'image), `overlayText` (texte de superposition sur la bannière), et `height` (hauteur de la bannière).
- L'image est affichée à l'aide de la balise `img` avec `src` et `alt` fournis.
- Un `div` de classe `opacity` est ajouté pour créer l'effet d'opacité.
- Si `overlayText` est fourni, il est affiché à l'intérieur d'un élément `h1`.
- Enfin, le composant `Banner` est exporté pour être réutilisé dans les autres parties de l'application.

### **2. Création du fichier CSS `Banner.css`:**

Créez un fichier `Banner.css` dans le même répertoire que `Banner.js` pour stocker les styles des bannières:

```css
/* Banner.css */
.banner {
    position: relative;
    width: 100%;
    height: 100%; /* Peut être personnalisé selon vos besoins */
}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.opacity {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

h1 {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
}
```

### **3. Création de `HomePage.js`:**

Créez un fichier nommé `HomePage.js` dans le dossier `src` pour la page d'accueil. Importez `Banner` et utilisez-le avec les paramètres spécifiques à cette page:

```javascript
import React from 'react';
import Banner from './Banner'; // Importation du composant Banner

const HomePage = () => {
    return (
        <div>
            <Banner
                src="src/images/Image-source-1.png"
                alt="Bannière d'accueil"
                overlayText="Chez vous, partout et ailleurs"
                height="300px"
            />
            {/* Autres contenus de la page d'accueil */}
        </div>
    );
};

export default HomePage;
```

### **4. Création de `AboutPage.js`:**

Créez un fichier nommé `AboutPage.js` dans le dossier `src` pour la page à propos. Importez `Banner` et utilisez-le avec les paramètres spécifiques à cette page:

```javascript
import React from 'react';
import Banner from './Banner'; // Importation du composant Banner

const AboutPage = () => {
    return (
        <div>
            <Banner
                src="src/images/Image-source-2.png"
                alt="Bannière d'à propos"
                height="300px"
            />
            {/* Autres contenus de la page à propos */}
        </div>
    );
};

export default AboutPage;
```

Dans `AboutPage`, la bannière affiche l'image spécifique à la page à propos, sans texte de superposition.

### **5. Modification de `App.js`:**

Dans le fichier `App.js`, importez `HomePage` et `AboutPage`, et configurez les routes en utilisant `react-router-dom`:

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                {/* Ajoutez d'autres routes si nécessaire */}
            </Switch>
        </Router>
    );
};

export default App;
```

Avec cette structure, chaque page (`HomePage` et `AboutPage`) utilise le composant `Banner` avec ses propres paramètres spécifiques. Vous pouvez gérer la navigation entre les pages à l'aide de `react-router-dom`.