/* SQL created by Tykian
Modifies Haunted House drops:
Removes Heartstoppers
Changes Premium Road Skylar to Skylar in Hoodoo/Voodoo drop tables
Adds Headless Horseman's drops
*/

/*Removing Heartstoppers*/
DELETE FROM `monsterdrops`
WHERE (`itemid` = '2022245');

/*Removing Premium Road Skylars*/
DELETE FROM `monsterdrops`
WHERE (`itemid` = '1442032');

/*Adding Regular Skylars*/
INSERT INTO `monsterdrops`
(`monsterid`, `itemid`, `chance`)
VALUES
(9400561, 1442010, 7000);

INSERT INTO `monsterdrops`
(`monsterid`,`itemid`,`chance`)
VALUES
(9400562, 1442010, 7000);

/*Removing Headless Horseman's current drop table(assuming he has one)*/
DELETE FROM `monsterdrops`
WHERE (`monsterid` = '9400549');

/*Adding Topwear STR 30 to Headless Horseman*/
INSERT INTO `monsterdrops`
(`monsterid`, `itemid`, `chance`)
VALUES
(9400549, 2040407, 600);

/*Adding Helmet HP 30 to Headless Horseman*/
INSERT INTO `monsterdrops`
(`monsterid`, `itemid`, `chance`)
VALUES
(9400549, 2040011, 600);

/*Adding Devil's Sunrise to Headless Horseman*/
INSERT INTO `monsterdrops`
(`monsterid`, `itemid`, `chance`)
VALUES
(9400549, 1402016, 400);

/*Adding Magicodar to Headless Horseman*/
INSERT INTO `monsterdrops`
(`monsterid`, `itemid`, `chance`)
VALUES
(9400549, 1372009, 400);

/*Adding Casters to Headless Horseman*/
INSERT INTO `monsterdrops`
(`monsterid`, `itemid`, `chance`)
VALUES
(9400549, 1472033, 400);

/*Adding Dark Arund to Headless Horseman*/
INSERT INTO `monsterdrops`
(`monsterid`, `itemid`, `chance`)
VALUES
(9400549, 1452015, 400);