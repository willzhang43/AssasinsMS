-- MySQL dump 10.11
--
-- Host: localhost    Database: odinms_release
-- ------------------------------------------------------
-- Server version	5.0.32-Debian_7etch5-log

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
-- Table structure for table `ipbans`
--

DROP TABLE IF EXISTS `ipbans`;
CREATE TABLE `ipbans` (
  `ipbanid` int(10) unsigned NOT NULL auto_increment,
  `ip` varchar(40) NOT NULL default '',
  PRIMARY KEY  (`ipbanid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ipbans`
--

LOCK TABLES `ipbans` WRITE;
/*!40000 ALTER TABLE `ipbans` DISABLE KEYS */;
/*!40000 ALTER TABLE `ipbans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iplog`
--

DROP TABLE IF EXISTS `iplog`;
CREATE TABLE `iplog` (
  `iplogid` int(10) unsigned NOT NULL auto_increment,
  `accountid` int(11) NOT NULL default '0',
  `ip` varchar(30) NOT NULL default '',
  `login` timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`iplogid`),
  KEY `accountid` (`accountid`,`ip`),
  KEY `ip` (`ip`),
  CONSTRAINT `iplog_ibfk_1` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `iplog`
--

LOCK TABLES `iplog` WRITE;
/*!40000 ALTER TABLE `iplog` DISABLE KEYS */;
/*!40000 ALTER TABLE `iplog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `macbans`
--

DROP TABLE IF EXISTS `macbans`;
CREATE TABLE `macbans` (
  `macbanid` int(10) unsigned NOT NULL auto_increment,
  `mac` varchar(30) NOT NULL,
  PRIMARY KEY  (`macbanid`),
  UNIQUE KEY `mac_2` (`mac`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `macbans`
--

LOCK TABLES `macbans` WRITE;
/*!40000 ALTER TABLE `macbans` DISABLE KEYS */;
/*!40000 ALTER TABLE `macbans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `macfilters`
--

DROP TABLE IF EXISTS `macfilters`;
CREATE TABLE `macfilters` (
  `macfilterid` int(10) unsigned NOT NULL auto_increment,
  `filter` varchar(30) NOT NULL,
  PRIMARY KEY  (`macfilterid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `macfilters`
--

LOCK TABLES `macfilters` WRITE;
/*!40000 ALTER TABLE `macfilters` DISABLE KEYS */;
INSERT INTO `macfilters` VALUES (1,'00-50-56-.{2}-.{2}-.{2}'),(2,'02-00-4C-4F-4F-50'),(3,'7A-79-00-.{2}-.{2}-.{2}'),(4,'00-03-8A-.{2}-.{2}-.{2}');
/*!40000 ALTER TABLE `macfilters` ENABLE KEYS */;
UNLOCK TABLES;


/*!50001 DROP TABLE IF EXISTS `readable_last_hour_cheatlog`*/;
/*!50001 DROP VIEW IF EXISTS `readable_last_hour_cheatlog`*/;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `readable_last_hour_cheatlog` AS select `a`.`name` AS `accountname`,`a`.`id` AS `accountid`,`c`.`name` AS `name`,`c`.`id` AS `characterid`,sum(`cl`.`count`) AS `numrepos` from ((`cheatlog` `cl` join `characters` `c`) join `accounts` `a`) where ((`cl`.`cid` = `c`.`id`) and (`a`.`id` = `c`.`accountid`) and (timestampdiff(HOUR,`cl`.`lastoffensetime`,now()) < 1) and (`a`.`banned` = 0)) group by `cl`.`cid` order by sum(`cl`.`count`) desc */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2008-04-26 12:38:24