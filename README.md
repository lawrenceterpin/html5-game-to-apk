<img src = "https://phaser.io/images/img.png" align="left" width ="150px">

<img src = "https://android-js.github.io/img/icon.png" width ="150px">

# Phaser JS Game To Apk
Phaser JS Game To Apk permet de concevoir des jeux avec le Framework [Phaser](https://phaser.io/) et d'en générer une application mobile, au format APK via le framework [Android JS](https://android-js.github.io/).

Ce projet est écrit en **html**, **css** et **javascript** et fonctionne avec [Node.js](https://nodejs.org/).

### Prérequis ###

* Node JS
* GIT
* Android Studio (pour Android SDK)
* Java JDK

### Installation du projet ###

Récupérer le repository:

```bash
git clone https://github.com/lawrenceterpin/phaser-js-game-to-apk.git
```

Installer l'environnement:

```bash
cd phaser-js-game-to-apk
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

Build de développement:

```bash
npm run build
```

Build de production:

```bash
npm run production
```    
    
> Cette commande va lancer le build du projet et générer l'APK (dossier **app**).
> Le fichier .apk se trouve dans **app/dist**

### Regénérer l'APK du projet ###

Dans le dossier du projet de l'application (dossier **app**).

Tapez la commande:

```bash
npm run build
```


### Auteurs ###

* **Lawrence Terpin** _alias_ [@lawrenceterpin](https://gist.github.com/lawrenceterpin)
