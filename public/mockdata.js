const mockdata = [
    {
      id: 1,
      title: "Introduction to Next.js",
      slug: "introduction-to-nextjs",
      summary: "Learn the basics of Next.js and its core features",
      date: "2024-02-15T12:00:00Z",
      content: "Next.js is a React framework that enables functionality such as server-side rendering and static site generation..."
    },
    {
      id: 2,
      title: "React Hooks: A Comprehensive Guide",
      slug: "react-hooks-guide",
      summary: "Master React hooks with practical examples",
      date: "2024-02-16T09:30:00Z",
      content: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components..."
    },
    {
      id: 3,
      title: "TypeScript for Modern Web Development",
      slug: "typescript-web-development",
      summary: "Why TypeScript is essential for large-scale applications",
      date: "2024-02-17T14:15:00Z",
      content: "TypeScript adds optional static typing to JavaScript, helping catch errors during development..."
    },
    {
      id: 4,
      title: "Tailwind CSS: Utility-First Approach",
      slug: "tailwind-css-utility-first",
      summary: "Streamline your styling workflow with Tailwind",
      date: "2024-02-18T16:45:00Z",
      content: "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all the building blocks..."
    },
    {
      id: 5,
      title: "Electric Motorcycles: The Future of Transportation",
      slug: "electric-motorcycles-future",
      summary: "Exploring sustainable two-wheeler solutions",
      date: "2024-02-19T11:00:00Z",
      content: "Electric motorcycles are revolutionizing personal transportation with zero emissions..."
    },
    {
      id: 6,
      title: "Optimizing Web Performance with Next.js",
      slug: "optimizing-nextjs-performance",
      summary: "Techniques for faster page loads",
      date: "2024-02-20T10:20:00Z",
      content: "Learn how to leverage Next.js features for optimal performance..."
    },
    {
      id: 7,
      title: "State Management in React Applications",
      slug: "react-state-management",
      summary: "Comparing Redux, Context API, and Zustand",
      date: "2024-02-21T13:10:00Z",
      content: "Effective state management is crucial for complex React applications..."
    },
    {
      id: 8,
      title: "Responsive Design Best Practices",
      slug: "responsive-design-best-practices",
      summary: "Creating mobile-first layouts",
      date: "2024-02-22T15:30:00Z",
      content: "Modern responsive design goes beyond media queries..."
    },
    {
      id: 9,
      title: "Motorcycle Maintenance 101",
      slug: "motorcycle-maintenance-101",
      summary: "Essential tips for bike upkeep",
      date: "2024-02-23T08:45:00Z",
      content: "Regular maintenance is key to keeping your motorcycle in top condition..."
    },
    {
      id: 10,
      title: "Server-Side Rendering vs Static Site Generation",
      slug: "ssr-vs-ssg",
      summary: "Choosing the right rendering strategy",
      date: "2024-02-24T17:00:00Z",
      content: "Understanding the differences between SSR and SSG in Next.js..."
    },
{
      id: 11,
      title: "Building Accessible Web Applications",
      slug: "accessible-web-apps",
      summary: "Implementing WCAG guidelines",
      date: "2024-02-25T12:30:00Z",
      content: "Accessibility should be a priority in modern web development..."
    },
    {
      id: 12,
      title: "The Rise of Electric Vehicles in India",
      slug: "electric-vehicles-india",
      summary: "Market trends and consumer adoption",
      date: "2024-02-26T10:15:00Z",
      content: "India's EV market is growing rapidly with government support..."
    },
    {
      id: 13,
      title: "Advanced TypeScript Patterns",
      slug: "advanced-typescript-patterns",
      summary: "Mastering complex type definitions",
      date: "2024-02-27T14:20:00Z",
      content: "Explore advanced TypeScript concepts for better type safety..."
    },
    {
      id: 14,
      title: "Next.js API Routes: Full Guide",
      slug: "nextjs-api-routes",
      summary: "Building backend endpoints in Next.js",
      date: "2024-02-28T16:00:00Z",
      content: "Learn how to create secure API endpoints within your Next.js application..."
    },
    {
      id: 15,
      title: "Sustainable Transportation Solutions",
      slug: "sustainable-transportation",
      summary: "Eco-friendly mobility options",
      date: "2024-02-29T09:45:00Z",
      content: "Exploring sustainable alternatives to traditional transportation..."
    },
    {
      id: 16,
      title: "React Performance Optimization",
      slug: "react-performance-optimization",
      summary: "Techniques for smoother UIs",
      date: "2024-03-01T11:30:00Z",
      content: "Optimize your React components for better performance..."
    },
    {
      id: 17,
      title: "Motorcycle Safety Gear Essentials",
      slug: "motorcycle-safety-gear",
      summary: "Must-have protective equipment",
      date: "2024-03-02T13:15:00Z",
      content: "Proper safety gear can significantly reduce riding risks..."
    },
    {
      id: 18,
      title: "CSS Grid vs Flexbox: When to Use Which",
      slug: "css-grid-vs-flexbox",
      summary: "Layout system comparison",
      date: "2024-03-03T15:00:00Z",
      content: "Understanding the strengths of different CSS layout systems..."
    },
    {
      id: 19,
      title: "JAMstack Architecture Explained",
      slug: "jamstack-architecture",
      summary: "Modern web development paradigm",
      date: "2024-03-04T17:30:00Z",
      content: "JAMstack offers secure, scalable web applications..."
    },
    {
      id: 20,
      title: "Battery Technology in EVs",
      slug: "ev-battery-technology",
      summary: "Innovations in energy storage",
      date: "2024-03-05T10:00:00Z",
      content: "Breakthroughs in battery tech driving EV adoption..."
    },
    {
      id: 21,
      title: "Testing React Components",
      slug: "testing-react-components",
      summary: "Jest and React Testing Library guide",
      date: "2024-03-06T12:45:00Z",
      content: "Comprehensive testing strategies for React applications..."
    },
    {
      id: 22,
      title: "Next.js Authentication Strategies",
      slug: "nextjs-authentication",
      summary: "Implementing secure auth systems",
      date: "2024-03-07T14:30:00Z",
      content: "Best practices for authentication in Next.js applications..."
    },
    {
      id: 23,
      title: "Urban Mobility Challenges",
      slug: "urban-mobility-challenges",
      summary: "Solving city transportation issues",
      date: "2024-03-08T16:15:00Z",
      content: "Addressing modern urban transportation problems..."
    },
    {
      id: 24,
      title: "CSS Custom Properties Deep Dive",
      slug: "css-custom-properties",
      summary: "Mastering CSS variables",
      date: "2024-03-09T09:00:00Z",
      content: "Leverage CSS variables for dynamic styling..."
    },
    {
      id: 25,
      title: "GraphQL in Modern Applications",
      slug: "graphql-modern-apps",
      summary: "Efficient data querying",
      date: "2024-03-10T11:20:00Z",
      content: "Implement GraphQL for flexible data fetching..."
    },
    {
      id: 26,
      title: "Motorcycle Touring Essentials",
      slug: "motorcycle-touring-essentials",
      summary: "Preparing for long rides",
      date: "2024-03-11T13:10:00Z",
      content: "Checklist for successful motorcycle adventures..."
    },
    {
      id: 27,
      title: "Web Accessibility Testing Tools",
      slug: "a11y-testing-tools",
      summary: "Ensuring inclusive design",
      date: "2024-03-12T15:45:00Z",
      content: "Essential tools for accessibility audits..."
    },
    {
      id: 28,
      title: "Next.js vs Gatsby: Comparison",
      slug: "nextjs-vs-gatsby",
      summary: "Choosing the right framework",
      date: "2024-03-13T17:00:00Z",
      content: "Detailed comparison of static site generation tools..."
    },
    {
      id: 29,
      title: "EV Charging Infrastructure",
      slug: "ev-charging-infrastructure",
      summary: "Building sustainable networks",
      date: "2024-03-14T10:30:00Z",
      content: "Developing reliable charging solutions for EVs..."
    },
    {
      id: 30,
      title: "Advanced Tailwind Techniques",
      slug: "advanced-tailwind-techniques",
      summary: "Beyond basic utility classes",
      date: "2024-03-15T12:00:00Z",
      content: "Unlocking the full potential of Tailwind CSS..."
    }
  ];
  
  export default mockdata;