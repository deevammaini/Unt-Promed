-- ============================================
-- PERMANENT FIX for Contact Form Database Issues
-- Run this in phpMyAdmin SQL tab for yellox4f_upm_dubai database
-- ============================================

-- Step 1: Use the correct database
USE `yellox4f_upm_dubai`;

-- Step 2: Check if table exists and drop it to recreate properly
DROP TABLE IF EXISTS `Contact_us`;

-- Step 3: Create the table with proper structure
CREATE TABLE `Contact_us` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `Full_Name` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Country_Code` VARCHAR(10) NOT NULL DEFAULT '+971',
  `Phone` VARCHAR(50) NOT NULL,
  `Industry` VARCHAR(100) DEFAULT '',
  `Message` TEXT,
  `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1;

-- Step 4: Reset AUTO_INCREMENT to ensure it starts from 1
ALTER TABLE `Contact_us` AUTO_INCREMENT = 1;

-- Step 5: Add indexes for better performance (optional)
ALTER TABLE `Contact_us` ADD INDEX `idx_email` (`Email`);
ALTER TABLE `Contact_us` ADD INDEX `idx_created_at` (`Created_at`);

-- ============================================
-- Verification Query (run this to check)
-- ============================================
DESCRIBE `Contact_us`;
