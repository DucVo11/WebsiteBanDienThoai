-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2022 at 11:18 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `n3store`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `level` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `admin_users`
--

INSERT INTO `admin_users` (`id`, `name`, `email`, `password`, `level`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'N3Admin', 'n3store999@gmail.com', '$2y$10$q3UFgqoa.mt5Yx1dVEBT.ee6CZkLk7p7U4Y.kbYQh6PLJ/mxgenJm', '100', 'SRc2qzRJahfYodoJrUuoMVGjqcuHD2tr1fTWp6TWLaLU2AsP2yB6ec6h9TK0', '2022-05-02 00:38:38', '2022-05-03 19:02:58');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `url` text COLLATE utf8_unicode_ci NOT NULL,
  `url_banner` text COLLATE utf8_unicode_ci NOT NULL,
  `pos` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `parent_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `slug`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, '??i???n tho???i', 'dien-thoai', '0', '2016-11-23 20:01:57', '2022-05-02 06:49:30'),
(3, ' Asus - ZenFones', 'asus-zenfones', '1', '2016-11-23 20:17:01', '2022-05-02 06:49:36'),
(4, ' Samsung', 'samsung', '1', '2016-11-23 20:17:39', '2022-05-02 06:49:43'),
(13, 'Tin Khuy???n M??i', 'tin-khuyen-mai', '0', '2016-11-24 01:38:46', '2022-05-02 06:49:09'),
(14, 'Qu???ng C??o', 'quang-cao', '0', '2016-11-24 01:38:57', '2022-05-02 06:49:20'),
(15, ' Apple ', 'apple', '1', '2016-11-24 01:56:05', '2022-05-02 06:49:52'),
(16, ' OPPO', 'oppo', '1', '2016-11-25 02:00:27', '2022-05-02 06:49:57'),
(46, 'Dien thoai', 'dien-thoai', '1', '2022-05-03 04:59:44', '2022-05-03 04:59:44'),
(48, 'Khuy???n m??i 30/4', 'khuyen-mai-304', '13', '2022-05-04 01:03:32', '2022-05-04 01:03:32'),
(49, 'Khuy???n m??i 5/5', 'khuyen-mai-55', '13', '2022-05-04 01:03:58', '2022-05-04 01:03:58');

-- --------------------------------------------------------

--
-- Table structure for table `detail_img`
--

CREATE TABLE `detail_img` (
  `id` int(10) UNSIGNED NOT NULL,
  `images_url` text COLLATE utf8_unicode_ci NOT NULL,
  `pro_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `detail_img`
--

INSERT INTO `detail_img` (`id`, `images_url`, `pro_id`, `created_at`, `updated_at`) VALUES
(68, '1651649530_iphone-12-purpless-5-650x650.jpg', 22, '2022-05-04 00:32:10', '2022-05-04 00:32:10'),
(69, '1651649530_iphone-12-purpless-4-650x650.jpg', 22, '2022-05-04 00:32:10', '2022-05-04 00:32:10'),
(70, '1651649530_iphone-12-purpless-2-650x650.jpg', 22, '2022-05-04 00:32:10', '2022-05-04 00:32:10'),
(71, '1651649530_iphone-12-purpless-1-650x650.jpg', 22, '2022-05-04 00:32:10', '2022-05-04 00:32:10'),
(72, '1651649530_iphone-12-purpless-6-650x650.jpg', 22, '2022-05-04 00:32:10', '2022-05-04 00:32:10'),
(73, '1651649530_iphone-12-purpless-7-650x650.jpg', 22, '2022-05-04 00:32:10', '2022-05-04 00:32:10'),
(74, '1651655153_iphone-13-pro-grey-650x650.png', 94, '2022-05-04 02:05:53', '2022-05-04 02:05:53'),
(75, '1651655153_loa-red.png', 94, '2022-05-04 02:05:53', '2022-05-04 02:05:53');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('create_users_table', 1),
('create_password_resets_table', 1),
('create_admin_users_table', 1),
('create_categor_table', 1),
('create_products_table', 1),
('create_pro_details_table', 1),
('create_detal_img_table', 1),
('create_news_table', 1),
('create_banners_table', 1),
('create_oders_table', 2),
('create_oders_detail_table', 3),
('create_oders_table', 4),
('create_oders_detail_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `intro` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `full` text COLLATE utf8_unicode_ci NOT NULL,
  `images` text COLLATE utf8_unicode_ci NOT NULL,
  `tag` text COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `source` text COLLATE utf8_unicode_ci NOT NULL,
  `cat_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `slug`, `author`, `intro`, `full`, `images`, `tag`, `status`, `source`, `cat_id`, `user_id`, `created_at`, `updated_at`) VALUES
(23, 'Khuy???n m??i 30/4 - 1/5', 'khuyen-mai-304-15', 'N3Admin', '<p>Khuy???n m&atilde;i ???p l??ng iphone 13</p>\r\n', '', '1651655683_oplung-2400-600-1920x480.png', 'Khuy???n m??i', 1, 'N3store', 48, 1, '2022-05-04 02:17:11', '2022-05-04 02:17:11');

-- --------------------------------------------------------

--
-- Table structure for table `oders`
--

CREATE TABLE `oders` (
  `id` int(10) UNSIGNED NOT NULL,
  `c_id` int(10) UNSIGNED NOT NULL,
  `qty` int(11) NOT NULL,
  `sub_total` float NOT NULL,
  `total` float NOT NULL,
  `status` int(11) NOT NULL,
  `type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `note` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oders_detail`
--

CREATE TABLE `oders_detail` (
  `id` int(10) UNSIGNED NOT NULL,
  `pro_id` int(10) UNSIGNED NOT NULL,
  `qty` int(11) NOT NULL,
  `o_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `intro` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `promo1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `promo2` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `promo3` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `packet` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `images` text COLLATE utf8_unicode_ci NOT NULL,
  `r_intro` text COLLATE utf8_unicode_ci NOT NULL,
  `review` text COLLATE utf8_unicode_ci NOT NULL,
  `tag` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` float NOT NULL,
  `status` int(11) NOT NULL,
  `cat_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `intro`, `promo1`, `promo2`, `promo3`, `packet`, `images`, `r_intro`, `review`, `tag`, `price`, `status`, `cat_id`, `user_id`, `created_at`, `updated_at`) VALUES
(22, 'Iphone 12', 'iphone-12', 'C??ng ngh??? m??n h??nh:  OLED, H??? ??i???u h??nh:  iOS 15, Chip x??? l?? (CPU):  Apple A14 Bionic 6 nh??n', 'Tr??? g??p 0%', 'Ho???c T???ng Vali Lock & Lock ', 'Ho???c T???ng Combo Qu?? (Bao da S-View + Tai nghe Level Active)', ' H???p, S???c, Tai nghe, S??ch h?????ng d???n, C??p OTG, C??p, C??y l???y sim ', '1651649530_iphone-12-purple-3-650x650.png', '<p>Trong nh???ng th&aacute;ng cu???i n??m 2020,&nbsp;<a href=\"https://www.thegioididong.com/apple\" target=\"_blank\" title=\"Tham kh???o s???n ph???m ch??nh h??ng c???a Apple t???i Th??? Gi???i Di ?????ng\">Apple</a>&nbsp;??&atilde; ch&iacute;nh th???c gi???i thi???u ?????n ng?????i d&ugrave;ng c??ng nh?? iFan th??? h??? iPhone&nbsp;12&nbsp;series&nbsp;m???i v???i h&agrave;ng lo???t t&iacute;nh n??ng b???t ph&aacute;, thi???t k??? ???????c l???t x&aacute;c ho&agrave;n to&agrave;n, hi???u n??ng ?????y m???nh m??? v&agrave; m???t trong s??? ??&oacute; ch&iacute;nh l&agrave;&nbsp;<a href=\"https://www.topzone.vn/iphone/iphone-12\" target=\"_blank\" title=\"Tham kh???o th??ng tin s???n ph???m t???i TopZone.vn\">iPhone 12 64GB</a>.</p>\r\n', '<h3>Trong nh???ng th&aacute;ng cu???i n??m 2020,&nbsp;<a href=\"https://www.thegioididong.com/apple\" target=\"_blank\" title=\"Tham kh???o s???n ph???m ch??nh h??ng c???a Apple t???i Th??? Gi???i Di ?????ng\">Apple</a>&nbsp;??&atilde; ch&iacute;nh th???c gi???i thi???u ?????n ng?????i d&ugrave;ng c??ng nh?? iFan th??? h??? iPhone&nbsp;12&nbsp;series&nbsp;m???i v???i h&agrave;ng lo???t t&iacute;nh n??ng b???t ph&aacute;, thi???t k??? ???????c l???t x&aacute;c ho&agrave;n to&agrave;n, hi???u n??ng ?????y m???nh m??? v&agrave; m???t trong s??? ??&oacute; ch&iacute;nh l&agrave;&nbsp;<a href=\"https://www.topzone.vn/iphone/iphone-12\" target=\"_blank\" title=\"Tham kh???o th??ng tin s???n ph???m t???i TopZone.vn\">iPhone 12 64GB</a>.</h3>\r\n\r\n<h3>Hi???u n??ng v?????t xa m???i gi???i h???n</h3>\r\n\r\n<p>Apple ??&atilde; trang b??? con chip m???i nh???t c???a h&atilde;ng (t&iacute;nh ?????n 11/2020) cho iPhone 12 ??&oacute; l&agrave;&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/tim-hieu-ve-chip-apple-a14-bionic-tren-iphone-12-va-ipad-1290695\" target=\"_blank\" title=\"T??m hi???u chip A14 Bionic l?? g???\">A14 Bionic</a>, ???????c s???n xu???t tr&ecirc;n ti???n tr&igrave;nh 5 nm v???i hi???u su???t ???n ?????nh h??n so v???i chip A13 ???????c trang b??? tr&ecirc;n phi&ecirc;n b???n ti???n nhi???m&nbsp;<a href=\"https://www.thegioididong.com/dtdd/iphone-11\" target=\"_blank\" title=\"Tham kh???o ??i???n tho???i iPhone 11 ch??nh h??ng t???i Th??? Gi???i Di ?????ng\">iPhone 11</a>.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-144220-044259.jpg\" onclick=\"return false;\"><img alt=\"Chip A14 Bionic m???nh m??? | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-144220-044259.jpg\" title=\"Chip A14 Bionic m???nh m??? | iPhone 12\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Xem th&ecirc;m:&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/tim-hieu-ve-chip-apple-a14-bionic-tren-iphone-12-va-ipad-1290695\" target=\"_blank\" title=\"T??m hi???u v??? chip Apple A14 Bionic tr??n iPhone 12 v?? iPad Air 2020\">T&igrave;m hi???u v??? chip Apple A14 Bionic tr&ecirc;n iPhone 12 v&agrave; iPad Air 2020</a></p>\r\n\r\n<p>V???i CPU Apple A14 Bionic, b???n c&oacute; th??? d??? d&agrave;ng tr???i nghi???m m???i t???a game v???i nh???ng pha chuy???n c???nh m?????t m&agrave; hay h&agrave;ng lo???t hi???u ???ng ????? h???a tuy???t ?????p ??? m???c ????? h???a cao m&agrave; kh&ocirc;ng lo t&igrave;nh tr???ng gi???t lag.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-18.jpg\" onclick=\"return false;\"><img alt=\"Chi???n game si??u m?????t, ????? h???a tuy???t ?????p | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-18.jpg\" title=\"Chi???n game si??u m?????t, ????? h???a tuy???t ?????p | iPhone 12\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Ch??a h???t, Apple c&ograve;n g&acirc;y b???t ng??? ?????n ng?????i d&ugrave;ng v???i h??? th???ng 5G l???n ?????u ti&ecirc;n ???????c trang b??? tr&ecirc;n nh???ng chi???c&nbsp;<a href=\"https://www.thegioididong.com/dtdd-apple-iphone\" target=\"_blank\" title=\"Tham kh???o iPhone kinh doanh t???i thegioididong.com\">iPhone</a>, cho t???c ????? truy???n t???i d??? li???u nhanh h??n, ???n ?????nh h??n.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-20.jpg\" onclick=\"return false;\"><img alt=\"K???t n???i 5G truy???n t???i d??? li???u nhanh ch??ng | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-20.jpg\" title=\"K???t n???i 5G truy???n t???i d??? li???u nhanh ch??ng | iPhone 12\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>iPhone 12 s??? ch???y tr&ecirc;n h??? ??i???u h&agrave;nh iOS 15 (12/2021)&nbsp;v???i nhi???u t&iacute;nh n??ng h???p d???n nh?? h??? tr??? Widget c??ng nh?? nh???ng n&acirc;ng c???p t???i ??u ph???n m???m ??&aacute;ng k??? mang l???i nh???ng tr???i nghi???m th&uacute; v??? m???i l??? ?????n ng?????i d&ugrave;ng.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-13.jpg\" onclick=\"return false;\"><img alt=\"Kh??m ph?? nh???ng t??nh n??ng m???i h???p d???n tr??n iOS 14 | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-13.jpg\" title=\"Kh??m ph?? nh???ng t??nh n??ng m???i h???p d???n tr??n iOS 14 | iPhone 12\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>C???m camera kh&ocirc;ng ng???ng c???i ti???n</h3>\r\n\r\n<p>iPhone 12 ???????c trang b??? h??? th???ng camera k&eacute;p bao g???m&nbsp;<a href=\"https://www.thegioididong.com/dtdd-camera-goc-rong\" target=\"_blank\" title=\"Tham kh???o ??i???n tho???i c?? camera g??c r???ng t???i Th??? Gi???i Di ?????ng\">camera g&oacute;c r???ng</a>&nbsp;v&agrave; camera si&ecirc;u r???ng c&oacute; c&ugrave;ng ????? ph&acirc;n gi???i l&agrave; 12 MP, ch??? ????? ban ??&ecirc;m (<a href=\"https://www.thegioididong.com/hoi-dap/che-do-chup-dem-night-mode-la-gi-907873\" target=\"_blank\" title=\"T??m hi???u ch??? ????? ch???p ????m Night Mode l?? g???\">Night Mode</a>) tr&ecirc;n b??? ??&ocirc;i camera n&agrave;y c??ng ??&atilde; ???????c n&acirc;ng c???p v??? ph???n c???ng l???n thu???t to&aacute;n x??? l&yacute;, khi ch???p nh???ng b???c ???nh thi???u s&aacute;ng b???n s??? nh???n ???????c k???t qu??? ???n t?????ng v???i m&agrave;u s???c, ????? chi ti???t r&otilde; n&eacute;t ??&aacute;ng kinh ng???c.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-040321-030344.jpg\" onclick=\"return false;\"><img alt=\"C???m camera sau| iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030344.jpg\" title=\"C???m camera sau| iPhone 12\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>B???n c&oacute; th??? kh&aacute;m ph&aacute; th&ecirc;m nh???ng t&iacute;nh n??ng c???a camera tr&ecirc;n iPhone 12 nh?? ch??? ????? smart HDR 3 gi&uacute;p c&acirc;n b???ng y???u t??? &aacute;nh s&aacute;ng trong ???nh, l&agrave;m n???i b???t chi ti???t ?????i t?????ng v&agrave; c&acirc;y c???i trong khi v???n gi??? ???????c m&agrave;u s???c phong ph&uacute; c???a b???u tr???i ngay c??? v&agrave;o bu???i tr??a n???ng g???t.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-9.jpg\" onclick=\"return false;\"><img alt=\"Ch???p ???nh v???i t??nh n??ng smart HDR 3 s???c n??t, ch???t l?????ng | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-9.jpg\" title=\"Ch???p ???nh v???i t??nh n??ng smart HDR 3 s???c n??t, ch???t l?????ng | iPhone 12\" /></a></p>\r\n\r\n<p>Ch??? ????? ch???p ch&acirc;n dung ??&atilde; t???t nay c&ograve;n t???t h??n trong vi???c l&agrave;m m??? h???u c???nh m???t c&aacute;ch ngh??? thu???t ????? d???n h???t s??? t???p trung v&agrave;o ?????i t?????ng m&agrave; b???n mu???n ch???p.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-10.jpg\" onclick=\"return false;\"><img alt=\"N???i b???t ch??? th??? v???i t??nh n??ng ch???p ch??n dung ?????c ????o | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-10.jpg\" title=\"N???i b???t ch??? th??? v???i t??nh n??ng ch???p ch??n dung ?????c ????o | iPhone 12\" /></a></p>\r\n\r\n<p>B???n s??? d??? d&agrave;ng quay video 4K HDR v???i chu???n ??i???n ???nh&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/dolby-vision-la-gi-cac-ung-dung-noi-bat-va-nhung-loai-1226284\" target=\"_blank\" title=\"T??m hi???u Dolby Vision l?? g???\">Dolby Vision</a>&nbsp;v&agrave; ch???nh s???a ngay tr&ecirc;n chi???c ??i???n tho???i c???a m&igrave;nh, b???n c&oacute; th??? ????a video l&ecirc;n TV c???a b???n ????? th?????ng th???c th?????c phim s???c n&eacute;t ch???t l?????ng cao.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-11.jpg\" onclick=\"return false;\"><img alt=\"Quay video ch???t l?????ng ngay c??? trong ??i???u ki???n ??nh s??ng y???u | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-11.jpg\" title=\"Quay video ch???t l?????ng ngay c??? trong ??i???u ki???n ??nh s??ng y???u | iPhone 12\" /></a></p>\r\n\r\n<p>S??? k???t h???p c???a 2 c???m bi???n ch???t l?????ng n&agrave;y ??&atilde; t???o n&ecirc;n m???t h??? th???ng camera chuy&ecirc;n nghi???p kh&ocirc;ng kh&aacute;c g&igrave; nh???ng chi???c m&aacute;y ???nh th???c th???, d??? d&agrave;ng ??em l???i nh???ng b???c h&igrave;nh s???c n&eacute;t tuy???t ?????i, ????? chi ti???t cao v&agrave; ??a d???ng ch??? ????? ch???p cho ng?????i d&ugrave;ng linh ho???t s??? d???ng.</p>\r\n\r\n<h3>Ghi d???u ???n v??? m???t thi???t k???</h3>\r\n\r\n<p>V??? ngo???i h&igrave;nh iPhone 12 c&oacute; thi???t k??? ho&agrave;i ni???m v???i ph???n c???nh ???????c l&agrave;m vu&ocirc;ng v???c t????ng t??? tr&ecirc;n m???u iPhone 4 thay v&igrave; bo cong nh?? iPhone 11.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-040321-030352.jpg\" onclick=\"return false;\"><img alt=\" iPhone 12 c?? thi???t k??? ho??i ni???m t????ng t??? iPhone 4 series\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030352.jpg\" title=\" iPhone 12 c?? thi???t k??? ho??i ni???m t????ng t??? iPhone 4 series\" /></a></p>\r\n\r\n<p>??? m???t tr?????c iPhone 12 ph???n tai th??? ???????c l&agrave;m nh??? g???n h??n v&agrave; c??ng l&agrave; n??i ch???a c???m bi???n Face ID c&oacute; th??? nh???n di???n khu&ocirc;n m???t m???t c&aacute;ch nhanh ch&oacute;ng v&agrave; ch&iacute;nh x&aacute;c.</p>\r\n\r\n<p>Apple c&ograve;n mang ?????n cho ng?????i m???t lo???t gam m&agrave;u c&aacute; t&iacute;nh, ?????c ??&aacute;o tr&ecirc;n nh???ng chi???c iPhone c???a m&igrave;nh ????? ng?????i d&ugrave;ng c&oacute; s??? l???a ch???n ph&ugrave; h???p v???i nh???ng phong c&aacute;ch kh&aacute;c nhau.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-17.jpg\" onclick=\"return false;\"><img alt=\"S??? h???u lo???t gam m??u c?? t??nh | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-17.jpg\" title=\"S??? h???u lo???t gam m??u c?? t??nh | iPhone 12\" /></a></p>\r\n\r\n<p>iPhone 12 ???????c trang b??? m&agrave;n h&igrave;nh Super Retina XDR OLED tr&agrave;n vi???n c&oacute; k&iacute;ch th?????c 6.1 inch, cho b???n kh&ocirc;ng gian tr???i nghi???m l???n c??ng nh?? nh???ng gi&acirc;y ph&uacute;t gi???i tr&iacute; h???p d???n tr&ecirc;n m???t m&agrave;n ???nh v&ocirc; c&ugrave;ng ch???t l?????ng.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-040421-030410.jpg\" onclick=\"return false;\"><img alt=\"M??n h??nh Super Retina XDR OLED 6.1 inch | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040421-030410.jpg\" title=\"M??n h??nh Super Retina XDR OLED 6.1 inch | iPhone 12\" /></a></p>\r\n\r\n<p>M&aacute;y ???????c ch??? t&aacute;c c&oacute; ????? ho&agrave;n thi???n c???c cao v???i thi???t k??? nguy&ecirc;n kh???i, khung nh&ocirc;m v&agrave; m???t sau l&agrave; k&iacute;nh c?????ng l???c cao c???p to&aacute;t l&ecirc;n v??? ngo&agrave;i sang ch???nh c??ng nh?? mang l???i ????? hi???u qu??? an to&agrave;n cao m???i khi s??? d???ng.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-041521-031513.jpg\" onclick=\"return false;\"><img alt=\"????? ho??n thi???n cao, ch???c ch???n cho thi???t b??? | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-041521-031513.jpg\" title=\"????? ho??n thi???n cao, ch???c ch???n cho thi???t b??? | iPhone 12\" /></a></p>\r\n\r\n<p>M???t tr?????c c???a iPhone 12 ???????c ph??? ho&agrave;n to&agrave;n b???i l???p k&iacute;nh c?????ng l???c Ceramic Shield c???ng c&aacute;p, ???????c ??&aacute;nh gi&aacute; l&agrave; c&oacute; ????? b???n cao v&agrave; c???ng c&aacute;p h??n h???u h???t c&aacute;c lo???i m???t k&iacute;nh c&oacute; tr&ecirc;n&nbsp;<a href=\"https://www.thegioididong.com/dtdd\" target=\"_blank\" title=\"Tham kh???o ??i???n tho???i ch??nh h??ng t???i Th??? Gi???i Di ?????ng\">??i???n tho???i th&ocirc;ng minh</a>&nbsp;kh&aacute;c c&oacute; m???t tr&ecirc;n th??? tr?????ng.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-040321-030328.jpg\" onclick=\"return false;\"><img alt=\"L???p k??nh c?????ng l???c Ceramic Shield | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030328.jpg\" title=\"L???p k??nh c?????ng l???c Ceramic Shield | iPhone 12\" /></a></p>\r\n\r\n<p>Xem th&ecirc;m:&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/mat-kinh-ceramic-shield-tren-iphone-12-la-gi-co-xin-so-nhu-1298900\" target=\"_blank\" title=\"M???t k??nh Ceramic Shield tr??n iPhone 12 l?? g??? C?? x???n s?? nh?? qu???ng c??o?\">M???t k&iacute;nh Ceramic Shield tr&ecirc;n iPhone 12 l&agrave; g&igrave;? C&oacute; x???n s&ograve; nh?? qu???ng c&aacute;o?</a></p>\r\n\r\n<p>V&agrave; ????? cho thi???t b??? tr??? n&ecirc;n ho&agrave;n h???o h??n n&ecirc;n kh&ocirc;ng th??? thi???u kh??? n??ng kh&aacute;ng n?????c, b???i chu???n IP68 gi&uacute;p ng?????i d&ugrave;ng y&ecirc;n t&acirc;m s??? d???ng v???i nh???ng bu???i ??i ch??i bi???n m&agrave; kh&ocirc;ng h??? lo chi???c m&aacute;y b??? v&ocirc; n?????c.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-2.jpg\" onclick=\"return false;\"><img alt=\"Kh??ng n?????c b???i chu???n IP68 | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-2.jpg\" title=\"Kh??ng n?????c b???i chu???n IP68 | iPhone 12\" /></a></p>\r\n\r\n<h3>Tr???i nghi???m xuy&ecirc;n su???t, li???n m???ch c??? ng&agrave;y d&agrave;i</h3>\r\n\r\n<p>????? b???n c&oacute; nh???ng gi&acirc;y ph&uacute;t tr???i nghi???m li???n m???ch, Apple ??&atilde; trang b??? m???t vi&ecirc;n pin c&oacute; dung l?????ng 2815 mAh, t&iacute;ch h???p cho kh??? n??ng ti???t ki???m pin gi&uacute;p ng?????i d&ugrave;ng c&oacute; th??? gi???i tr&iacute; ??a ph????ng ti???n l&ecirc;n ?????n 17 gi??? v&agrave; nghe nh???c li&ecirc;n t???c l&ecirc;n ?????n 65 gi???.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-040321-030358.jpg\" onclick=\"return false;\"><img alt=\"Dung l?????ng pin s??? d???ng ????p ???ng ????? m???t ng??y | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030358.jpg\" title=\"Dung l?????ng pin s??? d???ng ????p ???ng ????? m???t ng??y | iPhone 12\" /></a></p>\r\n\r\n<p>V&agrave; kh&ocirc;ng th??? thi???u ??&oacute; ch&iacute;nh l&agrave; t&iacute;nh n??ng s???c nhanh, iPhone 12 c&oacute; kh??? n??ng&nbsp;<a href=\"https://www.thegioididong.com/dtdd-sac-pin-nhanh\" target=\"_blank\" title=\"Tham kh???o ??i???n tho???i c?? s???c pin nhanh t???i Th??? Gi???i Di ?????ng\">s???c pin nhanh</a>&nbsp;qua c&aacute;p c&ocirc;ng su???t 20 W, ch??? trong v&ograve;ng 30 ph&uacute;t th&igrave; chi???c m&aacute;y ??&atilde; c&oacute; th??? s???c ???????c 50% pin. Th&ecirc;m v&agrave;o ??&oacute; l&agrave; kh??? n??ng&nbsp;<a href=\"https://www.thegioididong.com/dtdd-sac-khong-day\" target=\"_blank\" title=\"Tham kh???o ??i???n tho???i c?? s???c kh??ng d??y t???i Th??? Gi???i Di ?????ng\">s???c kh&ocirc;ng d&acirc;y</a>&nbsp;MagSafe v&ocirc; c&ugrave;ng ti???n d???ng.</p>\r\n\r\n<p>L??u &yacute;: C??? s???c kh&ocirc;ng k&egrave;m theo m&aacute;y m&agrave; ph???i mua ri&ecirc;ng.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-16.jpg\" onclick=\"return false;\"><img alt=\"S???c nhanh v?? s???c kh??ng d??y ti???n l???i h???u ??ch | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-16.jpg\" title=\"S???c nhanh v?? s???c kh??ng d??y ti???n l???i h???u ??ch | iPhone 12\" /></a></p>\r\n\r\n<p>Xem th&ecirc;m:&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/cong-nghe-magsafe-magsafe-2-la-gi-co-tren-thiet-bi-nao-cua-1241888\" target=\"_blank\" title=\"MagSafe tr??n iPhone 12 l?? g??? D??ng ????? l??m g?? tr??n c??c thi???t b??? Apple?\">MagSafe tr&ecirc;n iPhone 12 l&agrave; g&igrave;? D&ugrave;ng ????? l&agrave;m g&igrave; tr&ecirc;n c&aacute;c thi???t b??? Apple?</a></p>\r\n\r\n<p>S??? l???t x&aacute;c ?????y m???nh m??? l???n n&agrave;y c???a Apple kh&ocirc;ng ch??? g&acirc;y b???t ng??? ?????n ng?????i d&ugrave;ng m&agrave; c&ograve;n ??&aacute;nh d???u m???t k??? nguy&ecirc;n m???i trong n???n ph&aacute;t tri???n smartphone Apple. V&agrave; ??&acirc;y c??ng ???????c xem l&agrave; m???t trong nh???ng b??? series iPhone m&agrave; Apple ?????t nhi???u t&acirc;m huy???t, m???c ??&iacute;ch v&agrave; ?????y t&iacute;nh n??ng m???nh m??? ch??a t???ng th???y.</p>\r\n', 'Galaxy S7, Galaxy S7,Galaxy S7', 19990000, 1, 15, 1, '2016-11-24 09:39:13', '2022-05-04 01:00:02'),
(94, 'Galaxy S10', 'galaxy-s10', 'C??ng ngh??? m??n h??nh:  OLED, H??? ??i???u h??nh:  iOS 15', 'free 50 ????n h??ng ?????u :)))', '', '', 'C??ng ngh??? m??n h??nh:  OLED, H??? ??i???u h??nh:  iOS 15, Chip x??? l?? (CPU):  Apple A14 Bionic 6 nh??n', '1651655153_iphone-13-pro-grey-200x200.png', '<p>iPhone 13 Pro Max 128 GB - si&ecirc;u ph???m ???????c mong ch??? nh???t ??? n???a cu???i n??m 2021 ?????n t??? Apple. M&aacute;y c&oacute; thi???t k??? kh&ocirc;ng m???y ?????t ph&aacute; khi so v???i ng?????i ti???n nhi???m, b&ecirc;n trong ??&acirc;y v???n l&agrave; m???t s???n ph???m c&oacute; m&agrave;n h&igrave;nh si&ecirc;u ?????p, t???n s??? qu&eacute;t ???????c n&acirc;ng c???p l&ecirc;n 120 Hz m?????t m&agrave;, c???m bi???n camera c&oacute; k&iacute;ch th?????c l???n h??n, c&ugrave;ng hi???u n??ng m???nh m??? v???i s???c m???nh ?????n t??? Apple A15 Bionic, s???n s&agrave;ng c&ugrave;ng b???n chinh ph???c m???i th??? th&aacute;ch.<br />\r\nThi&ecirc;??t k&ecirc;?? ?????ng c???p h&agrave;ng ?????u<br />\r\niPhone m???i k??? th???a thi???t k??? ?????c tr??ng t??? iPhone 12 Pro Max khi s??? h???u khung vi???n vu&ocirc;ng v???c, m???t l??ng k&iacute;nh c&ugrave;ng m&agrave;n h&igrave;nh tai th??? tr&agrave;n vi???n n???m ??? ph&iacute;a tr?????c.</p>\r\n\r\n<p>&nbsp;</p>\r\n', '<h3><a href=\"https://www.thegioididong.com/dtdd/iphone-13-pro-max\" target=\"_blank\" title=\"Tham kh???o gi?? ??i???n tho???i iPhone 13 Pro Max ch??nh h??ng\">iPhone 13 Pro Max 128 GB</a>&nbsp;- si&ecirc;u ph???m ???????c mong ch??? nh???t ??? n???a cu???i n??m 2021 ?????n t???&nbsp;<a href=\"https://www.thegioididong.com/apple\" target=\"_blank\" title=\"Tham kh???o gi?? ??i???n tho???i smartphone iPhone ch??nh h??ng\">Apple</a>. M&aacute;y c&oacute; thi???t k??? kh&ocirc;ng m???y ?????t ph&aacute; khi so v???i ng?????i ti???n nhi???m, b&ecirc;n trong ??&acirc;y v???n l&agrave; m???t s???n ph???m c&oacute; m&agrave;n h&igrave;nh si&ecirc;u ?????p, t???n s??? qu&eacute;t ???????c n&acirc;ng c???p l&ecirc;n 120 Hz m?????t m&agrave;, c???m bi???n camera c&oacute; k&iacute;ch th?????c l???n h??n, c&ugrave;ng hi???u n??ng m???nh m??? v???i s???c m???nh ?????n t??? Apple A15 Bionic, s???n s&agrave;ng c&ugrave;ng b???n chinh ph???c m???i th??? th&aacute;ch.</h3>\r\n', 'iphone, iphone13', 1230000, 1, 4, 1, '2022-05-04 02:05:53', '2022-05-04 02:06:44');

-- --------------------------------------------------------

--
-- Table structure for table `pro_details`
--

CREATE TABLE `pro_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `cpu` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ram` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `screen` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `vga` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `storage` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `exten_memmory` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cam1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cam2` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sim` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `connect` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pin` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `os` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `note` text COLLATE utf8_unicode_ci NOT NULL,
  `pro_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `pro_details`
--

INSERT INTO `pro_details` (`id`, `cpu`, `ram`, `screen`, `vga`, `storage`, `exten_memmory`, `cam1`, `cam2`, `sim`, `connect`, `pin`, `os`, `note`, `pro_id`, `created_at`, `updated_at`) VALUES
(9, 'Apple A14 Bionic 6 nh??n', '4G', 'OLED 1170 x 2532 Pixels', 'Mali-T880 MP12', '64 GB', 'MicroSD (T-Flash)', '12 MP', '2 camera 12 MP', '1 Sim Micro', 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, DLNA, Wi-Fi Direct, Wi-Fi hotspot', '2815 mAh', 'iOS 15', '', 22, '2016-11-24 09:39:13', '2022-05-04 01:00:02'),
(61, 'Apple A14 Bionic 6 nh??n', '4 GB', 'OLED 1170 x 2532 Pixels', 'Ithel', '64 GB', '', '12 MP', '2 camera 12 MP', 'Kh??ng c??', 'usb hdmi', 'Kh??ng c??', 'iOS 15', 'Kh??ng c??', 94, '2022-05-04 02:05:53', '2022-05-04 02:06:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `address`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'V?? Hu???nh ?????c', 'ducvo999@gmail.com', '$2y$10$TEY9mtHYRJ4G9oW.6n9D9.5.eHfae7I1po7iNVE8cNMsEORxtzv0m', '0999999999', 'V??nh Long', 1, 'jFFpU4F9xl8TLtjS6DPBiI8qWugcLLXQWMtRSWx9UtBoB3TrjGpx66X8xMMh', '2022-05-02 00:38:38', '2022-05-02 00:38:38'),
(2, 'T??? Ng???c Di???p', 'diep999@gmail.com', '$2y$10$l1kbe4s6eABtFVZqe5UpIese0vCemAMafuRjEPBanY8VIhZJgMUU2', '0999999991', 'Tr?? Vinh', 1, NULL, '2022-05-02 00:38:38', '2022-05-02 00:38:38'),
(3, 'Nguy???n V?? Khang', 'khang2022319@gmail.com', '$2y$10$35E0F6C4KJsfRQeHbgi5EuPYo37WdjRMo/EgiSRS7qJl6u/xJ8cXC', '0373914272', 'C???n Th??', 1, 'cyIw4i4eGnL5cRmbETIOXxhzOFDrfE0bXFZQPeqpccsMX7jCoaM0WQVIJg7c', '2022-05-03 19:05:00', '2022-05-04 00:56:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_users_email_unique` (`email`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`),
  ADD KEY `banners_user_id_foreign` (`user_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detail_img`
--
ALTER TABLE `detail_img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detail_img_pro_id_foreign` (`pro_id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `news_cat_id_foreign` (`cat_id`),
  ADD KEY `news_user_id_foreign` (`user_id`);

--
-- Indexes for table `oders`
--
ALTER TABLE `oders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oders_c_id_foreign` (`c_id`);

--
-- Indexes for table `oders_detail`
--
ALTER TABLE `oders_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oders_detail_pro_id_foreign` (`pro_id`),
  ADD KEY `oders_detail_o_id_foreign` (`o_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_cat_id_foreign` (`cat_id`),
  ADD KEY `products_user_id_foreign` (`user_id`);

--
-- Indexes for table `pro_details`
--
ALTER TABLE `pro_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pro_details_pro_id_foreign` (`pro_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `detail_img`
--
ALTER TABLE `detail_img`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `oders`
--
ALTER TABLE `oders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `oders_detail`
--
ALTER TABLE `oders_detail`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `pro_details`
--
ALTER TABLE `pro_details`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `banners`
--
ALTER TABLE `banners`
  ADD CONSTRAINT `banners_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `detail_img`
--
ALTER TABLE `detail_img`
  ADD CONSTRAINT `detail_img_pro_id_foreign` FOREIGN KEY (`pro_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_cat_id_foreign` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `news_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `oders`
--
ALTER TABLE `oders`
  ADD CONSTRAINT `oders_c_id_foreign` FOREIGN KEY (`c_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `oders_detail`
--
ALTER TABLE `oders_detail`
  ADD CONSTRAINT `oders_detail_o_id_foreign` FOREIGN KEY (`o_id`) REFERENCES `oders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `oders_detail_pro_id_foreign` FOREIGN KEY (`pro_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_cat_id_foreign` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pro_details`
--
ALTER TABLE `pro_details`
  ADD CONSTRAINT `pro_details_pro_id_foreign` FOREIGN KEY (`pro_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
