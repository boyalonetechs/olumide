/**
 * Single source of truth for portfolio content.
 * Keeps the page components presentational and easy to edit.
 */

export interface Experience {
  company: string;
  role: string;
  date: string;
  tags: string[];
  hasGallery?: boolean;
}

export interface Work {
  title: string;
  meta: string;
  variant: "trend" | "donut" | "bars" | "kpis";
  tile: string;
}

export interface CarouselCard {
  title: string;
  meta: string;
  image: string;
  kicker: string;
  description: string;
}

export interface Insight {
  tag: string;
  read: string;
  title: string;
  cover: string;
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Independent — Remote",
    role: "Business Intelligence & Data Consultant — BI roadmaps, automated reporting, and dashboards.",
    date: "Present",
    tags: ["Power BI", "SQL"],
  },
  {
    company: "Client Engagements",
    role: "Data Analyst — sales, finance, e-commerce, customer and operations analytics to guide decisions.",
    date: "Present",
    tags: ["Excel", "Python"],
  },
  {
    company: "Mides Analytics",
    role: "Data Analytics Trainer — building practical, career-ready data & digital skills.",
    date: "Present",
    tags: ["Training", "Consulting"],
  },
  {
    company: "Physics Background",
    role: "Pattern-thinking, critical analysis, and a love for complex real-world problems.",
    date: "The starting point",
    tags: ["Analytics", "Mindset"],
    hasGallery: true,
  },
];

export const CAROUSEL: CarouselCard[] = [
  {
    title: "Sales Pipeline Performance",
    meta: "Power BI · SQL",
    kicker: "Sales Analytics",
    description:
      "Analyzed opportunities across the pipeline to uncover revenue trends, conversion rates, bottlenecks, weighted forecasts, and overall performance.",
    image: "/IMG-20260716-WA0012.jpg",
  },
  {
    title: "Bank Loan Analysis",
    meta: "Power BI · SQL",
    kicker: "Financial Analytics",
    description:
      "Lending analytics evaluating applications, funded amounts, repayments, loan quality, and borrower risk.",
    image: "/IMG-20260716-WA0013.jpg",
  },
  {
    title: "Uber Trip Analysis",
    meta: "Power BI",
    kicker: "Operations Analytics",
    description:
      "Ride demand, peak periods, and operational performance — insight for smarter transportation planning.",
    image: "/IMG-20260716-WA0016.jpg",
  },
  {
    title: "Google Sheets Automation",
    meta: "Apps Script",
    kicker: "Automation",
    description:
      "Digital order forms, automated data capture, notifications, and reporting that remove manual work.",
    image: "/IMG-20260716-WA0017.jpg",
  },
  {
    title: "Customer Churn & Lifetime Value",
    meta: "SQL",
    kicker: "Customer Analytics",
    description:
      "Identifies high-value customers at risk of churn to improve retention and long-term profitability.",
    image: "/IMG-20260716-WA0018.jpg",
  },
  {
    title: "Retail Sales & Customer Analytics",
    meta: "Excel · Power BI",
    kicker: "Retail Analytics",
    description:
      "Sales performance, purchasing behavior, regional trends, and product performance at a glance.",
    image: "/dashboard-preview.jpg",
  },
  {
    title: "Payment & Revenue Analysis",
    meta: "SQL",
    kicker: "Financial Analytics",
    description:
      "Payment methods, failed transactions, pending payments, and revenue performance analysis.",
    image: "/IMG-20260716-WA0019.jpg",
  },
];

export const WORKS: Work[] = [
  {
    title: "Sales Pipeline Performance",
    meta: "Power BI · SQL",
    variant: "trend",
    tile: "from-teal-900 to-teal-700",
  },
  {
    title: "Bank Loan Analysis",
    meta: "Lending Analytics",
    variant: "donut",
    tile: "from-stone-800 to-stone-600",
  },
  {
    title: "Retail Sales & Customer Analytics",
    meta: "Excel · Power BI",
    variant: "bars",
    tile: "from-indigo-900 to-indigo-700",
  },
];

export const INSIGHTS: Insight[] = [
  {
    tag: "DATA",
    read: "5 min read",
    title: "Building effective Power BI dashboards for Sales teams",
    cover:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
  },
  {
    tag: "ANALYTICS",
    read: "5 min read",
    title: "Understanding customer behavior through data",
    cover:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    tag: "FINANCE",
    read: "5 min read",
    title: "Strategic guidance on financial analytics",
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
];