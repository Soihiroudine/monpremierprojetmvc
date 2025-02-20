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
