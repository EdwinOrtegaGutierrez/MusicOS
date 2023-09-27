-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-09-2023 a las 01:50:01
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `musicos`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `Albumes_Categorias` (IN `p_genero` VARCHAR(255))   BEGIN
    SELECT * FROM albumes WHERE genero = p_genero;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `categorias` ()   BEGIN
SELECT genero FROM albumes GROUP BY genero;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Create_Client` (IN `p_nombre` VARCHAR(255), IN `p_apellidos` VARCHAR(255), IN `p_correo` VARCHAR(255), IN `p_contraseña` VARCHAR(255), IN `p_estado` VARCHAR(255))   BEGIN
    INSERT INTO cliente(nombre, apellidos, correo, contraseña, estado)
    VALUES (p_nombre, p_apellidos, p_correo, p_contraseña, p_estado);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Login_Usuario` (IN `user_correo` VARCHAR(50), IN `user_password` VARCHAR(50))   BEGIN
    DECLARE UserExists BOOLEAN;

    -- Verificar si el usuario existe en la tabla
    IF (SELECT 1 FROM cliente WHERE correo = user_correo AND contraseña = user_password) THEN
        SET UserExists = TRUE; -- Usuario encontrado (true)
    ELSE
        SET UserExists = FALSE; -- Usuario no encontrado (false)
    END IF;

    SELECT UserExists;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albumes`
--

CREATE TABLE `albumes` (
  `autor` varchar(50) NOT NULL,
  `fecha_salida` date NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `num_canciones` int(10) UNSIGNED NOT NULL,
  `codigo_album` int(11) NOT NULL,
  `canciones` text DEFAULT NULL,
  `genero` varchar(20) DEFAULT NULL,
  `estado` varchar(8) NOT NULL,
  `precio` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `albumes`
--

INSERT INTO `albumes` (`autor`, `fecha_salida`, `titulo`, `num_canciones`, `codigo_album`, `canciones`, `genero`, `estado`, `precio`) VALUES
('Pepe Arcilla', '2023-04-21', 'Surcando los mares de leche', 3, 3, 'Pasilla, Chedar, Naranja', 'Rap', '', 12),
('Ve ve', '2023-04-24', 'Dios Estático', 3, 4, 'Edgar el Cobrador, H3LL0, Expo', 'Rock', '', 45),
('Droms', '2023-04-25', 'Lavadora de dinero', 3, 5, 'No tengo dinero, Préstame 100 varos te los pago el viernes, Elvis viene', 'Trap', '', 45),
('Agaarree', '2023-04-19', 'C', 3, 6, 'Sinam, Aye Aye, CrIstA', 'Jazz', '', 34),
('Clavo al vaquero', '2023-03-26', 'Anillos de Júpiter', 2, 7, 'Anillos de Júpiter, En caja a Marte', 'House', '', 56),
('WLFMAN', '2023-05-13', 'Hombre Máquina', 3, 8, 'ION FNK2000, NOT EP, IF EXISTS', 'Techno', '', 45),
('El sueño', '2023-05-11', 'Monstruo de Gila', 2, 9, 'Monstruo de Gila, Castillo se desmorona', 'Rap', '', 74),
('Come-Neuronas', '2023-05-11', 'Dejando mi pierna izquierda para la antropología', 2, 10, 'Saludo de vuelta, 01-800-SMD', 'Rock', '', 43),
('G-O-D', '2023-05-20', 'EP! MEGAMIX', 3, 11, 'EP 1, EP 2, EP 3', 'Techno', '', 32),
('Rey Pizza', '2023-05-21', 'Estoy en tu mente', 2, 12, 'Estoy en tu mente, Estoy en tu mente difusa', 'House', '', 54);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `apellidos` varchar(50) NOT NULL DEFAULT '',
  `correo` varchar(50) NOT NULL DEFAULT '',
  `contraseña` varchar(50) NOT NULL DEFAULT '',
  `codigo_usuario` int(11) NOT NULL,
  `estado` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`nombre`, `apellidos`, `correo`, `contraseña`, `codigo_usuario`, `estado`) VALUES
('Alan', 'Pollo Loco', 'alan@gmail.com', 'alan123', 1, 'activo'),
('edwin', 'ortega', 'edwin@gmail.com', 'eddy', 2, 'Activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente_tarjeta`
--

CREATE TABLE `cliente_tarjeta` (
  `id_tarjeta` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descuento`
--

CREATE TABLE `descuento` (
  `id_descuento` int(11) NOT NULL,
  `cantidad` float DEFAULT NULL,
  `estado` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `descuento`
--

INSERT INTO `descuento` (`id_descuento`, `cantidad`, `estado`) VALUES
(1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envios`
--

CREATE TABLE `envios` (
  `id_envios` int(11) NOT NULL,
  `estado` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envio_pedido`
--

CREATE TABLE `envio_pedido` (
  `id_pedido` int(11) NOT NULL,
  `id_envio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id_imagen` int(11) NOT NULL,
  `ruta` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_album`
--

CREATE TABLE `imagen_album` (
  `id_album` int(11) DEFAULT NULL,
  `id_imagen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_cliente`
--

CREATE TABLE `imagen_cliente` (
  `id_cliente` int(11) DEFAULT NULL,
  `id_imagen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `direccion_pedido` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `id_pedido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjetas`
--

CREATE TABLE `tarjetas` (
  `numero_tarjeta` varchar(16) NOT NULL,
  `fecha_caducidad` date NOT NULL,
  `titular` varchar(50) NOT NULL,
  `emisor` varchar(9) NOT NULL,
  `cvv` int(3) NOT NULL,
  `id_tarjeta` int(3) NOT NULL,
  `estado` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `tarjetas`
--

INSERT INTO `tarjetas` (`numero_tarjeta`, `fecha_caducidad`, `titular`, `emisor`, `cvv`, `id_tarjeta`, `estado`) VALUES
('1234567890112233', '2023-08-14', 'Pepe Gallo', 'VISA', 123, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transporte`
--

CREATE TABLE `transporte` (
  `placa` varchar(10) NOT NULL,
  `conductor` varchar(50) DEFAULT NULL,
  `estado` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transporte_envio`
--

CREATE TABLE `transporte_envio` (
  `id_envio` int(11) DEFAULT NULL,
  `placa_transporte` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `tipo_pago` varchar(7) DEFAULT NULL,
  `id_compra` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_descuento`
--

CREATE TABLE `venta_descuento` (
  `id_compra` int(11) DEFAULT NULL,
  `id_descuento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_pedido`
--

CREATE TABLE `venta_pedido` (
  `codigo_usuario` int(11) NOT NULL,
  `codigo_album` int(11) NOT NULL,
  `id_compra` int(11) DEFAULT NULL,
  `id_pedido` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `venta_pedido`
--

INSERT INTO `venta_pedido` (`codigo_usuario`, `codigo_album`, `id_compra`, `id_pedido`) VALUES
(1, 5, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `albumes`
--
ALTER TABLE `albumes`
  ADD PRIMARY KEY (`codigo_album`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`codigo_usuario`);

--
-- Indices de la tabla `cliente_tarjeta`
--
ALTER TABLE `cliente_tarjeta`
  ADD KEY `codigo_tarjeta` (`id_tarjeta`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `descuento`
--
ALTER TABLE `descuento`
  ADD PRIMARY KEY (`id_descuento`) USING BTREE;

--
-- Indices de la tabla `envios`
--
ALTER TABLE `envios`
  ADD PRIMARY KEY (`id_envios`);

--
-- Indices de la tabla `envio_pedido`
--
ALTER TABLE `envio_pedido`
  ADD KEY `pedido` (`id_pedido`) USING BTREE,
  ADD KEY `envio` (`id_envio`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id_imagen`);

--
-- Indices de la tabla `imagen_album`
--
ALTER TABLE `imagen_album`
  ADD KEY `Índice 1` (`id_album`),
  ADD KEY `Índice 2` (`id_imagen`);

--
-- Indices de la tabla `imagen_cliente`
--
ALTER TABLE `imagen_cliente`
  ADD KEY `Índice 1` (`id_cliente`),
  ADD KEY `Índice 2` (`id_imagen`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`) USING BTREE;

--
-- Indices de la tabla `tarjetas`
--
ALTER TABLE `tarjetas`
  ADD PRIMARY KEY (`id_tarjeta`);

--
-- Indices de la tabla `transporte`
--
ALTER TABLE `transporte`
  ADD PRIMARY KEY (`placa`);

--
-- Indices de la tabla `transporte_envio`
--
ALTER TABLE `transporte_envio`
  ADD KEY `id_envio` (`id_envio`),
  ADD KEY `placa_transporte` (`placa_transporte`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_compra`);

--
-- Indices de la tabla `venta_descuento`
--
ALTER TABLE `venta_descuento`
  ADD KEY `codigo_compra` (`id_compra`),
  ADD KEY `codigo_descuento` (`id_descuento`);

--
-- Indices de la tabla `venta_pedido`
--
ALTER TABLE `venta_pedido`
  ADD KEY `codigo_usuario` (`codigo_usuario`),
  ADD KEY `codigo_album` (`codigo_album`),
  ADD KEY `id_compra` (`id_compra`),
  ADD KEY `id_pedido` (`id_pedido`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `albumes`
--
ALTER TABLE `albumes`
  MODIFY `codigo_album` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `codigo_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `descuento`
--
ALTER TABLE `descuento`
  MODIFY `id_descuento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `envios`
--
ALTER TABLE `envios`
  MODIFY `id_envios` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tarjetas`
--
ALTER TABLE `tarjetas`
  MODIFY `id_tarjeta` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cliente_tarjeta`
--
ALTER TABLE `cliente_tarjeta`
  ADD CONSTRAINT `codigo_tarjeta` FOREIGN KEY (`id_tarjeta`) REFERENCES `tarjetas` (`id_tarjeta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `cliente` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `envio_pedido`
--
ALTER TABLE `envio_pedido`
  ADD CONSTRAINT `envio` FOREIGN KEY (`id_envio`) REFERENCES `envios` (`id_envios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagen_album`
--
ALTER TABLE `imagen_album`
  ADD CONSTRAINT `id_album` FOREIGN KEY (`id_album`) REFERENCES `albumes` (`codigo_album`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_img` FOREIGN KEY (`id_imagen`) REFERENCES `imagenes` (`id_imagen`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `imagen_cliente`
--
ALTER TABLE `imagen_cliente`
  ADD CONSTRAINT `id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_imagen` FOREIGN KEY (`id_imagen`) REFERENCES `imagenes` (`id_imagen`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `transporte_envio`
--
ALTER TABLE `transporte_envio`
  ADD CONSTRAINT `id_envio` FOREIGN KEY (`id_envio`) REFERENCES `envios` (`id_envios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `placa_transporte` FOREIGN KEY (`placa_transporte`) REFERENCES `transporte` (`placa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `venta_descuento`
--
ALTER TABLE `venta_descuento`
  ADD CONSTRAINT `codigo_compra` FOREIGN KEY (`id_compra`) REFERENCES `ventas` (`id_compra`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `codigo_descuento` FOREIGN KEY (`id_descuento`) REFERENCES `descuento` (`id_descuento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `venta_pedido`
--
ALTER TABLE `venta_pedido`
  ADD CONSTRAINT `codigo_album` FOREIGN KEY (`codigo_album`) REFERENCES `albumes` (`codigo_album`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `codigo_usuario` FOREIGN KEY (`codigo_usuario`) REFERENCES `cliente` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_compra` FOREIGN KEY (`id_compra`) REFERENCES `ventas` (`id_compra`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
