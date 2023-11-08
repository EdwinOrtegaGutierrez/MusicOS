-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.9.3-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para musicos
CREATE DATABASE IF NOT EXISTS `musicos` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `musicos`;

-- Volcando estructura para tabla musicos.albumes
CREATE TABLE IF NOT EXISTS `albumes` (
  `autor` varchar(50) NOT NULL,
  `fecha_salida` date NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `num_canciones` int(10) unsigned NOT NULL,
  `codigo_album` int(11) NOT NULL AUTO_INCREMENT,
  `canciones` text DEFAULT NULL,
  `genero` varchar(20) DEFAULT NULL,
  `estado` varchar(8) NOT NULL,
  `precio` float DEFAULT NULL,
  `num_ventas` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`codigo_album`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.albumes: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `albumes` DISABLE KEYS */;
INSERT INTO `albumes` (`autor`, `fecha_salida`, `titulo`, `num_canciones`, `codigo_album`, `canciones`, `genero`, `estado`, `precio`, `num_ventas`) VALUES
	('Pepe Arcilla', '2023-04-21', 'Surcando los mares de leche', 3, 3, 'Pasilla, Chedar, Naranja', 'Rap', '', 12, 1),
	('Ve ve', '2023-04-24', 'Dios Estático', 3, 4, 'Edgar el Cobrador, H3LL0, Expo', 'Rock', '', 45, 2),
	('Droms', '2023-04-25', 'Lavadora de dinero', 3, 5, 'No tengo dinero, Préstame 100 varos te los pago el viernes, Elvis viene', 'Trap', '', 45, 3),
	('Agaarree', '2023-04-19', 'C', 3, 6, 'Sinam, Aye Aye, CrIstA', 'Jazz', '', 34, 4),
	('Clavo al vaquero', '2023-03-26', 'Anillos de Júpiter', 2, 7, 'Anillos de Júpiter, En caja a Marte', 'House', '', 56, 5),
	('WLFMAN', '2023-05-13', 'Hombre Máquina', 3, 8, 'ION FNK2000, NOT EP, IF EXISTS', 'Techno', '', 45, 6),
	('El sueño', '2023-05-11', 'Monstruo de Gila', 2, 9, 'Monstruo de Gila, Castillo se desmorona', 'Rap', '', 74, 7),
	('Come-Neuronas', '2023-05-11', 'Dejando mi pierna izquierda para la antropología', 2, 10, 'Saludo de vuelta, 01-800-SMD', 'Rock', '', 43, 8),
	('G-O-D', '2023-05-20', 'EP! MEGAMIX', 3, 11, 'EP 1, EP 2, EP 3', 'Techno', '', 32, 9),
	('Rey Pizza', '2023-05-21', 'Estoy en tu mente', 2, 12, 'Estoy en tu mente, Estoy en tu mente difusa', 'House', '', 54, 11);
/*!40000 ALTER TABLE `albumes` ENABLE KEYS */;

-- Volcando estructura para procedimiento musicos.Albumes_Categorias
DELIMITER //
CREATE PROCEDURE `Albumes_Categorias`(IN `p_genero` VARCHAR(255))
BEGIN
    SELECT * FROM albumes WHERE genero = p_genero;
END//
DELIMITER ;

-- Volcando estructura para tabla musicos.carrito
CREATE TABLE IF NOT EXISTS `carrito` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(50) NOT NULL,
  `costo` float NOT NULL DEFAULT 0,
  `cantidad` int(11) NOT NULL,
  `subtotal` float NOT NULL,
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `albumes` (`codigo_album`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.carrito: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;

-- Volcando estructura para procedimiento musicos.categorias
DELIMITER //
CREATE PROCEDURE `categorias`()
BEGIN
SELECT genero FROM albumes GROUP BY genero;
END//
DELIMITER ;

-- Volcando estructura para tabla musicos.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `apellidos` varchar(50) NOT NULL DEFAULT '',
  `correo` varchar(50) NOT NULL DEFAULT '',
  `contraseña` varchar(50) NOT NULL DEFAULT '',
  `codigo_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(8) NOT NULL,
  PRIMARY KEY (`codigo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.cliente: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` (`nombre`, `apellidos`, `correo`, `contraseña`, `codigo_usuario`, `estado`) VALUES
	('Alan', 'Pollo Loco', 'alan@gmail.com', 'alan123', 1, 'activo'),
	('edwin', 'ortega', 'edwin@gmail.com', 'eddy', 2, 'Activo');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.cliente_tarjeta
CREATE TABLE IF NOT EXISTS `cliente_tarjeta` (
  `id_tarjeta` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  KEY `codigo_tarjeta` (`id_tarjeta`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `codigo_tarjeta` FOREIGN KEY (`id_tarjeta`) REFERENCES `tarjetas` (`id_tarjeta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `cliente` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.cliente_tarjeta: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `cliente_tarjeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente_tarjeta` ENABLE KEYS */;

-- Volcando estructura para procedimiento musicos.Create_Client
DELIMITER //
CREATE PROCEDURE `Create_Client`(IN `p_nombre` VARCHAR(255), IN `p_apellidos` VARCHAR(255), IN `p_correo` VARCHAR(255), IN `p_contraseña` VARCHAR(255), IN `p_estado` VARCHAR(255))
BEGIN
    INSERT INTO cliente(nombre, apellidos, correo, contraseña, estado)
    VALUES (p_nombre, p_apellidos, p_correo, p_contraseña, p_estado);
END//
DELIMITER ;

-- Volcando estructura para tabla musicos.descuento
CREATE TABLE IF NOT EXISTS `descuento` (
  `id_descuento` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad` float DEFAULT NULL,
  `estado` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id_descuento`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.descuento: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `descuento` DISABLE KEYS */;
INSERT INTO `descuento` (`id_descuento`, `cantidad`, `estado`) VALUES
	(1, NULL, NULL);
/*!40000 ALTER TABLE `descuento` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.envios
CREATE TABLE IF NOT EXISTS `envios` (
  `id_envios` int(11) NOT NULL AUTO_INCREMENT,
  `estado` tinytext DEFAULT NULL,
  PRIMARY KEY (`id_envios`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.envios: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `envios` DISABLE KEYS */;
/*!40000 ALTER TABLE `envios` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.envio_pedido
CREATE TABLE IF NOT EXISTS `envio_pedido` (
  `id_pedido` int(11) NOT NULL,
  `id_envio` int(11) NOT NULL,
  KEY `pedido` (`id_pedido`) USING BTREE,
  KEY `envio` (`id_envio`),
  CONSTRAINT `envio` FOREIGN KEY (`id_envio`) REFERENCES `envios` (`id_envios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.envio_pedido: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `envio_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `envio_pedido` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.imagenes
CREATE TABLE IF NOT EXISTS `imagenes` (
  `id_imagen` int(11) NOT NULL,
  `ruta` blob DEFAULT NULL,
  PRIMARY KEY (`id_imagen`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.imagenes: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.imagen_album
CREATE TABLE IF NOT EXISTS `imagen_album` (
  `id_album` int(11) DEFAULT NULL,
  `id_imagen` int(11) DEFAULT NULL,
  KEY `Índice 1` (`id_album`),
  KEY `Índice 2` (`id_imagen`),
  CONSTRAINT `id_album` FOREIGN KEY (`id_album`) REFERENCES `albumes` (`codigo_album`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_img` FOREIGN KEY (`id_imagen`) REFERENCES `imagenes` (`id_imagen`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.imagen_album: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `imagen_album` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen_album` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.imagen_cliente
CREATE TABLE IF NOT EXISTS `imagen_cliente` (
  `id_cliente` int(11) DEFAULT NULL,
  `id_imagen` int(11) DEFAULT NULL,
  KEY `Índice 1` (`id_cliente`),
  KEY `Índice 2` (`id_imagen`),
  CONSTRAINT `id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_imagen` FOREIGN KEY (`id_imagen`) REFERENCES `imagenes` (`id_imagen`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.imagen_cliente: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `imagen_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen_cliente` ENABLE KEYS */;

-- Volcando estructura para procedimiento musicos.Login_Usuario
DELIMITER //
CREATE PROCEDURE `Login_Usuario`(
	IN `user_correo` VARCHAR(50),
	IN `user_password` VARCHAR(50)
)
BEGIN
    DECLARE UserExists BOOLEAN;
    DECLARE id INT;
    -- Verificar si el usuario existe en la tabla
    IF (SELECT 1 FROM cliente WHERE correo = user_correo AND contraseña = user_password) THEN
    SELECT codigo_usuario INTO id FROM cliente WHERE correo = user_correo;
        SET UserExists = TRUE; -- Usuario encontrado (true)
        SELECT UserExists, id;
    ELSE
        SET UserExists = FALSE; -- Usuario no encontrado (false)
        SELECT UserExists;
    END IF;

END//
DELIMITER ;

-- Volcando estructura para procedimiento musicos.Mas_Vendidos
DELIMITER //
CREATE PROCEDURE `Mas_Vendidos`()
BEGIN
SELECT albumes.titulo, SUM(num_ventas) AS Total_de_ventas FROM albumes GROUP BY albumes.titulo ORDER BY num_ventas DESC LIMIT 5;
END//
DELIMITER ;

-- Volcando estructura para tabla musicos.pedidos
CREATE TABLE IF NOT EXISTS `pedidos` (
  `direccion_pedido` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_pedido`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.pedidos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;

-- Volcando estructura para procedimiento musicos.Principales_Generos
DELIMITER //
CREATE PROCEDURE `Principales_Generos`()
BEGIN
SELECT albumes.genero, SUM(num_ventas) AS Total_de_ventas FROM albumes GROUP BY albumes.genero ORDER BY Total_de_ventas DESC LIMIT 5;
END//
DELIMITER ;

-- Volcando estructura para tabla musicos.tarjetas
CREATE TABLE IF NOT EXISTS `tarjetas` (
  `numero_tarjeta` varchar(16) NOT NULL,
  `fecha_caducidad` date NOT NULL,
  `titular` varchar(50) NOT NULL,
  `emisor` varchar(9) NOT NULL,
  `cvv` int(3) NOT NULL,
  `id_tarjeta` int(3) NOT NULL AUTO_INCREMENT,
  `estado` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id_tarjeta`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.tarjetas: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
INSERT INTO `tarjetas` (`numero_tarjeta`, `fecha_caducidad`, `titular`, `emisor`, `cvv`, `id_tarjeta`, `estado`) VALUES
	('1234567890112233', '2023-08-14', 'Pepe Gallo', 'VISA', 123, 1, NULL);
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.transporte
CREATE TABLE IF NOT EXISTS `transporte` (
  `placa` varchar(10) NOT NULL,
  `conductor` varchar(50) DEFAULT NULL,
  `estado` tinytext DEFAULT NULL,
  PRIMARY KEY (`placa`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.transporte: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `transporte` DISABLE KEYS */;
/*!40000 ALTER TABLE `transporte` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.transporte_envio
CREATE TABLE IF NOT EXISTS `transporte_envio` (
  `id_envio` int(11) DEFAULT NULL,
  `placa_transporte` varchar(10) DEFAULT NULL,
  KEY `id_envio` (`id_envio`),
  KEY `placa_transporte` (`placa_transporte`),
  CONSTRAINT `id_envio` FOREIGN KEY (`id_envio`) REFERENCES `envios` (`id_envios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `placa_transporte` FOREIGN KEY (`placa_transporte`) REFERENCES `transporte` (`placa`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.transporte_envio: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `transporte_envio` DISABLE KEYS */;
/*!40000 ALTER TABLE `transporte_envio` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.ventas
CREATE TABLE IF NOT EXISTS `ventas` (
  `tipo_pago` varchar(7) DEFAULT NULL,
  `id_compra` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_compra`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.ventas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.venta_descuento
CREATE TABLE IF NOT EXISTS `venta_descuento` (
  `id_compra` int(11) DEFAULT NULL,
  `id_descuento` int(11) DEFAULT NULL,
  KEY `codigo_compra` (`id_compra`),
  KEY `codigo_descuento` (`id_descuento`),
  CONSTRAINT `codigo_compra` FOREIGN KEY (`id_compra`) REFERENCES `ventas` (`id_compra`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `codigo_descuento` FOREIGN KEY (`id_descuento`) REFERENCES `descuento` (`id_descuento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.venta_descuento: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `venta_descuento` DISABLE KEYS */;
/*!40000 ALTER TABLE `venta_descuento` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.venta_pedido
CREATE TABLE IF NOT EXISTS `venta_pedido` (
  `codigo_usuario` int(11) NOT NULL,
  `codigo_album` int(11) NOT NULL,
  `id_compra` int(11) DEFAULT NULL,
  `id_pedido` int(11) DEFAULT NULL,
  KEY `codigo_usuario` (`codigo_usuario`),
  KEY `codigo_album` (`codigo_album`),
  KEY `id_compra` (`id_compra`),
  KEY `id_pedido` (`id_pedido`),
  CONSTRAINT `codigo_album` FOREIGN KEY (`codigo_album`) REFERENCES `albumes` (`codigo_album`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `codigo_usuario` FOREIGN KEY (`codigo_usuario`) REFERENCES `cliente` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_compra` FOREIGN KEY (`id_compra`) REFERENCES `ventas` (`id_compra`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.venta_pedido: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `venta_pedido` DISABLE KEYS */;
INSERT INTO `venta_pedido` (`codigo_usuario`, `codigo_album`, `id_compra`, `id_pedido`) VALUES
	(1, 5, NULL, NULL);
/*!40000 ALTER TABLE `venta_pedido` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
