-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.0.51b-community-nt


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema odinms
--

CREATE DATABASE IF NOT EXISTS odinms;
USE odinms;

--
-- Definition of table `channelconfig`
--

DROP TABLE IF EXISTS `channelconfig`;
CREATE TABLE `channelconfig` (
  `channelconfigid` int(10) unsigned NOT NULL auto_increment,
  `channelid` int(10) unsigned NOT NULL default '0',
  `name` tinytext NOT NULL,
  `value` tinytext NOT NULL,
  PRIMARY KEY  (`channelconfigid`),
  KEY `channelid` (`channelid`),
  CONSTRAINT `channelconfig_ibfk_1` FOREIGN KEY (`channelid`) REFERENCES `channels` (`channelid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `channelconfig`
--

/*!40000 ALTER TABLE `channelconfig` DISABLE KEYS */;
INSERT INTO `channelconfig` (`channelconfigid`,`channelid`,`name`,`value`) VALUES 
 (1,2,'net.sf.odinms.channel.net.port','7579'),
 (2,3,'net.sf.odinms.channel.net.port','7570'),
 (3,4,'net.sf.odinms.channel.net.port','7522'),
 (4,5,'net.sf.odinms.channel.net.port','7575'),
 (5,6,'net.sf.odinms.channel.net.port','7582'),
 (6,7,'net.sf.odinms.channel.net.port','7581'),
 (7,8,'net.sf.odinms.channel.net.port','7533'),
 (8,9,'net.sf.odinms.channel.net.port','7583'),
 (9,10,'net.sf.odinms.channel.net.port','7511'),
 (10,11,'net.sf.odinms.channel.net.port','7585'),
 (11,12,'net.sf.odinms.channel.net.port','7586'),
 (12,13,'net.sf.odinms.channel.net.port','7587'),
 (13,14,'net.sf.odinms.channel.net.port','7588'),
 (14,15,'net.sf.odinms.channel.net.port','7589'),
 (15,16,'net.sf.odinms.channel.net.port','7590'),
 (16,17,'net.sf.odinms.channel.net.port','7500'),
 (17,18,'net.sf.odinms.channel.net.port','7529'),
 (18,19,'net.sf.odinms.channel.net.port','7521'),
 (19,20,'net.sf.odinms.channel.net.port','7599');
/*!40000 ALTER TABLE `channelconfig` ENABLE KEYS */;


--
-- Definition of table `channels`
--

DROP TABLE IF EXISTS `channels`;
CREATE TABLE `channels` (
  `channelid` int(10) unsigned NOT NULL auto_increment,
  `world` int(11) NOT NULL default '0',
  `number` int(11) default NULL,
  `key` varchar(40) NOT NULL default '',
  PRIMARY KEY  (`channelid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `channels`
--

/*!40000 ALTER TABLE `channels` DISABLE KEYS */;
INSERT INTO `channels` (`channelid`,`world`,`number`,`key`) VALUES 
 (1,0,1,'2062e90b3ea10a86ff666a76c41aa0d9e9d88f4e'),
 (2,0,2,'5dfc64fff3b07c7c01ebd39706ec3cf3e6c37464'),
 (3,0,3,'f47ef28d4a014d8de91de9f28ae6fcd52dfb5f77'),
 (4,0,4,'33fd56a7b827c7b0b2df8ea1224521cd7c00e4e4'),
 (5,0,5,'113f78f519e010e65853241bfcb14450c4fccb66'),
 (6,0,6,'4abba5486022346a2b309c1c2ea6a0da41a88090'),
 (7,0,7,'76134d11fe0c2b337e2b786bfcc738b975fcf40a'),
 (8,0,8,'5688c244c56a884a50984130a17d0b61d06743a3'),
 (9,0,9,'6e59a6559033c70b98148f1bd67e1b63aaeedf30'),
 (10,0,10,'603dd499e4b134bf9925600b7f150644f9e9a50b'),
 (11,0,11,'b48f4c3c803f58950b005d785cf828027a83eac4'),
 (12,0,12,'52a9458618abed6a42e228b33ade9cdf5ded10b4'),
 (13,0,13,'190535a9ffb4d4d688ac1f3fa7dc09a6c81c3b86'),
 (14,0,14,'5ce2b432ac85290b411ef0975b96712c1c35591a'),
 (15,0,15,'7d8bae4945561008426174be907142196ed84275'),
 (16,0,16,'da0517603d42ce6f9d9bdf4871bc1ecbf7a20c3c'),
 (17,0,17,'87c56d1e33cf26f48ac76f1bd76b6637cddd9548'),
 (18,0,18,'fbce35ee8db37d9bf02f444c65e49fb8a9685c28'),
 (19,0,19,'51a2bb10ecf4e2e28fe62b405106baadb0d11090'),
 (20,0,20,'9a071c700e4c051c354817f7e2482d148380d574');
/*!40000 ALTER TABLE `channels` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;