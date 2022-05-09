-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 09 mai 2022 à 16:48
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

--
-- Déchargement des données de la table `annonce_recondition`
--

INSERT INTO `annonce_recondition` (`id_annonce_recondition`, `titre`, `description`, `date`, `photo_annonce`, `id_annonceur`, `prix`, `categorie`, `etat`, `lieu_recuperation`) VALUES
(9, 'Smartphone', 'Smartphone bon état, écran cassé , pas de chargeur ni de boite ', '2022-05-06', 'undefined', 86, 3000, 'Image - Son', 'bon', 'Tizi'),
(10, 'Pc portable', 'Pc portable bon état, écran cassé ,pas de disque dur, pas de chargeur ni de boite ', '2022-05-06', 'undefined', 86, 7000, 'Image - Son', 'mauvais', 'Tizi'),
(11, 'sac', 'sac bon etat', '2022-05-08', 'undefined', 86, 1000, 'Vêtements - Sacs', 'bon', 'tizi-ouzou');

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
  `nom_entreprise` char(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `entreprise`
--

INSERT INTO `entreprise` (`id_entreprise`, `email`, `tel`, `mot_de_passe`, `photo_profil`, `nom_entreprise`) VALUES
(1, 'zczzzeze@gezz.com', '0794949691', '$2b$10$ypR6c749BqHD9jD8CmKaw.QEPZej3CMg2IiUNit5ooSOp6Fac12oW', NULL, 'ffff'),
(2, 'zczzzzeze@gezz.com', '0794949691', '$2b$10$3pN1z/g18e6i11ItyOE7FeOOoRn5.OKArmN8C3YW.SNGNTd6Ra3YW', NULL, 'ffff');

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
-- Déchargement des données de la table `transporteur`
--

INSERT INTO `transporteur` (`id_transporteur`, `nom`, `prenom`, `email`, `tel`, `mot_de_passe`, `photo_profil`) VALUES
(1, 'FEDANI', 'Hocine', 'zczzzeze@gezz.com', '0794949691', '$2b$10$F.oA8H.eTHNa9klEhVuEe.3aXZT01Sukf38eLNSpSK3wFVwnL1KzC', NULL),
(2, 'FEDANI', 'Hocine', 'hocieenefedani@gmail.com', '0794949691', '$2b$10$C5dre5RTP48pDfVTxvcUveeq2vW0UZtpF7xRW8so/M0yX.I5kAXe2', NULL);

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
(84, 'aaaa', 'aaaa', 'hhhh@gmail.Com', '0794949691', '$2b$10$ZSOwgamkeUa7i7LBOsvkd.RBK4DT.vUytscoNcJhp.pN2EfYREYmi', NULL, 'particulier'),
(85, 'aaaa', 'aaaa', 'hhheh@gmail.Com', '0798949691', '$2b$10$kOoEAgTdXBJNfLgXrZSZcu/J.b.EW1LDdyFdcTH6VgAqNpCgQQ1SC', NULL, 'particulier'),
(86, 'hoho', 'hoho', 'hoho@gmail.com', '0793459001', '$2b$10$6w1s2.JrzDFcZ6GhbyCKKe9lT.CQ.v8yhQ8o/oljgonFftUV5aAmu', NULL, 'particulier');

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
  ADD PRIMARY KEY (`id_entreprise`),
  ADD UNIQUE KEY `email_entreprise` (`email`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id_message`),
  ADD KEY `fk_message_transporteur` (`id_sender`),
  ADD KEY `fk_message_reciever_entreprise` (`id_reciever`);

--
-- Index pour la table `transporteur`
--
ALTER TABLE `transporteur`
  ADD PRIMARY KEY (`id_transporteur`),
  ADD UNIQUE KEY `email_transporteur` (`email`);

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
-- AUTO_INCREMENT pour la table `annonce_recondition`
--
ALTER TABLE `annonce_recondition`
  MODIFY `id_annonce_recondition` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `annonce_recy`
--
ALTER TABLE `annonce_recy`
  MODIFY `id_annonce_recy` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `entreprise`
--
ALTER TABLE `entreprise`
  MODIFY `id_entreprise` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id_message` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `transporteur`
--
ALTER TABLE `transporteur`
  MODIFY `id_transporteur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annonce_recondition`
--
ALTER TABLE `annonce_recondition`
  ADD CONSTRAINT `fk_annonce_particulier` FOREIGN KEY (`id_annonceur`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `annonce_recy`
--
ALTER TABLE `annonce_recy`
  ADD CONSTRAINT `fk_annonce_particulier_0` FOREIGN KEY (`id_annonceur`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `fk_message_entreprise` FOREIGN KEY (`id_sender`) REFERENCES `entreprise` (`id_entreprise`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_particulier` FOREIGN KEY (`id_sender`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_reciever_entreprise` FOREIGN KEY (`id_reciever`) REFERENCES `entreprise` (`id_entreprise`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_reciever_particulier` FOREIGN KEY (`id_reciever`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_reciever_transporteur` FOREIGN KEY (`id_reciever`) REFERENCES `transporteur` (`id_transporteur`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_transporteur` FOREIGN KEY (`id_sender`) REFERENCES `transporteur` (`id_transporteur`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
