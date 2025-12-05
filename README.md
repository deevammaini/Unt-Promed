# United Pro Med Website

A modern, responsive React.js website for United Pro Med - Delivering Trusted Surgical Excellence for Over 20 Years.

## Features

- Fully responsive design
- Modern dark blue theme with teal accents
- Hero section with company branding
- Who We Are section
- Our Vision section with key points
- Product Expertise showcase (Spine, Knee, Screw, Trauma)
- Smooth animations and hover effects

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add images to the `public` folder:
   - `blue-background-with-hexagonal-pattern-glowing-light-effects.png` (background)
   - `surgical-instruments.jpg` (Who We Are section)
   - `spine-image.jpg`, `knee-image.jpg`, `brain-image.jpg`, `surgical-tools-image.jpg` (Our Vision collage)
   - `spine-xray.jpg`, `knee-xray.jpg`, `screw-image.jpg`, `trauma-xray.jpg` (Product Expertise icons)

3. Start the development server:
```bash
npm start
```

The website will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
  components/
    Header.js          # Top navigation with Contact Us button
    Hero.js            # Main hero section
    WhoWeAre.js        # About section
    OurVision.js       # Vision and values section
    ProductExpertise.js # Product showcase
  App.js              # Main app component
  App.css             # Global app styles
  index.js            # Entry point
  index.css           # Global styles
public/               # Static assets (images go here)
```

## Customization

- Colors can be adjusted in component CSS files
- Content can be modified in component JS files
- Images should be placed in the `public` folder and referenced with `/filename.jpg`

## Technologies Used

- React 18
- CSS3 (Flexbox, Grid)
- Responsive Design Principles

