-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 14 avr. 2022 à 18:12
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
-- Structure de la table `annonce_recondition`
--

CREATE TABLE `annonce_recondition` (
  `id_annonce_recondition` int(11) NOT NULL,
  `titre` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date NOT NULL,
  `photo_annonce` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_annonceur` int(11) NOT NULL,
  `prix` int(10) UNSIGNED DEFAULT NULL,
  `categorie` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `etat` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lieu_recuperation` char(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `annonce_recy`
--

CREATE TABLE `annonce_recy` (
  `id_annonce_recy` int(11) NOT NULL,
  `titre` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date NOT NULL,
  `photo_annonce` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_annonceur` int(11) NOT NULL,
  `prix` int(10) UNSIGNED DEFAULT NULL,
  `type` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lieu_recuperation` char(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `entreprise`
--

CREATE TABLE `entreprise` (
  `id_entreprise` int(11) NOT NULL,
  `email` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` char(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mot_de_passe` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_profil` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nom_entreprise_recondi` char(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `entreprise_recy`
--

CREATE TABLE `entreprise_recy` (
  `id_entreprise_recy` int(11) NOT NULL,
  `email` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` char(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mot_de_passe` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_profil` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nom_entreprise_recy` char(255) COLLATE utf8mb4_unicode_ci NOT NULL
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
  `date` date NOT NULL,
  `image` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `particulier`
--

CREATE TABLE `particulier` (
  `id_particulier` int(11) NOT NULL,
  `nom` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` char(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mot_de_passe` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_profil` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `transporteur`
--

CREATE TABLE `transporteur` (
  `id_transporteur` int(11) NOT NULL,
  `nom` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` char(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mot_de_passe` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_profil` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annonce_recondition`
--
ALTER TABLE `annonce_recondition`
  ADD PRIMARY KEY (`id_annonce_recondition`),
  ADD KEY `fk_annonce_particulier` (`id_annonceur`);

--
-- Index pour la table `annonce_recy`
--
ALTER TABLE `annonce_recy`
  ADD PRIMARY KEY (`id_annonce_recy`),
  ADD KEY `fk_annonce_particulier_0` (`id_annonceur`);

--
-- Index pour la table `entreprise`
--
ALTER TABLE `entreprise`
  ADD PRIMARY KEY (`id_entreprise`);

--
-- Index pour la table `entreprise_recy`
--
ALTER TABLE `entreprise_recy`
  ADD PRIMARY KEY (`id_entreprise_recy`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id_message`),
  ADD KEY `fk_message_transporteur` (`id_sender`),
  ADD KEY `fk_message_reciever_entreprise` (`id_reciever`);

--
-- Index pour la table `particulier`
--
ALTER TABLE `particulier`
  ADD PRIMARY KEY (`id_particulier`);

--
-- Index pour la table `transporteur`
--
ALTER TABLE `transporteur`
  ADD PRIMARY KEY (`id_transporteur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `annonce_recondition`
--
ALTER TABLE `annonce_recondition`
  MODIFY `id_annonce_recondition` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `annonce_recy`
--
ALTER TABLE `annonce_recy`
  MODIFY `id_annonce_recy` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `entreprise`
--
ALTER TABLE `entreprise`
  MODIFY `id_entreprise` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `entreprise_recy`
--
ALTER TABLE `entreprise_recy`
  MODIFY `id_entreprise_recy` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id_message` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `particulier`
--
ALTER TABLE `particulier`
  MODIFY `id_particulier` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `transporteur`
--
ALTER TABLE `transporteur`
  MODIFY `id_transporteur` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annonce_recondition`
--
ALTER TABLE `annonce_recondition`
  ADD CONSTRAINT `fk_annonce_particulier` FOREIGN KEY (`id_annonceur`) REFERENCES `particulier` (`id_particulier`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_annonce_transporteur` FOREIGN KEY (`id_annonceur`) REFERENCES `transporteur` (`id_transporteur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `annonce_recy`
--
ALTER TABLE `annonce_recy`
  ADD CONSTRAINT `fk_annonce_particulier_0` FOREIGN KEY (`id_annonceur`) REFERENCES `particulier` (`id_particulier`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `fk_message_entreprise` FOREIGN KEY (`id_sender`) REFERENCES `entreprise` (`id_entreprise`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_particulier` FOREIGN KEY (`id_sender`) REFERENCES `particulier` (`id_particulier`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_reciever_entreprise` FOREIGN KEY (`id_reciever`) REFERENCES `entreprise` (`id_entreprise`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_reciever_particulier` FOREIGN KEY (`id_reciever`) REFERENCES `particulier` (`id_particulier`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_reciever_transporteur` FOREIGN KEY (`id_reciever`) REFERENCES `transporteur` (`id_transporteur`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_transporteur` FOREIGN KEY (`id_sender`) REFERENCES `transporteur` (`id_transporteur`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
