# phpMyAdmin Setup Guide for Contact Form

This guide will help you set up the database and make the contact.php file work with phpMyAdmin.

## Step 1: Access phpMyAdmin

1. Log into your hosting control panel (cPanel, Plesk, etc.)
2. Find and click on **phpMyAdmin**
3. You should see the phpMyAdmin interface

## Step 2: Create or Select Database

### Option A: Database Already Exists
If your database `yellox4f_upm_dubai` already exists:
1. Click on it in the left sidebar
2. Skip to Step 3

### Option B: Create New Database
1. Click on the **"Databases"** tab (or "New" button)
2. Create a new database named: `yellox4f_upm_dubai`
3. Select **utf8mb4_unicode_ci** as the collation
4. Click **"Create"**

## Step 3: Create the Contact_us Table

1. Select your database (`yellox4f_upm_dubai`) from the left sidebar
2. Click on the **"SQL"** tab at the top
3. Open the file `database_setup.sql` from this project
4. Copy the entire contents of that file
5. Paste it into the SQL text area in phpMyAdmin
6. Click **"Go"** or press **Ctrl+Enter**

**OR** manually create the table:

1. Click on the **"SQL"** tab
2. Copy and paste this SQL:

```sql
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
```

3. Click **"Go"**

## Step 4: Verify Database Credentials

Check your database credentials in `api/contact.php` (lines 23-26):

```php
$host = 'localhost';
$dbname = 'yellox4f_upm_dubai';
$username = 'yellox4f_upm_dubai';
$password = '#1_Z)!K$ev?i';
```

### How to Find Your Database Credentials:

1. **In cPanel:**
   - Go to **"MySQL Databases"**
   - Look for your database name and username
   - If you need to create a new user, do so in the MySQL Databases section
   - Note: Database username is usually `cpanel_username_dbname`

2. **In phpMyAdmin:**
   - The database name is shown in the left sidebar
   - Username is usually your cPanel username + database name
   - Password: Check your hosting control panel or reset it

3. **Update contact.php if needed:**
   - If your database name, username, or password is different, update lines 23-26 in `api/contact.php`

## Step 5: Test the Connection

### Test 1: Check Table Structure
1. In phpMyAdmin, click on `Contact_us` table
2. Click on **"Structure"** tab
3. Verify you see these columns:
   - ID (INT, Primary Key, Auto Increment)
   - Full_Name (VARCHAR 100)
   - Email (VARCHAR 100)
   - Country_Code (VARCHAR 10)
   - Phone (VARCHAR 20)
   - Industry (VARCHAR 100)
   - Message (TEXT)
   - Created_at (TIMESTAMP)

### Test 2: Test PHP Connection
1. Upload `api/contact.php` to your server
2. Visit: `https://your-domain.com/api/contact.php` in your browser
3. You should see: `{"success":false,"message":"Method not allowed"}`
   - This is **CORRECT** - it means the PHP file is working!
   - The error is expected because we're using GET instead of POST

### Test 3: Test Database Connection
If you see a database error, check:
1. Database name matches exactly (case-sensitive)
2. Username and password are correct
3. Database user has proper permissions (SELECT, INSERT, UPDATE, DELETE)
4. Host is correct (usually 'localhost' for shared hosting)

## Step 6: Grant Database Permissions (If Needed)

If you get a "Access denied" error:

1. In cPanel, go to **"MySQL Databases"**
2. Find your database user
3. Make sure the user is assigned to the database
4. Grant all privileges (SELECT, INSERT, UPDATE, DELETE)

Or in phpMyAdmin SQL tab, run:
```sql
GRANT ALL PRIVILEGES ON `yellox4f_upm_dubai`.* TO 'yellox4f_upm_dubai'@'localhost';
FLUSH PRIVILEGES;
```

## Step 7: Test the Contact Form

1. Make sure your React app is pointing to the correct API URL
2. Fill out the contact form
3. Submit it
4. Check in phpMyAdmin:
   - Click on `Contact_us` table
   - Click on **"Browse"** tab
   - You should see the new entry!

## Troubleshooting

### Error: "Table doesn't exist"
- Make sure you ran the CREATE TABLE SQL
- Check that you selected the correct database

### Error: "Access denied for user"
- Verify username and password in contact.php
- Check database user permissions in cPanel

### Error: "Unknown database"
- Verify database name matches exactly
- Make sure database exists in phpMyAdmin

### Error: "Connection refused"
- Check that host is 'localhost' (for shared hosting)
- Some hosts use '127.0.0.1' instead

### Data not saving
- Check table structure matches exactly
- Verify Phone and Industry columns are VARCHAR (not INT)
- Check for duplicate email/phone errors

## Quick Reference

**Database Name:** `yellox4f_upm_dubai`  
**Table Name:** `Contact_us`  
**Required Columns:**
- Full_Name (VARCHAR 100)
- Email (VARCHAR 100) - UNIQUE
- Phone (VARCHAR 20) - UNIQUE
- Industry (VARCHAR 100)
- Country_Code (VARCHAR 10)
- Message (TEXT, nullable)
- Created_at (TIMESTAMP)

**PHP File Location:** `api/contact.php`  
**Database Config:** Lines 23-26 in contact.php


