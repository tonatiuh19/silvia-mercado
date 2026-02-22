# Silvia Mercado Website

A modern React website built with Vite, TypeScript, and TailwindCSS, optimized for static hosting.

## Tech Stack

- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite + TailwindCSS 3
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons
- **Build Tool**: Vite
- **Testing**: Vitest

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment to HostGator

### Building the Site

1. Run the build command:

   ```bash
   npm run build
   ```

2. This will create a `dist` folder with all the static files.

### Uploading to HostGator

1. **Via File Manager (cPanel)**:

   - Login to your HostGator cPanel
   - Open File Manager
   - Navigate to `public_html` (or your domain's document root)
   - Upload all contents from the `dist` folder to `public_html`
   - The `.htaccess` file is included to handle React Router routes

2. **Via FTP**:
   - Use an FTP client (FileZilla, etc.)
   - Connect to your HostGator account
   - Upload all contents from the `dist` folder to `public_html`

### Important Notes

- The `.htaccess` file is automatically included in the build to handle React Router's client-side routing
- Make sure all files from the `dist` folder are uploaded to your domain's document root
- The site will work immediately after upload - no server configuration needed

## Project Structure

```
client/                   # React SPA source code
├── pages/                # Route components
├── components/ui/        # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Main app component with routing
└── global.css           # Global styles and Tailwind imports

public/                  # Static assets
├── .htaccess           # Apache config for React Router
├── favicon.ico         # Favicon
└── ...                 # Other static files
```

## Available Routes

- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/blog` - Blog page
- `/book` - Book page
- `/booking` - Booking page
- `/contact` - Contact page

## Customization

### Adding New Pages

1. Create a new component in `client/pages/`
2. Add the route in `client/App.tsx`
3. Rebuild and redeploy

### Styling

- Uses TailwindCSS for styling
- Global styles in `client/global.css`
- Component styles use TailwindCSS classes
- Color scheme can be customized in `tailwind.config.ts`

### UI Components

- Pre-built components in `client/components/ui/`
- Based on Radix UI primitives
- Fully customizable with TailwindCSS
