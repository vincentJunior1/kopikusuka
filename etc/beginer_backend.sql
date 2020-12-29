-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2020 at 10:02 AM
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
  `cupon_image` varchar(255) NOT NULL,
  `cupon_created_at` date NOT NULL DEFAULT current_timestamp(),
  `cupon_updated_at` date NOT NULL,
  `cupon_started_at` date NOT NULL,
  `cupon_ended_at` date NOT NULL,
  `cupon_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cupon`
--

INSERT INTO `cupon` (`cupon_id`, `cupon_name`, `cupon_discount`, `cupon_description`, `cupon_image`, `cupon_created_at`, `cupon_updated_at`, `cupon_started_at`, `cupon_ended_at`, `cupon_status`) VALUES
(1, 'Hallowen Lewat', 100, 'apa aja', '', '2020-12-11', '2020-12-14', '0000-00-00', '0000-00-00', 1),
(2, 'Hallowen Lewat2', 100, 'apa aja', '', '2020-12-11', '2020-12-11', '0000-00-00', '0000-00-00', 0),
(3, 'ChristMas Party', 20, 'lkjdfklsadjfklsajlkfdjs', '', '2020-12-11', '0000-00-00', '0000-00-00', '0000-00-00', 0),
(4, 'Hallowen Lewat', 100, 'apa aja', '', '2020-12-11', '0000-00-00', '0000-00-00', '0000-00-00', 1),
(6, 'Happy Chineese new year', 20, 'GONG XI FAT CHAI', '', '2020-12-14', '0000-00-00', '0000-00-00', '0000-00-00', 1),
(7, 'Happy New Year', 50, 'Ini Nyoba Edit Data', '2020-12-28T11-49-29.466ZScreenshot_3.jpg', '2020-12-28', '2020-12-28', '0000-00-00', '0000-00-00', 1),
(8, 'Happy Friday', 50, 'Friday Discount Get Your Coffee And Pay Half Price', '', '2020-12-28', '0000-00-00', '0000-00-00', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `delivery_method`
--

CREATE TABLE `delivery_method` (
  `delivery_method_id` int(11) NOT NULL,
  `delivery_method_type` varchar(255) NOT NULL,
  `delivery_method_created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `history_id` int(11) NOT NULL,
  `history_invoice` varchar(255) NOT NULL,
  `history_tax` int(11) NOT NULL,
  `history_devlivery_price` int(11) NOT NULL,
  `history_subtotal` int(11) NOT NULL,
  `history_status` int(1) NOT NULL,
  `payment_method_id` int(11) NOT NULL,
  `history_created_at` date NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`history_id`, `history_invoice`, `history_tax`, `history_devlivery_price`, `history_subtotal`, `history_status`, `payment_method_id`, `history_created_at`, `user_id`) VALUES
(1, 'KKS-1', 0, 0, 3000000, 1, 0, '2020-11-12', 0),
(2, 'KKS-2', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(3, 'KKS-3', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(4, 'KKS-4', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(5, 'KKS-5', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(6, 'KKS-6', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(7, 'KKS-7', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(8, 'KKS-8', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(9, 'KKS-9', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(10, 'KKS-10', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(11, 'KKS-11', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(12, 'KKS-12', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(13, 'KKS-13', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(14, 'KKS-14', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(15, 'KKS-15', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(16, 'KKS-16', 0, 0, 3000000, 1, 0, '2020-12-12', 0),
(17, 'KKS-17', 0, 0, 4000000, 1, 0, '2020-12-12', 0),
(18, 'KKS-18', 0, 0, 4000000, 1, 0, '2020-12-12', 0),
(19, 'KKS-19', 0, 0, 4000000, 1, 0, '2020-12-12', 0);

-- --------------------------------------------------------

--
-- Table structure for table `history_detail`
--

CREATE TABLE `history_detail` (
  `history_detail_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `history_detail_quantity` int(11) NOT NULL,
  `history_detail_price` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `history_detail_created_at` date NOT NULL DEFAULT current_timestamp(),
  `history_detail_status` int(11) NOT NULL,
  `history_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history_detail`
--

INSERT INTO `history_detail` (`history_detail_id`, `product_id`, `history_detail_quantity`, `history_detail_price`, `size_id`, `history_detail_created_at`, `history_detail_status`, `history_id`) VALUES
(1, 1, 2, 1000000, 0, '2020-12-12', 1, 11),
(2, 1, 2, 1000000, 0, '2020-12-12', 1, 12),
(3, 1, 2, 1000000, 0, '2020-12-12', 1, 12),
(4, 1, 2, 2000000, 0, '2020-12-12', 1, 13),
(5, 1, 2, 2000000, 0, '2020-12-12', 1, 13),
(6, 1, 2, 2000000, 0, '2020-12-12', 1, 14),
(7, 1, 2, 2000000, 0, '2020-12-12', 1, 14),
(8, 1, 2, 2000000, 0, '2020-12-12', 1, 15),
(9, 1, 2, 2000000, 0, '2020-12-12', 1, 15),
(10, 1, 2, 2000000, 0, '2020-12-12', 1, 16),
(11, 2, 1, 1000000, 0, '2020-12-12', 1, 16),
(12, 1, 3, 3000000, 2, '2020-12-12', 1, 17),
(13, 2, 1, 1000000, 0, '2020-12-12', 1, 17),
(14, 1, 3, 3000000, 0, '2020-12-12', 1, 18),
(15, 2, 1, 1000000, 0, '2020-12-12', 1, 18),
(16, 1, 3, 3000000, 0, '2020-12-12', 1, 19),
(17, 2, 1, 1000000, 0, '2020-12-12', 1, 19);

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `payment_method_id` int(11) NOT NULL,
  `payment_method_type` varchar(255) NOT NULL,
  `payment_method_created_at` date NOT NULL DEFAULT current_timestamp(),
  `payment_method_updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `product_updated_at` datetime NOT NULL,
  `product_status` int(1) NOT NULL,
  `delivery_method_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `product_name`, `product_price`, `product_desc`, `product_image`, `size_id`, `product_created_at`, `product_updated_at`, `product_status`, `delivery_method_id`) VALUES
(1, 1, 'Leptop GEMING', 1000000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '1,2', '2020-12-08 10:29:02', '2020-12-09 09:44:49', 1, 0),
(2, 2, 'MEja Kerja', 1000000, '', '', '0', '2020-12-09 07:56:19', '2020-12-23 07:37:38', 1, 0),
(5, 1, 'Pici Geming', 1100000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-09 10:36:11', '0000-00-00 00:00:00', 1, 0),
(6, 1, 'kipas Geming', 1100000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-09 10:36:18', '0000-00-00 00:00:00', 0, 0),
(8, 1, 'Cold Brew', 2500, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-16 04:32:40', '0000-00-00 00:00:00', 1, 0),
(9, 2, 'Caramel Latte', 30000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-16 04:36:48', '0000-00-00 00:00:00', 1, 0),
(12, 1, 'Leptop GEMING', 1100000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-16 06:35:46', '0000-00-00 00:00:00', 1, 0),
(13, 2, 'Caramel Latte', 30000, 'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.', '', '0', '2020-12-16 04:36:48', '0000-00-00 00:00:00', 1, 0),
(14, 1, 'Chicken Wings', 45000, 'asdfasdfasdfadsf', '2020-12-24T07-30-04.666ZScreenshot_4.jpg', '', '2020-12-24 07:30:04', '0000-00-00 00:00:00', 0, 0),
(15, 1, 'Hot Americano', 30000, 'asdfasdfasdfadsf', '2020-12-24T07-31-11.317ZScreenshot_4.jpg', '', '2020-12-24 07:31:11', '0000-00-00 00:00:00', 0, 0),
(16, 1, 'Ice Americano', 30000, 'asdfasdfasdfadsf', '2020-12-24T08-04-56.047ZScreenshot_4.jpg', '', '2020-12-24 08:04:56', '0000-00-00 00:00:00', 0, 0),
(17, 2, 'Coffee Latte', 30000, 'Ice Americano Who love coffee so much.\nRoasted Artisan Beans From Our Best Supplier', '2020-12-24T09-37-59.212Zchicken-wings.png', '1,2,3', '2020-12-24 09:04:57', '2020-12-24 09:37:59', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `size_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `size_type` varchar(255) NOT NULL,
  `size_created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`size_id`, `category_id`, `size_type`, `size_created_at`) VALUES
(1, 1, '250 Gram', '0000-00-00'),
(2, 1, '500 Gram', '0000-00-00'),
(3, 1, '750 Gram', '0000-00-00'),
(4, 2, 'Small', '0000-00-00'),
(5, 2, 'Medium', '0000-00-00'),
(6, 2, 'Large', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_firstname` varchar(255) NOT NULL,
  `user_lastname` varchar(255) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_gender` int(11) NOT NULL,
  `user_birthday` date NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_role` int(11) NOT NULL,
  `user_status` int(11) NOT NULL,
  `user_created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_firstname`, `user_lastname`, `user_address`, `user_gender`, `user_birthday`, `user_password`, `user_role`, `user_status`, `user_created_at`, `user_updated_at`) VALUES
(1, 'Vincent Junior', 'vincent_cars@yahoo.com', 'vincent', 'junior', 'Bekasi Harapan Indah Block wz 12 jln delima 2', 1, '2001-06-26', '$2b$10$NRxDv4Nm2KVfYlzJ1dhAIeLGM8KpFnZyON.WHWTcqwsJqmeybKEnK', 1, 1, '2020-12-22 14:49:24', '2020-12-28 08:13:04'),
(2, 'Shincai', 'liekian71@gmail.com', '', '', '', 0, '0000-00-00', '$2b$10$7MiQgcWZbQ00aU6I8h4HS.fnRX7sgVf.wq/jpF/6qsvN/IQBaJYOy', 0, 1, '2020-12-23 16:14:42', '0000-00-00 00:00:00');

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
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`payment_method_id`);

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
  MODIFY `cupon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `delivery_method`
--
ALTER TABLE `delivery_method`
  MODIFY `delivery_method_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `history_detail`
--
ALTER TABLE `history_detail`
  MODIFY `history_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `payment_method_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
