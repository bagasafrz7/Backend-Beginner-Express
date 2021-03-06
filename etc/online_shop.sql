-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Okt 2020 pada 18.56
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
(14, 'Desert', '2020-08-31 14:16:59', '2020-08-31 14:16:59', 1),
(16, 'Appetizer', '2020-09-10 09:44:09', '2020-09-10 09:44:09', 1);

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
(142, 10670, 82500, '2020-08-31 14:48:57', '2020-08-31 14:48:57'),
(143, 11315, 115500, '2020-09-12 21:30:16', '2020-09-12 21:30:16'),
(144, 16477, 44000, '2020-09-13 13:25:57', '2020-09-13 13:25:57'),
(145, 14798, 44000, '2020-09-13 14:53:44', '2020-09-13 14:53:45'),
(146, 13199, 47300, '2020-09-14 03:44:02', '2020-09-14 03:44:03'),
(147, 10405, 55000, '2020-09-14 06:31:09', '2020-09-14 06:31:10'),
(148, 18104, 27500, '2020-09-14 06:33:04', '2020-09-14 06:33:05'),
(149, 17221, 36300, '2020-09-14 07:14:50', '2020-09-14 07:14:51'),
(150, 12705, 16500, '2020-09-14 07:20:42', '2020-09-14 07:20:42'),
(151, 16951, 38500, '2020-10-11 13:20:35', '2020-10-11 13:20:36'),
(152, 17995, 182600, '2020-10-11 13:46:01', '2020-10-11 13:46:01'),
(153, 13968, 102300, '2020-10-11 14:01:30', '2020-10-11 14:01:30'),
(154, 19971, 55000, '2020-10-11 14:09:33', '2020-10-11 14:09:33'),
(155, 12961, 33000, '2020-10-11 14:15:42', '2020-10-11 14:15:42'),
(156, 19871, 44000, '2020-10-11 14:19:00', '2020-10-11 14:19:00'),
(157, 18062, 67100, '2020-10-11 14:24:29', '2020-10-11 14:24:30'),
(158, 18612, 58300, '2020-10-11 14:27:44', '2020-10-11 14:27:44'),
(159, 19593, 63800, '2020-10-11 14:28:28', '2020-10-11 14:28:28'),
(160, 15849, 33000, '2020-10-11 14:31:48', '2020-10-11 14:31:48'),
(161, 15994, 33000, '2020-10-11 14:33:11', '2020-10-11 14:33:11'),
(162, 16187, 11000, '2020-10-11 14:35:07', '2020-10-11 14:35:07'),
(163, 11704, 16500, '2020-10-11 14:37:35', '2020-10-11 14:37:35'),
(164, 17864, 11000, '2020-10-11 14:40:35', '2020-10-11 14:40:35'),
(165, 10423, 38500, '2020-10-11 14:42:21', '2020-10-11 14:42:21'),
(166, 12556, 38500, '2020-10-11 14:42:58', '2020-10-11 14:42:58'),
(167, 11799, 232100, '2020-10-11 14:52:53', '2020-10-11 14:52:53'),
(168, 19882, 41800, '2020-10-11 15:02:44', '2020-10-11 15:02:45'),
(169, 17989, 94600, '2020-10-11 15:05:21', '2020-10-11 15:05:21'),
(170, 12314, 47300, '2020-10-11 15:06:14', '2020-10-11 15:06:14'),
(171, 13321, 105600, '2020-10-11 15:08:57', '2020-10-11 15:08:57'),
(172, 10121, 77000, '2020-10-11 15:11:49', '2020-10-11 15:11:49'),
(173, 15249, 52800, '2020-10-11 15:13:24', '2020-10-11 15:13:25'),
(174, 19811, 141900, '2020-10-11 15:14:26', '2020-10-11 15:14:27'),
(175, 11436, 441100, '2020-10-11 15:20:13', '2020-10-11 15:20:13'),
(176, 18114, 149600, '2020-10-11 15:25:13', '2020-10-11 15:25:13'),
(177, 15269, 123200, '2020-10-11 15:25:50', '2020-10-11 15:25:50'),
(178, 12521, 41800, '2020-10-11 15:26:34', '2020-10-11 15:26:35'),
(179, 18954, 118800, '2020-10-11 15:29:07', '2020-10-11 15:29:07'),
(180, 11632, 27500, '2020-10-11 15:30:05', '2020-10-11 15:30:05'),
(181, 10219, 27500, '2020-10-11 15:30:36', '2020-10-11 15:30:36'),
(182, 19591, 22000, '2020-10-11 15:31:59', '2020-10-11 15:31:59'),
(183, 17661, 22000, '2020-10-11 15:32:53', '2020-10-11 15:32:53'),
(184, 18720, 132000, '2020-10-11 15:33:31', '2020-10-11 15:33:31'),
(185, 14480, 41800, '2020-10-11 15:36:02', '2020-10-11 15:36:02'),
(186, 17872, 58300, '2020-10-11 15:36:21', '2020-10-11 15:36:21'),
(187, 15197, 72600, '2020-10-11 15:37:51', '2020-10-11 15:37:51'),
(188, 11564, 33000, '2020-10-11 15:41:02', '2020-10-11 15:41:02'),
(189, 14865, 16500, '2020-10-11 15:45:14', '2020-10-11 15:45:14'),
(190, 12033, 22000, '2020-10-13 02:57:03', '2020-10-13 02:57:03'),
(191, 10665, 41800, '2020-10-13 03:45:50', '2020-10-13 03:45:58'),
(192, 13725, 67100, '2020-10-13 03:50:22', '2020-10-13 03:50:23'),
(193, 15467, 106700, '2020-10-13 03:52:52', '2020-10-13 03:52:52'),
(194, 15757, 27500, '2020-10-13 03:55:03', '2020-10-13 03:55:03'),
(195, 19352, 41800, '2020-10-13 03:55:49', '2020-10-13 03:55:50'),
(196, 12705, 44000, '2020-10-13 04:11:35', '2020-10-13 04:11:35'),
(197, 17335, 11000, '2020-10-13 04:15:23', '2020-10-13 04:15:23'),
(198, 14041, 78100, '2020-10-13 04:31:07', '2020-10-13 04:31:08'),
(199, 16382, 27500, '2020-10-13 04:34:24', '2020-10-13 04:34:25'),
(200, 13453, 36300, '2020-10-13 04:35:17', '2020-10-13 04:35:17');

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
(188, 142, 18, 1, 60000, '2020-08-31 14:48:57', '2020-08-31 14:48:57'),
(189, 143, 53, 4, 40000, '2020-09-12 21:30:16', '2020-09-12 21:30:16'),
(190, 143, 54, 4, 60000, '2020-09-12 21:30:16', '2020-09-12 21:30:16'),
(191, 143, 55, 1, 5000, '2020-09-12 21:30:16', '2020-09-12 21:30:16'),
(192, 144, 54, 2, 30000, '2020-09-13 13:25:57', '2020-09-13 13:25:57'),
(193, 144, 55, 2, 10000, '2020-09-13 13:25:57', '2020-09-13 13:25:57'),
(194, 145, 53, 1, 10000, '2020-09-13 14:53:45', '2020-09-13 14:53:45'),
(195, 145, 54, 2, 30000, '2020-09-13 14:53:46', '2020-09-13 14:53:46'),
(196, 146, 56, 1, 33000, '2020-09-14 03:44:03', '2020-09-14 03:44:03'),
(197, 146, 55, 2, 10000, '2020-09-14 03:44:03', '2020-09-14 03:44:03'),
(198, 147, 53, 2, 20000, '2020-09-14 06:31:10', '2020-09-14 06:31:10'),
(199, 147, 54, 2, 30000, '2020-09-14 06:31:10', '2020-09-14 06:31:10'),
(200, 148, 54, 1, 15000, '2020-09-14 06:33:05', '2020-09-14 06:33:05'),
(201, 148, 55, 2, 10000, '2020-09-14 06:33:05', '2020-09-14 06:33:05'),
(202, 149, 56, 1, 33000, '2020-09-14 07:14:51', '2020-09-14 07:14:51'),
(203, 150, 55, 3, 15000, '2020-09-14 07:20:42', '2020-09-14 07:20:42'),
(204, 151, 54, 1, 15000, '2020-10-11 13:20:36', '2020-10-11 13:20:36'),
(205, 151, 53, 2, 20000, '2020-10-11 13:20:37', '2020-10-11 13:20:37'),
(206, 152, 61, 2, 138000, '2020-10-11 13:46:01', '2020-10-11 13:46:01'),
(207, 152, 57, 1, 28000, '2020-10-11 13:46:01', '2020-10-11 13:46:01'),
(208, 153, 56, 1, 33000, '2020-10-11 14:01:30', '2020-10-11 14:01:30'),
(209, 153, 58, 2, 60000, '2020-10-11 14:01:31', '2020-10-11 14:01:31'),
(210, 154, 53, 2, 20000, '2020-10-11 14:09:33', '2020-10-11 14:09:33'),
(211, 154, 58, 1, 30000, '2020-10-11 14:09:33', '2020-10-11 14:09:33'),
(212, 155, 54, 2, 30000, '2020-10-11 14:15:42', '2020-10-11 14:15:42'),
(213, 156, 53, 1, 10000, '2020-10-11 14:19:00', '2020-10-11 14:19:00'),
(214, 156, 54, 2, 30000, '2020-10-11 14:19:00', '2020-10-11 14:19:00'),
(215, 157, 55, 1, 5000, '2020-10-11 14:24:30', '2020-10-11 14:24:30'),
(216, 157, 57, 2, 56000, '2020-10-11 14:24:30', '2020-10-11 14:24:30'),
(217, 158, 53, 2, 20000, '2020-10-11 14:27:44', '2020-10-11 14:27:44'),
(218, 158, 56, 1, 33000, '2020-10-11 14:27:44', '2020-10-11 14:27:44'),
(219, 159, 54, 2, 30000, '2020-10-11 14:28:28', '2020-10-11 14:28:28'),
(220, 159, 57, 1, 28000, '2020-10-11 14:28:28', '2020-10-11 14:28:28'),
(221, 160, 54, 2, 30000, '2020-10-11 14:31:48', '2020-10-11 14:31:48'),
(222, 161, 54, 2, 30000, '2020-10-11 14:33:11', '2020-10-11 14:33:11'),
(223, 162, 55, 2, 10000, '2020-10-11 14:35:07', '2020-10-11 14:35:07'),
(224, 163, 54, 1, 15000, '2020-10-11 14:37:35', '2020-10-11 14:37:35'),
(225, 164, 55, 2, 10000, '2020-10-11 14:40:35', '2020-10-11 14:40:35'),
(226, 165, 53, 2, 20000, '2020-10-11 14:42:21', '2020-10-11 14:42:21'),
(227, 165, 54, 1, 15000, '2020-10-11 14:42:22', '2020-10-11 14:42:22'),
(228, 166, 53, 2, 20000, '2020-10-11 14:42:58', '2020-10-11 14:42:58'),
(229, 166, 54, 1, 15000, '2020-10-11 14:42:59', '2020-10-11 14:42:59'),
(230, 167, 54, 3, 45000, '2020-10-11 14:52:53', '2020-10-11 14:52:53'),
(231, 167, 57, 1, 28000, '2020-10-11 14:52:54', '2020-10-11 14:52:54'),
(232, 167, 61, 2, 138000, '2020-10-11 14:52:54', '2020-10-11 14:52:54'),
(233, 168, 55, 2, 10000, '2020-10-11 15:02:45', '2020-10-11 15:02:45'),
(234, 168, 57, 1, 28000, '2020-10-11 15:02:45', '2020-10-11 15:02:45'),
(235, 169, 53, 2, 20000, '2020-10-11 15:05:21', '2020-10-11 15:05:21'),
(236, 169, 56, 2, 66000, '2020-10-11 15:05:21', '2020-10-11 15:05:21'),
(237, 170, 54, 1, 15000, '2020-10-11 15:06:14', '2020-10-11 15:06:14'),
(238, 170, 57, 1, 28000, '2020-10-11 15:06:14', '2020-10-11 15:06:14'),
(239, 171, 54, 2, 30000, '2020-10-11 15:08:57', '2020-10-11 15:08:57'),
(240, 171, 56, 2, 66000, '2020-10-11 15:08:57', '2020-10-11 15:08:57'),
(241, 172, 55, 2, 10000, '2020-10-11 15:11:49', '2020-10-11 15:11:49'),
(242, 172, 58, 2, 60000, '2020-10-11 15:11:49', '2020-10-11 15:11:49'),
(243, 173, 54, 1, 15000, '2020-10-11 15:13:25', '2020-10-11 15:13:25'),
(244, 173, 56, 1, 33000, '2020-10-11 15:13:25', '2020-10-11 15:13:25'),
(245, 174, 60, 1, 60000, '2020-10-11 15:14:27', '2020-10-11 15:14:27'),
(246, 174, 61, 1, 69000, '2020-10-11 15:14:27', '2020-10-11 15:14:27'),
(247, 175, 53, 4, 40000, '2020-10-11 15:20:13', '2020-10-11 15:20:13'),
(248, 175, 57, 1, 28000, '2020-10-11 15:20:13', '2020-10-11 15:20:13'),
(249, 175, 61, 3, 207000, '2020-10-11 15:20:13', '2020-10-11 15:20:13'),
(250, 175, 59, 1, 60000, '2020-10-11 15:20:13', '2020-10-11 15:20:13'),
(251, 175, 56, 2, 66000, '2020-10-11 15:20:13', '2020-10-11 15:20:13'),
(252, 176, 55, 2, 10000, '2020-10-11 15:25:13', '2020-10-11 15:25:13'),
(253, 176, 56, 2, 66000, '2020-10-11 15:25:13', '2020-10-11 15:25:13'),
(254, 176, 58, 2, 60000, '2020-10-11 15:25:13', '2020-10-11 15:25:13'),
(255, 177, 54, 1, 15000, '2020-10-11 15:25:50', '2020-10-11 15:25:50'),
(256, 177, 57, 1, 28000, '2020-10-11 15:25:50', '2020-10-11 15:25:50'),
(257, 177, 61, 1, 69000, '2020-10-11 15:25:50', '2020-10-11 15:25:50'),
(258, 178, 55, 1, 5000, '2020-10-11 15:26:35', '2020-10-11 15:26:35'),
(259, 178, 56, 1, 33000, '2020-10-11 15:26:35', '2020-10-11 15:26:35'),
(260, 179, 54, 1, 15000, '2020-10-11 15:29:07', '2020-10-11 15:29:07'),
(261, 179, 56, 1, 33000, '2020-10-11 15:29:07', '2020-10-11 15:29:07'),
(262, 179, 60, 1, 60000, '2020-10-11 15:29:07', '2020-10-11 15:29:07'),
(263, 180, 54, 1, 15000, '2020-10-11 15:30:05', '2020-10-11 15:30:05'),
(264, 180, 53, 1, 10000, '2020-10-11 15:30:05', '2020-10-11 15:30:05'),
(265, 181, 54, 1, 15000, '2020-10-11 15:30:36', '2020-10-11 15:30:36'),
(266, 181, 53, 1, 10000, '2020-10-11 15:30:36', '2020-10-11 15:30:36'),
(267, 182, 55, 1, 5000, '2020-10-11 15:31:59', '2020-10-11 15:31:59'),
(268, 182, 54, 1, 15000, '2020-10-11 15:31:59', '2020-10-11 15:31:59'),
(269, 183, 55, 1, 5000, '2020-10-11 15:32:53', '2020-10-11 15:32:53'),
(270, 183, 54, 1, 15000, '2020-10-11 15:32:53', '2020-10-11 15:32:53'),
(271, 184, 59, 1, 60000, '2020-10-11 15:33:31', '2020-10-11 15:33:31'),
(272, 184, 60, 1, 60000, '2020-10-11 15:33:31', '2020-10-11 15:33:31'),
(273, 185, 53, 1, 10000, '2020-10-11 15:36:02', '2020-10-11 15:36:02'),
(274, 185, 57, 1, 28000, '2020-10-11 15:36:02', '2020-10-11 15:36:02'),
(275, 186, 54, 1, 15000, '2020-10-11 15:36:21', '2020-10-11 15:36:21'),
(276, 186, 53, 1, 10000, '2020-10-11 15:36:21', '2020-10-11 15:36:21'),
(277, 186, 57, 1, 28000, '2020-10-11 15:36:22', '2020-10-11 15:36:22'),
(278, 187, 55, 1, 5000, '2020-10-11 15:37:51', '2020-10-11 15:37:51'),
(279, 187, 57, 1, 28000, '2020-10-11 15:37:51', '2020-10-11 15:37:51'),
(280, 187, 56, 1, 33000, '2020-10-11 15:37:51', '2020-10-11 15:37:51'),
(281, 188, 54, 2, 30000, '2020-10-11 15:41:02', '2020-10-11 15:41:02'),
(282, 189, 54, 1, 15000, '2020-10-11 15:45:14', '2020-10-11 15:45:14'),
(283, 190, 53, 1, 10000, '2020-10-13 02:57:03', '2020-10-13 02:57:03'),
(284, 190, 55, 2, 10000, '2020-10-13 02:57:03', '2020-10-13 02:57:03'),
(285, 191, 55, 1, 5000, '2020-10-13 03:45:58', '2020-10-13 03:45:58'),
(286, 191, 56, 1, 33000, '2020-10-13 03:45:58', '2020-10-13 03:45:58'),
(287, 192, 57, 1, 28000, '2020-10-13 03:50:23', '2020-10-13 03:50:23'),
(288, 192, 56, 1, 33000, '2020-10-13 03:50:23', '2020-10-13 03:50:23'),
(289, 193, 57, 1, 28000, '2020-10-13 03:52:52', '2020-10-13 03:52:52'),
(290, 193, 61, 1, 69000, '2020-10-13 03:52:52', '2020-10-13 03:52:52'),
(291, 194, 54, 1, 15000, '2020-10-13 03:55:03', '2020-10-13 03:55:03'),
(292, 194, 53, 1, 10000, '2020-10-13 03:55:04', '2020-10-13 03:55:04'),
(293, 195, 55, 1, 5000, '2020-10-13 03:55:50', '2020-10-13 03:55:50'),
(294, 195, 56, 1, 33000, '2020-10-13 03:55:50', '2020-10-13 03:55:50'),
(295, 196, 58, 1, 30000, '2020-10-13 04:11:35', '2020-10-13 04:11:35'),
(296, 196, 53, 1, 10000, '2020-10-13 04:11:36', '2020-10-13 04:11:36'),
(297, 197, 53, 1, 10000, '2020-10-13 04:15:23', '2020-10-13 04:15:23'),
(298, 198, 54, 1, 15000, '2020-10-13 04:31:08', '2020-10-13 04:31:08'),
(299, 198, 57, 2, 56000, '2020-10-13 04:31:08', '2020-10-13 04:31:08'),
(300, 199, 55, 1, 5000, '2020-10-13 04:34:25', '2020-10-13 04:34:25'),
(301, 199, 53, 2, 20000, '2020-10-13 04:34:25', '2020-10-13 04:34:25'),
(302, 200, 55, 1, 5000, '2020-10-13 04:35:17', '2020-10-13 04:35:17'),
(303, 200, 57, 1, 28000, '2020-10-13 04:35:17', '2020-10-13 04:35:17');

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
(60, 2, 'Salmon Truffle Teriyaki', 60000, 'product_image-2020-09-07T12-15-33.342Z-8_min.jpg', '2020-09-07 12:15:33', '2020-10-13 15:52:25', 1),
(61, 2, 'Wiener Schnitzel', 69000, 'product_image-2020-10-13T16-55-14.152Z-9_min.jpg', '2020-09-07 12:15:59', '2020-10-13 16:55:14', 1),
(69, 2, 'Salmon Truffle Teriyaki', 60000, 'product_image-2020-10-13T16-54-10.976Z-8_min.jpg', '2020-09-10 06:23:51', '2020-10-13 16:54:11', 1);

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
(6, 'thomas@gmail.com', '$2b$10$7OgKsVJtME9eQWNZLR2AbuXhlKrGL/ecyVECXE5/Er9VXLKx12urm', 'Thomas', 2, 1, '2020-09-13 12:18:53', '2020-09-13 12:18:53'),
(7, 'melati@gmail.com', '$2b$10$UXrrRXDIPaz/bP1fpKB54Orytx7wE6Ps5gdhEAo8EJ.l3gPfKQ9LW', 'Melati', 2, 1, '2020-09-07 06:58:42', '2020-09-07 06:58:42'),
(12, 'user@gmail.com', '$2b$10$HL.o6MrHx0MQdya5cZk2OOpUepthxqhG6SajnKAJck7Zsn37klezO', 'User', 2, 0, '2020-09-14 06:27:03', '2020-09-14 06:27:03'),
(13, 'user2@gmail.com', '$2b$10$Ze6Ggyd6bG5bEoEDhwDUEeRhLCE902Ng82UL4uCaKp.9wDfCvpOKu', 'Users2', 2, 1, '2020-09-14 06:30:10', '2020-09-14 06:30:10'),
(14, 'mawar@gmail.com', '$2b$10$IsDXYEtPmbNgPwqWPIFIv.f1jXpZolAu/np3ijKixkGpyzZ2/ZoTC', 'Mawar', 2, 1, '2020-10-13 05:07:28', '2020-10-13 05:07:28');

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
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT untuk tabel `histories`
--
ALTER TABLE `histories`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=304;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
