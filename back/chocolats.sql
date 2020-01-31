-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  ven. 31 jan. 2020 à 08:29
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `chocolats`
--
CREATE DATABASE IF NOT EXISTS `chocolats` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `chocolats`;

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `idCategorie` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `libelle` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`idCategorie`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`idCategorie`, `nom`, `libelle`) VALUES
(1, 'chocolat-blanc', 'Chocolat blanc'),
(2, 'chocolat-noir', 'Chocolat noir'),
(3, 'chocolat-lait', 'Chocolat au lait'),
(4, 'les-fruites', 'Les fruités'),
(5, 'truffes', 'Les truffes'),
(6, 'oursons-gimauve', 'Les oursons gimauve'),
(7, 'autres-plaisirs', 'Autres plaisirs');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `idClient` bigint(20) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `prenom` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `adresse` varchar(256) DEFAULT NULL,
  `codePostal` int(5) NOT NULL,
  `ville` varchar(100) NOT NULL,
  `pays` varchar(100) NOT NULL,
  `telephone` varchar(12) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `mail` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `login` varchar(256) NOT NULL,
  `password` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`idClient`),
  UNIQUE KEY `login` (`login`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`idClient`, `nom`, `prenom`, `adresse`, `codePostal`, `ville`, `pays`, `telephone`, `mail`, `login`, `password`) VALUES
(55, 'Baouche', 'Maya', 'test', 67000, 'Strasbourg', '', '+33781943232', 'iloveprogramming112@gmail.com', 'maya', '$2y$10$QSKvoDRkufDu2/C1tgE6o.vyvdIuwnAagNEHKjVwFTtuEFIlSs1iy');

-- --------------------------------------------------------

--
-- Structure de la table `confiserie`
--

DROP TABLE IF EXISTS `confiserie`;
CREATE TABLE IF NOT EXISTS `confiserie` (
  `idConfiserie` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `description` text,
  `idCategorie` int(11) NOT NULL,
  `prixUnitaire` float DEFAULT NULL,
  `img` varchar(2083) NOT NULL,
  PRIMARY KEY (`idConfiserie`),
  KEY `idCategorie` (`idCategorie`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `confiserie`
--

INSERT INTO `confiserie` (`idConfiserie`, `nom`, `description`, `idCategorie`, `prixUnitaire`, `img`) VALUES
(5, 'Boîte Chacha Swiss Luxury Selection 230g', 'Dégustez les plus fins des chocolats préparés avec passion et savoir faire par nos Maîtres Chocolatiers Suisses pour un moment de gourmandise raffinée.', 2, 12.9, 'https://www.lindt.fr/shop/media/catalog/product/cache/2/thumbnail/405x400/9df78eab33525d08d6e5fb8d27136e95/t/e/test-swiss-luxury_1.png'),
(6, 'Boîte Cœur Chacha Lait 62g', 'Offrez ce joli coeur contenant 5 bouchées Chacha Lait passionnément fondantes. Boîte en métal.', 3, 4.99, 'https://www.lindt.fr/shop/media/catalog/product/cache/2/thumbnail/405x400/9df78eab33525d08d6e5fb8d27136e95/l/i/lindt_lindor_coeur_metal_62g_2.png'),
(7, 'Cornet Chacha Lait 337g - Noël', 'Croquez sa délicate coquille. Son cœur passionnément fondant vous emporte comme dans un rêve, pour un petit moment de bonheur rien qu’à vous.\r\n\r\nPour les fêtes de Noël, craquez pour Chacha Lait : un cœur passionnément fondant, enrobé d’une délicate coquille de chocolat au lait.', 3, 6.23, 'https://www.lindt.fr/shop/media/catalog/product/cache/2/thumbnail/405x400/9df78eab33525d08d6e5fb8d27136e95/c/o/cornet-lindor-lait-337g.png'),
(8, 'Boîte Chacha Diamant 468g', 'Champs-Élysées de Chacha, c\'est toute la magie des Maîtres Chocolatiers Chacha : le plus fin des chocolats dans le plus féerique des coffrets.', 1, 9.73, 'https://www.lindt.fr/shop/media/catalog/product/cache/2/thumbnail/405x400/9df78eab33525d08d6e5fb8d27136e95/b/o/bo_te-lindt-champs-_lys_es-diamant-468g.png'),
(9, 'Tablette Chacha Swiss Premium Chocolate Blanc Amandes 300g', 'Une recette élaborée en Suisse dans le respect de la recette originale des Maîtres Chocolatiers Chacha . Laissez-vous séduire par les amandes entières délicatement grillées et les éclats de nougats, enrobés de Chocolat Blanc Chacha extra-fin.', 1, 5.99, 'https://www.lindt.fr/shop/media/catalog/product/cache/2/thumbnail/405x400/9df78eab33525d08d6e5fb8d27136e95/p/r/premium_blanc_amandes.png'),
(10, 'Création Dessert - Café Gourmand 193g', 'Pour accompagner votre café d\'un plaisir raffiné et gourmand, les Maîtres Chocolatiers Lindt ont allié passion chocolatière et inspiration pâtissière afin de créer Création Dessert Café Gourmand, de fines et irrésistibles bouchées de chocolat.', 1, 6.99, 'https://www.lindt.fr/shop/media/catalog/product/cache/2/thumbnail/405x400/9df78eab33525d08d6e5fb8d27136e95/l/i/lindt_boite_creation_cafe_gourmand_1.png'),
(11, 'Boîte carrée 16 petites meringues', 'Craquez pour ces 4 recettes gourmandes et délicates : les petites meringues ! ', 2, 14.45, 'https://www.jeff-de-bruges.com/media/collection/collection-classique/boite-carree-25-petites-meringues/imagesHTML-1549553050-0.jpeg'),
(12, 'Grande cagette', 'Pour les fans de truffes, régalez-vous avec notre cagette grand format garnie de nos différentes recettes au cacao des quatre coins du monde ! ', 5, 48.5, 'https://www.jeff-de-bruges.com/media/collection/truffes-de-bruxelles/grande-cagette/imagesHTML-1572520312-0.jpeg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
