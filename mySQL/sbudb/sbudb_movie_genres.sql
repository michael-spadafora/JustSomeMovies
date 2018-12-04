-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: sbudb
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movie_genres`
--

DROP TABLE IF EXISTS `movie_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `movie_genres` (
  `movie_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  PRIMARY KEY (`movie_id`,`genre_id`),
  KEY `movie_genres_ibfk_2` (`genre_id`),
  CONSTRAINT `movie_genres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`genre_id`),
  CONSTRAINT `movie_genres_ibfk_3` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_genres`
--

LOCK TABLES `movie_genres` WRITE;
/*!40000 ALTER TABLE `movie_genres` DISABLE KEYS */;
INSERT INTO `movie_genres` VALUES (6,1),(10,1),(11,1),(21,1),(22,1),(24,1),(25,1),(26,1),(28,1),(30,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,1),(41,1),(42,1),(43,1),(44,1),(45,1),(46,1),(47,1),(48,1),(49,1),(50,1),(51,1),(52,1),(55,1),(56,1),(7,2),(15,2),(21,2),(22,2),(25,2),(28,2),(30,2),(32,2),(33,2),(34,2),(35,2),(36,2),(37,2),(38,2),(39,2),(40,2),(41,2),(42,2),(43,2),(44,2),(45,2),(46,2),(47,2),(48,2),(49,2),(50,2),(51,2),(52,2),(54,2),(55,2),(56,2),(62,2),(64,2),(67,2),(68,2),(69,2),(70,2),(71,2),(2,3),(5,3),(28,3),(52,3),(53,3),(54,3),(55,3),(56,3),(57,3),(58,3),(59,3),(60,3),(61,3),(62,3),(63,3),(64,3),(65,3),(66,3),(67,3),(68,3),(69,3),(70,3),(71,3),(2,4),(8,4),(12,4),(16,4),(17,4),(31,4),(33,4),(37,4),(39,4),(53,4),(54,4),(56,4),(57,4),(58,4),(60,4),(62,4),(63,4),(64,4),(66,4),(67,4),(68,4),(69,4),(70,4),(4,5),(12,5),(13,5),(19,5),(24,5),(30,5),(1,7),(3,7),(4,7),(7,7),(9,7),(10,7),(12,7),(13,7),(16,7),(17,7),(18,7),(20,7),(31,7),(43,7),(49,7),(53,7),(2,8),(5,8),(14,8),(15,8),(20,8),(28,8),(32,8),(33,8),(52,8),(53,8),(54,8),(55,8),(56,8),(57,8),(58,8),(59,8),(60,8),(61,8),(62,8),(63,8),(64,8),(65,8),(66,8),(67,8),(68,8),(69,8),(70,8),(71,8),(2,9),(14,9),(15,9),(20,9),(25,9),(32,9),(35,9),(37,9),(42,9),(45,9),(47,9),(56,9),(63,9),(9,10),(17,10),(6,11),(14,11),(18,11),(27,11),(1,12),(3,12),(4,13),(14,13),(18,13),(19,13),(27,13),(3,14),(29,14),(31,14),(6,15),(16,15),(22,15),(23,15),(25,15),(26,15),(33,15),(34,15),(35,15),(36,15),(37,15),(38,15),(39,15),(40,15),(41,15),(43,15),(44,15),(46,15),(47,15),(48,15),(50,15),(51,15),(4,17),(6,17),(11,17),(13,17),(14,17),(18,17),(19,17),(21,17),(22,17),(24,17),(26,17),(27,17),(30,17),(6,18);
/*!40000 ALTER TABLE `movie_genres` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-03 22:25:52
