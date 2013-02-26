-- MySQL dump 10.13  Distrib 5.5.29, for debian-linux-gnu (i686)
--
-- Host: localhost    Database: exercises
-- ------------------------------------------------------
-- Server version	5.5.29-0ubuntu0.12.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  `matter` text,
  `user_id` int(11) NOT NULL,
  `categories_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `categories_id` (`categories_id`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'defination of grid comput','grid computing is blah blah blah',1,5),(2,'defination of cloud compu','cloud computing is blah blah blah',2,4),(3,'Economical downterm','Reason behind the econimical down...',3,1),(4,'Recession','prime reason of recession and economical breakdown is...',3,1),(5,'Tsunami','Natural disaster is an example of gods fury....',4,2),(6,'Poverty in Orissa','increasing poverty in Orissa....',3,3),(7,'future in grid computing','future is awsome in grid computing...',1,5);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `branch` (
  `bcode` varchar(25) NOT NULL DEFAULT '',
  `librarian` varchar(25) DEFAULT NULL,
  `address` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`bcode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
INSERT INTO `branch` VALUES ('b1','john smith','2 anglesea road'),('b2','mary jones','34 pearse st'),('b3','francis owens','george x');
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'economical'),(2,'disaster'),(3,'poverty'),(4,'cloud computing'),(5,'grid computing');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(50) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `articles_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'This is an awsome article',2,1),(2,'This is an awsome article',3,1),(3,'This is an awsome article',4,2),(4,'This is an awsome article',3,2),(5,'This is an awsome article',1,3),(6,'This is an awsome article',2,3),(7,'This is an awsome article',4,3),(8,'This is an awsome article',2,4),(9,'This is an awsome article',1,5),(10,'This is an awsome article',4,6),(11,'This is an awsome article',1,2),(12,'This is different',2,1);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `holdings`
--

DROP TABLE IF EXISTS `holdings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `holdings` (
  `branch` varchar(25) NOT NULL,
  `title` varchar(25) NOT NULL,
  `copies` int(11) DEFAULT NULL,
  PRIMARY KEY (`branch`,`title`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holdings`
--

LOCK TABLES `holdings` WRITE;
/*!40000 ALTER TABLE `holdings` DISABLE KEYS */;
INSERT INTO `holdings` VALUES ('b1','a history og dublin',1),('b1','how to',2),('b1','susannah',3),('b2','computer',2),('b2','how to fish',4),('b2','the wife',3),('b3','a history og dublin',1),('b3','computer',4),('b3','susannah',3),('b3','the wife',1);
/*!40000 ALTER TABLE `holdings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `locations` (
  `lname` varchar(25) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`lname`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES ('buttery',7023421,'college st'),('lincoln',6834523,'lincoln place'),('o\'neill\'s',6742134,'pearse st'),('old nag',7678132,'dame st');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sandwiches`
--

DROP TABLE IF EXISTS `sandwiches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sandwiches` (
  `location` varchar(25) NOT NULL,
  `bread` varchar(25) NOT NULL,
  `filling` varchar(25) NOT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`location`,`bread`,`filling`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sandwiches`
--

LOCK TABLES `sandwiches` WRITE;
/*!40000 ALTER TABLE `sandwiches` DISABLE KEYS */;
INSERT INTO `sandwiches` VALUES ('buttery','white','cheese',1),('buttery','white','ham',1.1),('lincoln','rye','beef',1.35),('lincoln','rye','ham',1.25),('lincoln','white','ham',1.3),('o\'neill\'s','white','cheese',1.2),('o\'neill\'s','white','turkey',1.35),('o\'neill\'s','whole','ham',1.25),('old nag','rye','beef',1.35),('old nag','rye','ham',1.4);
/*!40000 ALTER TABLE `sandwiches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tastes`
--

DROP TABLE IF EXISTS `tastes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tastes` (
  `name` varchar(25) NOT NULL,
  `filling` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tastes`
--

LOCK TABLES `tastes` WRITE;
/*!40000 ALTER TABLE `tastes` DISABLE KEYS */;
INSERT INTO `tastes` VALUES ('brown','turkey'),('brown','beef'),('brown','ham'),('jones','cheese'),('green','beef'),('green','turkey'),('green','cheese');
/*!40000 ALTER TABLE `tastes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testing_table`
--

DROP TABLE IF EXISTS `testing_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `testing_table` (
  `username` varchar(20) DEFAULT NULL,
  `roll_no` int(11) DEFAULT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  KEY `rooll` (`roll_no`),
  KEY `ROLL` (`roll_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testing_table`
--

LOCK TABLES `testing_table` WRITE;
/*!40000 ALTER TABLE `testing_table` DISABLE KEYS */;
INSERT INTO `testing_table` VALUES ('ashu',123,'ashutosh','tiwari'),('ashu',123,'ashutosh','tiwari'),('ashu',123,'ashutosh','tiwari'),('ashu',123,'ashutosh','tiwari'),('ashur',121,'ashutosh','tiwari');
/*!40000 ALTER TABLE `testing_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `titles`
--

DROP TABLE IF EXISTS `titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `titles` (
  `title` varchar(25) NOT NULL,
  `author` varchar(25) DEFAULT NULL,
  `publisher` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `titles`
--

LOCK TABLES `titles` WRITE;
/*!40000 ALTER TABLE `titles` DISABLE KEYS */;
INSERT INTO `titles` VALUES ('a history of dublin','david little','wiley'),('computer','blaise pascal','applewoods'),('how to fish','amy fly','stop press'),('susannah','ann brown','macmillan'),('the wife','ann brown','macmillan');
/*!40000 ALTER TABLE `titles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1'),(2,'user2'),(3,'user3'),(4,'user4');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-02-26 16:08:43
