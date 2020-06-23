DROP TABLE IF EXISTS `odinms`.`pets`;
CREATE TABLE  `odinms`.`pets` (
  `petid` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(13) default NULL,
  `level` int(10) unsigned NOT NULL,
  `closeness` int(10) unsigned NOT NULL,
  `fullness` int(10) unsigned NOT NULL,
  PRIMARY KEY  (`petid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;