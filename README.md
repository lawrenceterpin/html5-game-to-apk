# README #

Guide d'installation du projet Phaser Js Game Master et du sous projet de l'application mobile.

### Prérequis ###

Windows:

* Node JS
* GIT
* Android Studio (pour Android SDK)
* Java JDK

### Installation du projet ###

Récupérer le repository:

```bash
git clone https://lawrenceterpin@bitbucket.org/lawrenceterpin/phaser-js-game-master.git
```

Installer les package nodeJS:

```bash
npm run setup
```
    
Lancer le projet sur le serveur local:

```bash
npm start
```

### Build du projet ###

A la racine du projet.

Tapez la commande:

```bash
npm run build
```
    
> Cette commande va créer le dossier "dist" puis copier son contenu dans le sous projet de l'application (app/[nom_du_projet]).

### Installation du sous projet de l'application ###

A la racine du projet, dans le dossier "app".

Tapez la commande:

```bash
androidjs init
```

### Génération de l'APK ###

Dans le dossier du projet de l'application (app/[nom_du_projet]).

Tapez la commande:

```bash
npm run build
```