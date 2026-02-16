📱 Phone Catalog Frontend
A modern online electronics store with an intuitive interface and powerful search capabilities.

🚀 Live Demo
View Live Project →

Deployment Status React TypeScript Vite

📋 About The Project
Phone Catalog is a full-featured web application for browsing and purchasing electronics. Built with modern technologies, it delivers exceptional performance and an outstanding user experience across all devices.

✨ Key Features
📱 Comprehensive Catalog - Browse extensive collections of phones, tablets, and accessories
🔍 Smart Search - Find products by name, brand, or category with instant results
📑 Detailed Information - View complete product specifications, descriptions, and pricing
🛒 Shopping Cart - Add items to cart with real-time updates
❤️ Favorites - Save products to your wishlist for later
📱 Fully Responsive - Optimized for desktop, tablet, and mobile devices
🎨 Modern UI/UX - Clean, intuitive interface with smooth animations
🎯 Sort & Filter - Sort products by price, popularity, or newest releases

🛠️ Tech Stack
Core Technologies
Frontend Framework: React 18.3 + TypeScript 5.6
Build Tool: Vite 6.0
Styling: CSS/SCSS Modules
Routing: React Router v7
UI Components: Custom SCSS components

Development Tools
Code Quality: ESLint, Prettier
Git Hooks: Husky + lint-staged
Deployment: GitHub Pages (with automatic CI/CD)
Version Control: Git + GitHub

💻 Getting Started
Prerequisites
Node.js (v16.0 or higher)
npm or yarn

Installation
Clone the repository:

git clone https://github.com/Team-Project-Phone-catalog/team-project-phone-catalog.github.io.git
cd team-project-phone-catalog.github.io
Install dependencies:

npm install
Start the development server:

npm run dev
Open your browser:

http://localhost:5173
Available Scripts
npm run dev          # Start development server with hot reload
npm run build        # Build production-ready bundle
npm run preview      # Preview production build locally
npm run lint         # Run ESLint to check code quality
npm run format       # Format code with Prettier

📦 Project Structure
team-project-phone-catalog.github.io/
├── .github/
│   └── workflows/    # GitHub Actions for CI/CD
├── .husky/           # Git hooks for automation
├── dist/             # Production build
├── public/           # Public static files
│   ├── api/          # JSON data (phones, tablets, accessories)
│   └── img/          # Product images
│       ├── phones/   # Phone images
│       ├── tablets/  # Tablet images
│       └── accessories/  # Accessory images
├── src/
│   ├── components/   # React components
│   │   ├── Header/   # Header components
│   │   ├── Footer/   # Footer components
│   │   ├── Cart/     # Shopping cart components
│   │   ├── Catalog/  # Catalog components
│   │   ├── ProductCard/  # Product card component
│   │   └── ui/       # Reusable UI components
│   ├── pages/        # Page components (route views)
│   │   ├── HomePage.tsx
│   │   ├── PhonesPage.tsx
│   │   ├── TabletsPage.tsx
│   │   ├── AccessoriesPage.tsx
│   │   ├── ProductDetailsPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── FavouritesPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── hooks/        # Custom React hooks
│   ├── context/      # React Context providers
│   ├── utils/        # Helper functions
│   ├── types/        # TypeScript type definitions
│   ├── api/          # API client and services
│   ├── constants/    # App constants
│   ├── styles/       # Global styles (SCSS)
│   ├── App.tsx       # Main application component
│   ├── main.tsx      # Application entry point
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── .prettierrc
├── TECH_STACK.md     # Detailed technology description
├── TASK_CHECKLIST.md # Task checklist
└── README.md

🚀 Deployment
This project uses GitHub Pages for continuous deployment with automatic builds on every push to the main branch.

Automatic Deployments
Production: Automatic deployment from main branch
Preview: Automatic preview deployments for every Pull Request
Build Time: ~1-2 minutes
Performance: Optimized with Vite's build pipeline

Deployment URL
Production: https://team-project-phone-catalog.github.io

🎯 Features In Detail
Product Catalog
Browse products by category (Phones, Tablets, Accessories)
Filter by brands and specifications
Sort by price, popularity, or newest releases

Shopping Experience
Add items to cart with quantity selection
Real-time cart updates
Persistent cart state
Checkout flow

User Interface
Clean, modern design
Smooth animations and transitions
Loading states and error handling
Accessibility-focused components

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

👥 Team
Developed by the Team-Project-Phone-catalog team

Contributors: 3

📊 Statistics
TypeScript: 51.7%
SCSS: 44.6%
JavaScript: 2.4%
Other: 1.3%

📄 License
This project was created for educational purposes.

🔗 Links
Live Demo: https://team-project-phone-catalog.github.io
GitHub Repository: https://github.com/Team-Project-Phone-catalog/team-project-phone-catalog.github.io
Tech Stack: TECH_STACK.md
Task Checklist: TASK_CHECKLIST.md

📞 Contact
For questions or feedback, please open an issue on GitHub.

