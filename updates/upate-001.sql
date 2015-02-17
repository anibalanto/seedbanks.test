ALTER TABLE `seedbanks`.`farmer` ADD COLUMN `first_name` VARCHAR(255) NULL DEFAULT NULL  , ADD COLUMN `surname` VARCHAR(255) NULL DEFAULT NULL  AFTER `first_name` , ADD COLUMN `reliability` FLOAT NULL DEFAULT NULL  AFTER `surname` ;

