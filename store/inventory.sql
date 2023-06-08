DROP DATABASE IF EXISTS `sql_invoicing`;
CREATE DATABASE `sql_invoicing`; 
USE `sql_invoicing`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE `store` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `quantity_in_stock` int(11) NOT NULL,
  `unit_price` decimal(4,2) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `products` VALUES (0,'Save The Tatas Set',100,99.99);
INSERT INTO `products` VALUES (01235,'Purple Flower Se',10,69.65);
INSERT INTO `products` VALUES (0253,'Orange Bralette Set',15,49.99);
INSERT INTO `products` VALUES (023254,'BTC Kimono',50,89.99);
INSERT INTO `products` VALUES (01216,'Oceans',94,16.99);
INSERT INTO `products` VALUES (0156,'Flowers',25,16.99);
INSERT INTO `products` VALUES (01112,'Butterflys',15,22.29);
INSERT INTO `products` VALUES (01111,'Dark Purple Bralette',26,14.99);
INSERT INTO `products` VALUES (0111326,'Aqua',67,19.99);
INSERT INTO `products` VALUES (001010,'Dark G-String',60,22.99);
INSERT INTO `products` VALUES (08770,'Sunflower Bralette Set',60,39.99);
INSERT INTO `products` VALUES (051010,'Fuchsia Boy Shorts',60,27.99);
INSERT INTO `products` VALUES (05402,'Sexy Bones',50,18.99);
INSERT INTO `products` VALUES (071010,'All Together',55,25.99);
INSERT INTO `products` VALUES (045456,'Pink Kimono',60,99.99);
INSERT INTO `products` VALUES (00004521,'Dark Flowers',60,22.99);
INSERT INTO `products` VALUES (03453,'Bow Bandeau Set',80,79.99);
INSERT INTO `products` VALUES (00000898,'Dark Bitcoin Wave Set',25,44.99);