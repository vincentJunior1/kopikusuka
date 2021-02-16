-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2021 at 12:32 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `beginer_backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `category_updated_at` datetime NOT NULL,
  `category_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_created_at`, `category_updated_at`, `category_status`) VALUES
(1, 'makanan', '2020-12-08 16:04:44', '0000-00-00 00:00:00', 1),
(2, 'minuman', '2020-12-08 16:04:44', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cupon`
--

CREATE TABLE `cupon` (
  `cupon_id` int(11) NOT NULL,
  `cupon_name` varchar(255) NOT NULL,
  `cupon_discount` int(11) NOT NULL,
  `cupon_description` text NOT NULL,
  `cupon_price` int(11) NOT NULL,
  `size_id` varchar(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `delivery_method_id` varchar(11) NOT NULL,
  `cupon_code` varchar(11) NOT NULL,
  `cupon_image` varchar(255) NOT NULL,
  `cupon_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `cupon_updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `cupon_started_at` datetime NOT NULL,
  `cupon_ended_at` datetime NOT NULL,
  `cupon_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cupon`
--

INSERT INTO `cupon` (`cupon_id`, `cupon_name`, `cupon_discount`, `cupon_description`, `cupon_price`, `size_id`, `category_id`, `delivery_method_id`, `cupon_code`, `cupon_image`, `cupon_created_at`, `cupon_updated_at`, `cupon_started_at`, `cupon_ended_at`, `cupon_status`) VALUES
(1, 'Hallowen Lewat', 100, 'apa aja', 0, '', 0, '', '', '', '2020-12-11 00:00:00', '2020-12-14 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(2, 'Hallowen Lewat2', 100, 'apa aja', 0, '', 0, '', '', '', '2020-12-11 00:00:00', '2020-12-11 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(3, 'ChristMas Party', 20, 'lkjdfklsadjfklsajlkfdjs', 0, '', 0, '', '', '', '2020-12-11 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(4, 'Hallowen Lewat', 100, 'apa aja', 0, '', 0, '', '', '', '2020-12-11 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(6, 'Happy Chineese new year', 20, 'GONG XI FAT CHAI', 0, '', 0, '', '', '', '2020-12-14 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(7, 'undefined', 0, 'undefined', 0, '', 0, '', '', '', '2020-12-28 00:00:00', '2021-02-12 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(8, 'Happy Friday', 50, 'Friday Discount Get Your Coffee And Pay Half Price', 0, '', 0, '', '', '', '2020-12-28 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(9, 'Happy New Year', 50, 'Ini Nyoba Edit Data aja', 15000, '', 0, '', 'Oke', '', '2020-12-30 00:00:00', '2021-02-12 00:00:00', '2021-02-12 00:00:00', '2021-02-19 00:00:00', 1),
(10, 'GK lapar', 30, 'gk lapar', 0, '', 0, '', '', '2021-01-08T03-47-14.421Z$_57.jpg', '2021-01-08 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(11, 'asdasdasd', 45, 'sadasdasdasd', 0, '', 0, '', '', '', '2021-01-08 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(12, 'Yuk Tahun Baruan', 35, 'Diskon Tahun baruan khusus 3 hari doang loh. yuk buruan ikut jangan sampe ketinggalan', 0, '4,5,6', 1, '2', '', '2021-01-08T05-00-00.390Zasdddd.png', '2021-01-08 00:00:00', '0000-00-00 00:00:00', '2021-01-08 00:00:00', '2021-01-15 00:00:00', 1),
(13, 'Tahun Baru', 50, 'New year', 25000, '1,2,3', 2, '1,2', '', '', '2021-01-12 00:00:00', '0000-00-00 00:00:00', '2021-01-12 00:00:00', '2021-01-20 00:00:00', 1),
(14, 'Gongxi Fat Chai', 50, 'asdasd', 15000, '1,2,3', 2, '1,2', '', '', '2021-02-12 00:00:00', '0000-00-00 00:00:00', '2021-02-12 00:00:00', '2021-02-26 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `delivery_method`
--

CREATE TABLE `delivery_method` (
  `delivery_method_id` int(11) NOT NULL,
  `delivery_method_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `delivery_method`
--

INSERT INTO `delivery_method` (`delivery_method_id`, `delivery_method_type`) VALUES
(1, 'Home Delivery'),
(2, 'Dine In'),
(3, 'Take Away');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `history_id` int(11) NOT NULL,
  `history_invoice` varchar(255) NOT NULL,
  `history_tax` int(11) NOT NULL,
  `history_delivery_price` int(11) NOT NULL,
  `history_subtotal` int(11) NOT NULL,
  `history_status` int(1) NOT NULL,
  `payment_method_id` varchar(11) NOT NULL,
  `history_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`history_id`, `history_invoice`, `history_tax`, `history_delivery_price`, `history_subtotal`, `history_status`, `payment_method_id`, `history_created_at`, `user_id`) VALUES
(1, 'KKS-1', 0, 0, 3000000, 1, '0', '2020-11-12 00:00:00', 0),
(2, 'KKS-2', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(3, 'KKS-3', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(4, 'KKS-4', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(5, 'KKS-5', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(6, 'KKS-6', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(7, 'KKS-7', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(8, 'KKS-8', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(9, 'KKS-9', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(10, 'KKS-10', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(11, 'KKS-11', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(12, 'KKS-12', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(13, 'KKS-13', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(14, 'KKS-14', 0, 0, 3000000, 1, '0', '2020-12-12 00:00:00', 0),
(15, 'KKS-15', 0, 0, 3000000, 1, '0', '2020-12-27 00:00:00', 0),
(16, 'KKS-16', 0, 0, 3000000, 1, '0', '2020-12-28 00:00:00', 0),
(17, 'KKS-17', 0, 0, 4000000, 1, '0', '2020-12-29 00:00:00', 0),
(18, 'KKS-18', 0, 0, 4000000, 1, '0', '2020-12-29 00:00:00', 0),
(19, 'KKS-19', 0, 0, 4000000, 1, '0', '2020-12-29 00:00:00', 0),
(20, 'KKS-20', 6100, 10000, 77100, 1, '0', '2021-01-10 00:00:00', 1),
(21, 'KKS-21', 6100, 10000, 77100, 1, 'Bank Accoun', '2021-01-10 00:00:00', 1),
(22, 'KKS-22', 6100, 10000, 77100, 1, 'cash', '2021-01-10 00:00:00', 1),
(23, 'KKS-23', 3000, 10000, 43000, 1, 'Bank Accoun', '2021-01-12 00:00:00', 5),
(24, 'KKS-24', 4800, 10000, 62800, 1, 'Bank Accoun', '2021-02-15 00:00:00', 5),
(25, 'KKS-25', 9600, 10000, 115600, 1, 'Bank Accoun', '2021-02-15 00:00:00', 5),
(26, 'KKS-26', 6000, 10000, 76000, 1, 'Cash On Del', '2021-02-16 00:00:00', 5),
(27, 'KKS-27', 4800, 10000, 62800, 1, 'Bank Accoun', '2021-02-16 17:44:09', 7);

-- --------------------------------------------------------

--
-- Table structure for table `history_detail`
--

CREATE TABLE `history_detail` (
  `history_detail_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `history_detail_quantity` int(11) NOT NULL,
  `history_detail_price` int(11) NOT NULL,
  `size_product` varchar(11) NOT NULL,
  `history_detail_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `history_detail_status` int(11) NOT NULL,
  `history_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history_detail`
--

INSERT INTO `history_detail` (`history_detail_id`, `product_name`, `history_detail_quantity`, `history_detail_price`, `size_product`, `history_detail_created_at`, `history_detail_status`, `history_id`) VALUES
(1, '1', 2, 1000000, '0', '2020-12-12 00:00:00', 1, 11),
(2, '1', 2, 1000000, '0', '2020-12-12 00:00:00', 1, 12),
(3, '1', 2, 1000000, '0', '2020-12-12 00:00:00', 1, 12),
(4, '1', 2, 2000000, '0', '2020-12-12 00:00:00', 1, 13),
(5, '1', 2, 2000000, '0', '2020-12-12 00:00:00', 1, 13),
(6, '1', 2, 2000000, '0', '2020-12-12 00:00:00', 1, 14),
(7, '1', 2, 2000000, '0', '2020-12-12 00:00:00', 1, 14),
(8, '1', 2, 2000000, '0', '2020-12-12 00:00:00', 1, 15),
(9, '1', 2, 2000000, '0', '2020-12-12 00:00:00', 1, 15),
(10, '1', 2, 2000000, '0', '2020-12-12 00:00:00', 1, 16),
(11, '2', 1, 1000000, '0', '2020-12-12 00:00:00', 1, 16),
(12, '1', 3, 3000000, '2', '2020-12-12 00:00:00', 1, 17),
(13, '2', 1, 1000000, '0', '2020-12-12 00:00:00', 1, 17),
(14, '1', 3, 3000000, '0', '2020-12-12 00:00:00', 1, 18),
(15, '2', 1, 1000000, '0', '2020-12-12 00:00:00', 1, 18),
(16, '1', 3, 3000000, '0', '2020-12-12 00:00:00', 1, 19),
(17, '2', 1, 1000000, '0', '2020-12-12 00:00:00', 1, 19),
(18, 'Brownies', 1, 31000, 'Small', '2021-01-10 00:00:00', 1, 20),
(19, 'Hot Mochaino', 1, 30000, '500 Gram', '2021-01-10 00:00:00', 1, 20),
(20, 'Brownies', 1, 31000, 'Small', '2021-01-10 00:00:00', 1, 21),
(21, 'Brownies', 1, 31000, 'Small', '2021-01-10 00:00:00', 1, 22),
(22, 'Hot Mochaino', 1, 30000, '500 Gram', '2021-01-10 00:00:00', 1, 22),
(23, 'Hot Mochaino', 1, 30000, '250 Gram', '2021-01-12 00:00:00', 1, 23),
(24, 'Rising Oat Bread', 2, 24000, '250 Gram', '2021-02-15 00:00:00', 1, 24),
(25, 'Rising Oat Bread', 4, 24000, '500 Gram', '2021-02-15 00:00:00', 0, 25),
(26, 'Hot Mochaino', 2, 30000, '250 Gram', '2021-02-16 00:00:00', 1, 26),
(27, 'Rising Oat Bread', 2, 24000, '250 Gram', '2021-02-16 17:44:09', 1, 27);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_desc` text NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `size_id` varchar(255) NOT NULL,
  `product_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `product_updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `product_status` int(1) NOT NULL,
  `delivery_method_id` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `product_name`, `product_price`, `product_desc`, `product_image`, `size_id`, `product_created_at`, `product_updated_at`, `product_status`, `delivery_method_id`) VALUES
(1, 1, 'Rising Oat Bread', 24000, 'Low Bread Calorie Made From Fresh Oat. This is for who love bread and want keep your body healthy./', '2021-02-13T07-46-14.935Z$_57.jpg', '1,2', '2020-12-08 10:29:02', '2021-02-13 07:46:14', 1, '1,3'),
(2, 2, 'macha latte', 22000, 'Sweet Macha Latte who love Macha this is the great choice for you grab it fast.', '', '0', '2020-12-09 07:56:19', '2021-01-06 06:08:03', 1, '0'),
(5, 1, 'Pici Geming', 1100000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-09 10:36:11', '0000-00-00 00:00:00', 0, '0'),
(6, 1, 'kipas Geming', 1100000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-09 10:36:18', '0000-00-00 00:00:00', 0, '0'),
(8, 1, 'Chicken Wings', 35000, 'Korean Chicken wings, marinated with gochujang paste.', '', '0', '2020-12-16 04:32:40', '2021-01-06 06:22:55', 1, '0'),
(9, 2, 'Caramel Latte', 30000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-16 04:36:48', '0000-00-00 00:00:00', 1, '0'),
(12, 1, 'Expreso', 20000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-16 06:35:46', '2021-01-10 07:47:13', 1, '0'),
(13, 2, 'Caramel Latte', 30000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-16 04:36:48', '0000-00-00 00:00:00', 0, '0'),
(14, 1, 'Chicken Wings', 45000, 'asdfasdfasdfadsf', '2020-12-24T07-30-04.666ZScreenshot_4.jpg', '', '2020-12-24 07:30:04', '0000-00-00 00:00:00', 0, '0'),
(15, 1, 'Hot Americano', 30000, 'asdfasdfasdfadsf', '2020-12-24T07-31-11.317ZScreenshot_4.jpg', '', '2020-12-24 07:31:11', '0000-00-00 00:00:00', 0, '0'),
(16, 1, 'Ice Americano', 30000, 'asdfasdfasdfadsf', '2020-12-24T08-04-56.047ZScreenshot_4.jpg', '', '2020-12-24 08:04:56', '0000-00-00 00:00:00', 0, '0'),
(17, 2, 'Coffee Latte', 30000, 'Ice Americano Who love coffee so much.\nRoasted Artisan Beans From Our Best Supplier\nMake Sure Grab it Fast', '2020-12-24T09-37-59.212Zchicken-wings.png', '4,5,6', '2020-12-24 09:04:57', '2021-01-03 13:08:04', 0, '0'),
(18, 2, 'V 60 Coffee Premium', 30000, 'Happy', '', '1,2', '2021-01-02 08:03:20', '0000-00-00 00:00:00', 1, '1,2,3'),
(19, 2, 'Caramel Machiato', 35000, 'Hello', '', '1,2,3', '2021-01-05 10:37:01', '0000-00-00 00:00:00', 1, '1,2'),
(20, 1, 'Hot Mochaino', 30000, 'Heiooo', '2021-01-05T10-52-08.899Zhensam buka nekopara.png', '1,2', '2021-01-05 10:52:08', '0000-00-00 00:00:00', 1, '1,2'),
(21, 1, 'Crispy Pork', 90000, 'Crispy Pork Uncle roger love this ', '2021-01-06T07-33-48.839Zdatacart.jpg', ',,,,5,6', '2021-01-06 07:33:48', '0000-00-00 00:00:00', 0, '1,2,3'),
(22, 1, 'asdasdas', 123123123, 'aasdasdasdasd', '', '1,3', '2021-01-06 08:24:38', '0000-00-00 00:00:00', 0, '4,6'),
(23, 2, 'Brownies', 31000, 'Chocolate cake ', '2021-01-06T08-28-50.953Zasdddd.png', '4,6', '2021-01-06 08:28:50', '2021-01-06 08:36:21', 1, '2,3'),
(24, 1, 'Hot Americano', 25000, '', '2021-01-12T06-27-34.462Zdatacart.jpg', '1', '2021-01-12 06:27:34', '0000-00-00 00:00:00', 1, '2,3'),
(25, 1, 'Hot Americano', 25000, 'hot', '2021-01-12T06-28-39.185Zdatacart.jpg', '2', '2021-01-12 06:28:39', '0000-00-00 00:00:00', 0, '2,3'),
(26, 1, 'hello', 24000, 'SKDFLKAJSDKA', '2021-01-12T06-52-53.509Zdatacart.jpg', '2', '2021-01-12 06:52:53', '0000-00-00 00:00:00', 0, '2,3'),
(27, 1, 'ES Kopi Susu', 13000, 'Kopi susu enak buat di minum siang siang saat panas panasnya', '2021-02-16T10-57-56.561Zapajaa.png', '1,3', '2021-02-16 10:57:56', '2021-02-16 17:57:56', 1, '2');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `size_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `size_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`size_id`, `category_id`, `size_type`) VALUES
(1, 1, '250 Gram'),
(2, 1, '500 Gram'),
(3, 1, '750 Gram'),
(4, 2, 'Small'),
(5, 2, 'Medium'),
(6, 2, 'Large');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_code` varchar(255) DEFAULT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_firstname` varchar(255) NOT NULL,
  `user_lastname` varchar(255) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_gender` int(11) NOT NULL,
  `user_birthday` datetime NOT NULL DEFAULT current_timestamp(),
  `user_password` varchar(255) NOT NULL,
  `user_image` varchar(255) DEFAULT NULL,
  `user_role` int(11) NOT NULL,
  `user_phone` varchar(13) DEFAULT NULL,
  `user_status` int(11) NOT NULL,
  `user_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_code`, `user_name`, `user_email`, `user_firstname`, `user_lastname`, `user_address`, `user_gender`, `user_birthday`, `user_password`, `user_image`, `user_role`, `user_phone`, `user_status`, `user_created_at`, `user_updated_at`) VALUES
(2, NULL, 'Shincai', 'liekian71@gmail.com', 'Vincent', 'Junior', 'Harapan Indah Bekasi', 1, '2001-06-26 00:00:00', '$2b$10$7MiQgcWZbQ00aU6I8h4HS.fnRX7sgVf.wq/jpF/6qsvN/IQBaJYOy', '2021-02-12T10-34-53.932Z$_57.jpg', 1, '0', 1, '2020-12-23 16:14:42', '2021-02-12 10:37:58'),
(4, NULL, 'User', 'asd@gmail.com', 'User', 'User', 'Location', 1, '2021-01-04 00:00:00', '$2b$10$Xv8t.WDTfQu/5azze1EwO.HyTbf0u..xHqjzZBY4fI7qV2hjeHtkS', '', 0, '', 1, '2021-01-04 14:46:03', '0000-00-00 00:00:00'),
(5, NULL, 'Shincai', 'as@gmail.com', 'Vincent', 'Kepo', 'Harapan Indah Bekaso', 1, '2004-06-15 00:00:00', '$2b$10$hJMQoqYpKNslVi4ZuVFOh.Fi99fp3h1XicjfijVmywKSjHsgwP1EO', '2021-01-12T06-25-00.549ZScreenshot_7.jpg', 0, '', 1, '2021-01-12 13:19:09', '2021-01-12 06:25:00'),
(7, 'code', 'User', 'vincent_cars@yahoo.com', 'User', 'User', 'Location', 1, '2021-02-16 09:20:40', '$2b$10$vtckC0jL3Bpc.vXdAbPPgeBKsbzpxSO2hmexSQB0a6LY0DytGYedW', '2021-02-16T10-02-18.234Zkain.jpg', 0, NULL, 1, '2021-02-16 16:20:54', '2021-02-16 10:02:18'),
(8, '', 'User', 'toastermedia26@gmail.com', 'User', 'User', 'Location', 1, '2021-02-16 09:22:01', '$2b$10$SErR7oOLv5wlyTPD8BQ7cufiOCU65mZNEDoWK8srLso2P6iLwWrR.', NULL, 0, NULL, 1, '2021-02-16 16:22:15', '2021-02-16 16:22:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `cupon`
--
ALTER TABLE `cupon`
  ADD PRIMARY KEY (`cupon_id`);

--
-- Indexes for table `delivery_method`
--
ALTER TABLE `delivery_method`
  ADD PRIMARY KEY (`delivery_method_id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`history_id`);

--
-- Indexes for table `history_detail`
--
ALTER TABLE `history_detail`
  ADD PRIMARY KEY (`history_detail_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`size_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cupon`
--
ALTER TABLE `cupon`
  MODIFY `cupon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `delivery_method`
--
ALTER TABLE `delivery_method`
  MODIFY `delivery_method_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `history_detail`
--
ALTER TABLE `history_detail`
  MODIFY `history_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
