# Description
Rendu du projet de MET02.

# Instructions de déploiement 

## Pré-requis

Il faut avoir installé : 
- npm
- Composer
- WAMP Server (ou toute autre architecture impliquant un serveur Apache, un moteur MySQL et PHP)
- Composer
- Node.js

## Etapes 

* Cloner le dossier *back* du projet dans le répértoire *www* du serveur Apache.
* Exécuter le script d'import de la base de données, situé dans le répértoire *back/chocolats.sql*. 
* Penser à modifier les credentials de la base de données dans le fichier *back/bootstrap.php*.
* Lancer *composer update*.
* Se placer dans le répertoire *front* et lancer *npm install* puis *ng serve*.
* Naviguer vers *localhost:4200/*.
