-- ============================================
-- Complete Database Setup for Contact Form
-- Run this in phpMyAdmin SQL tab
-- ============================================

-- Step 1: Create the database (if it doesn't exist)
-- Replace 'yellox4f_upm_dubai' with your actual database name
CREATE DATABASE IF NOT EXISTS `yellox4f_upm_dubai` 
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Step 2: Use the database
USE `yellox4f_upm_dubai`;

-- Step 3: Create the Contact_us table
CREATE TABLE IF NOT EXISTS `Contact_us` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `Full_Name` VARCHAR(100) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Country_Code` VARCHAR(10) NOT NULL DEFAULT '+971',
  `Phone` VARCHAR(20) NOT NULL,
  `Industry` VARCHAR(100) NOT NULL DEFAULT '',
  `Message` TEXT NULL,
  `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `unique_email` (`Email`),
  UNIQUE KEY `unique_phone` (`Phone`),
  INDEX `idx_created_at` (`Created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- If the table already exists, use this instead:
-- ============================================

-- ALTER TABLE `Contact_us` 
-- MODIFY COLUMN `Phone` VARCHAR(20) NOT NULL;

-- ALTER TABLE `Contact_us` 
-- MODIFY COLUMN `Industry` VARCHAR(100) NOT NULL DEFAULT '';

-- ============================================
-- Optional: Add indexes for better performance
-- ============================================
-- ALTER TABLE `Contact_us` ADD INDEX `idx_email` (`Email`);
-- ALTER TABLE `Contact_us` ADD INDEX `idx_phone` (`Phone`);


