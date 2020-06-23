-- MySQL dump 10.11
--
-- Host: localhost    Database: OdinMS
-- ------------------------------------------------------
-- Server version	5.0.51b-community-nt

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

DROP TABLE IF EXISTS `guilds`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `guilds` (
  `guildid` int(10) unsigned NOT NULL auto_increment,
  `leader` int(10) unsigned NOT NULL default '0',
  `GP` int(10) unsigned NOT NULL default '0',
  `logo` int(10) unsigned default NULL,
  `logoColor` smallint(5) unsigned NOT NULL default '0',
  `name` varchar(45) NOT NULL,
  `rank1title` varchar(45) NOT NULL default 'Master',
  `rank2title` varchar(45) NOT NULL default 'Jr. Master',
  `rank3title` varchar(45) NOT NULL default 'Member',
  `rank4title` varchar(45) NOT NULL default 'Member',
  `rank5title` varchar(45) NOT NULL default 'Member',
  `capacity` int(10) unsigned NOT NULL default '10',
  `logoBG` int(10) unsigned default NULL,
  `logoBGColor` smallint(5) unsigned NOT NULL default '0',
  `notice` varchar(101) default NULL,
  `signature` int(11) NOT NULL default '0',
  PRIMARY KEY  (`guildid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
SET character_set_client = @saved_cs_client;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2008-05-30 14:54:43
