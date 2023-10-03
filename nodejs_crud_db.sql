-- phpMyAdmin SQL Dump
-- version 5.1.1-1.el7.remi
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 03, 2022 at 03:31 PM
-- Server version: 10.6.5-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_crud_db`
--
CREATE DATABASE IF NOT EXISTS `nodejs_crud_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `nodejs_crud_db`;

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(30) NOT NULL,
  `House` varchar(200) NOT NULL,
  `district` varchar(200) NOT NULL,
  `amphur` varchar(200) NOT NULL,
  `province` varchar(200) NOT NULL,
  `Post` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pay`
--

CREATE TABLE `pay` (
  `id` int(10) NOT NULL,
  `pay` int(20) NOT NULL,
  `bank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product_over`
--

CREATE TABLE `product_over` (
  `id` int(20) NOT NULL,
  `category` varchar(200) NOT NULL,
  `product` varchar(200) NOT NULL,
  `price` int(20) NOT NULL,
  `GB` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pay`
--
ALTER TABLE `pay`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_over`
--
ALTER TABLE `product_over`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pay`
--
ALTER TABLE `pay`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_over`
--
ALTER TABLE `product_over`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
