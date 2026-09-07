import {
  Award,
  Bot,
  Code,
  Cpu,
  CheckCircle2,
  Facebook,
  Globe,
  Instagram,
  Layout,
  LifeBuoy,
  Linkedin,
  Megaphone,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Twitter,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "Twitter" },
];

export type Accent = "green" | "orange";

export type Service = {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: Accent;
  blurb: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    icon: Globe,
    accent: "green",
    blurb: "Fast, modern websites and applications built to convert visitors into customers.",
    items: [
      "Business websites",
      "Ecommerce",
      "Web applications",
      "Landing pages",
      "SEO",
      "Responsive design",
    ],
  },
  {
    id: "ai",
    title: "AI Agents",
    icon: Bot,
    accent: "orange",
    blurb: "Custom AI agents that answer questions, qualify leads, and work around the clock.",
    items: [
      "Customer support bots",
      "AI sales assistants",
      "Internal assistants",
      "Appointment booking",
      "Knowledge assistants",
    ],
  },
  {
    id: "automation",
    title: "Workflow Automation",
    icon: Workflow,
    accent: "green",
    blurb:
      "Connect your tools so leads, data, and tasks move without anyone touching a spreadsheet.",
    items: [
      "CRM automation",
      "API integrations",
      "Zapier",
      "Make",
      "n8n",
      "Business process automation",
    ],
  },
  {
    id: "ads",
    title: "Social Media Advertising",
    icon: Megaphone,
    accent: "orange",
    blurb: "Paid campaigns built around measurable outcomes, not vanity metrics.",
    items: [
      "Facebook Ads",
      "Instagram Ads",
      "Google Ads",
      "TikTok Ads",
      "Lead generation",
      "Conversion optimization",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  industry: string;
  tech: string[];
  challenge: string;
  solution: string;
  results: string;
  color: Accent;
  url?: string;
  preview?: string;
};

export const portfolio: Project[] = [
  {
    title: "Baraza Coffee",
    category: "Web Development",
    industry: "Café & Workspace",
    tech: ["React", "TanStack Router", "Flock Analytics"],
    challenge:
      "A luxury Nairobi café needed an online presence that matched its premium atmosphere and let guests reserve tables without picking up the phone.",
    solution:
      "Built a rich, image-forward site with an integrated table-reservation flow, workspace day-pass booking, and a live menu — all on a custom brand palette.",
    results: "Launched to full bookings within the first week.",
    color: "green",
    url: "https://barazacoffee.online/",
    preview: "/portfolio/baraza.webp",
  },
  {
    title: "Njawera",
    category: "Web Development",
    industry: "Financial Services",
    tech: ["Next.js", "Firebase", "Structured Data / SEO"],
    challenge:
      "A Kenyan bonds-and-insurance broker was invisible online, losing tenders to competitors with stronger digital presence.",
    solution:
      "Designed a high-trust landing page with service-level SEO, keyword-rich schema markup, and a WhatsApp-first lead capture optimised for contractor audiences.",
    results: "First-page Google rankings for 12+ target keywords within 60 days.",
    color: "orange",
    url: "https://njaweralandingpage.web.app/",
    preview: "/portfolio/njawera.webp",
  },
  {
    title: "Dr. Faith Ngunjiri",
    category: "Web Development",
    industry: "Leadership Coaching",
    tech: ["React", "Tailwind", "Calendly"],
    challenge:
      "A leadership coach with an international following had no website that reflected her authority or made it easy for clients to book sessions.",
    solution:
      "Crafted a credibility-first personal brand site with speaker credentials, coaching programmes, and seamless calendar booking embedded throughout.",
    results: "Coaching enquiries up 3x in the first month post-launch.",
    color: "green",
    url: "https://drfaithngunjiri.com/",
    preview: "/portfolio/drfaith.webp",
  },
  {
    title: "Mallard Interiors",
    category: "Web Development",
    industry: "Furniture & Interior Design",
    tech: ["React", "Tailwind", "Framer Motion"],
    challenge:
      "A Ruaka furniture workshop was winning word-of-mouth work but losing online leads to mass-market retailers with slicker websites.",
    solution:
      "Built a bespoke showroom-style site with custom collection galleries, a fabric-and-colour picker concept, and a quote-request flow that positions the brand as luxury, not commodity.",
    results: "Online quote requests launched; workshop fully booked two weeks after go-live.",
    color: "orange",
    url: "https://mallardinteriors.co.ke/",
    preview: "/portfolio/mallard.webp",
  },
  {
    title: "Arena Academy",
    category: "Web Development",
    industry: "Education / E-Learning",
    tech: ["React", "Vite", "GTM", "Meta Pixel"],
    challenge:
      "An East African business-training platform needed a high-conversion landing page to sell workshops and masterclasses to mobile-first professionals.",
    solution:
      "Delivered a full-funnel marketing site with event listings, social proof sections, and pixel-level conversion tracking to power paid social campaigns.",
    results: "First paid cohort sold out; ROAS positive from day one.",
    color: "green",
    url: "https://arenaacademy.online/",
    preview: "/portfolio/arena.webp",
  },
];

export const categories = ["All", "Web Development"];

export const categoryIcons: Record<string, LucideIcon> = {
  "Web Development": Globe,
  "AI Agents": Bot,
  Automation: Workflow,
  Advertising: Megaphone,
};

export const processSteps: { title: string; icon: LucideIcon; desc: string }[] = [
  {
    title: "Discovery",
    icon: Search,
    desc: "We learn your business, your customers, and what growth actually needs to look like.",
  },
  {
    title: "Strategy",
    icon: Target,
    desc: "A clear plan for which services matter most and in what order.",
  },
  {
    title: "Design",
    icon: Layout,
    desc: "Interfaces built around your brand and how real users make decisions.",
  },
  {
    title: "Development",
    icon: Code,
    desc: "Clean, fast, maintainable builds — not a template with your logo on it.",
  },
  {
    title: "AI Integration",
    icon: Cpu,
    desc: "Agents and automations trained on your actual workflows and data.",
  },
  {
    title: "Testing",
    icon: CheckCircle2,
    desc: "Every flow checked across devices, browsers, and edge cases before launch.",
  },
  {
    title: "Launch",
    icon: Rocket,
    desc: "A coordinated go-live with monitoring in place from day one.",
  },
  {
    title: "Continuous Support",
    icon: LifeBuoy,
    desc: "Ongoing updates, optimization, and a team that answers the phone.",
  },
];

export const coreValues: { title: string; icon: LucideIcon; desc: string }[] = [
  {
    title: "Craft",
    icon: Sparkles,
    desc: "We sweat details most agencies skip — because clients notice, even when they can't name why.",
  },
  {
    title: "Candor",
    icon: Shield,
    desc: "We tell clients what will actually move the needle, not just what's easiest to sell.",
  },
  { title: "Speed", icon: Zap, desc: "Momentum compounds. We ship in weeks, not quarters." },
  {
    title: "Outcomes",
    icon: TrendingUp,
    desc: "Every project is judged by one thing: did it grow the business.",
  },
];

export const whyAmplifi: { title: string; icon: LucideIcon; desc: string }[] = [
  {
    title: "Shipped fast",
    icon: Zap,
    desc: "Most projects launch inside 4–8 weeks, not quarters.",
  },
  {
    title: "Senior-only team",
    icon: Award,
    desc: "No handoffs to junior contractors mid-project.",
  },
  {
    title: "Tied to outcomes",
    icon: TrendingUp,
    desc: "Every recommendation is judged against your numbers.",
  },
];

export const team = [
  {
    name: "Maya Okafor",
    role: "Founder & Creative Director",
    gradient: "from-brand-500 to-brand-700",
  },
  { name: "Ethan Voss", role: "Head of Engineering", gradient: "from-orange-500 to-orange-700" },
  { name: "Priya Nandan", role: "AI & Automation Lead", gradient: "from-brand-500 to-orange-500" },
  { name: "Diego Marín", role: "Paid Media Strategist", gradient: "from-orange-500 to-brand-500" },
];

export const testimonials = [
  {
    quote:
      "Amplifi rebuilt our site and set up an AI agent that now handles most of our support load. Our team finally has room to breathe.",
    name: "Renee Castillo",
    role: "Operations Director",
    company: "Northgate Supply Co.",
  },
  {
    quote:
      "The automation work alone paid for the entire engagement within two months. Leads stopped falling through the cracks.",
    name: "James Whitfield",
    role: "Managing Partner",
    company: "Halloway & Reyes LLP",
  },
  {
    quote:
      "They think like operators, not just designers. Every recommendation was tied to a number we cared about.",
    name: "Alicia Tran",
    role: "Founder",
    company: "Bloom Cosmetics",
  },
];

export const stats = [
  { value: 150, suffix: "+", label: "Projects shipped" },
  { value: 99, suffix: "%", label: "Client satisfaction" },
  { value: 3, suffix: ".2x", label: "Average conversion lift" },
  { value: 40, suffix: "+", label: "Industries served" },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites launch in 4–8 weeks. AI agents and automation builds usually take 2–6 weeks depending on complexity and how many systems we're connecting to.",
  },
  {
    q: "Do you work with businesses outside the industries shown in your portfolio?",
    a: "Yes. The process is the same regardless of industry — the specifics of strategy, design, and automation adapt to your business.",
  },
  {
    q: "Can you just handle one piece, like ads or automation, without a full rebuild?",
    a: "Absolutely. Many clients start with a single service and expand once they see results. Nothing requires a full engagement upfront.",
  },
  {
    q: "What does ongoing support actually include?",
    a: "Bug fixes, content updates, monitoring for your AI agents and automations, and a monthly check-in on performance against your goals.",
  },
  {
    q: "How involved do we need to be during the project?",
    a: "We run point on execution. We'll need input during discovery and at key review points, but you won't be pulled into day-to-day production.",
  },
];

export const contactInfo = {
  email: "amplifi@gmail.com",
  phone: "+254 714931314",
  location: "Nairobi, Kenya",
};

export const trustedLogos = [
  "Northgate Supply Co.",
  "Halloway & Reyes LLP",
  "Bloom Cosmetics",
  "Meridian Health Group",
  "Coastal Realty Partners",
];
