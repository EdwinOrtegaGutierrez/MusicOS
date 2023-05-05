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
  `precio` float unsigned NOT NULL,
  `num_canciones` int(10) unsigned NOT NULL,
  `codigo_album` int(11) NOT NULL AUTO_INCREMENT,
  `canciones` text DEFAULT NULL,
  `genero` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`codigo_album`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.albumes: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `albumes` DISABLE KEYS */;
INSERT INTO `albumes` (`autor`, `fecha_salida`, `titulo`, `precio`, `num_canciones`, `codigo_album`, `canciones`, `genero`) VALUES
	('Pepe Arcilla', '2023-04-21', 'Surcando los mares de leche', 190, 3, 3, 'Pasilla, Chedar, Naranja', 'Rap'),
	('Ve ve', '2023-04-24', 'Dios Estático', 200, 3, 4, 'Edgar el Cobrador, H3LL0, Expo', 'Rock'),
	('Droms', '2023-04-25', 'Lavadora de dinero', 50, 3, 5, 'No tengo dinero, Préstame 100 varos te los pago el viernes, Elvis viene', 'Rap'),
	('Agaarree', '2023-04-19', 'C', 150, 3, 6, 'Sinam, Aye Aye, CrIstA', 'Jazz'),
	('Clavo al vaquero', '2023-03-26', 'Anillos de Júpiter', 345, 2, 7, 'Anillos de Júpiter, En caja a Marte', 'Rap');
/*!40000 ALTER TABLE `albumes` ENABLE KEYS */;

-- Volcando estructura para procedimiento musicos.mas_vendidos
DELIMITER //
CREATE PROCEDURE `mas_vendidos`()
BEGIN
SELECT codigo_album, total AS num_ventas FROM ventas ORDER BY num_ventas DESC;
END//
DELIMITER ;

-- Volcando estructura para tabla musicos.pedidos
CREATE TABLE IF NOT EXISTS `pedidos` (
  `codigo_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_usuario` int(11) NOT NULL,
  `codigo_album` int(11) NOT NULL,
  `direccion_pedido` varchar(60) NOT NULL DEFAULT '',
  `estado` text DEFAULT NULL,
  PRIMARY KEY (`codigo_pedido`),
  KEY `codigo_usuario` (`codigo_usuario`),
  KEY `codigo_album` (`codigo_album`),
  CONSTRAINT `codigo_album` FOREIGN KEY (`codigo_album`) REFERENCES `albumes` (`codigo_album`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `codigo_usuario` FOREIGN KEY (`codigo_usuario`) REFERENCES `usuarios` (`codigo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.pedidos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` (`codigo_pedido`, `codigo_usuario`, `codigo_album`, `direccion_pedido`, `estado`) VALUES
	(1, 1, 5, 'Tonala #24', 'En espera');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `apellidos` varchar(50) NOT NULL DEFAULT '',
  `correo` varchar(50) NOT NULL DEFAULT '',
  `contraseña` varchar(50) NOT NULL DEFAULT '',
  `codigo_usuario` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`codigo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.usuarios: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`nombre`, `apellidos`, `correo`, `contraseña`, `codigo_usuario`) VALUES
	('Alan', 'Pollo Loco', 'alan@gmail.com', 'alan123', 1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

-- Volcando estructura para tabla musicos.ventas
CREATE TABLE IF NOT EXISTS `ventas` (
  `codigo_album` int(11) NOT NULL,
  `total` int(11) NOT NULL DEFAULT 0,
  KEY `album` (`codigo_album`),
  CONSTRAINT `album` FOREIGN KEY (`codigo_album`) REFERENCES `albumes` (`codigo_album`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla musicos.ventas: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
INSERT INTO `ventas` (`codigo_album`, `total`) VALUES
	(3, 10),
	(4, 5),
	(5, 3),
	(6, 7),
	(7, 4);
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
