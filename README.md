# Events-app 🎟️

### La gestion événementielle, réinventée par la technologie

Un événement réussi commence par une organisation intelligente !

**Events-app** est une application mobile développée avec **React Native, Expo et Django**, conçue pour simplifier et moderniser la gestion des événements. Elle permet aux organisateurs de créer et gérer leurs événements, aux participants de découvrir les activités disponibles et de s'inscrire facilement, et aux équipes de contrôler les accès grâce aux billets numériques et aux QR codes.

L'objectif : automatiser les tâches essentielles, sécuriser les entrées et offrir une expérience fluide aux organisateurs comme aux participants.

## 🚀 Fonctionnalités principales

- **Gestion des événements :** création, consultation et organisation des événements.
- **Inscriptions simplifiées :** parcours d'inscription accessible depuis l'application.
- **Billets numériques :** génération et utilisation de billets associés aux événements.
- **QR codes :** identification des billets et facilitation du contrôle d'accès.
- **Contrôle d'accès :** vérification des billets à l'entrée des événements.
- **API REST :** communication entre l'application mobile et le serveur backend.
- **Interface multiplateforme :** développement mobile avec React Native et Expo, avec possibilité de tester la version Web selon la configuration du projet.

## 🛠️ Technologies et stacks

### Frontend — Application mobile

- **React Native** — développement de l'interface mobile.
- **Expo** — environnement de développement et outils pour React Native.
- **JavaScript** — langage de programmation de l'application.
- **React Hooks** (`useState`, `useEffect`, etc.) — gestion de l'état et des effets.
- **Fetch API** — communication HTTP avec le backend.
- **Expo Go** — test de l'application sur un appareil mobile compatible.

### Backend — Serveur et logique métier

- **Python** — langage de programmation du backend.
- **Django** — framework backend pour la logique métier et la gestion des données.
- **Django REST Framework (à confirmer)** — couche API REST si elle est installée dans le projet.
- **API REST** — échanges de données entre le frontend et le backend.

### Gestion des données et médias

- **Base de données Django** — stockage des événements, inscriptions et autres informations métier, selon les modèles configurés.
- **Django Admin** — interface d'administration pour gérer les données.
- **Pillow (PIL)** — traitement des images, si utilisé pour la génération ou la manipulation des QR codes.
- **Bibliothèque Python `qrcode`** — génération des QR codes, si elle est utilisée dans le backend.

### Outils de développement

- **Node.js et npm** — environnement JavaScript et gestion des dépendances.
- **Expo CLI** — lancement et gestion du projet Expo.
- **Git et GitHub** — gestion du code source et du versionnement.
- **Visual Studio Code** — environnement de développement.
- **Google Chrome** — débogage et tests de la version Web.

## 🏗️ Architecture du projet

L'application repose sur une architecture client-serveur :

1. **Frontend React Native :** affiche les événements et permet aux utilisateurs d'interagir avec l'application.
2. **API Django :** traite les requêtes, applique la logique métier et renvoie les données.
3. **Base de données :** conserve les informations gérées par Django.
4. **Système de QR codes :** permet de représenter les informations nécessaires à l'identification des billets.
5. **Contrôle d'accès :** vérifie la validité des billets selon les règles définies par le backend.

## ⚙️ Installation et lancement

### Prérequis

- Python installé.
- Node.js et npm installés.
- Git installé.
- Le code source du projet.
- Un téléphone avec Expo Go pour les tests mobiles, si la version d'Expo utilisée le permet.

### 1. Cloner le projet

```bash
git clone <URL_DU_DEPOT>
cd Events-app
```

### 2. Lancer le backend Django

Place-toi dans le dossier contenant `manage.py` :

```bash
python -m venv venv
```

Sous Windows :

```bash
venv\Scripts\activate
```

Installe les dépendances :

```bash
pip install -r requirements.txt
```

Applique les migrations et démarre le serveur :

```bash
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

Le backend sera accessible localement à l'adresse :

`http://127.0.0.1:8000/`

### 3. Lancer l'application mobile

Dans un autre terminal, place-toi dans le dossier contenant le `package.json` du frontend :

```bash
npm install
npx expo start
```

Pour tester sur un téléphone connecté au même réseau Wi-Fi que ton ordinateur, utilise l'adresse IP locale du PC dans les requêtes vers Django, par exemple :

```javascript
const API_URL = 'http://192.168.1.24:8000/api';
```

Remplace cette adresse par l'adresse IP réelle de ton ordinateur et adapte le chemin à tes routes API.

**Important :** `localhost` sur un téléphone désigne le téléphone lui-même, et non ton PC. Pour les tests sur un appareil physique, assure-toi également que le pare-feu autorise les connexions au port 8000.

## 🔐 Sécurité et bonnes pratiques

- Valider les données côté backend.
- Vérifier les billets côté serveur avant d'autoriser l'entrée.
- Empêcher la réutilisation frauduleuse des billets déjà validés.
- Protéger les routes et les données sensibles.
- Utiliser HTTPS en production.
- Ne jamais considérer un QR code comme une preuve de validité à lui seul.
- Stocker les secrets et les variables d'environnement hors du dépôt Git.

## 🎯 Objectif du projet

Events-app vise à rendre l'organisation événementielle plus accessible, plus efficace et plus sécurisée grâce à une application multiplateforme et à l'automatisation des tâches essentielles.

Le projet met en pratique des compétences en développement mobile, conception d'API, développement backend, gestion des données et génération de QR codes.

## 👨‍💻 Auteur

**Développé dans le cadre d'un projet de développement mobile et backend.**

Technologies principales : React Native · Expo · JavaScript · Python · Django · API REST

---

*Events-app — Organisez mieux. Inscrivez plus facilement. Accédez en toute confiance.*

