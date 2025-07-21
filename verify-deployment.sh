#!/bin/bash

# HostGator Deployment Verification Script
# Checks if your build is ready for deployment

echo "🚀 Verifying deployment files for HostGator..."
echo ""

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ dist/ folder not found. Run 'npm run build' first."
    exit 1
fi

echo "✅ dist/ folder exists"

# Check critical files
critical_files=("dist/index.html" "dist/.htaccess")
for file in "${critical_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Check assets folder
if [ -d "dist/assets" ]; then
    echo "✅ dist/assets/ folder exists"
    asset_count=$(find dist/assets -name "*.js" -o -name "*.css" | wc -l)
    echo "   Found $asset_count JS/CSS files"
else
    echo "❌ dist/assets/ folder missing"
fi

# Check index.html for relative paths
if [ -f "dist/index.html" ]; then
    if grep -q '\./assets/' "dist/index.html"; then
        echo "✅ index.html uses relative paths (./assets/)"
    else
        echo "⚠️  index.html may be using absolute paths - check asset references"
    fi
fi

echo ""
echo "📋 Files ready for upload to HostGator:"
echo "   Upload ALL contents of dist/ folder to public_html/"
echo ""
echo "🌐 After upload, test these URLs:"
echo "   - yourdomain.com (home page)"
echo "   - yourdomain.com/about (should not give 404)"
echo "   - yourdomain.com/book (should not give 404)"
echo ""
echo "🔧 If you see a blank page or 404:"
echo "   1. Check browser console for errors"
echo "   2. Verify all files uploaded correctly"  
echo "   3. Clear browser cache with Cmd+Shift+R"
echo "   4. Check file permissions: folders=755, files=644"
echo "   5. For subfolders, use: ./deploy-subfolder.sh [folder-name]"
