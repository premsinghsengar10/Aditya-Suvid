import homeHeroImage from '../assets/generated/home-hero.png'
import monkeyTroopersBrandImage from '../assets/brands/monkey-troopers.webp'
import foDubaiBrandImage from '../assets/brands/harmoniq-trading.webp'
import adityaSuvidRetailImage from '../assets/brands/suvid retail image.webp'
import groupJourneyImage from '../assets/generated/group-journey.png'
import companyLogo from '../assets/suvid-retail-logo.jpeg'
import bhupiiiImage from '../assets/teammembers/Bhuppi_Image.png'
import dharavImage from '../assets/teammembers/Dharavsir_Image.png'
import hemlataImage from '../assets/teammembers/Hemlatamam_Image.png'
import henishaImage from '../assets/teammembers/Henisha_Image.png'
import jashImage from '../assets/teammembers/Jash_Image.png'
import kinjalImage from '../assets/teammembers/Kinjal.webp'
import nageshImage from '../assets/teammembers/Nagesh_Image.jpg'
import piyushImage from '../assets/teammembers/Piyushsir_Image.png'
import premImage from '../assets/teammembers/Prem.jpeg'
import rishiImage from '../assets/teammembers/Rishi.jpeg'
import shriyaImage from '../assets/teammembers/shriya.jpg.jpeg'
import suvidImage from '../assets/teammembers/Suvidsir_Image.png'
import urviImage from '../assets/teammembers/hardeep.jpg.jpeg'
import yashImage from '../assets/teammembers/Yash_Image.jpg'

export const navItems = ['Home', 'Story', 'Companies', 'Careers', 'About']

export const siteAssets = {
  logo: {
    image: companyLogo,
  },
  hero: {
    image: homeHeroImage,
  },
  timeline: {
    image: groupJourneyImage,
  },
  news: {
    monkeyTroopers: monkeyTroopersBrandImage,
    foDubai: foDubaiBrandImage,
  },
  brands: {
    adityaSuvidRetail: adityaSuvidRetailImage,
    monkeyTroopers: monkeyTroopersBrandImage,
    foDubai: foDubaiBrandImage,
  },
}

export const teamMembers = [
  { id: 'suvid-sinha', name: 'Suvid Sinha', designation: 'Founder', description: 'Guides the group vision and the brands built for the next generation.', image: suvidImage, videoUrl: '' },
  { id: 'bhupiii', name: 'Bhupendra B', designation: 'Head of Product', description: 'Manages product thinking and the direct-to-consumer website experience.', image: bhupiiiImage, videoUrl: '' },
  { id: 'henisha-kansara', name: 'Henisha Kansara', designation: 'Head of Design, Development & Digital Growth', description: 'Leads design, development, and digital growth across the group.', image: henishaImage, videoUrl: '' },
  { id: 'jash-solanki', name: 'Jash Solanki', designation: 'Head of Marketing', description: 'Shapes brand marketing initiatives and helps ideas reach their audiences.', image: jashImage, videoUrl: '' },
  { id: 'piyush-pushkar', name: 'Piyush Pushkar', designation: 'Mentor / Director', description: 'Brings long-term retail and international brand experience to the group.', image: piyushImage, videoUrl: '' },
  { id: 'kinjal-patel', name: 'Kinjal Patel', designation: 'Frontend Accountant', description: 'Supports Harmoniq Creative with dependable accounts operations across the Monkey Troopers and Fragrance d’Oasis businesses.', image: kinjalImage, videoUrl: '' },
  { id: 'dharav-shah', name: 'Dharav Shah', designation: 'Finance Head', description: 'Leads finance support at Harmoniq Creative for the group and its Monkey Troopers and Fragrance d’Oasis operations.', image: dharavImage, videoUrl: '' },
  { id: 'hemlata-pushkar', name: 'Hemlata Pushkar', designation: 'Founder', description: 'Builds the people-first culture that connects every company in the group.', image: hemlataImage, videoUrl: '' },
  { id: 'nagesh-prajapati', name: 'Nagesh Prajapati', designation: 'Senior Graphic Designer', description: 'Creates visual work for Harmoniq Creative and the Monkey Troopers and Fragrance d’Oasis brand worlds.', image: nageshImage, videoUrl: '' },
  { id: 'yash-prajapati', name: 'Yash Prajapati', designation: 'Senior Web Developer', description: 'Builds and supports the digital and ecommerce experiences for Monkey Troopers and Fragrance d’Oasis through Harmoniq Creative.', image: yashImage, videoUrl: '' },
  { id: 'prem-singh-sengar', name: 'Prem Singh Sengar', designation: 'Frontend Developer', description: 'Builds responsive interfaces for Harmoniq Creative and the digital platforms behind Monkey Troopers and Fragrance d’Oasis.', image: premImage, videoUrl: '' },
  { id: 'shriya-jain', name: 'Shriya Jain', designation: 'Web Developer', description: 'Develops and maintains web experiences for the Monkey Troopers and Fragrance d’Oasis brands at Harmoniq Creative.', image: shriyaImage, videoUrl: '' },
  { id: 'hardeep-virk', name: 'Hardeep Virk', designation: 'Visual Editor and Content Creator', description: 'Creates and edits visual content for Harmoniq Creative, supporting the storytelling of Monkey Troopers and Fragrance d’Oasis.', image: urviImage, videoUrl: '' },
  { id: 'rishabh-moyal', name: 'Rishabh Moyal', designation: 'Visual Editor', description: 'Shapes visual content for Harmoniq Creative and helps bring Monkey Troopers and Fragrance d’Oasis campaigns to life.', image: rishiImage, videoUrl: '' },
]

export const newsItems = [
  {
    id: 'group-overview',
    category: 'From the group',
    title: 'A sharper point of view',
    description: 'One group bringing movement, expression, atmosphere, and everyday ritual into focus.',
    image: siteAssets.brands.adityaSuvidRetail,
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
    category: 'Fragrance d’Oasis',
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

export const articleItems = [
  { slug: 'building-brands-with-a-point-of-view', category: 'Suvid Retail', title: 'Building brands with a point of view', description: 'How a shared culture helps four businesses move with clarity while keeping their own identity.', image: siteAssets.brands.adityaSuvidRetail },
  { slug: 'retail-that-starts-with-people', category: 'Aditya Suvid Retail', title: 'Retail that starts with people', description: 'The everyday choices that turn a store visit into a relationship worth returning to.', image: siteAssets.brands.adityaSuvidRetail },
  { slug: 'monkey-troopers-street-culture', category: 'Monkey Troopers', title: 'Street culture, carried forward', description: 'Why utility, expression, and community sit at the heart of Monkey Troopers.', image: siteAssets.brands.monkeyTroopers },
  { slug: 'designing-for-everyday-movement', category: 'Monkey Troopers', title: 'Designing for everyday movement', description: 'A closer look at the details that make everyday carry feel more personal.', image: siteAssets.brands.monkeyTroopers },
  { slug: 'from-india-to-the-middle-east', category: 'Monkey Troopers', title: 'From India to the Middle East', description: 'What it takes to carry an Indian brand story into a new market without losing its voice.', image: siteAssets.brands.monkeyTroopers },
  { slug: 'the-digital-engine-behind-growth', category: 'Harmoniq Creative', title: 'The digital engine behind growth', description: 'How strategy, design, development, and performance work together under Harmoniq Creative.', image: siteAssets.hero.image },
  { slug: 'making-brands-discoverable', category: 'Harmoniq Creative', title: 'Making ambitious brands discoverable', description: 'A practical view of the systems that help good brand work find the right audience.', image: siteAssets.hero.image },
  { slug: 'fragrance-from-dubai-to-india', category: 'Fragrance d’Oasis', title: 'Fragrance from Dubai to India', description: 'The relationship-led story behind a fragrance business rooted in Dubai and growing across markets.', image: siteAssets.brands.foDubai },
  { slug: 'the-ritual-of-leaving-a-trace', category: 'Fragrance d’Oasis', title: 'The ritual of leaving a trace', description: 'Why fragrance is more than a product: it is memory, mood, and identity in motion.', image: siteAssets.brands.foDubai },
  { slug: 'one-group-many-next-chapters', category: 'Suvid Retail', title: 'One group, many next chapters', description: 'The shared ambition connecting retail, streetwear, digital growth, and fragrance.', image: siteAssets.brands.adityaSuvidRetail },
]

export const careerCards = [
  {
    id: 'life',
    title: 'Life at Suvid Retail',
    description: 'A culture built on transparency, creative freedom, and continuous evolution.',
    icon: '✦',
    link: '/about',
  },
  {
    id: 'articles',
    title: 'Articles',
    description: 'Ideas, perspectives, and stories from the brands we are building.',
    icon: '◎',
    link: '/articles',
  },
  {
    id: 'opportunities',
    title: 'Opportunities',
    description: 'View current openings across our corporate headquarters and brand portfolios.',
    icon: '↗',
    link: '/careers',
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
    name: 'Fragrance d’Oasis',
    shortName: 'Fragrance d’Oasis',
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
    links: ['Monkey Troopers', 'Fragrance d’Oasis', 'Harmoniq Creative'],
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

export const storyFullCopy = {
  prologue: [
    'This is not a story that began with a business plan, a boardroom, or a bank loan large enough to guarantee success. It began with a woman, a city known for turning ambition into enterprise, and a simple refusal to accept that passion and profit could not grow side by side.',
    'Today, that refusal has become a group of four companies, a portfolio of brands, and a presence stretching from Ahmedabad to Dubai, with Europe next on the horizon. This is how it happened.',
    'Every great business starts with an unlikely first step, and this one starts in Gujarat, in the city of Ahmedabad, long known for its dynamic, entrepreneurial business culture.',
    'Hemlata Pushkar was not trained in retail. She was working in hospital management, a world built on care, discipline, and people. But somewhere in that world, an instinct was quietly taking shape: a deep enthusiasm for people and culture that hospitals had sharpened, and that retail would eventually give room to grow.',
    'In 2012, with very limited knowledge of how the retail industry actually worked, she decided to take a leap anyway. She started Suvid Sales Corporation, a proprietorship firm built entirely on her own conviction, with one clear ambition: to become a successful franchisee, and to keep building from there.',
    'It worked. One franchise became several. Several stores became a portfolio. And a proprietorship that started with a single store began to look, unmistakably, like the beginning of something bigger: a dynamic woman who took her passion and turned it, patiently and deliberately, into reality.',
    'Piyush Pushkar then joined hands with her, and together they took that growing ambition and gave it a formal home: Suvid Retail Private Limited, the company known today as Aditya Suvid Retail Private Limited. Piyush brought over 30 years of experience managing international brands, including Tommy Hilfiger travel gear and Samsonite, across both offline and online retail.',
    'That experience made him the group\'s main catalyst for a critical strategic shift: building brands for Gen Z, the youth generation, with the cultural instinct to make them resonate. As mentor and co-founder, he has guided the development of all four companies that now make up the group.',
    'Together, their partnership, one rooted in ground-level retail operations built from nothing, the other in three decades of international brand-building experience, has been the engine behind everything that follows: four companies, each with its own story, purpose, and vision, united under one philosophy: passion first, and the rest follows.',
  ],
  chapters: [
    {
      title: 'Chapter One: Retail Operations',
      subtitle: 'The Past We Built On, The Present We\'re Building',
      paragraphs: [
        'Retail is where this entire journey started, and it began the way most honest journeys do, with far more to learn than to teach.',
        'The first venture was an exclusive franchise for Baggit in Ahmedabad in 2012. It was not a grand launch; it was a real education: real customers, real inventory, real mistakes, and real lessons learned on the shop floor, one day at a time.',
        'From there, the operation scaled. A series of Titan exclusive stores followed across Ahmedabad, from the very first at Prahlad Nagar to stores on C.G. Road and in Ahmedabad One Mall, eventually growing to 7–8 stores running simultaneously.',
        'Managing that scale taught the team what would become a founding principle of the entire group: retail, at its core, is a people business. Systems and stock matter, but it is the people behind the counter who decide whether a customer comes back.',
        'That principle carried the business into premium lifestyle retail, with a Tommy Hilfiger exclusive luggage store, and eventually into building a brand of its own: Bagline, now running stores in Prahlad Nagar, Anand, Alkapuri, and EVA Mall. Alongside Bagline, the portfolio grew to include Cocoberry (EVA Mall) and the multi-brand luggage concept Travel Vogue, with stores in Gandhinagar and Chandkheda.',
        'People before processes. Every process the group runs today was built by first getting the people right.',
        'Scale is earned, not assumed. Growing from one franchise to multiple store formats happened one proven location at a time.',
        'Retail is local, even when the ambition is global. Every market, Ahmedabad, Anand, Baroda, demanded its own understanding before expansion made sense.',
        'Today, retail operations run under Aditya Suvid Retail Private Limited, the group\'s dedicated offline retail arm: the same company that began life as a proprietorship, now built to operate not just the group\'s own brand stores, but also licensed and franchised stores for domestic and international brands.',
        'The group currently operates 8 stores, with a clear and ambitious roadmap to reach 40 stores within the next two years. Strengthening this expansion is a strategic partnership with Brand Concepts Limited, a company established in India\'s offline and online retail space for globally recognized brands including Tommy Hilfiger, Aeropostale, and United Colors of Benetton (UCB), among others.',
        'Our Vision: To be India\'s most trusted retail operator, building and scaling brand experiences that put people at the center of every store.',
        'Our Mission: To grow from 8 to 40 stores over the next two years, expanding across India through strong brand partnerships and a retail model proven since 2012.',
        'Our Passion: For the people who walk into our stores, and for the people who work in them, because we believe both deserve the same care.',
      ],
    },
    {
      title: 'Chapter Two: Monkey Troopers',
      subtitle: 'Born From the Streets, Built for a Generation',
      paragraphs: [
        'Not every brand starts with a business plan. Some start with a feeling, and Monkey Troopers started with the feeling that Gen Z, the youth generation, deserved a streetwear brand built by people who understood their culture, not just their spending power.',
        'Monkey Troopers was the brainchild of Suvid Sinha, alongside two co-founders, and it was shaped from day one by street culture: bold, expressive, unafraid of standing out.',
        'It was also the natural next step for a founder who had already built a proprietorship into a multi-brand retail business. Having proven she could run other people\'s brands successfully, the ambition to build one of her own was only a matter of time.',
        'Piyush Pushkar\'s three decades of experience managing international brands became the strategic backbone of the brand\'s positioning, helping it speak authentically to a generation that can tell the difference between a brand marketed at them and one built for them.',
        'Hemlata Pushkar took on the role of Director of People & Culture for Monkey Troopers, mentoring the team and managing HR and operations, while also serving as a co-founder in the group\'s broader retail journey.',
        'What began as a bold idea has grown into a genuinely successful streetwear brand across India. During a business relationship formed in Dubai around the group\'s fragrance venture, the owner of a Russian general trading company decided to bring Monkey Troopers into the Middle East as a brand in its own right.',
        'The group established its first office outside India, in Dubai, and today Monkey Troopers runs successfully across the Middle East market.',
        'The next chapter for Monkey Troopers is Europe, with plans to enter Spain, the UK, and other European markets in the years ahead, carrying the same street-culture DNA that built the brand\'s identity in India and the Middle East.',
        'Our Vision: To be the streetwear brand of choice for Gen Z, first across India, then across the Middle East and Europe.',
        'Our Mission: To build a brand rooted in authentic street culture, expand into new international markets, and grow a community, not just a customer base.',
        'Our Passion: For the culture, the creativity, and the generation we\'re building this brand for.',
      ],
    },
    {
      title: 'Chapter Three: Harmoniq Creative Private Limited',
      subtitle: 'Powering the Digital Future of Every Brand We Touch',
      paragraphs: [
        'As the group\'s companies grew, a clear need emerged: every brand, no matter how strong offline, now needed an equally strong digital presence to compete and grow. Harmoniq Creative Private Limited was created to answer that need.',
        'Harmoniq Creative is the group\'s digital engine, built to digitally enable every company under the Suvid Retail umbrella, and to extend that same support to any outside company seeking digital growth partnership.',
        'Website design, development, and management: building and maintaining websites that represent a brand the way it deserves to be represented.',
        'Coding and technical development: the backend work that keeps digital platforms running smoothly.',
        'Digital marketing strategy: end-to-end campaigns designed to grow a brand\'s visibility and revenue online.',
        'Performance marketing across Meta and Google: running and optimizing paid campaigns to reach the right audience efficiently.',
        'Google Analytics and data-driven insight: tracking, measuring, and interpreting performance data so every marketing decision is backed by evidence, not guesswork.',
        'Organic growth and SEO: building sustainable, long-term visibility that does not rely on ad spend alone.',
        'Every brand under the group, from Bagline to Monkey Troopers to the fragrance business, depends on Harmoniq Creative to be seen, discovered, and remembered online.',
        'Our Vision: To be the digital growth partner of choice, for our own group\'s companies and for any business looking to build a stronger digital presence.',
        'Our Mission: To combine website development, performance marketing, and data-driven strategy into one digital growth engine for every brand we work with.',
        'Our Passion: For turning data into decisions, and decisions into growth, one campaign, one website, one brand at a time.',
      ],
    },
    {
      title: 'Chapter Four: Harmoniq Trading Private Limited',
      subtitle: 'The Fragrance Story, From Dubai to India',
      paragraphs: [
        'Not every chapter of this journey was planned. This one began with a conversation, and a shared appreciation for perfume.',
        'While in Dubai, Piyush Pushkar and Hemlata Pushkar met the owner of a Russian general trading company. What started as a genuine connection over fragrance grew into a real business relationship, and that relationship became a business of its own: F4 Dubai, a pure perfumery venture born in the UAE, operating under Harmoniq Trading Private Limited.',
        'F4 Dubai continues to grow as a fragrance business rooted in Dubai\'s rich perfumery culture, with its India operations also run under Harmoniq Trading Private Limited.',
        'Leading this category today is Henisha Kansara, who has grown from managing a wide range of early responsibilities across the group into her current role as General Manager of the fragrance category.',
        'As Monkey Troopers expands into new international markets, Harmoniq Creative Private Limited and Harmoniq Trading Private Limited plan to expand the F4 Dubai fragrance business alongside it, ensuring that wherever the streetwear brand goes, the fragrance business follows, growing in parallel.',
        'Our Vision: To build F4 Dubai into a recognized fragrance brand across every market the group operates in, starting with Dubai and India, and expanding alongside Monkey Troopers.',
        'Our Mission: To bring authentic, Dubai-rooted fragrance craftsmanship to new markets through the same relationship-driven approach that created the business in the first place.',
        'Our Passion: For fragrance as a craft, and for the relationships that turn a shared interest into a lasting business.',
      ],
    },
  ],
  closing: [
    'Four companies. Four founding stories. One philosophy that ties them all together.',
    'Growth, for this group, was never meant to be measured by revenue and store count alone. Every company under this umbrella, Aditya Suvid Retail, Monkey Troopers, Harmoniq Creative, and Harmoniq Trading, is built on the same belief: that a business is only as strong as the people and culture behind it, and that everyone who becomes part of this group deserves an equal opportunity to grow.',
    'From a single proprietorship in Ahmedabad in 2012, to stores across Gujarat, to a streetwear brand running in India and the Middle East and now eyeing Europe, to a fragrance business born from a conversation in Dubai, to a digital engine powering every brand\'s growth, this is a group built one relationship, one store, one market at a time.',
    'And the story is still being written.',
  ],
  notes: [
    'Monkey Troopers co-founders: full names/spellings for the two co-founders alongside Suvid Sinha (previously heard as “Bhupendra” and “Josh Solanki”) still need confirming.',
    'The 8th current store: the list so far totals 7 (Bagline: Anand, Prahlad Nagar, Alkapuri, EVA Mall; Cocoberry: EVA Mall; Travel Vogue: Gandhinagar, Chandkheda). Please confirm the 8th location.',
    'The Russian trading company\'s name: for accuracy, it would help to have the actual company name rather than a generic description, if it can be shared.',
    'F4 Dubai: exact brand name should be reconfirmed as the final name for the fragrance business.',
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
    name: 'Monkey Troopers Private Limited',
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
