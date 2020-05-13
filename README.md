<img src = "https://phaser.io/images/img.png" align="left" width ="150px">

<img src = "https://android-js.github.io/img/icon.png" width ="150px">

# Phaser JS Game Master
Phaser JS Game Master permet de concevoir des jeux avec le Framework [Phaser](https://phaser.io/) et d'en générer une application mobile, au format APK via le framework [Android JS](https://android-js.github.io/).

Ce projet est écrit en **html**, **css** et **javascript** et fonctionne avec [Node.js](https://nodejs.org/).

### Prérequis ###

* Node JS
* GIT
* Android Studio (pour Android SDK)
* Java JDK

### Installation du projet ###

Récupérer le repository:

```bash
git clone https://github.com/lawrenceterpin/phaser-js-game-master.git
```

Installer l'environnement:

```bash
cd phaser-js-game-master
```

```bash
npm run setup
```

> Cette commande va installer les package du projet et de l'environnement AndroidJS
    
Lancer le projet sur le serveur local:

```bash
npm run start
```

### Build du projet et génération de l'APK ###

A la racine du projet.

Tapez la commande:

```bash
npm run build
```
    
> Cette commande va générer le dossier "dist" puis copier son contenu dans l'environnement Android JS (dossier **app**).


### Regénérer l'APK dans AndroidJS ###

Dans le dossier du projet de l'application (dossier **app**).

Tapez la commande:

```bash
npm run build
```


### Auteurs ###

* **Lawrence Terpin** _alias_ [@lawrenceterpin](https://gist.github.com/lawrenceterpin)
