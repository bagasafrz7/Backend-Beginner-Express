-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Agu 2020 pada 17.45
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_shop`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `category_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `category_updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `category_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_created_at`, `category_updated_at`, `category_status`) VALUES
(1, 'Drinks', '2020-08-12 14:56:58', '2020-08-12 14:56:58', 1),
(2, 'Foods', '2020-08-12 15:04:59', '2020-08-12 15:04:59', 1),
(3, 'DRINKS FOODS', '2020-08-12 15:05:54', '2020-08-12 15:21:18', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_harga` int(15) NOT NULL,
  `product_image` varchar(100) NOT NULL,
  `product_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `product_updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `product_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `product_name`, `product_harga`, `product_image`, `product_created_at`, `product_updated_at`, `product_status`) VALUES
(11, 1, 'Expresso', 10000, 'img Expresso', '2020-08-12 08:56:29', '2020-08-12 13:55:44', 1),
(12, 1, 'Coffe Latte', 15000, 'img Coffe Latte', '2020-08-12 08:56:59', '2020-08-12 13:56:41', 1),
(13, 1, 'Cappucino', 5000, 'img Cappucino', '2020-08-12 08:57:21', '2020-08-12 13:57:35', 1),
(14, 1, 'Red Velvet Latte', 33000, 'img Red Velvet Latte', '2020-08-12 13:44:34', '2020-08-12 13:58:17', 1),
(15, 2, 'Choco Rhum', 28000, 'img Choco Rhum', '2020-08-12 13:59:18', '2020-08-12 13:59:18', 1),
(16, 2, 'Black Forest', 30000, 'img Black Forest', '2020-08-12 14:00:03', '2020-08-12 14:00:03', 1),
(17, 2, 'Chicken Katsu Dabu-dabu', 60000, 'img Chicken Katsu Dabu-dabu', '2020-08-12 14:00:41', '2020-08-12 14:00:41', 1),
(18, 2, 'Salmon Truffle Teriyaki', 60000, 'img Salmon Truffle Teriyaki', '2020-08-12 14:01:20', '2020-08-12 14:01:20', 1),
(19, 2, 'Wiener Schnitzel', 69000, 'img Wiener Schnitzel', '2020-08-12 14:02:09', '2020-08-12 14:02:09', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
