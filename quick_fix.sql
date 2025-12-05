-- IMMEDIATE FIX for Contact Form
-- Run this in phpMyAdmin for yellox4f_upm_dubai database

USE `yellox4f_upm_dubai`;

-- Check current table structure
SHOW CREATE TABLE `Contact_us`;

-- Fix the AUTO_INCREMENT issue
ALTER TABLE `Contact_us` MODIFY COLUMN `ID` INT(11) NOT NULL AUTO_INCREMENT;

-- Remove any records with ID = 0 (if they exist)
DELETE FROM `Contact_us` WHERE `ID` = 0;

-- Reset AUTO_INCREMENT to start from 1 or next available number
ALTER TABLE `Contact_us` AUTO_INCREMENT = 1;

-- Verify the fix
SELECT * FROM `Contact_us` ORDER BY `ID` DESC LIMIT 5;
