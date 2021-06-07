-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 05 2021 г., 18:26
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `u66147_el-staff`
--

-- --------------------------------------------------------

--
-- Структура таблицы `instagram_token`
--

CREATE TABLE `instagram_token` (
  `id` int(11) NOT NULL,
  `access_token` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `instagram_token`
--

INSERT INTO `instagram_token` (`id`, `access_token`, `token_date`) VALUES
(1, 'IGQVJWWWlLQ0p2TjVDeEQxdXFQSUVkMmpNZAHVuajRyZAm94ckZAPY1FHQVRycHI0N3BQZAEJGZAHpwUWVsXzAzbXlzelQ3YXN4a3JtTHJYbDEwSzR0UnpILVdFVDBtWC1DOVRtLUZAJNXNRcWdGQ2o0MjAyaAZDZD', '2021-01-04 17:01:44'),
(2, 'IGQVJWcTdjZAUpmLXBJM3gyVUE5OXJ3NU03blg2ZAWRFZATVocWtHeHNUWkZAJSzRNZA1luRERtZAktnUWhKZAVNqMnhCd2tDbHJmNTZAWTTRYdk9hQXBKVlZAPdG1zeDZAKZADNuNF9lSmRxTGZAB', '2021-01-06 02:03:58');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `instagram_token`
--
ALTER TABLE `instagram_token`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `instagram_token`
--
ALTER TABLE `instagram_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
