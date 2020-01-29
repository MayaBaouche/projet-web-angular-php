-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  mer. 29 jan. 2020 à 17:38
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
) ENGINE=MyISAM AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `confiserie`
--

INSERT INTO `confiserie` (`idConfiserie`, `nom`, `description`, `idCategorie`, `prixUnitaire`, `img`) VALUES
(1, 'Mini Rocher', 'Praliné et éclats croustillants', 1, 7.5, 'https://www.jeff-de-bruges.com/media/guide-chocolat/chocolats-blancs/chocolate0-61050100-1477488570/image-1477560403.jpeg'),
(2, 'Palet MB', 'Puissante ganache de chocolat noir au cacao de Sao Tomé', 1, 7, 'https://www.jeff-de-bruges.com/media/guide-chocolat/chocolats-blancs/chocolate0-19809000-1477488601/image-1477488601.jpeg'),
(3, 'Feuille', 'Praliné intense aux noisettes, noir 70%', 2, 7.5, 'https://www.jeff-de-bruges.com/media/guide-chocolat/chocolats-noirs/chocolate0-25479900-1477490066/image-1477490066.jpeg'),
(4, 'Trèfle', 'Praliné noisettes et éclats de biscuits Amaretti, noir 70%', 2, 7, 'https://www.jeff-de-bruges.com/media/guide-chocolat/chocolats-noirs/chocolate0-39393700-1477490534/image-1477490534.jpeg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
