SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for nxcode
-- ----------------------------
DROP TABLE IF EXISTS `nxcode`;
CREATE TABLE `nxcode` (
  `code` varchar(15) NOT NULL,
  `valid` int(11) NOT NULL default '1',
  `user` varchar(13) default NULL,
  `type` int(11) NOT NULL default '0',
  `item` int(11) NOT NULL default '10000',
  PRIMARY KEY  (`code`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `nxcode` VALUES ('710778C56D21651', '1', '', '0', '10000');