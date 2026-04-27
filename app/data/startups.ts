export type Startup = {
  id: number
  name: string
  tagline: string
  category: string
  city: string
  stage: string
  logo: string
  color: string
  mrr: string | null
  valuation: string | null
  raised: number | null
  target: number | null
  daysLeft: number | null
  dau: string
  productUrl: string
  investors: number
  followers: number
  description: string
  founders: { name: string; role: string; bg: string }[]
  tags: string[]
  status: 'fundraising' | 'discovery'
  founded: string
  team: number
}

export const startups: Startup[] = [
  {
    id: 1,
    name: "Zeno AI",
    tagline: "AI copilot for Indian CA firms",
    category: "B2B SaaS",
    city: "Bangalore",
    stage: "Pre-seed",
    logo: "ZA",
    color: "#7c5cfc",
    mrr: "₹4.2L",
    valuation: "₹8 Cr",
    raised: 67,
    target: 100,
    daysLeft: 23,
    dau: "2.3K",
    productUrl: "https://zeno.ai",
    investors: 847,
    followers: 1243,
    description: "Zeno automates repetitive compliance work for CA firms — ITR filing, GST reconciliation, TDS management. Built for the 1.4L CA firms in India that still run on Excel.",
    founders: [
      { name: "Arjun Mehta", role: "CEO", bg: "Ex-Razorpay" },
      { name: "Priya Nair", role: "CTO", bg: "Ex-Google" }
    ],
    tags: ["AI", "Fintech", "B2B"],
    status: "fundraising",
    founded: "2023",
    team: 8,
  },
  {
    id: 2,
    name: "Khetify",
    tagline: "Direct farm-to-kitchen marketplace",
    category: "Agritech",
    city: "Pune",
    stage: "Seed",
    logo: "KF",
    color: "#22c55e",
    mrr: "₹12.8L",
    valuation: "₹22 Cr",
    raised: 34,
    target: 200,
    daysLeft: 18,
    dau: "8.1K",
    productUrl: "https://khetify.in",
    investors: 312,
    followers: 892,
    description: "Khetify connects 3,000+ farmers in Maharashtra directly to urban consumers. No middlemen — farmers earn 40% more, consumers pay 20% less.",
    founders: [
      { name: "Rahul Desai", role: "CEO", bg: "Ex-BigBasket" },
    ],
    tags: ["Agritech", "D2C", "Marketplace"],
    status: "fundraising",
    founded: "2022",
    team: 24,
  },
  {
    id: 3,
    name: "MindBridge",
    tagline: "Mental health platform for Indian workplaces",
    category: "Healthtech",
    city: "Mumbai",
    stage: "Pre-seed",
    logo: "MB",
    color: "#f59e0b",
    mrr: "₹1.9L",
    valuation: "₹5 Cr",
    raised: 89,
    target: 50,
    daysLeft: 6,
    dau: "940",
    productUrl: "https://mindbridge.co",
    investors: 1204,
    followers: 3421,
    description: "MindBridge provides affordable therapy and mental wellness tools to employees via corporate subscriptions. 47 companies onboarded in 8 months.",
    founders: [
      { name: "Sneha Kapoor", role: "CEO", bg: "Clinical Psychologist" },
      { name: "Vikram Shah", role: "COO", bg: "Ex-Practo" }
    ],
    tags: ["Healthtech", "B2B", "SaaS"],
    status: "fundraising",
    founded: "2023",
    team: 12,
  },
  {
    id: 4,
    name: "Vastra",
    tagline: "Sustainable fashion rentals for Gen Z",
    category: "D2C",
    city: "Jaipur",
    stage: "Discovery",
    logo: "VS",
    color: "#ec4899",
    mrr: null,
    valuation: null,
    raised: null,
    target: null,
    daysLeft: null,
    dau: "4.2K",
    productUrl: "https://vastra.co",
    investors: 0,
    followers: 2108,
    description: "Vastra lets you rent designer Indian wear for weddings, parties, and events. 800+ outfits, delivered next day, returned with free pickup.",
    founders: [
      { name: "Ananya Singh", role: "CEO", bg: "NIFT Graduate" },
    ],
    tags: ["Fashion", "Sustainability", "D2C"],
    status: "discovery",
    founded: "2023",
    team: 6,
  },
  {
    id: 5,
    name: "StackRoute",
    tagline: "Vernacular coding bootcamps for Tier 2 India",
    category: "Edtech",
    city: "Indore",
    stage: "Pre-seed",
    logo: "SR",
    color: "#06b6d4",
    mrr: "₹6.1L",
    valuation: "₹12 Cr",
    raised: 51,
    target: 150,
    daysLeft: 29,
    dau: "5.6K",
    productUrl: "https://stackroute.in",
    investors: 623,
    followers: 1876,
    description: "StackRoute teaches software development in Hindi and regional languages. 94% placement rate. Built for students in cities where English-first bootcamps don't reach.",
    founders: [
      { name: "Rohan Gupta", role: "CEO", bg: "Ex-Byju's" },
      { name: "Meera Joshi", role: "CPO", bg: "Ex-Unacademy" }
    ],
    tags: ["Edtech", "Tier 2", "Vernacular"],
    status: "fundraising",
    founded: "2022",
    team: 31,
  },
  {
    id: 6,
    name: "ColdChain",
    tagline: "Last-mile cold storage for pharma logistics",
    category: "Logistics",
    city: "Hyderabad",
    stage: "Seed",
    logo: "CC",
    color: "#3b82f6",
    mrr: "₹28L",
    valuation: "₹45 Cr",
    raised: 72,
    target: 500,
    daysLeft: 14,
    dau: "1.1K",
    productUrl: "https://coldchain.in",
    investors: 445,
    followers: 987,
    description: "ColdChain operates India's first tech-enabled micro cold storage network for pharma distribution. 240 storage points across AP and Telangana.",
    founders: [
      { name: "Kiran Reddy", role: "CEO", bg: "Ex-Delhivery" },
    ],
    tags: ["Logistics", "Pharma", "B2B"],
    status: "fundraising",
    founded: "2021",
    team: 67,
  },
]