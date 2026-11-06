export const brand = {
  name: 'Solvnext',
  tagline: 'Digital Excellence',
  email: 'hello@solvnext.com',
  phone: '+61 3 9000 0000',
  phoneHref: 'tel:+61390000000',
  location: 'Melbourne, Australia',
  response: 'Within 2 hours',
}

export const navLinks = [
  { to: '/app-development', label: 'App Development' },
  { to: '/web-development', label: 'Web Development' },
  { to: '/software-development', label: 'Software Development' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/ai', label: 'AI' },
  { to: '/contact', label: 'Contact' },
]

export type Service = {
  slug: string
  title: string
  icon: string
  description: string
  features: string[]
  stat: string
  statLabel: string
  image: string
  lead: string
  story: string[]
  highlights: string[]
}

export const services: Service[] = [
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: '📱',
    description:
      'Native and cross-platform mobile applications defined by user-centric design and robust functionality.',
    features: ['iOS & Android', 'React Native / Flutter', 'UI/UX Design'],
    stat: '100+',
    statLabel: 'Apps Launched',
    image: '/images/portfolio_banner_app_desktop-v2.webp',
    lead: 'Native and cross-platform apps that people actually keep on their home screen.',
    story: [
      'Solvnext designs and ships iOS and Android products for healthcare, fintech, and education teams across Victoria.',
      'From the first wireframe to App Store release, we pair product strategy with React Native, Flutter, Swift, and Kotlin so the experience feels native and the codebase stays maintainable.',
    ],
    highlights: [
      'Product discovery, UX, and high-fidelity prototypes',
      'App Store and Google Play launch support',
      'Analytics, payments, and secure authentication',
      'Ongoing releases after go-live',
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: '💻',
    description:
      'Scalable, secure, and high-performance web applications ensuring your business stays ahead.',
    features: ['Enterprise Web Apps', 'E-Commerce', 'SaaS Platforms'],
    stat: '99.9%',
    statLabel: 'Uptime',
    image: '/images/macbooknew.avif',
    lead: 'Web platforms built to stay fast when traffic, catalogues, and teams grow.',
    story: [
      'We build enterprise web apps, commerce storefronts, and SaaS products with React, Next.js, and Node.js.',
      'Every build is responsive, accessible, and structured so your team can ship new features without rewriting the foundation.',
    ],
    highlights: [
      'Custom websites and progressive web apps',
      'E-commerce and marketplace platforms',
      'CMS and customer portals',
      'Performance, SEO, and security baked in',
    ],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    icon: '☁️',
    description: 'Secure and scalable cloud infrastructure to power your digital transformation.',
    features: ['AWS / Azure', 'DevOps', 'Cloud Migration'],
    stat: '24/7',
    statLabel: 'Monitoring',
    image: '/images/portfolio_banner.webp',
    lead: 'Infrastructure that scales with the product, not against it.',
    story: [
      'Solvnext migrates and operates workloads on AWS and Azure with pipelines your team can trust.',
      'We design environments for uptime, observability, and calm releases.',
    ],
    highlights: [
      'Cloud architecture and migration plans',
      'CI/CD and infrastructure as code',
      'Monitoring, alerts, and cost control',
      'Hardening for regulated industries',
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: '🎨',
    description:
      'User-centered design that converts. From wireframes to high-fidelity prototypes and design systems.',
    features: ['User Experience Research', 'Interface Design', 'Prototyping & Testing'],
    stat: '4.9/5',
    statLabel: 'Client Satisfaction',
    image: '/images/success_strategy_app_2_desktop-v2.webp',
    lead: 'Interfaces that feel obvious the first time someone uses them.',
    story: [
      'Research, flows, and visual systems come before a single production screen.',
      'We test prototypes with real users, then hand engineering a design system they can extend.',
    ],
    highlights: [
      'Discovery workshops and journey maps',
      'Wireframes through polished UI',
      'Design systems and component libraries',
      'Usability testing before launch',
    ],
  },
  {
    slug: 'consulting',
    title: 'Tech Consulting',
    icon: '💡',
    description:
      'Strategic technology consulting to guide your digital transformation and optimize your tech stack.',
    features: ['Technology Audits', 'Digital Strategy', 'Architecture Planning'],
    stat: '100%',
    statLabel: 'Success Rate',
    image: '/images/macbook2.avif',
    lead: 'A clear technical plan before you spend a dollar on the wrong build.',
    story: [
      'We audit what you already run, then map the shortest path to the product you actually need.',
      'Architecture, vendor choices, and delivery plans are written so founders and boards can act on them.',
    ],
    highlights: [
      'Stack and codebase audits',
      'Roadmaps tied to commercial goals',
      'Build-vs-buy recommendations',
      'Delivery governance for internal teams',
    ],
  },
  {
    slug: 'support',
    title: 'Maintenance & Support',
    icon: '🛡️',
    description:
      'Ongoing maintenance, updates, and technical support to keep your applications running smoothly.',
    features: ['24/7 Technical Support', 'Regular Updates & Patches', 'Performance Monitoring'],
    stat: '24/7',
    statLabel: 'Support',
    image: '/images/app_showcase.webp',
    lead: 'The product stays healthy after the launch party ends.',
    story: [
      'Solvnext stays on the product with patches, store updates, and performance work.',
      'Support packages flex with the size of the app and the pace of your roadmap.',
    ],
    highlights: [
      'Bug fixes and security updates',
      'Store listing and release management',
      'Performance and crash monitoring',
      'Feature enhancements on a retainer',
    ],
  },
]

export const industries = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: '🏥',
    image: '/images/success_strategy_app_2_desktop-v2.webp',
    lead: 'Secure patient, clinic, and telehealth products built for Australian privacy expectations.',
    story: [
      'We design portals that connect patients and providers without making clinical teams fight the software.',
      'Access control, audit trails, and calm interfaces come standard.',
    ],
    highlights: ['Telehealth and patient portals', 'Clinic operations tools', 'Secure messaging', 'Compliance-minded architecture'],
  },
  {
    slug: 'fintech',
    title: 'FinTech',
    icon: '💸',
    image: '/images/portfolio_banner_app_desktop-v2.webp',
    lead: 'Financial products that stay accurate when the volume is real.',
    story: [
      'From wallets to trading dashboards, we build flows people trust with their money.',
      'We focus on transaction integrity, clear states, and interfaces that hold up under load.',
    ],
    highlights: ['Payments and ledgers', 'Trading and analytics', 'KYC-ready onboarding', 'Operational dashboards'],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    icon: '🏠',
    image: '/images/portfolio_banner.webp',
    lead: 'Listings, inspections, and agent tools that move deals forward.',
    story: [
      'Property businesses need search, maps, and enquiry flows that do not fall over on campaign day.',
      'We build the customer site and the back office that feeds it.',
    ],
    highlights: ['Listing marketplaces', 'Agent CRMs', 'Inspection booking', 'Buyer portals'],
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    icon: '🚚',
    image: '/images/driverapp.webp',
    lead: 'Driver, fleet, and dispatch software that works away from the office wifi.',
    story: [
      'Field teams need apps that stay usable on the road and sync when the signal returns.',
      'We ship tracking, job management, and proof-of-delivery flows used every day.',
    ],
    highlights: ['Driver mobile apps', 'Fleet tracking', 'Dispatch consoles', 'Proof of delivery'],
  },
  {
    slug: 'education',
    title: 'Education',
    icon: '🎓',
    image: '/images/app_showcase.webp',
    lead: 'Learning platforms that teachers and students can finish a lesson inside.',
    story: [
      'We build course delivery, progress, and admin tools that stay simple on a phone.',
      'Content, assessments, and reporting sit in one product instead of five tabs.',
    ],
    highlights: ['Learning portals', 'Course authoring', 'Progress tracking', 'School and campus admin'],
  },
  {
    slug: 'retail',
    title: 'Retail',
    icon: '🛍️',
    image: '/images/appfood.webp',
    lead: 'Commerce experiences that hold a catalogue, a checkout, and a rush of customers.',
    story: [
      'Retail teams come to us when the storefront, the app, and the warehouse need to agree.',
      'We design omnichannel journeys from browse to delivery.',
    ],
    highlights: ['Storefronts and marketplaces', 'Loyalty and reordering', 'Inventory-aware checkout', 'Mobile shopping apps'],
  },
]

export const projects = [
  {
    title: 'Dimers',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    description: 'Advanced Sports Betting & Analytics Platform with Real-Time Data.',
    stats: [
      { value: '4.7 Stars', label: 'App Rating' },
      { value: '500K+', label: 'Active Users' },
    ],
    image: '/images/cascading_dimers_screen_1.webp',
  },
  {
    title: 'DriveConnect',
    icon: '🚗',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
    description: 'Professional Driver Management & Fleet Tracking Solution.',
    stats: [
      { value: '4.9 Stars', label: 'App Rating' },
      { value: '10K+', label: 'Active Drivers' },
    ],
    image: '/images/driverapp.webp',
  },
  {
    title: 'FinTech Revolution',
    icon: '💸',
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    description: 'A comprehensive financial management solution processing $1M+ daily transactions.',
    stats: [
      { value: '4.8 Stars', label: 'App Rating' },
      { value: '1M+', label: 'Transactions' },
    ],
    image: '/images/portfolio_banner_app_desktop-v2.webp',
  },
  {
    title: 'Healthcare Connect',
    icon: '🏥',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
    description: 'Connecting patients with healthcare providers through a secure telemedicine portal.',
    stats: [
      { value: '4.9 Stars', label: 'Satisfaction' },
      { value: '50K+', label: 'Patients' },
    ],
    image: '/images/success_strategy_app_2_desktop-v2.webp',
  },
  {
    title: 'E-Commerce Giant',
    icon: '🛍️',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ecc94b 100%)',
    description: 'Scaling an online retailer to 100k daily users with a robust omnichannel experience.',
    stats: [
      { value: '4.6 Stars', label: 'Store Rating' },
      { value: '100K+', label: 'Daily Users' },
    ],
    image: '/images/portfolio_banner.webp',
  },
  {
    title: 'YouFoodz',
    icon: '🥦',
    gradient: 'linear-gradient(135deg, #84cc16 0%, #a3e635 100%)',
    description: 'Healthy meals delivered fresh to your door. Eat better, feel better.',
    stats: [
      { value: '4.9 Stars', label: 'Taste Rating' },
      { value: '200K+', label: 'Happy Eaters' },
    ],
    image: '/images/appfood.webp',
  },
  {
    title: 'MyDeal',
    icon: '🛍️',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    description: "Australia's leading marketplace for home and lifestyle products.",
    stats: [
      { value: '4.8 Stars', label: 'App Store' },
      { value: '1M+', label: 'Downloads' },
    ],
    image: '/images/cascading_mydeal_screen_1.webp',
  },
]

export const testimonials = [
  {
    company: 'healthtech.',
    tone: 'amber',
    quote:
      'The quality of the designs and end product are exceptional! Would highly recommend Solvnext and look forward to dealing with them on an ongoing basis.',
    initials: 'SF',
    name: 'Sarah Foster',
    role: 'Product Manager',
    stars: 5,
  },
  {
    company: 'fintech.',
    tone: 'blue',
    quote:
      'Solvnext delivered our trading platform on time and exceeded all expectations. Their technical expertise and attention to detail is unmatched.',
    initials: 'MR',
    name: 'Michael Roberts',
    role: 'CTO',
    stars: 5,
  },
  {
    company: 'edulearn.',
    tone: 'green',
    quote:
      'Working with Solvnext was a game-changer for our education platform. They understood our vision and brought it to life perfectly.',
    initials: 'JC',
    name: 'Jennifer Chen',
    role: 'Founder & CEO',
    stars: 4,
  },
  {
    company: 'retail.',
    tone: 'purple',
    quote:
      'The team at Solvnext transformed our e-commerce vision into reality. Professional, responsive, and incredibly talented developers.',
    initials: 'DL',
    name: 'David Lee',
    role: 'Digital Director',
    stars: 5,
  },
]

export const faqs = [
  {
    q: 'How much does mobile app development cost in Melbourne?',
    a: 'Mobile app development costs in Melbourne typically range from $15,000 to $150,000+ depending on complexity. Simple apps with basic features start around $15,000-$30,000, while complex apps with advanced features like real-time data, payment integration, and custom UI can cost $50,000-$150,000+. At Solvnext, we provide transparent pricing and work within your budget to deliver exceptional iOS and Android app development solutions.',
  },
  {
    q: 'How long does it take to develop a mobile app in Melbourne?',
    a: 'App development timelines vary based on complexity. Simple apps take 2-3 months, medium complexity apps require 3-6 months, and complex enterprise applications can take 6-12 months. Our Melbourne app development team follows agile methodologies to ensure efficient delivery. We provide regular updates and maintain clear communication throughout the development process to keep your project on track.',
  },
  {
    q: 'What web development services do you offer in Melbourne?',
    a: 'Our Melbourne web development services include custom website development, e-commerce platforms, web applications, CMS development, and progressive web apps (PWAs). We specialize in React, Next.js, Node.js, and modern frameworks to create fast, responsive, and SEO-optimized websites. From simple business websites to complex web applications, we deliver scalable solutions that drive results.',
  },
  {
    q: 'What software development technologies do you specialize in?',
    a: 'Our software development expertise covers React Native, Flutter, iOS (Swift), Android (Kotlin), React, Next.js, Node.js, Python, and cloud platforms like AWS and Firebase. We are experienced in fintech, healthcare, and education software development in Melbourne. Our team stays current with the latest technologies to deliver cutting-edge solutions that meet industry standards and regulatory requirements.',
  },
  {
    q: 'Why choose Solvnext for app development in Melbourne?',
    a: 'Solvnext is a Melbourne app development company with 5+ years of experience, 50+ successful projects, and a 100% client satisfaction focus. Our local team understands the Australian market and provides ongoing support. We combine technical expertise with business strategy to deliver apps that drive real results.',
  },
  {
    q: 'Do you provide ongoing support after app launch?',
    a: 'Yes. We provide post-launch support and maintenance for Melbourne clients. This includes bug fixes, security updates, performance optimization, feature enhancements, and App Store / Google Play management. Support packages are flexible and tailored to your needs.',
  },
]

export const team = [
  { initials: 'AS', name: 'Alex Smith', role: 'Lead Developer' },
  { initials: 'MJ', name: 'Maria Johnson', role: 'UX/UI Designer' },
  { initials: 'DW', name: 'David Wilson', role: 'Tech Strategist' },
]

export const posts = [
  {
    slug: 'what-a-melbourne-app-actually-costs',
    kicker: 'App Development',
    title: 'What a Melbourne app actually costs',
    excerpt:
      'A practical look at budget bands, from a focused first release to a product with payments, realtime data, and custom design.',
    body: [
      'Most first conversations start with a number. The useful answer is a range, because scope decides the cost more than the city does.',
      'A focused iOS or Android release with a handful of screens, accounts, and a simple backend often lands between $15,000 and $30,000. Add realtime data, payments, offline use, or a heavily custom interface and the work moves into the $50,000 to $150,000 band.',
      'Solvnext prices from a written scope. You see what is in the first release, what waits, and what it costs to keep the product healthy after launch.',
    ],
  },
  {
    slug: 'native-or-cross-platform',
    kicker: 'Engineering',
    title: 'Native or cross-platform: how we choose',
    excerpt:
      'React Native and Flutter are not shortcuts. They are the right call when one team should ship both stores without two codebases.',
    body: [
      'Swift and Kotlin still win when the product lives inside platform conventions: complex camera work, deep OS integration, or a feel that has to match the system exactly.',
      'React Native and Flutter win when the product is the same idea on both phones and the team wants one design system, one release train, and one place to fix a bug.',
      'We recommend the path in discovery, then stick to it. Switching halfway is how timelines quietly double.',
    ],
  },
  {
    slug: 'after-the-launch',
    kicker: 'Support',
    title: 'The work that starts after launch',
    excerpt:
      'Store reviews, OS updates, and the first real users will change the roadmap. Support is part of the product, not an extra.',
    body: [
      'Launch day is the first time the product meets people who were not in the workshop. Crashes, confusing steps, and slow screens show up quickly.',
      'A support retainer covers patches, store compliance, and a lane for small improvements so the core team is not rebuilding the same screen every month.',
      'If you want the app to still feel current in a year, plan the second and third releases before the first one ships.',
    ],
  },
]

export const projectTypes = [
  'Mobile App Development',
  'Web Application',
  'Website Development',
  'Custom Software',
  'Consultation',
  'Other',
]

export const budgets = [
  'Under $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  "Let's discuss",
]

export const heroSlides = [
  { src: '/images/portfolio_banner_app_desktop-v2.webp', alt: 'Mobile App Development' },
  { src: '/images/macbook2.avif', alt: 'Web Development Solutions' },
  { src: '/images/success_strategy_app_2_desktop-v2.webp', alt: 'App Strategy & Success' },
]

export const webSlides = [
  { src: '/images/macbooknew.avif', alt: 'Web Solutions on Multiple Devices' },
  { src: '/images/portfolio_banner.webp', alt: 'Web Development Portfolio' },
]

export const phones = [
  '/images/cascading_dimers_screen_1.webp',
  '/images/cascading_dimers_screen_2.webp',
  '/images/cascading_itrackit_screen_1.webp',
  '/images/cascading_itrackit_screen_2.webp',
]
