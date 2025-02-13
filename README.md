# Mon premier projet MVC

## Outils

- NodeJs
- NPM - Notre gestionnaire pour installation des outils
- MySQL
- EJS
- CSS
- Boostrap
- JavaScript
- MVC

## ARCHITECTURE

### Le projet utilise le modèle mvc

- `controls`
- `models`
- `views`

### Les autres dossiers

- `public` - Contient les dossiers et fichier *CSS*, *image* et *javascript* coté client
- `server` - Contient les *configuration* et *routes* du serveur

### Arborescence du projet

Voici l'arborescence du projet :

```plaintext
monpremierprojetmvc/
├── controls/
├── models/
├── views/
│   ├── layout/
│   └── partials/
├── public/
│   ├── css/
│   ├── images/
│   └── js/
├── server/
│   ├── config/
│   └── routes/
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
```

## Fichier .env

Dans le fichier ***.env*** vous pouvez changer les valeurs de :

- `user` pour mettre votre un utilisateur appartenant à votre système de base de donnée
- `password` pour mettre le mot de passe de **user**

Vous devez au préalable avoir créer la base de donnée `chainetv` et les tables appartenant au projet

## Base de donnée

```sql

CREATE DATABASE chaintv;
USE chainetv;

CREATE TABLE membre (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    travail VARCHAR(100) NOT NULL
);

CREATE TABLE programmetv (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    description text NOT NULL,
    date_diffusion DATE NOT NULL,
    heure_diffusion TIME NOT NULL
);

CREATE TABLE equipe (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    id_membre INT NOT NULL,
    id_programmetv INT NOT NULL,
    FOREIGN KEY (id_membre) membre(id),
    FOREIGN KEY (id_programmetv) programmetv(id)
);

CREATE TABLE utilisateur (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    date_naissance DATE NOT NULL,
    password VARCHAR(155) NOT NULL
);


```
