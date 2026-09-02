# Aditya Suvid Retail - Project Documentation

## Project Overview
This is a corporate website for Aditya Suvid Retail Group, a multi-company retail organization spanning India and the Middle East. The site showcases the group's portfolio companies, their story, careers, and corporate information.

## Tech Stack
- **Framework**: React 19.2.8
- **Build Tool**: Vite 8.2.2
- **Animation**: Framer Motion 13.1.1
- **Icons**: Lucide React 1.33.0
- **Language**: JavaScript (ES Modules)
- **Styling**: CSS with component-specific stylesheets

## Project Structure

```
Aditya-Suvid/
├── public/                 # Static assets
├── src/
│   ├── assets/           # Images and media files
│   │   ├── generated/    # Generated images for the site
│   │   ├── hero.png      # Hero section images
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/       # Reusable React components
│   │   ├── styles/       # Component-specific CSS files
│   │   ├── AnimatedButton.jsx
│   │   ├── BrandsSection.jsx
│   │   ├── CareersSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ImageCard.jsx
│   │   ├── NewsSection.jsx
│   │   ├── Preloader.jsx
│   │   ├── SectionLabel.jsx
│   │   └── TimelineSection.jsx
│   ├── data/            # Centralized data management
│   │   └── content.js   # All site content and data
│   ├── pages/           # Page-level components
│   │   ├── styles/      # Page-specific CSS
│   │   ├── AboutPage.jsx
│   │   ├── CareersPage.jsx
│   │   ├── CompaniesPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── InvestorRelationsPage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   ├── StoryChapterPage.jsx
│   │   ├── StoryPage.jsx
│   │   ├── SustainabilityPage.jsx
│   │   └── TermsPage.jsx
│   ├── App.css          # Global styles
│   ├── App.jsx          # Main application component with routing
│   ├── index.css        # Base CSS reset and styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## Core Components

### App.jsx - Main Application & Routing
- **Purpose**: Central component managing routing, theme, and global state
- **Key Features**:
  - Custom client-side routing using `window.history.pushState`
  - Dark/Light theme management with localStorage persistence
  - Preloader with 1.6s delay
  - Cookie consent banner with localStorage
  - Section tracking for navigation markers
  - Header visibility management on scroll

**Routes**:
- `/` or `/home` - Main landing page with all sections
- `/careers` - Careers page
- `/story` - Main story page
- `/story/{slug}` - Individual story chapters
- `/companies` - Companies/brands page
- `/about` - About page
- `/contact` - Contact page
- `/privacy-policy` - Privacy policy page
- `/terms-and-conditions` - Terms page
- `/sustainability` - Sustainability page
- `/investor-relations` - Investor relations page

### Header.jsx - Navigation
- **Purpose**: Site navigation with theme toggle and mobile menu
- **Features**:
  - Responsive navigation with mobile hamburger menu
  - Theme toggle (dark/light mode)
  - Utility buttons (Globe, Mail)
  - Company logo with "Aditya Suvid Retail" branding
  - Active route highlighting
  - Scroll-based visibility control

### HeroSection.jsx - Image Carousel
- **Purpose**: Main hero section with auto-rotating slides
- **Features**:
  - 3 slides: Group overview, Monkey Troopers, FO Dubai
  - Auto-rotation every 5 seconds
  - Play/pause control
  - Smooth transitions using Framer Motion
  - Progress indicators
  - Scroll-to-next-section button

### Footer.jsx - Site Footer
- **Purpose**: Site footer with navigation and subscription
- **Features**:
  - Company logo with "Aditya Suvid Retail" branding
  - 3-column link structure (Company, Portfolio, Legal)
  - Email subscription form
  - Social media placeholders
  - Back-to-top button
  - Framer Motion animation on scroll

### TimelineSection.jsx - Infinite Scroll Timeline with Team Section
- **Purpose**: Company milestones and team display with infinite horizontal scroll
- **Features**:
  - "Build together" heading and description (centered)
  - Timeline section with infinite horizontal scroll animation
  - Timeline cards arranged from left to right
  - Milestone data with year, title, and description
  - Hover effects on timeline cards
  - Smooth continuous animation (30s loop)
  - Expanded milestone data (13 items from original 4)
  - **Integrated Team Section**:
    - 2 rows of 9 team members each (18 total)
    - Top row scrolls left, bottom row scrolls right (opposite directions)
    - Full-width responsive layout with increased gaps (40px)
    - Hover effects showing name and designation
    - Click triggers popup modal with:
      - YouTube video embed
      - Quote/testimonial
      - Name and designation
      - Detailed work description
    - Framer Motion animations for cards and popup
    - Responsive design for mobile devices

## Page Components

### StoryPage.jsx - Company Story
- **Purpose**: Main storytelling page with visual cards
- **Features**:
  - Visual showcase with 4 company cards
  - Opening narrative section
  - Journey grid with clickable cards
  - People section with leadership team
  - Closing section
  - Framer Motion animations for scroll effects

### CompaniesPage.jsx - Portfolio Display
- **Purpose**: Display all group companies
- **Features**:
  - Company cards with descriptions
  - Highlights and join text
  - External links to company websites

### Other Pages
- **CareersPage**: Career opportunities and company culture
- **AboutPage**: Company information
- **ContactPage**: Contact information
- **StoryChapterPage**: Individual story chapter details
- **Legal Pages**: Privacy policy, terms, sustainability, investor relations

## Data Management

### content.js - Centralized Data
All site content is managed in `src/data/content.js`:

**Key Data Structures**:
- `navItems` - Navigation menu items
- `siteAssets` - Image references (including company logo)
- `newsItems` - News section content
- `careerCards` - Careers section cards
- `brands` - Brand/company information
- `footerColumns` - Footer link structure
- `storyChapters` - Detailed story chapters
- `storyContent` - Main story page content (with expanded milestones)
- `groupCompanies` - All group companies data
- `groupOperatingModel` - Operating philosophy
- `teamMembers` - Team section data (18 members with videos and descriptions)

## Styling Architecture

### CSS Organization
- **Component-specific**: Each component has its own CSS file in `components/styles/`
- **Page-specific**: Pages have styles in `pages/styles/`
- **Global styles**: `App.css` for global rules, `index.css` for base styles
- **Theme system**: CSS variables for dark/light mode switching

### Theme System
- Theme state managed in App.jsx
- Applied via `data-theme` attribute on app shell
- localStorage persistence
- Toggle available in header

## Animation System

### Framer Motion Usage
- **HeroSection**: Slide transitions with opacity and scale
- **StoryPage**: Scroll-triggered animations for cards and sections
- **Footer**: Scroll-into-view animation
- **General**: `whileInView` for scroll-triggered effects
- **Transitions**: Custom easing and duration for smooth feel

## Development Workflow

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

### Development Server
- Vite dev server with hot module replacement
- Default port: Usually 5173
- Fast refresh for React components

## Key Features

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly interactions

### Accessibility
- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

### Performance
- Vite for fast builds and development
- Component code splitting (implicit)
- Optimized image loading
- CSS file organization for better caching

## Custom Routing System

The app uses a custom client-side routing implementation:
- No external routing library (no React Router)
- Uses `window.history.pushState` for navigation
- `popstate` event listener for browser back button
- Route-based component rendering in App.jsx
- Smooth scroll to top on route change

## State Management

### Local State
- Component-level state using React hooks
- No global state management library
- Props drilling for navigation functions
- localStorage for theme and cookie preferences

### Global State
- Theme preference (localStorage)
- Cookie consent (localStorage)
- Current route (window.location)

## Image Management

### Asset Structure
- Static images in `src/assets/`
- Generated images in `src/assets/generated/`
- Images imported directly in components
- Referenced in centralized `content.js`

## Build Process

### Production Build
- Vite bundles and optimizes code
- React component tree optimized
- CSS files bundled
- Assets hashed for caching
- Output in `dist/` directory

## Maintenance Notes

### Adding New Content
1. Update `src/data/content.js` with new data
2. Create/update relevant components
3. Add corresponding CSS styles
4. Update routing in App.jsx if needed

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in App.jsx routing logic
3. Create page-specific CSS
4. Add navigation link in Header.jsx or Footer.jsx

### Styling Guidelines
- Follow existing CSS patterns
- Use CSS variables for theme colors
- Maintain component-specific CSS files
- Test both dark and light themes

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript support required
- CSS Grid and Flexbox support needed
- LocalStorage support required for theme/cookies

## Recent Updates & Changes

### Homepage Fixes (Latest Update)
1. **Navbar Search Removal**: Removed search icon from navbar utility buttons
2. **Hero Section Optimization**: Reduced hero section height (85svh, max 750px) to ensure play/pause controls are visible without scrolling
3. **News Section Clickability**: Made all news items clickable links to their respective websites
4. **Timeline Section Redesign**: Transformed from static image background to infinite scroll layout:
   - "Build together" heading and description (centered)
   - Infinite horizontal scroll animation (30s loop)
   - Timeline cards with year, title, description
   - Expanded milestone data (13 items)
   - Increased gap between cards (32px)
5. **Team Section Integration**: Integrated team section into TimelineSection component:
   - 2 rows × 9 team members (18 total)
   - Top row scrolls left, bottom row scrolls right (opposite directions)
   - Full-width responsive layout with increased gaps (40px between members)
   - Hover effects showing name/designation
   - Click popup with video embed and description
   - Removed separate TeamSection component
6. **Logo Integration**: Added company logo to both navbar and footer with "Aditya Suvid Retail" text
7. **Navigation Updates**: Removed separate Team section from navigation, now part of Timeline section

### Technical Implementation Details
- **Infinite Team Scroll**: `TimelineSection.jsx` duplicates each nine-card row and uses Framer Motion's `animate` with a linear infinite `x` loop
- **Opposite Direction Scrolling**: Top row travels left and bottom row travels right inside full-width clipped viewports
- **Team Spacing**: Team rows use a 30px vertical gap and 24px desktop card gap, with smaller touch-friendly gaps on narrow screens
- **Team Popup**: Modal with YouTube embed, backdrop blur, and smooth animations
- **Logo Integration**: Navbar and footer use the shared `siteAssets.logo` asset and display `Suvid Retail`
- **Entities UI**: Entity titles use bounded responsive sizing, highlights render as pill chips, and every entity exposes `VIEW BRAND` and `JOIN US` actions
- **Responsive Timeline**: Keeps two nine-card tracks on desktop and allows the tracks to remain clipped and animated on mobile
- **Team Grid**: Full-width layout using `width: 100vw` with negative margin for edge-to-edge display
- **Timeline Header**: The "Built together" heading and description render before the integrated team tracks
- **Team Content**: Team profiles are centralized in `src/data/content.js`; supplied profile images are imported from `src/assets/teammembers/`
- **Careers Copy**: The Shape the Future section uses `Life at Suvid Retail` and `Articles` cards
- **Team Portraits**: Additional portraits from `src/assets/teammembers/` are mapped to the supplied team profiles; the extensionless Kinjal WebP asset is stored as `Kinjal.webp` for Vite compatibility
- **Team Presentation**: The integrated Timeline keeps a centered introduction and uses a reference-inspired editorial card treatment while retaining opposite-direction infinite rows
- **Timeline Intro Spacing**: The centered Timeline description is constrained for a three-line editorial rhythm, with increased space before the team rows
- **Timeline Intro Visibility**: Timeline header spacing uses a stronger scoped rule, enlarged responsive description text, and member overlays stay hidden until hover or focus
- **Timeline Typography**: Timeline heading and description explicitly inherit the shared site font and use the same heading weight as the other homepage sections
- **Built Together Copy**: The Timeline introduction uses the approved team-focused description supplied by the web team
- **Built Together Width**: The centered Timeline introduction uses a wider desktop text rail so the approved description does not wrap into five lines
- **Team Role Descriptions**: Harmoniq Creative team profiles describe their support for Monkey Troopers and FO Dubai while preserving the supplied designations
- **Browser Favicon**: The Suvid Retail logo is copied to `public/assets/suvid-retail.jpeg` and referenced from `index.html` for reliable tab icon loading
- **Navbar Styling**: Removed underline indicators from desktop and mobile navigation hover and active states
- **Anchor Styling**: Explicitly disables browser-default underlines on navbar and brand links
- **Hero Banner CTA**: Hero slides now use `Visit website`; the lead slide promotes Harmoniq Creatives and links to its website
- **Articles Architecture**: Ten sample articles are centralized in `src/data/content.js` as `articleItems` for the Suvid Retail group and its retail, streetwear, digital, and fragrance brands.
- **Article Navigation**: `From the group` homepage cards link to `/articles` and `/articles/:slug`; `src/pages/ArticlesPage.jsx` renders the article index and individual article detail views.
- **Shape the Future Links**: `Life at Suvid Retail` routes to `/about`, while `Articles` routes to `/articles` from the Shape the Future section.
- **Entity Actions**: `VIEW BRAND` and `JOIN US` are styled as accessible pill buttons, with brand links opening the relevant external sites and join actions routing to `/careers`.
- **Homepage Article Curation**: The homepage `From the group` section shows exactly four articles: Harmoniq Creative as the large feature on the left, followed by Monkey Troopers, FO Dubai, and Aditya Suvid Retail cards on the right. The complete ten-article collection remains available through `VIEW ALL ARTICLES`.
- **HR Contact Flow**: The navbar globe control was removed; the mail icon now opens `hr@suvidretail.in`, and the careers form creates an email draft containing all submitted fields for the same HR address.
- **Seamless Team Marquee**: Timeline rows now animate two complete, identically sized row groups so the loop restarts without a trailing gap in either direction.
- **Measured Team Marquee**: Timeline team rows measure the width of one complete card group with `ResizeObserver` and animate by that exact pixel distance, preventing blank space at the loop boundary across responsive widths.
- **Team Marquee Spacing**: Added a real gap between the two duplicated timeline row groups and included that boundary spacing in the measured animation distance, keeping both rows visually separated without breaking the seamless loop.
- **Continuous Team Scroll**: Replaced the finite repeat cycle with a `requestAnimationFrame` modulo loop that continuously translates each duplicated timeline row, preventing the marquee from appearing to finish or exposing an end gap.
- **Balanced Team Rows**: The timeline display list now pads the 14 supplied profiles to exactly 18 cards, ensuring both infinite-scroll rows contain 9 cards and the bottom row cannot expose a viewport gap.
- **SRPL Branding**: The favicon now uses `public/assets/suvid-retail-logo.jpeg`, and the preloader identifies the company as `Suvid Retail Private Limited` with the `SRPL` mark.
