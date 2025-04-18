# Nomad Sauna Co. Website

A professional website for Nomad Sauna Co., showcasing their custom-built saunas and services.

## Features

- Modern, responsive design optimized for all devices
- Custom sauna showcase with image gallery
- Services section highlighting sauna building, refinishing, relocation, and installation
- Contact forms with validation and API integration
- Dark mode support
- Smooth animations and transitions
- SEO optimized with proper metadata

## Brand Colors
- Deep Charcoal (#1E1A18): Used for the logo and text
- Earth Brown (#5B402D): Warm, natural wood tone
- Warm Taupe (#D9C4A3): Light neutral accent
- Desert Beige (#E6D3AF): Soft background color

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **UI Components**: Shadcn UI
- **Icons**: Lucide React, React Icons
- **Backend**: API Routes (to be integrated with Convex)
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nomad-sauna-co.git

# Navigate to the project directory
cd nomad-sauna-co

# Install dependencies
npm install
# or
pnpm install

# Start the development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
/app                  # Next.js App Router pages
  /(marketing)        # Marketing pages (home)
  /about              # About Us page
  /contact            # Contact page
  /faq                # FAQ page
  /api                # API routes
/components           # React components
  /landing            # Landing page sections
  /magicui            # UI animation components
  /ui                 # Shadcn UI components
/lib                  # Utility functions
/public               # Static assets
```

## Deployment on Netlify

The site is configured to be deployed on Netlify with form handling capabilities.

### Deployment Steps

1. **Connect to Netlify**:
   - Create a Netlify account if you don't have one
   - Click "New site from Git"
   - Connect to your GitHub repository
   - Select the repository

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - The `netlify.toml` file in the repository will handle the rest of the configuration

3. **Form Handling**:
   - The site uses Netlify Forms for contact and consultation form submissions
   - Form submissions can be viewed in the Netlify dashboard under "Forms"
   - You can set up email notifications for form submissions in the Netlify dashboard

### Future Backend Integration

The site is prepared for future Convex backend integration when needed. The current implementation uses Netlify's built-in form handling, which doesn't require a custom backend.

## License

This project is proprietary and owned by Nomad Sauna Co.
