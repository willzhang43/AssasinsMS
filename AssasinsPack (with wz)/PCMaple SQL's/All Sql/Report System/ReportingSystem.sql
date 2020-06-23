CREATE TABLE IF NOT EXISTS `reports` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `reporttime` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `reporterid` int(11) NOT NULL,
  `victimid` int(11) NOT NULL,
  `reason` tinyint(4) NOT NULL,
  `chatlog` text NOT NULL,
  `status` text NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;