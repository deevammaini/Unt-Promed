-- ============================================
-- ALTERNATIVE FIX - Keep existing data
-- Run this if you want to preserve existing records
-- ============================================

-- Step 1: Use the correct database
USE `yellox4f_upm_dubai`;

-- Step 2: Check current table structure
DESCRIBE `Contact_us`;

-- Step 3: Remove problematic constraints if they exist
ALTER TABLE `Contact_us` DROP INDEX IF EXISTS `unique_email`;
ALTER TABLE `Contact_us` DROP INDEX IF EXISTS `unique_phone`;

-- Step 4: Ensure ID is properly set to AUTO_INCREMENT
ALTER TABLE `Contact_us` MODIFY COLUMN `ID` INT(11) NOT NULL AUTO_INCREMENT;

-- Step 5: Reset AUTO_INCREMENT to the next available number
-- This will set it to the highest ID + 1
ALTER TABLE `Contact_us` AUTO_INCREMENT = 1;

-- Step 6: If there are any records with ID = 0, update them
UPDATE `Contact_us` SET `ID` = NULL WHERE `ID` = 0;

-- Step 7: Ensure the AUTO_INCREMENT starts properly
SET @max_id = (SELECT IFNULL(MAX(ID), 0) + 1 FROM `Contact_us`);
SET @sql = CONCAT('ALTER TABLE `Contact_us` AUTO_INCREMENT = ', @max_id);
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Step 8: Verify the table structure
SHOW CREATE TABLE `Contact_us`;

-- Step 9: Test insert (remove this after verification)
-- INSERT INTO `Contact_us` (Full_Name, Email, Country_Code, Phone, Industry, Message) 
-- VALUES ('Test User', 'test@example.com', '+971', '1234567890', 'Test', 'Test message');

-- Step 10: Check the inserted record
-- SELECT * FROM `Contact_us` ORDER BY ID DESC LIMIT 1;
