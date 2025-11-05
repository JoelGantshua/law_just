# Law Just - Plateforme Juridique Moderne

Une plateforme juridique moderne intégrant actualités, outils juridiques, assistance pour victimes et services pour avocats.

## 🚀 Fonctionnalités

### 🔍 Recherche IA Juridique
- Recherche intelligente dans la jurisprudence et les textes de loi
- Explications simplifiées par l'intelligence artificielle
- Suggestions contextuelles et recommandations

### 📚 Base de Données Juridique
- Accès complet aux codes juridiques français
- Jurisprudence récente et doctrine
- Recherche par mots-clés ou articles
- Fiches explicatives par article

### 📝 Générateur de Documents
- Génération automatique de plaintes
- Pré-plaintes en ligne
- Main courante et recours gracieux
- Documents personnalisés et téléchargeables

### 👥 Espace Utilisateur
- Dashboard personnalisé
- Historique des démarches
- Gestion des documents
- Messagerie sécurisée

### ⚖️ Services Avocats
- Annuaire d'avocats spécialisés
- Recherche par localisation et domaine
- Système de mise en relation
- Profils détaillés et évaluations

## 🛠️ Stack Technique

- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS v4 (responsive + dark mode)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context + Hooks
- **UI Components**: Composants personnalisés avec Headless UI

## 📦 Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd law_just
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

## 🏗️ Structure du Projet

```
src/
├── components/           # Composants réutilisables
│   ├── ui/              # Composants UI de base
│   ├── layout/          # Composants de mise en page
│   └── features/        # Composants métier
├── pages/               # Pages de l'application
├── hooks/               # Hooks personnalisés
├── lib/                 # Utilitaires et helpers
├── assets/              # Images et ressources
└── styles/              # Styles globaux
```

## 🎨 Design System

### Couleurs
- **Primary**: Bleu juridique (#1E40AF)
- **Secondary**: Gris neutres
- **Success**: Vert pour les succès
- **Warning**: Orange pour les avertissements
- **Danger**: Rouge pour les erreurs

### Typographie
- **Police principale**: Inter (Google Fonts)
- **Hiérarchie claire** avec des tailles cohérentes
- **Responsive** avec des breakpoints optimisés

### Composants
- **Cards** avec hover effects
- **Buttons** avec variants multiples
- **Forms** avec validation
- **Navigation** responsive
- **Modals** et **Toasts**

## 🚀 Scripts Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Linting
npm run lint
```

## 📱 Responsive Design

- **Mobile First**: Optimisé pour mobile
- **Tablet**: Adaptation pour tablettes
- **Desktop**: Interface complète pour desktop
- **Breakpoints**: sm, md, lg, xl, 2xl

## 🔧 Configuration

### Tailwind CSS
Configuration personnalisée dans `tailwind.config.ts` avec :
- Couleurs juridiques
- Animations personnalisées
- Composants utilitaires
- Dark mode support

### TypeScript
Configuration stricte avec :
- Types stricts
- Interfaces complètes
- Props validation
- Error handling

## 🎯 Fonctionnalités Avancées

### Recherche IA
- Compréhension du langage naturel
- Suggestions intelligentes
- Explications contextuelles
- Historique des recherches

### Générateur de Documents
- Formulaires multi-étapes
- Validation en temps réel
- Génération PDF automatique
- Sauvegarde des brouillons

### Dashboard Utilisateur
- Vue d'ensemble personnalisée
- Statistiques d'usage
- Notifications en temps réel
- Gestion des préférences

## 🔒 Sécurité

- Validation des formulaires
- Sanitisation des données
- Protection XSS
- HTTPS en production

## 📈 Performance

- **Lazy Loading** des composants
- **Code Splitting** automatique
- **Optimisation des images**
- **Cache des ressources**
- **Score Lighthouse > 90**

## 🌐 Accessibilité (RGAA)

- Navigation au clavier
- Contraste des couleurs
- Textes alternatifs
- Structure sémantique
- Focus management

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
# Déployer le dossier dist/
```

### Netlify
```bash
npm run build
# Déployer le dossier dist/
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- 📧 Email: contact@lawjust.fr
- 💬 Discord: [Serveur Law Just]
- 📖 Documentation: [docs.lawjust.fr]

---

**Law Just** - Simplifiez votre accès au droit français 🇫🇷