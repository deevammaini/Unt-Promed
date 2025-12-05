# API Setup Instructions

## Quick Fix for Connection Error

The contact form needs to connect to your PHP API on your server. Follow these steps:

### Step 1: Upload PHP File to Your Server

1. Upload the `api/contact.php` file to your server
2. Place it in your website's root directory or in an `api` folder
3. Example locations:
   - `public_html/api/contact.php`
   - `public_html/contact.php`
   - Or your website's root directory

### Step 2: Update the API URL in React Code

Open `src/components/ContactUs.js` and update line 40:

**Find this line:**
```javascript
const apiUrl = process.env.REACT_APP_API_URL || 'https://yourdomain.com/api/contact.php';
```

**Replace with your actual domain:**
```javascript
const apiUrl = process.env.REACT_APP_API_URL || 'https://your-actual-domain.com/api/contact.php';
```

### Step 3: Find Your Domain Name

Your domain name is typically:
- Your main website URL (e.g., `https://upm-dubai.com`)
- Or a subdomain (e.g., `https://upm.yourdomain.com`)
- Or your cPanel username domain (check your cPanel for your website URL)

### Step 4: Test the API

1. Visit: `https://your-domain.com/api/contact.php` in your browser
2. You should see: `{"success":false,"message":"Method not allowed"}` (this is correct - it means the API is working)
3. If you see an error, check that the PHP file is uploaded correctly

### Alternative: Use Environment Variable (Recommended for Production)

1. Create a `.env` file in the project root (if it doesn't exist)
2. Add this line:
   ```
   REACT_APP_API_URL=https://your-actual-domain.com/api/contact.php
   ```
3. Restart your React development server (`npm start`)

### Troubleshooting

- **Connection Refused**: Make sure the PHP file is uploaded and the URL is correct
- **CORS Error**: The PHP file already has CORS headers configured
- **404 Error**: Check that the file path on your server matches the URL in the code

### Example URLs

If your website is at:
- `https://upm-dubai.com` → Use `https://upm-dubai.com/api/contact.php`
- `https://www.upm-dubai.com` → Use `https://www.upm-dubai.com/api/contact.php`
- `https://cs2006.webhostbox.net/~username` → Use `https://cs2006.webhostbox.net/~username/api/contact.php`

