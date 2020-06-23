ALTER TABLE accounts ADD tempban TIMESTAMP AFTER `banned`;
ALTER TABLE accounts ADD greason TINYINT(4) AFTER `tempban`;