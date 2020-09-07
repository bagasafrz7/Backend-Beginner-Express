-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Sep 2020 pada 14.26
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
(14, 'Desert', '2020-08-31 14:16:59', '2020-08-31 14:16:59', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `histories`
--

CREATE TABLE `histories` (
  `history_id` int(11) NOT NULL,
  `history_invoice` int(11) NOT NULL,
  `history_subtotal` int(11) NOT NULL,
  `history_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `history_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `histories`
--

INSERT INTO `histories` (`history_id`, `history_invoice`, `history_subtotal`, `history_created_at`, `history_updated_at`) VALUES
(140, 19629, 93500, '2020-08-31 06:24:38', '2020-08-31 06:24:38'),
(141, 10095, 162800, '2020-08-31 14:47:44', '2020-08-31 14:47:47'),
(142, 10670, 82500, '2020-08-31 14:48:57', '2020-08-31 14:48:57');

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `history_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_qty` int(11) NOT NULL,
  `order_price` int(11) NOT NULL,
  `order_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `order_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`order_id`, `history_id`, `product_id`, `order_qty`, `order_price`, `order_created_at`, `order_updated_at`) VALUES
(182, 140, 11, 3, 30000, '2020-08-31 06:24:38', '2020-08-31 06:24:38'),
(183, 140, 12, 3, 45000, '2020-08-31 06:24:38', '2020-08-31 06:24:38'),
(184, 140, 13, 2, 10000, '2020-08-31 06:24:38', '2020-08-31 06:24:38'),
(185, 141, 19, 2, 138000, '2020-08-31 14:47:47', '2020-08-31 14:47:47'),
(186, 141, 22, 2, 10000, '2020-08-31 14:47:48', '2020-08-31 14:47:48'),
(187, 142, 22, 3, 15000, '2020-08-31 14:48:57', '2020-08-31 14:48:57'),
(188, 142, 18, 1, 60000, '2020-08-31 14:48:57', '2020-08-31 14:48:57');

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
(53, 1, 'Expresso', 10000, 'product_image-2020-09-07T12-07-41.197Z-1_min.jpg', '2020-09-07 12:07:06', '2020-09-07 12:07:41', 1),
(54, 1, 'Coffe Latte', 15000, 'product_image-2020-09-07T12-11-27.910Z-2_min.jpg', '2020-09-07 12:10:45', '2020-09-07 12:11:27', 1),
(55, 1, 'Cappucino', 5000, 'product_image-2020-09-07T12-12-12.851Z-3_min.jpg', '2020-09-07 12:12:12', '2020-09-07 12:12:12', 1),
(56, 1, 'Red Velvet Latte', 33000, 'product_image-2020-09-07T12-13-03.240Z-4_min.jpg', '2020-09-07 12:13:03', '2020-09-07 12:13:03', 1),
(57, 2, 'Choco Rhum', 28000, 'product_image-2020-09-07T12-13-41.873Z-5_min.jpg', '2020-09-07 12:13:41', '2020-09-07 12:13:41', 1),
(58, 2, 'Black Forest', 30000, 'product_image-2020-09-07T12-14-12.893Z-6_min.jpg', '2020-09-07 12:14:12', '2020-09-07 12:14:12', 1),
(59, 2, 'Chicken Katsu Dabu-dabu', 60000, 'product_image-2020-09-07T12-15-04.398Z-7_min.jpg', '2020-09-07 12:15:04', '2020-09-07 12:15:04', 1),
(60, 2, 'Salmon Truffle Teriyaki', 60000, 'product_image-2020-09-07T12-15-33.342Z-8_min.jpg', '2020-09-07 12:15:33', '2020-09-07 12:15:33', 1),
(61, 2, 'Wiener Schnitzel', 69000, 'product_image-2020-09-07T12-15-59.607Z-9_min.jpg', '2020-09-07 12:15:59', '2020-09-07 12:15:59', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(150) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_role` int(1) NOT NULL,
  `user_status` int(1) NOT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`user_id`, `user_email`, `user_password`, `user_name`, `user_role`, `user_status`, `user_created_at`, `user_updated_at`) VALUES
(1, 'admin@gmail.com', '$2b$10$xwpZkA1ncDCL7I6HnNRlu.ScyrQYdPFpR4oCuJISBPp.WOyICC612', 'ADMIN', 1, 1, '2020-09-07 07:01:00', '2020-09-07 07:01:00'),
(2, 'udin@gmail.com', '$2b$10$xp65jzC268gwR6cH5P9CH.jbBx7ioquW0OHTdhRl898zAi6DtYkRK', 'Udin', 2, 1, '2020-09-03 16:04:04', '2020-09-01 04:10:10'),
(3, 'dodit@gmail.com', '$2b$10$BVWRGY.AS6mXtST4TZDTjOBrYjZxxvEUSW6vTNYiZ1/g/Hd.Ht4qK', 'Dodit', 2, 1, '2020-09-06 13:52:36', '2020-09-06 13:52:35'),
(4, 'jhon@gmail.com', '$2b$10$qWdl4yuAZ0HAtDGdHfC6R.D6kycKDNnCFG201HQQphi.h9rq0Eoya', 'jhon', 2, 0, '2020-09-02 13:10:29', '2020-09-02 13:10:29'),
(5, 'udingmail.com', '$2b$10$HgwRN/qG/NvcNIOIk47nCuUSZO92nnMQdUWxzBVSO1tvJQAO9Srx6', 'Mawar', 2, 0, '2020-09-02 13:18:36', '2020-09-02 13:18:36'),
(6, 'thomas@gmail.com', '$2b$10$skRPPzzPTSIB5QoE8plMTe/KFxssRLMaVrNHIRJDyIg12ivgpwkoS', 'Thomas', 2, 0, '2020-09-02 13:20:55', '2020-09-02 13:20:55'),
(7, 'melati@gmail.com', '$2b$10$UXrrRXDIPaz/bP1fpKB54Orytx7wE6Ps5gdhEAo8EJ.l3gPfKQ9LW', 'Melati', 2, 1, '2020-09-07 06:58:42', '2020-09-07 06:58:42');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`history_id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `histories`
--
ALTER TABLE `histories`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=189;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
