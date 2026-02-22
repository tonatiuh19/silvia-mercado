#!/bin/bash

# Emergency 404 Fix Script
# This creates a bulletproof .htaccess for subfolder deployment

SUBFOLDER=${1:-new_demo}

echo "🆘 Creating emergency fix for 404 error in subfolder: /$SUBFOLDER"
echo ""

# Create/update the .htaccess file with more robust configuration
cat > "deploy-$SUBFOLDER/.htaccess" << 'EOF'
# Emergency HostGator configuration for React SPA
# Force enable rewrite module (sometimes needed on shared hosting)
<IfModule !mod_rewrite.c>
    LoadModule rewrite_module modules/mod_rewrite.so
</IfModule>

# Enable URL rewriting
RewriteEngine On

# Set the base URL for this subfolder  
RewriteBase /SUBFOLDER_PLACEHOLDER/

# Handle client-side routing for React
# Redirect all requests to index.html except existing files/directories
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d  
RewriteCond %{REQUEST_URI} !^/SUBFOLDER_PLACEHOLDER/index\.html$
RewriteRule ^(.*)$ index.html [QSA,L]

# Additional fallback for stubborn servers
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.html [L]

# Set proper MIME types
<IfModule mod_mime.c>
    AddType application/javascript .js
    AddType text/css .css
    AddType image/svg+xml .svg
    AddType image/png .png
    AddType image/jpg .jpg
    AddType image/jpeg .jpeg
    AddType image/gif .gif
    AddType image/ico .ico
    AddType font/woff .woff
    AddType font/woff2 .woff2
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options DENY
    Header always set X-Content-Type-Options nosniff
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/ico "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
EOF

# Replace placeholder with actual subfolder name
sed -i '' "s/SUBFOLDER_PLACEHOLDER/$SUBFOLDER/g" "deploy-$SUBFOLDER/.htaccess"

echo "✅ Updated .htaccess with emergency configuration"
echo ""
echo "📋 Next Steps:"
echo "1. Re-upload the deploy-$SUBFOLDER/.htaccess file to your HostGator subfolder"
echo "2. Make sure file permissions are set to 644"
echo "3. Try accessing: silviamercadofinanzas.com/$SUBFOLDER/"
echo "4. If still not working, try: silviamercadofinanzas.com/$SUBFOLDER/index.html"
echo ""
echo "🔍 Debugging tips:"
echo "- Check HostGator Error Logs in cPanel"
echo "- Verify folder name matches exactly: public_html/$SUBFOLDER/"
echo "- Clear browser cache with Cmd+Shift+R"
