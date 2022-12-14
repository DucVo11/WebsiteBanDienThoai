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
(1, 'Điện thoại', 'dien-thoai', '0', '2016-11-23 20:01:57', '2022-05-02 06:49:30'),
(3, ' Asus - ZenFones', 'asus-zenfones', '1', '2016-11-23 20:17:01', '2022-05-02 06:49:36'),
(4, ' Samsung', 'samsung', '1', '2016-11-23 20:17:39', '2022-05-02 06:49:43'),
(13, 'Tin Khuyến Mãi', 'tin-khuyen-mai', '0', '2016-11-24 01:38:46', '2022-05-02 06:49:09'),
(14, 'Quảng Cáo', 'quang-cao', '0', '2016-11-24 01:38:57', '2022-05-02 06:49:20'),
(15, ' Apple ', 'apple', '1', '2016-11-24 01:56:05', '2022-05-02 06:49:52'),
(16, ' OPPO', 'oppo', '1', '2016-11-25 02:00:27', '2022-05-02 06:49:57'),
(46, 'Dien thoai', 'dien-thoai', '1', '2022-05-03 04:59:44', '2022-05-03 04:59:44'),
(48, 'Khuyến mãi 30/4', 'khuyen-mai-304', '13', '2022-05-04 01:03:32', '2022-05-04 01:03:32'),
(49, 'Khuyến mãi 5/5', 'khuyen-mai-55', '13', '2022-05-04 01:03:58', '2022-05-04 01:03:58');

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
(23, 'Khuyến mãi 30/4 - 1/5', 'khuyen-mai-304-15', 'N3Admin', '<p>Khuyến m&atilde;i Ốp lưng iphone 13</p>\r\n', '', '1651655683_oplung-2400-600-1920x480.png', 'Khuyến mãi', 1, 'N3store', 48, 1, '2022-05-04 02:17:11', '2022-05-04 02:17:11');

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
(22, 'Iphone 12', 'iphone-12', 'Công nghệ màn hình:  OLED, Hệ điều hành:  iOS 15, Chip xử lý (CPU):  Apple A14 Bionic 6 nhân', 'Trả góp 0%', 'Hoặc Tặng Vali Lock & Lock ', 'Hoặc Tặng Combo Quà (Bao da S-View + Tai nghe Level Active)', ' Hộp, Sạc, Tai nghe, Sách hướng dẫn, Cáp OTG, Cáp, Cây lấy sim ', '1651649530_iphone-12-purple-3-650x650.png', '<p>Trong những th&aacute;ng cuối năm 2020,&nbsp;<a href=\"https://www.thegioididong.com/apple\" target=\"_blank\" title=\"Tham khảo sản phẩm chính hãng của Apple tại Thế Giới Di Động\">Apple</a>&nbsp;đ&atilde; ch&iacute;nh thức giới thiệu đến người d&ugrave;ng cũng như iFan thế hệ iPhone&nbsp;12&nbsp;series&nbsp;mới với h&agrave;ng loạt t&iacute;nh năng bứt ph&aacute;, thiết kế được lột x&aacute;c ho&agrave;n to&agrave;n, hiệu năng đầy mạnh mẽ v&agrave; một trong số đ&oacute; ch&iacute;nh l&agrave;&nbsp;<a href=\"https://www.topzone.vn/iphone/iphone-12\" target=\"_blank\" title=\"Tham khảo thông tin sản phẩm tại TopZone.vn\">iPhone 12 64GB</a>.</p>\r\n', '<h3>Trong những th&aacute;ng cuối năm 2020,&nbsp;<a href=\"https://www.thegioididong.com/apple\" target=\"_blank\" title=\"Tham khảo sản phẩm chính hãng của Apple tại Thế Giới Di Động\">Apple</a>&nbsp;đ&atilde; ch&iacute;nh thức giới thiệu đến người d&ugrave;ng cũng như iFan thế hệ iPhone&nbsp;12&nbsp;series&nbsp;mới với h&agrave;ng loạt t&iacute;nh năng bứt ph&aacute;, thiết kế được lột x&aacute;c ho&agrave;n to&agrave;n, hiệu năng đầy mạnh mẽ v&agrave; một trong số đ&oacute; ch&iacute;nh l&agrave;&nbsp;<a href=\"https://www.topzone.vn/iphone/iphone-12\" target=\"_blank\" title=\"Tham khảo thông tin sản phẩm tại TopZone.vn\">iPhone 12 64GB</a>.</h3>\r\n\r\n<h3>Hiệu năng vượt xa mọi giới hạn</h3>\r\n\r\n<p>Apple đ&atilde; trang bị con chip mới nhất của h&atilde;ng (t&iacute;nh đến 11/2020) cho iPhone 12 đ&oacute; l&agrave;&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/tim-hieu-ve-chip-apple-a14-bionic-tren-iphone-12-va-ipad-1290695\" target=\"_blank\" title=\"Tìm hiểu chip A14 Bionic là gì?\">A14 Bionic</a>, được sản xuất tr&ecirc;n tiến tr&igrave;nh 5 nm với hiệu suất ổn định hơn so với chip A13 được trang bị tr&ecirc;n phi&ecirc;n bản tiền nhiệm&nbsp;<a href=\"https://www.thegioididong.com/dtdd/iphone-11\" target=\"_blank\" title=\"Tham khảo điện thoại iPhone 11 chính hãng tại Thế Giới Di Động\">iPhone 11</a>.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-144220-044259.jpg\" onclick=\"return false;\"><img alt=\"Chip A14 Bionic mạnh mẽ | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-144220-044259.jpg\" title=\"Chip A14 Bionic mạnh mẽ | iPhone 12\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Xem th&ecirc;m:&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/tim-hieu-ve-chip-apple-a14-bionic-tren-iphone-12-va-ipad-1290695\" target=\"_blank\" title=\"Tìm hiểu về chip Apple A14 Bionic trên iPhone 12 và iPad Air 2020\">T&igrave;m hiểu về chip Apple A14 Bionic tr&ecirc;n iPhone 12 v&agrave; iPad Air 2020</a></p>\r\n\r\n<p>Với CPU Apple A14 Bionic, bạn c&oacute; thể dễ d&agrave;ng trải nghiệm mọi tựa game với những pha chuyển cảnh mượt m&agrave; hay h&agrave;ng loạt hiệu ứng đồ họa tuyệt đẹp ở mức đồ họa cao m&agrave; kh&ocirc;ng lo t&igrave;nh trạng giật lag.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-18.jpg\" onclick=\"return false;\"><img alt=\"Chiến game siêu mượt, đồ họa tuyệt đẹp | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-18.jpg\" title=\"Chiến game siêu mượt, đồ họa tuyệt đẹp | iPhone 12\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Chưa hết, Apple c&ograve;n g&acirc;y bất ngờ đến người d&ugrave;ng với hệ thống 5G lần đầu ti&ecirc;n được trang bị tr&ecirc;n những chiếc&nbsp;<a href=\"https://www.thegioididong.com/dtdd-apple-iphone\" target=\"_blank\" title=\"Tham khảo iPhone kinh doanh tại thegioididong.com\">iPhone</a>, cho tốc độ truyền tải dữ liệu nhanh hơn, ổn định hơn.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-20.jpg\" onclick=\"return false;\"><img alt=\"Kết nối 5G truyền tải dữ liệu nhanh chóng | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-20.jpg\" title=\"Kết nối 5G truyền tải dữ liệu nhanh chóng | iPhone 12\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>iPhone 12 sẽ chạy tr&ecirc;n hệ điều h&agrave;nh iOS 15 (12/2021)&nbsp;với nhiều t&iacute;nh năng hấp dẫn như hỗ trợ Widget cũng như những n&acirc;ng cấp tối ưu phần mềm đ&aacute;ng kể mang lại những trải nghiệm th&uacute; vị mới lạ đến người d&ugrave;ng.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-13.jpg\" onclick=\"return false;\"><img alt=\"Khám phá những tính năng mới hấp dẫn trên iOS 14 | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-13.jpg\" title=\"Khám phá những tính năng mới hấp dẫn trên iOS 14 | iPhone 12\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>Cụm camera kh&ocirc;ng ngừng cải tiến</h3>\r\n\r\n<p>iPhone 12 được trang bị hệ thống camera k&eacute;p bao gồm&nbsp;<a href=\"https://www.thegioididong.com/dtdd-camera-goc-rong\" target=\"_blank\" title=\"Tham khảo điện thoại có camera góc rộng tại Thế Giới Di Động\">camera g&oacute;c rộng</a>&nbsp;v&agrave; camera si&ecirc;u rộng c&oacute; c&ugrave;ng độ ph&acirc;n giải l&agrave; 12 MP, chế độ ban đ&ecirc;m (<a href=\"https://www.thegioididong.com/hoi-dap/che-do-chup-dem-night-mode-la-gi-907873\" target=\"_blank\" title=\"Tìm hiểu chế độ chụp đêm Night Mode là gì?\">Night Mode</a>) tr&ecirc;n bộ đ&ocirc;i camera n&agrave;y cũng đ&atilde; được n&acirc;ng cấp về phần cứng lẫn thuật to&aacute;n xử l&yacute;, khi chụp những bức ảnh thiếu s&aacute;ng bạn sẽ nhận được kết quả ấn tượng với m&agrave;u sắc, độ chi tiết r&otilde; n&eacute;t đ&aacute;ng kinh ngạc.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-040321-030344.jpg\" onclick=\"return false;\"><img alt=\"Cụm camera sau| iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030344.jpg\" title=\"Cụm camera sau| iPhone 12\" /></a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Bạn c&oacute; thể kh&aacute;m ph&aacute; th&ecirc;m những t&iacute;nh năng của camera tr&ecirc;n iPhone 12 như chế độ smart HDR 3 gi&uacute;p c&acirc;n bằng yếu tố &aacute;nh s&aacute;ng trong ảnh, l&agrave;m nổi bật chi tiết đối tượng v&agrave; c&acirc;y cối trong khi vẫn giữ được m&agrave;u sắc phong ph&uacute; của bầu trời ngay cả v&agrave;o buổi trưa nắng gắt.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-9.jpg\" onclick=\"return false;\"><img alt=\"Chụp ảnh với tính năng smart HDR 3 sắc nét, chất lượng | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-9.jpg\" title=\"Chụp ảnh với tính năng smart HDR 3 sắc nét, chất lượng | iPhone 12\" /></a></p>\r\n\r\n<p>Chế độ chụp ch&acirc;n dung đ&atilde; tốt nay c&ograve;n tốt hơn trong việc l&agrave;m mờ hậu cảnh một c&aacute;ch nghệ thuật để dồn hết sự tập trung v&agrave;o đối tượng m&agrave; bạn muốn chụp.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-10.jpg\" onclick=\"return false;\"><img alt=\"Nổi bật chủ thể với tính năng chụp chân dung độc đáo | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-10.jpg\" title=\"Nổi bật chủ thể với tính năng chụp chân dung độc đáo | iPhone 12\" /></a></p>\r\n\r\n<p>Bạn sẽ dễ d&agrave;ng quay video 4K HDR với chuẩn điện ảnh&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/dolby-vision-la-gi-cac-ung-dung-noi-bat-va-nhung-loai-1226284\" target=\"_blank\" title=\"Tìm hiểu Dolby Vision là gì?\">Dolby Vision</a>&nbsp;v&agrave; chỉnh sửa ngay tr&ecirc;n chiếc điện thoại của m&igrave;nh, bạn c&oacute; thể đưa video l&ecirc;n TV của bạn để thưởng thức thước phim sắc n&eacute;t chất lượng cao.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-11.jpg\" onclick=\"return false;\"><img alt=\"Quay video chất lượng ngay cả trong điều kiện ánh sáng yếu | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-11.jpg\" title=\"Quay video chất lượng ngay cả trong điều kiện ánh sáng yếu | iPhone 12\" /></a></p>\r\n\r\n<p>Sự kết hợp của 2 cảm biến chất lượng n&agrave;y đ&atilde; tạo n&ecirc;n một hệ thống camera chuy&ecirc;n nghiệp kh&ocirc;ng kh&aacute;c g&igrave; những chiếc m&aacute;y ảnh thực thụ, dễ d&agrave;ng đem lại những bức h&igrave;nh sắc n&eacute;t tuyệt đối, độ chi tiết cao v&agrave; đa dạng chế độ chụp cho người d&ugrave;ng linh hoạt sử dụng.</p>\r\n\r\n<h3>Ghi dấu ấn về mặt thiết kế</h3>\r\n\r\n<p>Về ngoại h&igrave;nh iPhone 12 c&oacute; thiết kế ho&agrave;i niệm với phần cạnh được l&agrave;m vu&ocirc;ng vức tương tự tr&ecirc;n mẫu iPhone 4 thay v&igrave; bo cong như iPhone 11.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-040321-030352.jpg\" onclick=\"return false;\"><img alt=\" iPhone 12 có thiết kế hoài niệm tương tự iPhone 4 series\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030352.jpg\" title=\" iPhone 12 có thiết kế hoài niệm tương tự iPhone 4 series\" /></a></p>\r\n\r\n<p>Ở mặt trước iPhone 12 phần tai thỏ được l&agrave;m nhỏ gọn hơn v&agrave; cũng l&agrave; nơi chứa cảm biến Face ID c&oacute; thể nhận diện khu&ocirc;n mặt một c&aacute;ch nhanh ch&oacute;ng v&agrave; ch&iacute;nh x&aacute;c.</p>\r\n\r\n<p>Apple c&ograve;n mang đến cho người một loạt gam m&agrave;u c&aacute; t&iacute;nh, độc đ&aacute;o tr&ecirc;n những chiếc iPhone của m&igrave;nh để người d&ugrave;ng c&oacute; sự lựa chọn ph&ugrave; hợp với những phong c&aacute;ch kh&aacute;c nhau.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-17.jpg\" onclick=\"return false;\"><img alt=\"Sở hữu loạt gam màu cá tính | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-17.jpg\" title=\"Sở hữu loạt gam màu cá tính | iPhone 12\" /></a></p>\r\n\r\n<p>iPhone 12 được trang bị m&agrave;n h&igrave;nh Super Retina XDR OLED tr&agrave;n viền c&oacute; k&iacute;ch thước 6.1 inch, cho bạn kh&ocirc;ng gian trải nghiệm lớn cũng như những gi&acirc;y ph&uacute;t giải tr&iacute; hấp dẫn tr&ecirc;n một m&agrave;n ảnh v&ocirc; c&ugrave;ng chất lượng.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-040421-030410.jpg\" onclick=\"return false;\"><img alt=\"Màn hình Super Retina XDR OLED 6.1 inch | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040421-030410.jpg\" title=\"Màn hình Super Retina XDR OLED 6.1 inch | iPhone 12\" /></a></p>\r\n\r\n<p>M&aacute;y được chế t&aacute;c c&oacute; độ ho&agrave;n thiện cực cao với thiết kế nguy&ecirc;n khối, khung nh&ocirc;m v&agrave; mặt sau l&agrave; k&iacute;nh cường lực cao cấp to&aacute;t l&ecirc;n vẻ ngo&agrave;i sang chảnh cũng như mang lại độ hiệu quả an to&agrave;n cao mỗi khi sử dụng.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-041521-031513.jpg\" onclick=\"return false;\"><img alt=\"Độ hoàn thiện cao, chắc chắn cho thiết bị | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-041521-031513.jpg\" title=\"Độ hoàn thiện cao, chắc chắn cho thiết bị | iPhone 12\" /></a></p>\r\n\r\n<p>Mặt trước của iPhone 12 được phủ ho&agrave;n to&agrave;n bởi lớp k&iacute;nh cường lực Ceramic Shield cứng c&aacute;p, được đ&aacute;nh gi&aacute; l&agrave; c&oacute; độ bền cao v&agrave; cứng c&aacute;p hơn hầu hết c&aacute;c loại mặt k&iacute;nh c&oacute; tr&ecirc;n&nbsp;<a href=\"https://www.thegioididong.com/dtdd\" target=\"_blank\" title=\"Tham khảo điện thoại chính hãng tại Thế Giới Di Động\">điện thoại th&ocirc;ng minh</a>&nbsp;kh&aacute;c c&oacute; mặt tr&ecirc;n thị trường.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-040321-030328.jpg\" onclick=\"return false;\"><img alt=\"Lớp kính cường lực Ceramic Shield | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030328.jpg\" title=\"Lớp kính cường lực Ceramic Shield | iPhone 12\" /></a></p>\r\n\r\n<p>Xem th&ecirc;m:&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/mat-kinh-ceramic-shield-tren-iphone-12-la-gi-co-xin-so-nhu-1298900\" target=\"_blank\" title=\"Mặt kính Ceramic Shield trên iPhone 12 là gì? Có xịn sò như quảng cáo?\">Mặt k&iacute;nh Ceramic Shield tr&ecirc;n iPhone 12 l&agrave; g&igrave;? C&oacute; xịn s&ograve; như quảng c&aacute;o?</a></p>\r\n\r\n<p>V&agrave; để cho thiết bị trở n&ecirc;n ho&agrave;n hảo hơn n&ecirc;n kh&ocirc;ng thể thiếu khả năng kh&aacute;ng nước, bụi chuẩn IP68 gi&uacute;p người d&ugrave;ng y&ecirc;n t&acirc;m sử dụng với những buổi đi chơi biển m&agrave; kh&ocirc;ng hề lo chiếc m&aacute;y bị v&ocirc; nước.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-2.jpg\" onclick=\"return false;\"><img alt=\"Kháng nước bụi chuẩn IP68 | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-2.jpg\" title=\"Kháng nước bụi chuẩn IP68 | iPhone 12\" /></a></p>\r\n\r\n<h3>Trải nghiệm xuy&ecirc;n suốt, liền mạch cả ng&agrave;y d&agrave;i</h3>\r\n\r\n<p>Để bạn c&oacute; những gi&acirc;y ph&uacute;t trải nghiệm liền mạch, Apple đ&atilde; trang bị một vi&ecirc;n pin c&oacute; dung lượng 2815 mAh, t&iacute;ch hợp cho khả năng tiết kiệm pin gi&uacute;p người d&ugrave;ng c&oacute; thể giải tr&iacute; đa phương tiện l&ecirc;n đến 17 giờ v&agrave; nghe nhạc li&ecirc;n tục l&ecirc;n đến 65 giờ.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-040321-030358.jpg\" onclick=\"return false;\"><img alt=\"Dung lượng pin sử dụng đáp ứng đủ một ngày | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030358.jpg\" title=\"Dung lượng pin sử dụng đáp ứng đủ một ngày | iPhone 12\" /></a></p>\r\n\r\n<p>V&agrave; kh&ocirc;ng thể thiếu đ&oacute; ch&iacute;nh l&agrave; t&iacute;nh năng sạc nhanh, iPhone 12 c&oacute; khả năng&nbsp;<a href=\"https://www.thegioididong.com/dtdd-sac-pin-nhanh\" target=\"_blank\" title=\"Tham khảo điện thoại có sạc pin nhanh tại Thế Giới Di Động\">sạc pin nhanh</a>&nbsp;qua c&aacute;p c&ocirc;ng suất 20 W, chỉ trong v&ograve;ng 30 ph&uacute;t th&igrave; chiếc m&aacute;y đ&atilde; c&oacute; thế sạc được 50% pin. Th&ecirc;m v&agrave;o đ&oacute; l&agrave; khả năng&nbsp;<a href=\"https://www.thegioididong.com/dtdd-sac-khong-day\" target=\"_blank\" title=\"Tham khảo điện thoại có sạc không dây tại Thế Giới Di Động\">sạc kh&ocirc;ng d&acirc;y</a>&nbsp;MagSafe v&ocirc; c&ugrave;ng tiện dụng.</p>\r\n\r\n<p>Lưu &yacute;: Củ sạc kh&ocirc;ng k&egrave;m theo m&aacute;y m&agrave; phải mua ri&ecirc;ng.</p>\r\n\r\n<p><a href=\"https://www.thegioididong.com/images/42/213031/iphone-12-16.jpg\" onclick=\"return false;\"><img alt=\"Sạc nhanh và sạc không dây tiện lợi hữu ích | iPhone 12\" src=\"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-16.jpg\" title=\"Sạc nhanh và sạc không dây tiện lợi hữu ích | iPhone 12\" /></a></p>\r\n\r\n<p>Xem th&ecirc;m:&nbsp;<a href=\"https://www.thegioididong.com/hoi-dap/cong-nghe-magsafe-magsafe-2-la-gi-co-tren-thiet-bi-nao-cua-1241888\" target=\"_blank\" title=\"MagSafe trên iPhone 12 là gì? Dùng để làm gì trên các thiết bị Apple?\">MagSafe tr&ecirc;n iPhone 12 l&agrave; g&igrave;? D&ugrave;ng để l&agrave;m g&igrave; tr&ecirc;n c&aacute;c thiết bị Apple?</a></p>\r\n\r\n<p>Sự lột x&aacute;c đầy mạnh mẽ lần n&agrave;y của Apple kh&ocirc;ng chỉ g&acirc;y bất ngờ đến người d&ugrave;ng m&agrave; c&ograve;n đ&aacute;nh dấu một kỷ nguy&ecirc;n mới trong nền ph&aacute;t triển smartphone Apple. V&agrave; đ&acirc;y cũng được xem l&agrave; một trong những bộ series iPhone m&agrave; Apple đặt nhiều t&acirc;m huyết, mục đ&iacute;ch v&agrave; đầy t&iacute;nh năng mạnh mẽ chưa từng thấy.</p>\r\n', 'Galaxy S7, Galaxy S7,Galaxy S7', 19990000, 1, 15, 1, '2016-11-24 09:39:13', '2022-05-04 01:00:02'),
(94, 'Galaxy S10', 'galaxy-s10', 'Công nghệ màn hình:  OLED, Hệ điều hành:  iOS 15', 'free 50 đơn hàng đầu :)))', '', '', 'Công nghệ màn hình:  OLED, Hệ điều hành:  iOS 15, Chip xử lý (CPU):  Apple A14 Bionic 6 nhân', '1651655153_iphone-13-pro-grey-200x200.png', '<p>iPhone 13 Pro Max 128 GB - si&ecirc;u phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. M&aacute;y c&oacute; thiết kế kh&ocirc;ng mấy đột ph&aacute; khi so với người tiền nhiệm, b&ecirc;n trong đ&acirc;y vẫn l&agrave; một sản phẩm c&oacute; m&agrave;n h&igrave;nh si&ecirc;u đẹp, tần số qu&eacute;t được n&acirc;ng cấp l&ecirc;n 120 Hz mượt m&agrave;, cảm biến camera c&oacute; k&iacute;ch thước lớn hơn, c&ugrave;ng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn s&agrave;ng c&ugrave;ng bạn chinh phục mọi thử th&aacute;ch.<br />\r\nThi&ecirc;́t k&ecirc;́ đẳng cấp h&agrave;ng đầu<br />\r\niPhone mới kế thừa thiết kế đặc trưng từ iPhone 12 Pro Max khi sở hữu khung viền vu&ocirc;ng vức, mặt lưng k&iacute;nh c&ugrave;ng m&agrave;n h&igrave;nh tai thỏ tr&agrave;n viền nằm ở ph&iacute;a trước.</p>\r\n\r\n<p>&nbsp;</p>\r\n', '<h3><a href=\"https://www.thegioididong.com/dtdd/iphone-13-pro-max\" target=\"_blank\" title=\"Tham khảo giá điện thoại iPhone 13 Pro Max chính hãng\">iPhone 13 Pro Max 128 GB</a>&nbsp;- si&ecirc;u phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ&nbsp;<a href=\"https://www.thegioididong.com/apple\" target=\"_blank\" title=\"Tham khảo giá điện thoại smartphone iPhone chính hãng\">Apple</a>. M&aacute;y c&oacute; thiết kế kh&ocirc;ng mấy đột ph&aacute; khi so với người tiền nhiệm, b&ecirc;n trong đ&acirc;y vẫn l&agrave; một sản phẩm c&oacute; m&agrave;n h&igrave;nh si&ecirc;u đẹp, tần số qu&eacute;t được n&acirc;ng cấp l&ecirc;n 120 Hz mượt m&agrave;, cảm biến camera c&oacute; k&iacute;ch thước lớn hơn, c&ugrave;ng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn s&agrave;ng c&ugrave;ng bạn chinh phục mọi thử th&aacute;ch.</h3>\r\n', 'iphone, iphone13', 1230000, 1, 4, 1, '2022-05-04 02:05:53', '2022-05-04 02:06:44');

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
(9, 'Apple A14 Bionic 6 nhân', '4G', 'OLED 1170 x 2532 Pixels', 'Mali-T880 MP12', '64 GB', 'MicroSD (T-Flash)', '12 MP', '2 camera 12 MP', '1 Sim Micro', 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, DLNA, Wi-Fi Direct, Wi-Fi hotspot', '2815 mAh', 'iOS 15', '', 22, '2016-11-24 09:39:13', '2022-05-04 01:00:02'),
(61, 'Apple A14 Bionic 6 nhân', '4 GB', 'OLED 1170 x 2532 Pixels', 'Ithel', '64 GB', '', '12 MP', '2 camera 12 MP', 'Không có', 'usb hdmi', 'Không có', 'iOS 15', 'Không có', 94, '2022-05-04 02:05:53', '2022-05-04 02:06:44');

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
(1, 'Võ Huỳnh Đức', 'ducvo999@gmail.com', '$2y$10$TEY9mtHYRJ4G9oW.6n9D9.5.eHfae7I1po7iNVE8cNMsEORxtzv0m', '0999999999', 'Vĩnh Long', 1, 'jFFpU4F9xl8TLtjS6DPBiI8qWugcLLXQWMtRSWx9UtBoB3TrjGpx66X8xMMh', '2022-05-02 00:38:38', '2022-05-02 00:38:38'),
(2, 'Từ Ngọc Diệp', 'diep999@gmail.com', '$2y$10$l1kbe4s6eABtFVZqe5UpIese0vCemAMafuRjEPBanY8VIhZJgMUU2', '0999999991', 'Trà Vinh', 1, NULL, '2022-05-02 00:38:38', '2022-05-02 00:38:38'),
(3, 'Nguyễn Vĩ Khang', 'khang2022319@gmail.com', '$2y$10$35E0F6C4KJsfRQeHbgi5EuPYo37WdjRMo/EgiSRS7qJl6u/xJ8cXC', '0373914272', 'Cần Thơ', 1, 'cyIw4i4eGnL5cRmbETIOXxhzOFDrfE0bXFZQPeqpccsMX7jCoaM0WQVIJg7c', '2022-05-03 19:05:00', '2022-05-04 00:56:54');

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
