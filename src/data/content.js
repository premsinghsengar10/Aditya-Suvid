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
