-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 17 juin 2022 à 19:14
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
  `lieu_recuperation` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wilaya` char(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `annonce_recondition`
--

INSERT INTO `annonce_recondition` (`id_annonce_recondition`, `titre`, `description`, `date`, `photo_annonce`, `id_annonceur`, `prix`, `categorie`, `etat`, `lieu_recuperation`, `wilaya`) VALUES
(59, 'tsets', 'aere', '2022-05-09', '13019928464557772pc.jpg', 86, 22, 'Image - Son', 'null', '{\"lat\":36.713548,\"lng\":4.0473075}', 'Béjaïa');

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
  `lieu_recuperation` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categorie` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `wilaya` char(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `annonce_recy`
--

INSERT INTO `annonce_recy` (`id_annonce_recy`, `titre`, `description`, `date`, `photo_annonce`, `id_annonceur`, `prix`, `lieu_recuperation`, `categorie`, `wilaya`) VALUES
(42, 'acier', 'acier', '2022-05-09', '59872480904508410acier.jpg', 86, 22, '{\"lat\":36.713548,\"lng\":4.0473075}', 'acier', 'Batna'),
(44, 'aaa', 'aaa', '2022-05-11', '2102872092581864.58c819f418a_96402_aluminium-rouleau.jpg', 86, 11, '{\"lat\":36.713548,\"lng\":4.0473075}', 'aluminium', 'Béjaïa');

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
(86, 84),
(86, 87),
(87, 86);

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id_message` int(11) NOT NULL,
  `id_sender` int(11) NOT NULL,
  `id_reciever` int(11) NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` datetime NOT NULL,
  `image` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`id_message`, `id_sender`, `id_reciever`, `message`, `date`, `image`) VALUES
(11, 86, 87, 'test', '2022-06-10 00:00:00', NULL),
(12, 86, 84, 'testrrr', '2022-06-10 00:00:00', NULL),
(13, 86, 84, 'testrrrea', '2022-06-10 15:29:38', NULL),
(14, 86, 84, 'salut', '2022-06-10 16:00:13', NULL),
(15, 84, 86, 'cava?', '2022-06-11 12:00:01', NULL),
(16, 86, 84, 'ca va et toi?', '2022-06-11 12:06:25', NULL),
(17, 87, 86, 'coucou', '2022-06-11 12:17:54', NULL),
(18, 86, 87, 'zzzz', '2022-06-11 12:19:38', NULL),
(19, 86, 84, 'eaze azeaze azeaze', '2022-06-11 12:20:28', NULL),
(20, 86, 84, 'azeaze', '2022-06-11 12:20:34', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `reservation_recondition`
--

CREATE TABLE `reservation_recondition` (
  `id_reservation` int(11) NOT NULL,
  `id_annonce_recondition` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `heure` time DEFAULT NULL,
  `commentaire` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_reserveur` int(11) NOT NULL,
  `status` char(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reservation_recondition`
--

INSERT INTO `reservation_recondition` (`id_reservation`, `id_annonce_recondition`, `date`, `heure`, `commentaire`, `id_reserveur`, `status`) VALUES
(2, 59, '2022-05-15', '11:32:00', 'azheuazeh ', 87, 'refuser'),
(3, 59, '2022-05-15', '11:43:00', 'azeaze', 87, 'accepter');

-- --------------------------------------------------------

--
-- Structure de la table `reservation_recy`
--

CREATE TABLE `reservation_recy` (
  `id_reservation` int(11) NOT NULL,
  `id_annonce_recy` int(11) NOT NULL,
  `quantite` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date DEFAULT NULL,
  `commentaire` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `heure` time DEFAULT NULL,
  `id_reserveur` int(11) DEFAULT NULL,
  `status` char(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reservation_recy`
--

INSERT INTO `reservation_recy` (`id_reservation`, `id_annonce_recy`, `quantite`, `date`, `commentaire`, `heure`, `id_reserveur`, `status`) VALUES
(1, 44, '1000', '2022-05-10', '', '17:00:00', 84, 'accepter'),
(2, 42, 'aze', '2022-05-14', 'azeaze', '17:02:00', 86, 'refuser'),
(4, 42, '22', '2022-05-15', 'aze', '14:13:00', 86, 'accepter');

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
(84, 'Hamza', 'Fodil', 'hhhh@gmail.Com', '0794949691', '$2b$10$ZSOwgamkeUa7i7LBOsvkd.RBK4DT.vUytscoNcJhp.pN2EfYREYmi', NULL, 'particulier'),
(86, 'FEDANI', 'Hocine', 'hoho@gmail.com', '0793459001', '$2b$10$6w1s2.JrzDFcZ6GhbyCKKe9lT.CQ.v8yhQ8o/oljgonFftUV5aAmu', NULL, 'particulier'),
(87, 'Test', 'Karim', 'karim@gmail.com', '07 77 22 22 11', '$2b$10$Hajz.Ql7XQCldg06gDFjD.E8YxoCV.WhkMTgmI0eitdFKDi3TaZOu', NULL, 'transporteur');

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
-- Index pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD KEY `fk_users` (`id_user`),
  ADD KEY `fk_contacts_user` (`id_contact`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id_message`),
  ADD KEY `fk_message_user` (`id_sender`),
  ADD KEY `fk_message_user_reciever` (`id_reciever`);

--
-- Index pour la table `reservation_recondition`
--
ALTER TABLE `reservation_recondition`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `fk_reservation_recondition` (`id_annonce_recondition`);

--
-- Index pour la table `reservation_recy`
--
ALTER TABLE `reservation_recy`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `fk_reservation_annonce_recy` (`id_annonce_recy`);

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
  MODIFY `id_annonce_recondition` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT pour la table `annonce_recy`
--
ALTER TABLE `annonce_recy`
  MODIFY `id_annonce_recy` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id_message` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `reservation_recondition`
--
ALTER TABLE `reservation_recondition`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `reservation_recy`
--
ALTER TABLE `reservation_recy`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

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
-- Contraintes pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `fk_contacts_user` FOREIGN KEY (`id_contact`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `fk_message_user` FOREIGN KEY (`id_sender`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_message_user_reciever` FOREIGN KEY (`id_reciever`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `reservation_recondition`
--
ALTER TABLE `reservation_recondition`
  ADD CONSTRAINT `fk_reservation_recondition` FOREIGN KEY (`id_annonce_recondition`) REFERENCES `annonce_recondition` (`id_annonce_recondition`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `reservation_recy`
--
ALTER TABLE `reservation_recy`
  ADD CONSTRAINT `fk_reservation_annonce_recy` FOREIGN KEY (`id_annonce_recy`) REFERENCES `annonce_recy` (`id_annonce_recy`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
