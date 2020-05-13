<img src = "https://phaser.io/images/img.png" align="left" width ="150px">

<img src = "https://pixijs.download/pixijs-text.svg" align="left" width ="150px">

<img src = "https://android-js.github.io/img/icon.png" width ="150px">

# Html5 Game To Apk #
**Html5 Game To Apk** permet de concevoir des jeux avec les Framework [Phaser](https://phaser.io/) et [Pixi](https://www.pixijs.com/) et d'en générer une application mobile, au format APK via le framework [Android JS](https://android-js.github.io/).

Ce projet est écrit en **html**, **css** et **javascript** et fonctionne avec [Node.js](https://nodejs.org/).

### Prérequis ###

* Node JS
* GIT
* Android Studio (pour Android SDK)
* Java JDK

### Installation ###

Récupérer le repository:

```bash
git clone https://github.com/lawrenceterpin/html5-game-to-apk.git
```

Installer l'environnement:

```bash
cd html5-game-to-apk
```

```bash
npm run install-all
```

> "npm run install-all" va installer les package de tous les frameworks ainsi que AndroidJS-builder

### Installer les Framework individuellement ###

A la racine du projet.

Installer Phaser:

```bash
npm run install-phaser
```

Installer Pixi:

```bash
npm run install-pixi
```

> Ces commandes vont installer les package et l'environnement AndroidJS

### Lancer les Framework ###

A la racine du projet.
    
Lancer le projet Phaser:

```bash
npm run phaser
```

Lancer le projet Pixi:

```bash
npm run pixi
```

### Build du projet et génération de l'APK ###

A la racine du projet.

Build de Phaser:

```bash
npm run build-phaser
```

Build de Pixi:

```bash
npm run build-pixi
```
    
> Cette commande va lancer le build du projet et générer l'APK (dossier **app**).
> Le fichier .apk se trouve dans **app/dist**

### Regénérer l'APK du projet ###

Dans le dossier du projet de l'application (dossier **app**).

Tapez la commande:

```bash
npm run build
```

### Options Android JS ###

Dans **app/package.json**.

Modifier le nom de l'application:

```json
{
  "app-name": "phaser-js-game-to-apk",
}
```

Modifier l'orientation de l'écran (**portrait** | **paysage**):

```json
{
  "screenOrientation": "portrait",
}
```

Voir la [Documentation d'Android JS](https://android-js.github.io/docs/).


### Auteurs ###

* **Lawrence Terpin** _alias_ [@lawrenceterpin](https://gist.github.com/lawrenceterpin)
