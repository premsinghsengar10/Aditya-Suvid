import homeHeroImage from '../assets/generated/home-hero.png'
import monkeyTroopersImage from '../assets/generated/monkey-troopers.png'
import foDubaiImage from '../assets/generated/fo-dubai.png'
import groupJourneyImage from '../assets/generated/group-journey.png'

export const navItems = ['Home', 'Story', 'Companies', 'Careers', 'About']

export const siteAssets = {
  hero: {
    image: homeHeroImage,
  },
  timeline: {
    image: groupJourneyImage,
  },
  news: {
    monkeyTroopers: monkeyTroopersImage,
    foDubai: foDubaiImage,
  },
  brands: {
    monkeyTroopers: monkeyTroopersImage,
    foDubai: foDubaiImage,
  },
}

export const newsItems = [
  {
    id: 'group-overview',
    category: 'From the group',
    title: 'A sharper point of view',
    description: 'One group bringing movement, expression, atmosphere, and everyday ritual into focus.',
    image: siteAssets.timeline.image,
    link: '#brands',
    featured: true,
  },
  {
    id: 'monkey-troopers',
    category: 'Monkey Troopers',
    title: 'Utility with a point of view',
    description: 'Playful bags and everyday carry built for movement, expression, and the city ahead.',
    image: siteAssets.news.monkeyTroopers,
    link: 'https://monkeytroopers.com/',
  },
  {
    id: 'fo-dubai',
    category: 'FO Dubai',
    title: 'Scent made personal',
    description: 'A fragrance house exploring memory, mood, and the quiet power of leaving a trace.',
    image: siteAssets.news.foDubai,
    link: 'https://fodubai.in/',
  },
  {
    id: 'group-direction',
    category: 'The group',
    title: 'Two worlds, one direction',
    description: 'Distinct brands connected by a shared appetite for what comes next.',
    image: siteAssets.hero.image,
    link: '#brands',
  },
]

export const careerCards = [
  {
    id: 'life',
    title: 'Life at Aditya Suvid',
    description: 'A culture built on transparency, creative freedom, and continuous evolution.',
    icon: '✦',
  },
  {
    id: 'people',
    title: 'Our People',
    description: 'Meet the diverse minds behind our brands—designers, strategists, and innovators.',
    icon: '◎',
  },
  {
    id: 'opportunities',
    title: 'Opportunities',
    description: 'View current openings across our corporate headquarters and brand portfolios.',
    icon: '↗',
  },
]

export const brands = [
  {
    id: 'monkey-troopers',
    name: 'Monkey Troopers',
    shortName: 'MONKEY TROOPERS',
    descriptionLines: [
      'Playful urban utility.',
      'Built for movement.',
      'Designed for everyday carry.',
      'Made with more character.',
    ],
    image: siteAssets.brands.monkeyTroopers,
    thumb: siteAssets.brands.monkeyTroopers,
    url: 'https://monkeytroopers.com/',
  },
  {
    id: 'fo-dubai',
    name: 'FO Dubai',
    shortName: 'FO DUBAI',
    descriptionLines: [
      'Luxury fragrance, made personal.',
      'Sculpted for mood.',
      'Rooted in ritual.',
      'Designed to leave a trace.',
    ],
    image: siteAssets.brands.foDubai,
    thumb: siteAssets.brands.foDubai,
    url: 'https://fodubai.in/',
  },
]

export const footerColumns = [
  {
    title: 'Company',
    links: ['About Us', 'Leadership', 'Careers', 'Contact'],
  },
  {
    title: 'Portfolio',
    links: ['Monkey Troopers', 'FO Dubai'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Sustainability Report', 'Investor Relations'],
  },
]

export const storyContent = {
  introTitle: 'The journey of the Suvid Retail Group',
  introDescription: 'From a proprietorship in Ahmedabad to a group spanning India and the Middle East, with Europe next on the horizon.',
  quote: 'Money is not everything. When passion leads, everything becomes possible.',
  openingTitle: 'Where it all began',
  opening: [
    'This story did not begin with a business plan, a boardroom, or a guaranteed path to success. It began with Hemlata Pushkar in Ahmedabad, a city known for turning ambition into enterprise, and a belief that passion and profit could grow side by side.',
    'Hemlata was working in hospital management, a world built on care, discipline, and people. In 2012, with limited knowledge of retail, she took a leap and started Suvid Sales Corporation in Ahmedabad with one clear ambition: to become a successful franchisee and keep building from there.',
    'One franchise became several. Several stores became a portfolio. Piyush Pushkar then joined her, bringing more than 30 years of experience managing international brands across offline and online retail. Together, they gave that growing ambition a formal home in Suvid Retail Private Limited, known today as Aditya Suvid Retail Private Limited.',
    'Their partnership combines ground-level retail operations with international brand-building experience. It remains the engine behind four companies, each with its own purpose and vision, united by one philosophy: passion first, and the rest follows.',
  ],
  milestones: [
    {
      year: '2012',
      title: 'The first retail leap',
      description: 'Suvid Sales Corporation begins in Ahmedabad with an exclusive Baggit franchise and a belief that the work on the shop floor would teach the business how to grow.',
    },
    {
      year: '2012 onward',
      title: 'A retail foundation takes shape',
      description: 'Titan, Tommy Hilfiger luggage, Bagline, Cocoberry, and Travel Vogue build a portfolio across Gujarat and turn one starting point into a working retail system.',
    },
    {
      year: 'Today',
      title: 'One group, four companies',
      description: 'Aditya Suvid Retail, Monkey Troopers, Harmoniq Creative, and Harmoniq Trading each bring a different capability to the group while sharing a common operating culture.',
    },
    {
      year: 'Next',
      title: 'Growth with a wider horizon',
      description: 'The group continues to strengthen its India and Middle East presence while Monkey Troopers prepares for its next chapter in Europe.',
    },
  ],
  people: [
    {
      name: 'Hemlata Pushkar',
      role: 'Founder and people leader',
      description: 'The entrepreneurial force behind the group, bringing a people-first approach from hospital management into retail, culture, and operations.',
    },
    {
      name: 'Piyush Pushkar',
      role: 'Retail and brand strategy',
      description: 'Brings more than three decades of experience managing international brands across offline and online retail to the group\'s next phase of scale.',
    },
    {
      name: 'Suvid Sinha',
      role: 'Monkey Troopers co-founder',
      description: 'Helps shape Monkey Troopers through a street-culture point of view, making sure the brand grows with its generation rather than speaking at it.',
    },
    {
      name: 'Henisha Kansara',
      role: 'Fragrance category lead',
      description: 'Leads the fragrance category within Harmoniq Trading, bringing broad experience from across the group into a growing Dubai-to-India business.',
    },
  ],
  chapters: [
    {
      number: '01',
      title: 'Retail operations',
      subtitle: 'The past we built on. The present we are building.',
      paragraphs: [
        'Retail is where the journey started, with an exclusive Baggit franchise in Ahmedabad in 2012. It was a real education built around customers, inventory, mistakes, and lessons learned on the shop floor.',
        'The operation grew through Titan exclusive stores across Ahmedabad, followed by premium lifestyle retail and the group\'s own formats. Bagline now operates stores in Prahlad Nagar, Anand, Alkapuri, and EVA Mall, alongside Cocoberry and the multi-brand Travel Vogue concept.',
        'Today, Aditya Suvid Retail Private Limited is the group\'s dedicated offline retail arm, operating its own brands as well as licensed and franchised stores for domestic and international partners. The ambition is to build a trusted retail model that grows market by market and puts people at the centre of every store.',
      ],
      lessons: ['People before processes.', 'Scale is earned, not assumed.', 'Retail is local, even when the ambition is global.'],
      vision: 'To be India\'s most trusted retail operator.',
      mission: 'To build and scale brand experiences through strong partnerships and a retail model proven since 2012.',
    },
    {
      number: '02',
      title: 'Monkey Troopers',
      subtitle: 'Born from the streets. Built for a generation.',
      paragraphs: [
        'Monkey Troopers began with the feeling that Gen Z deserved a streetwear brand built by people who understood its culture, not just its spending power. The brand was shaped from day one by street culture: bold, expressive, and unafraid to stand out.',
        'Suvid Sinha and two co-founders developed the idea, while Piyush Pushkar\'s experience in international brand management helped give its positioning a clear strategic backbone. Hemlata Pushkar became Director of People and Culture, mentoring the team while supporting operations and the group\'s wider retail journey.',
        'The brand has grown across India and into the Middle East. Its next chapter is Europe, with plans to enter Spain, the United Kingdom, and other markets while building a community, not just a customer base.',
      ],
      lessons: ['Authenticity has to be built, not marketed.', 'Culture travels when the point of view is clear.', 'A community is stronger than a customer list.'],
      vision: 'To be the streetwear brand of choice for Gen Z across India, the Middle East, and Europe.',
      mission: 'To build an authentic street-culture brand and grow a connected international community.',
    },
    {
      number: '03',
      title: 'Harmoniq Creative',
      subtitle: 'Powering the digital future of every brand we touch.',
      paragraphs: [
        'As the group grew, one need became clear: every strong offline brand also needed a digital presence capable of competing and growing online. Harmoniq Creative Private Limited was created as the group\'s digital engine.',
        'The company brings together website design, development, technical management, digital marketing, performance campaigns, analytics, organic growth, and SEO. It supports the group\'s companies and extends the same digital growth partnership to businesses outside the group.',
        'Its work is grounded in the experience of building and scaling brands from the ground up. Every website, campaign, and insight is designed to make a brand more visible, more discoverable, and more useful to the people it serves.',
      ],
      lessons: ['Data should sharpen instinct, not replace it.', 'Digital growth is an operating discipline.', 'The best systems still begin with a human point of view.'],
      vision: 'To be the digital growth partner of choice for ambitious brands.',
      mission: 'To combine development, performance marketing, and data-driven strategy into one growth engine.',
    },
    {
      number: '04',
      title: 'Harmoniq Trading',
      subtitle: 'A fragrance story from Dubai to India.',
      paragraphs: [
        'This chapter began with a conversation in Dubai and a shared appreciation for perfume. A genuine relationship with a Russian general trading company grew into a fragrance venture operating under Harmoniq Trading Private Limited.',
        'The business is rooted in Dubai\'s rich perfumery culture, with operations across Dubai and India. Henisha Kansara leads the fragrance category today, building on a wide range of responsibilities developed across the group.',
        'As Monkey Troopers expands into new international markets, the fragrance business is planned to grow alongside it. The ambition is to carry authentic, Dubai-rooted fragrance craftsmanship into every market the group enters.',
      ],
      lessons: ['Relationships can become lasting businesses.', 'Craft travels through trust.', 'Parallel growth creates a stronger group.'],
      vision: 'To build a recognized fragrance business across every market the group operates in.',
      mission: 'To bring Dubai-rooted fragrance craftsmanship to new markets through a relationship-driven approach.',
    },
  ],
  closingTitle: 'One group. One culture.',
  closing: [
    'Four companies. Four founding stories. One philosophy that ties them together.',
    'From a single proprietorship in Ahmedabad in 2012 to stores across Gujarat, a streetwear brand operating across India and the Middle East, a digital engine for brand growth, and a fragrance business born in Dubai, this is a group built one relationship, one store, and one market at a time.',
    'And the story is still being written.',
  ],
}

export const groupCompanies = [
  {
    id: 'aditya-suvid-retail',
    number: '01',
    name: 'Aditya Suvid Retail Private Limited',
    category: 'Retail operations',
    strapline: 'Building the store experience.',
    description: 'The group\'s dedicated offline retail arm, growing from a 2012 Ahmedabad proprietorship into a multi-format operator for its own, licensed, and franchised brands.',
    highlights: ['Founded in Ahmedabad in 2012', 'Offline retail and store operations', 'Roadmap to expand across India'],
  },
  {
    id: 'monkey-troopers-company',
    number: '02',
    name: 'Monkey Troopers',
    category: 'Streetwear brand',
    strapline: 'Born from the streets. Built for a generation.',
    description: 'A streetwear brand shaped by authentic street culture, expressive design, and a belief that Gen Z deserves brands built with them, not simply marketed at them.',
    highlights: ['India and Middle East presence', 'Community-led street culture', 'Europe is the next chapter'],
  },
  {
    id: 'harmoniq-creative',
    number: '03',
    name: 'Harmoniq Creative Private Limited',
    category: 'Digital growth engine',
    strapline: 'Making ambitious brands discoverable.',
    description: 'The group\'s digital engine, bringing together websites, technical development, performance marketing, analytics, organic growth, and SEO for brands inside and outside the group.',
    highlights: ['Website design and development', 'Meta and Google performance marketing', 'Analytics, organic growth, and SEO'],
  },
  {
    id: 'harmoniq-trading',
    number: '04',
    name: 'Harmoniq Trading Private Limited',
    category: 'Fragrance operations',
    strapline: 'A fragrance story from Dubai to India.',
    description: 'A Dubai-rooted fragrance business built through relationships, with operations across the UAE and India and a plan to grow alongside the group\'s international expansion.',
    highlights: ['Dubai and India operations', 'Rooted in perfumery culture', 'Relationship-led international growth'],
  },
]

export const groupOperatingModel = {
  intro: 'Every company has its own customer, category, and point of view. What connects them is the way the group builds: grounded retail learning, clear brand expression, and capabilities that help every business move forward together.',
  pillars: [
    {
      number: '01',
      title: 'Start close to the customer',
      description: 'The retail foundation keeps decisions connected to real people, real stores, and the local realities of every market.',
    },
    {
      number: '02',
      title: 'Give every brand a point of view',
      description: 'From streetwear to fragrance, the group develops brands with a distinct reason to exist rather than a generic product story.',
    },
    {
      number: '03',
      title: 'Build capabilities that travel',
      description: 'Retail operations, digital growth, and international relationships work together so momentum can move from one company into the next.',
    },
  ],
  direction: [
    {
      label: 'Foundation',
      title: 'Ahmedabad and Gujarat',
      description: 'The group\'s retail DNA was built one store and one customer relationship at a time across its home market.',
    },
    {
      label: 'Current reach',
      title: 'India and the Middle East',
      description: 'The group now connects Indian retail experience with a growing presence in the Middle East, including its Dubai-rooted fragrance operations.',
    },
    {
      label: 'Next horizon',
      title: 'Europe',
      description: 'Monkey Troopers is preparing for expansion into Europe, beginning with markets such as Spain and the United Kingdom.',
    },
  ],
}
