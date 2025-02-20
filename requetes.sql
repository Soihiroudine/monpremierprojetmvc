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
    heure_diffusion TIME NOT NULL,
    lien VARCHAR(255) NOT NULL
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