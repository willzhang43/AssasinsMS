ALTER TABLE `characters` ADD COLUMN `pvpkills` int(11) NOT NULL DEFAULT '0' AFTER `messengerposition`;

ALTER TABLE `characters` ADD COLUMN `pvpdeaths` int(11) NOT NULL DEFAULT '0' AFTER `pvpkills`;