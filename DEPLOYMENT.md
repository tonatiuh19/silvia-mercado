# 🚀 HostGator Deployment Guide

## Quick Start

### Root Directory Deployment

```bash
# Build and verify
npm run build
./verify-deployment.sh

# Upload dist/ contents to public_html/
```

### Subfolder Deployment

```bash
# Build and create subfolder package
npm run build
./deploy-subfolder.sh demo_site

# Upload deploy-demo_site/ contents to public_html/demo_site/
```

## Scripts Overview

- **`verify-deployment.sh`** - Checks if build is ready for deployment
- **`deploy-subfolder.sh`** - Creates subfolder deployment with proper .htaccess

## Troubleshooting

### 404 Error

1. Check folder name matches exactly
2. Verify .htaccess is uploaded
3. Test direct access: `yourdomain.com/subfolder/index.html`
4. Check file permissions (folders: 755, files: 644)

### Blank Page

1. Check browser console for errors
2. Verify relative paths in index.html
3. Clear cache with `Cmd+Shift+R`

## HostGator Setup

1. Login to cPanel
2. Open File Manager
3. Navigate to public_html
4. Upload files
5. Set correct permissions
