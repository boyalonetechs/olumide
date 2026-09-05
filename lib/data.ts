/**
 * Single source of truth for portfolio content.
 * Keeps the page components presentational and easy to edit.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
}

export interface Project {
  index: string;
  title: string;
  category: string;
  tools: string[];
  desc: string;
  outcome: string;
}

export interface Insight {
  category: string;
  title: string;
  readTime: string;
  gradient: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

export const SERVICES: Service[] = [
  {
    id: "01",
    title: "Data Analytics Consulting",
    desc: "End-to-end help turning raw business data into confident, profitable decisions.",
  },
  {
    id: "02",
    title: "Business Intelligence & Dashboards",
    desc: "Interactive Power BI & Tableau dashboards decision-makers actually use.",
  },
  {
    id: "03",
    title: "Sales & Revenue Analytics",
    desc: "Pipeline, conversion, and forecast analysis that sharpens sales strategy.",
  },
  {
    id: "04",
    title: "Financial Analytics",
    desc: "Cash-flow, profitability, and risk visibility across the business.",
  },
  {
    id: "05",
    title: "Operations Analytics",
    desc: "Spot bottlenecks and efficiency gains across day-to-day operations.",
  },
  {
    id: "06",
    title: "Customer & E-commerce Analytics",
    desc: "Behaviour, churn, and lifetime-value insight that improves retention.",
  },
  {
    id: "07",
    title: "Data Cleaning & Transformation",
    desc: "Excel, SQL & Python pipelines that make messy data reliable and usable.",
  },
  {
    id: "08",
    title: "Google Sheets Automation",
    desc: "Apps Script workflows, digital forms, and notifications that cut manual work.",
  },
  {
    id: "09",
    title: "Corporate Training & Digital Literacy",
    desc: "Upskill teams and individuals in practical, career-ready data skills.",
  },
];

export const PROJECTS: Project[] = [
  {
    index: "001",
    title: "Sales Pipeline Performance",
    category: "Sales Analytics",
    tools: ["Power BI", "SQL"],
    desc: "Analyzed opportunities across the pipeline to uncover revenue trends, conversion rates, bottlenecks, weighted forecasts, and overall sales performance.",
    outcome: "Interactive dashboards supporting sharper sales strategy & forecasting.",
  },
  {
    index: "002",
    title: "Bank Loan Analysis",
    category: "Financial Analytics",
    tools: ["Power BI", "SQL"],
    desc: "Built a lending-analytics dashboard evaluating applications, funded amounts, repayments, loan quality, and borrower characteristics.",
    outcome: "Balanced growth with lending-risk management.",
  },
  {
    index: "003",
    title: "Uber Trip Analysis",
    category: "Operations Analytics",
    tools: ["Power BI"],
    desc: "Analyzed ride demand, peak periods, customer activity, and operational performance for smarter transportation planning.",
    outcome: "Insights that improved operations and rider experience.",
  },
  {
    index: "004",
    title: "Customer Churn & Lifetime Value",
    category: "Customer Analytics",
    tools: ["SQL"],
    desc: "Identified high-value customers at risk of churn using lifetime-value and behavioural analysis.",
    outcome: "Targeted retention and long-term profitability actions.",
  },
  {
    index: "005",
    title: "Product Profitability Analysis",
    category: "E-commerce Analytics",
    tools: ["SQL"],
    desc: "Evaluated product revenue, discounts, costs, and margins to find the most profitable products.",
    outcome: "Measured the financial impact of discount strategies.",
  },
  {
    index: "006",
    title: "Payment & Revenue Analysis",
    category: "Financial Analytics",
    tools: ["SQL"],
    desc: "Analyzed payment methods, failed transactions, pending payments, and revenue performance.",
    outcome: "Better cash-flow visibility and payment efficiency.",
  },
  {
    index: "007",
    title: "Automation for Business Operations",
    category: "Automation",
    tools: ["Sheets", "Apps Script"],
    desc: "Designed automated workflows: digital order forms, automated data capture, notifications, and reporting.",
    outcome: "Reduced manual work and improved operational efficiency.",
  },
  {
    index: "008",
    title: "Retail Sales & Customer Analytics",
    category: "Retail Analytics",
    tools: ["Excel", "Power BI"],
    desc: "Built interactive dashboards on sales performance, purchasing behaviour, regional trends, and products.",
    outcome: "Enabled confident, data-driven retail decisions.",
  },
];

export const INSIGHTS: Insight[] = [
  {
    category: "Power BI",
    title: "5 Dashboard Principles Every BI Report Should Follow",
    readTime: "6 min read",
    gradient: "from-lime-400/90 to-emerald-600/80",
  },
  {
    category: "Career",
    title: "From Physics to Data: How Pattern-Thinking Builds Great Analysts",
    readTime: "5 min read",
    gradient: "from-indigo-400/90 to-violet-600/80",
  },
  {
    category: "Excel",
    title: "Automating Reports in Google Sheets with Apps Script",
    readTime: "7 min read",
    gradient: "from-amber-400/90 to-orange-600/80",
  },
];