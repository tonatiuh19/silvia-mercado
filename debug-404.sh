#!/bin/bash

echo "🔍 404 Troubleshooting Guide for silviamercadofinanzas.com/new_demo/"
echo "=================================================================="
echo ""

echo "📋 STEP-BY-STEP TROUBLESHOOTING:"
echo ""

echo "1️⃣ FIRST TEST - Direct file access:"
echo "   Try: https://silviamercadofinanzas.com/new_demo/index.html"
echo "   ✅ If this works: Problem is with .htaccess routing"
echo "   ❌ If this doesn't work: Problem is with file upload/folder structure"
echo ""

echo "2️⃣ VERIFY FOLDER STRUCTURE in HostGator cPanel:"
echo "   Your structure should be EXACTLY:"
echo "   public_html/"
echo "   └── new_demo/"
echo "       ├── index.html"
echo "       ├── .htaccess"
echo "       ├── favicon.ico"  
echo "       ├── robots.txt"
echo "       ├── placeholder.svg"
echo "       └── assets/"
echo "           ├── index-CL3Z0gLR.js"
echo "           └── index-jUBi1JL4.css"
echo ""

echo "3️⃣ CHECK FILE PERMISSIONS:"
echo "   - Folders (new_demo, assets): 755"
echo "   - Files (.htaccess, index.html, etc): 644"
echo ""

echo "4️⃣ REPLACE .HTACCESS with minimal version:"
echo "   Delete current .htaccess and upload this content:"
echo "   ----------------------------------------"
cat deploy-new_demo/.htaccess-simple
echo "   ----------------------------------------"
echo ""

echo "5️⃣ ALTERNATIVE: Try without subfolder routing first"
echo "   Temporarily rename .htaccess to .htaccess-backup"
echo "   Then test: https://silviamercadofinanzas.com/new_demo/"
echo "   If you get a React app (even with wrong routes), upload works"
echo ""

echo "6️⃣ CHECK HOSTGATOR ERROR LOGS:"
echo "   - In cPanel → Error Logs"
echo "   - Look for errors when accessing /new_demo/"
echo "   - Common errors: mod_rewrite not enabled, syntax errors"
echo ""

echo "7️⃣ NUCLEAR OPTION - Test in root first:"
echo "   - Upload files to public_html/ directly (not in subfolder)"
echo "   - If it works there, the issue is subfolder-specific"
echo ""

echo "🚨 MOST COMMON FIXES:"
echo "   • Folder name mismatch (new_demo vs new-demo vs new_demo/)"
echo "   • Files uploaded to wrong location"
echo "   • .htaccess syntax not compatible with HostGator"
echo "   • mod_rewrite disabled by hosting provider"
echo ""

echo "📁 Files ready for upload in: deploy-new_demo/"
echo "🔄 After each change, clear browser cache with Cmd+Shift+R"
