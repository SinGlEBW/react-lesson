-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 12 2021 г., 05:38
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
-- База данных: `price_list`
--

-- --------------------------------------------------------

--
-- Структура таблицы `black_work`
--

CREATE TABLE `black_work` (
  `id` tinyint(255) UNSIGNED NOT NULL,
  `services` varchar(200) DEFAULT NULL,
  `price` smallint(5) DEFAULT NULL,
  `unit` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Дамп данных таблицы `black_work`
--

INSERT INTO `black_work` (`id`, `services`, `price`, `unit`) VALUES
(1, 'Черновой этап', NULL, NULL),
(2, 'Точка без гофротрубы', 250, 'вывод'),
(3, 'Точка с гофротрубой', 300, 'вывод'),
(4, 'Подрозетники (ГКЛ)', 100, 'шт'),
(5, 'Подрозетники (кирпич)', 150, 'шт'),
(6, 'Подрозетники (бетон)', 250, 'шт'),
(7, 'Штроба (кирпич)', 120, 'шт'),
(8, 'Штроба (бетон)', 180, 'шт'),
(9, 'Распред/коробка (сварка)', 300, 'шт'),
(10, 'Распред/коробка (опресовка)', 350, 'шт'),
(11, 'Ниша под встр/щит', 1000, 'от'),
(12, 'Отверстия проходные до Ø32 мм', 200, 'шт'),
(13, 'Лоток (метал)', 300, 'м.п');

-- --------------------------------------------------------

--
-- Структура таблицы `cable_laying`
--

CREATE TABLE `cable_laying` (
  `id` tinyint(255) UNSIGNED NOT NULL,
  `services` varchar(200) DEFAULT NULL,
  `price` smallint(5) DEFAULT NULL,
  `unit` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Дамп данных таблицы `cable_laying`
--

INSERT INTO `cable_laying` (`id`, `services`, `price`, `unit`) VALUES
(1, 'Прокладка кабеля', NULL, NULL),
(2, '3-жильного до 4мм²', 30, 'п.м'),
(3, '3-жильного 6мм²', 40, 'п.м'),
(4, '3-жильного 10мм²', 50, 'п.м'),
(5, '5-жильного до 6мм²', 40, 'п.м'),
(6, '5-жильного 10мм²', 70, 'п.м'),
(7, '5-жильного 16мм²', 100, 'п.м'),
(8, '5-жильного 25мм²', 120, 'п.м'),
(9, '5-жильного 35мм²', 140, 'п.м');

-- --------------------------------------------------------

--
-- Структура таблицы `clean_work`
--

CREATE TABLE `clean_work` (
  `id` tinyint(255) UNSIGNED NOT NULL,
  `services` varchar(200) DEFAULT NULL,
  `price` smallint(5) DEFAULT NULL,
  `unit` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Дамп данных таблицы `clean_work`
--

INSERT INTO `clean_work` (`id`, `services`, `price`, `unit`) VALUES
(1, 'Чистовой этап', NULL, NULL),
(2, 'Фурнитура в подрозетники', 100, 'шт'),
(3, 'Фурнитура накладная', 200, 'шт'),
(4, 'Точечные светильники в ГКЛ', 150, 'шт'),
(5, 'Светильники настенные (Бра)', 250, 'шт'),
(6, 'Люстра', 500, 'от'),
(7, 'Светодиодная лента', 150, 'м.п'),
(8, 'Шина трековая', 400, 'м.п'),
(9, 'Щит (Сборка + монтаж)', 2000, 'под 12 мод');

-- --------------------------------------------------------

--
-- Структура таблицы `low_volt_system`
--

CREATE TABLE `low_volt_system` (
  `id` tinyint(255) UNSIGNED NOT NULL,
  `services` varchar(200) DEFAULT NULL,
  `price` smallint(5) DEFAULT NULL,
  `unit` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `low_volt_system`
--

INSERT INTO `low_volt_system` (`id`, `services`, `price`, `unit`) VALUES
(1, 'Слаботочне работы', NULL, NULL),
(2, 'Прокладка витого кабеля UTP/SAT', 30, 'шт'),
(3, 'Установка видеодомофона', 1500, 'шт'),
(4, 'Установка видеокамеры', 1000, 'шт'),
(5, 'Монтаж щита', 2500, 'шт');

-- --------------------------------------------------------

--
-- Структура таблицы `pipe_install`
--

CREATE TABLE `pipe_install` (
  `id` tinyint(255) UNSIGNED NOT NULL,
  `services` varchar(200) DEFAULT NULL,
  `price` smallint(5) DEFAULT NULL,
  `unit` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Дамп данных таблицы `pipe_install`
--

INSERT INTO `pipe_install` (`id`, `services`, `price`, `unit`) VALUES
(1, 'Монтаж трубы', NULL, NULL),
(2, 'Гофротруба до Ø32 мм', 15, 'м.п'),
(3, 'Гофротруба Ø50 мм', 25, 'м.п'),
(4, 'Труба ПНД/ПВХ до Ø32 мм', 40, 'м.п'),
(5, 'Труба ПНД/ПВХ Ø50 мм', 60, 'м.п'),
(6, 'Металлорукав до Ø32 мм', 40, 'м.п');

-- --------------------------------------------------------

--
-- Структура таблицы `retro_wiring`
--

CREATE TABLE `retro_wiring` (
  `id` tinyint(255) UNSIGNED NOT NULL,
  `services` varchar(200) DEFAULT NULL,
  `price` smallint(5) DEFAULT NULL,
  `unit` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Дамп данных таблицы `retro_wiring`
--

INSERT INTO `retro_wiring` (`id`, `services`, `price`, `unit`) VALUES
(1, 'Монтаж Ретро проводки', NULL, NULL),
(2, 'Витой кабель на изоляторах (дерево)', 80, 'м.п'),
(3, 'Витой кабель на изоляторах (не дерево)', 100, 'м.п'),
(4, 'Фурнитура (с рамками)', 200, 'шт'),
(5, 'Распред/коробка (на клемах)', 350, 'шт');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `black_work`
--
ALTER TABLE `black_work`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `cable_laying`
--
ALTER TABLE `cable_laying`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `clean_work`
--
ALTER TABLE `clean_work`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `low_volt_system`
--
ALTER TABLE `low_volt_system`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `pipe_install`
--
ALTER TABLE `pipe_install`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `retro_wiring`
--
ALTER TABLE `retro_wiring`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `black_work`
--
ALTER TABLE `black_work`
  MODIFY `id` tinyint(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `cable_laying`
--
ALTER TABLE `cable_laying`
  MODIFY `id` tinyint(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `clean_work`
--
ALTER TABLE `clean_work`
  MODIFY `id` tinyint(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `low_volt_system`
--
ALTER TABLE `low_volt_system`
  MODIFY `id` tinyint(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `pipe_install`
--
ALTER TABLE `pipe_install`
  MODIFY `id` tinyint(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `retro_wiring`
--
ALTER TABLE `retro_wiring`
  MODIFY `id` tinyint(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
