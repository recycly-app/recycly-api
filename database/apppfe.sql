-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 08 juil. 2022 à 19:45
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `apppfe`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `nom` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mot_de_passe` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `annonce`
--

CREATE TABLE `annonce` (
  `id_annonce` int(11) NOT NULL,
  `titre` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date NOT NULL,
  `photo_annonce` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_annonceur` int(11) NOT NULL,
  `prix` int(10) UNSIGNED DEFAULT NULL,
  `categorie` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lieu_recuperation` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wilaya` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantite` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `annonce`
--

INSERT INTO `annonce` (`id_annonce`, `titre`, `description`, `date`, `photo_annonce`, `id_annonceur`, `prix`, `categorie`, `lieu_recuperation`, `wilaya`, `type`, `quantite`) VALUES
(77, 'Acier chantier', 'Acier de chantier bonne qualité', '2022-06-02', '18491351645940936téléchargement.jpg', 96, 2000, 'acier', '{\"lat\":36.2888402,\"lng\":3.8248241}', 'Tizi Ouzou', 'Recyclage', '300kg'),
(78, 'Pc portable HP 300', 'Pc portable Hp 3000', '2022-06-02', '51975486136770856DcnbQL8vbEdh2bYZqntfytbP9jx4pegYN7rPWDwH.jpg', 96, 20000, 'Informatique - Téléphonie', '{\"lat\":36.2888402,\"lng\":3.8248241}', 'Tizi Ouzou', 'Reconditionnement', NULL),
(79, 'PC', 'pC', '2022-06-03', '99466874275361020pc.jpg', 96, 40000, 'Informatique - Téléphonie', '{\"lat\":36.713548,\"lng\":4.0473075}', 'Béjaïa', 'Reconditionnement', NULL),
(80, 'Frigo', 'Frigo', '2022-06-03', '88512564609698720frigo.jpg', 96, 4000, 'Maison - Décoration', '{\"lat\":36.713548,\"lng\":4.0473075}', 'Béjaïa', 'Reconditionnement', NULL),
(81, 'Acier', 'Acier', '2022-06-07', '52078274859069704acier.jpg', 96, 3000, 'acier', '{\"lat\":36.706911,\"lng\":4.2333355}', 'Biskra', 'Recyclage', '500kg'),
(82, 'Carton d\'emballage', 'Carton d\'emballage', '2022-06-07', '93993156430562510carton.jpg', 96, 300, 'carton', '{\"lat\":36.706911,\"lng\":4.2333355}', 'Béjaïa', 'Recyclage', '400'),
(83, 'Bidons en plastique', 'Bidons en plastique', '2022-06-07', '72320899968574560bidon-rectangulaire-economique-non-gerbable-en-pehd-naturel-ou-blanc-007768130-product_zoom.jpg', 96, 500, 'plastique', '{\"lat\":36.706911,\"lng\":4.2333355}', 'Béjaïa', 'Recyclage', '5');

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE `contacts` (
  `id_user` int(11) NOT NULL,
  `id_contact` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `contacts`
--

INSERT INTO `contacts` (`id_user`, `id_contact`) VALUES
(97, 96),
(98, 96);

-- --------------------------------------------------------

--
-- Structure de la table `etat`
--

CREATE TABLE `etat` (
  `id_etat` int(11) NOT NULL,
  `id_annonce` int(11) NOT NULL,
  `etat_physique` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fonctionnement` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `temps_utilisation` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id_message` int(11) NOT NULL,
  `id_sender` int(11) NOT NULL,
  `id_reciever` int(11) NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`id_message`, `id_sender`, `id_reciever`, `message`, `date`) VALUES
(30, 96, 97, 'Bonjour, je suis intéressé par votre annonce', '2022-07-04 15:55:34'),
(31, 97, 96, 'Bonjour, elle est toujours disponible  ', '2022-07-04 15:55:46'),
(33, 98, 96, 'votre pc est un hp?', '2022-07-04 15:59:16'),
(34, 96, 97, 'Très bien je viendrai les prendre alors', '2022-07-07 12:21:32'),
(35, 96, 97, 'Demain à 12h', '2022-07-07 12:21:49');

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `id_notification` int(11) NOT NULL,
  `date_heure` datetime NOT NULL,
  `id_reservation` int(11) NOT NULL,
  `lu` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `notification`
--

INSERT INTO `notification` (`id_notification`, `date_heure`, `id_reservation`, `lu`) VALUES
(68, '2022-07-08 17:20:46', 21, 0),
(69, '2022-07-08 17:21:03', 22, 0);

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `id_reservation` int(11) NOT NULL,
  `id_annonce` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `heure` time DEFAULT NULL,
  `commentaire` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_reserveur` int(11) NOT NULL,
  `status` char(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantite` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `motif_refus` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lu` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id_reservation`, `id_annonce`, `date`, `heure`, `commentaire`, `id_reserveur`, `status`, `quantite`, `motif_refus`, `lu`) VALUES
(21, 78, '2022-07-13', '18:30:00', 'Pc intéressant ', 96, 'accepter', '', NULL, 1),
(22, 77, '2022-07-13', '21:15:00', 'ca', 97, 'refuser', 'Tout', 'pas disponible', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nom` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` char(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` char(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mot_de_passe` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_profil` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type_user` char(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `nom`, `prenom`, `email`, `tel`, `mot_de_passe`, `photo_profil`, `type_user`) VALUES
(96, 'FEDANI', 'Hocine', 'hoho@gmail.com', '07 94 94 96 91', '$2b$10$Kvblinb6f0cPAngNMY7aUeqS3JH6hzrVryEN2CThKTqNGDCU2.WVa', NULL, 'Particulier'),
(97, 'Kar', 'Karim', 'karim@gmail.com', '07 77 22 22 11', '$2b$10$eYBvuIZUYv5BiOrEgxOWn..z0ol2whqI/9zdRUFiTeqhPDQn7Lid2', NULL, 'Transporteur'),
(98, 'ifri', 'null', 'ifri@gmail.com', '07 94 99 69 12', '$2b$10$I9c/3G9KCX1K6hdo3coO4e9H6wbVN4G9zSuB42KqmtO2R9Lgxf6pW', NULL, 'Entreprise');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Index pour la table `annonce`
--
ALTER TABLE `annonce`
  ADD PRIMARY KEY (`id_annonce`),
  ADD KEY `fk_annonce_particulier` (`id_annonceur`);

--
-- Index pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id_user`,`id_contact`),
  ADD KEY `fk_contacts_user` (`id_contact`);

--
-- Index pour la table `etat`
--
ALTER TABLE `etat`
  ADD PRIMARY KEY (`id_etat`),
  ADD KEY `fk_etat_annonce` (`id_annonce`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id_message`),
  ADD KEY `fk_message_user` (`id_sender`),
  ADD KEY `fk_message_user_reciever` (`id_reciever`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id_notification`),
  ADD KEY `fk_notification_reservation` (`id_reservation`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `fk_reservation_recondition` (`id_annonce`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email_particulier` (`email`),
  ADD UNIQUE KEY `tel_user` (`tel`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `annonce`
--
ALTER TABLE `annonce`
  MODIFY `id_annonce` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT pour la table `etat`
--
ALTER TABLE `etat`
  MODIFY `id_etat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id_message` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `notification`
--
ALTER TABLE `notification`
  MODIFY `id_notification` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annonce`
--
ALTER TABLE `annonce`
  ADD CONSTRAINT `fk_annonce_particulier` FOREIGN KEY (`id_annonceur`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `fk_contacts_user` FOREIGN KEY (`id_contact`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `etat`
--
ALTER TABLE `etat`
  ADD CONSTRAINT `fk_etat_annonce` FOREIGN KEY (`id_annonce`) REFERENCES `annonce` (`id_annonce`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `fk_message_user` FOREIGN KEY (`id_sender`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_user_reciever` FOREIGN KEY (`id_reciever`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `fk_notification_reservation` FOREIGN KEY (`id_reservation`) REFERENCES `reservation` (`id_reservation`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `fk_reservation_recondition` FOREIGN KEY (`id_annonce`) REFERENCES `annonce` (`id_annonce`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
