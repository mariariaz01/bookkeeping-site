import type { IconName } from "@/components/Icons";

export type Industry = {
  slug: string;
  icon: IconName;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  points: string[];
};

export const industries: Industry[] = [
  {
    slug: "contractors",
    icon: "paintTool",
    name: "Contractors",
    shortDescription: "Job costing, holdbacks, and cash flow that keeps pace with the work.",
    metaTitle: "Bookkeeping for Contractors | Canadian Bookkeeping Specialists",
    metaDescription: "Bookkeeping built around job costs, holdbacks, and irregular cash flow for Canadian contractors and trades businesses.",
    intro: "Contracting income doesn't arrive on a neat monthly schedule, and neither do the expenses. Our team tracks job costs and cash flow in a way that actually reflects how contracting businesses run.",
    points: ["Job costing by project", "Holdback and progress billing tracking", "Equipment and vehicle expense tracking", "GST/HST on contract work"],
  },
  {
    slug: "consultants",
    icon: "briefcase",
    name: "Consultants",
    shortDescription: "Simple books for a business built on billable time.",
    metaTitle: "Bookkeeping for Consultants | Canadian Bookkeeping Specialists",
    metaDescription: "Straightforward bookkeeping for independent consultants — invoicing, expense tracking, and clean books ready for tax time.",
    intro: "Consulting businesses are often lean, which means bookkeeping needs to be too. Our team keeps things simple: invoices tracked, expenses categorized, and books ready whenever you need them.",
    points: ["Client invoicing and receivables", "Home office and business expense tracking", "Quarterly income summaries for tax planning", "Support for multiple income streams"],
  },
  {
    slug: "real-estate",
    icon: "home",
    name: "Real Estate",
    shortDescription: "Commission income, trust accounts, and property-level detail, handled properly.",
    metaTitle: "Bookkeeping for Real Estate Professionals | Canadian Bookkeeping",
    metaDescription: "Bookkeeping for realtors, brokers, and real estate investors across Canada, built around commission income and property-level reporting.",
    intro: "Whether you're a realtor tracking commissions or an investor tracking properties, real estate bookkeeping needs its own structure. Our team builds books around how your income actually works.",
    points: ["Commission income and brokerage fee tracking", "Property-level income and expense reporting", "Vehicle and marketing expense tracking", "Support for incorporated and self-employed realtors"],
  },
  {
    slug: "medical-professionals",
    icon: "medicalCross",
    name: "Medical Professionals",
    shortDescription: "Books that fit clinic income, billing cycles, and professional corporations.",
    metaTitle: "Bookkeeping for Medical Professionals | Canadian Bookkeeping Specialists",
    metaDescription: "Bookkeeping for physicians and medical professionals in Canada, including professional corporation and clinic-billing support.",
    intro: "Medical professionals often bill through a mix of provincial health plans, clinics, and private pay. Our team keeps all of it organized and reconciled, professional corporation included.",
    points: ["Professional corporation bookkeeping", "Clinic and billing reconciliation", "Locum and associate income tracking", "Year-end coordination with your accountant"],
  },
  {
    slug: "dentists",
    icon: "tooth",
    name: "Dentists",
    shortDescription: "Practice-level bookkeeping for owners and associates alike.",
    metaTitle: "Bookkeeping for Dentists | Canadian Bookkeeping Specialists",
    metaDescription: "Bookkeeping for dental practice owners and associates across Canada, including equipment financing and payroll support.",
    intro: "Running a dental practice means tracking equipment financing, staff payroll, and supplier accounts alongside patient billing. Our team keeps every part of it reconciled.",
    points: ["Practice-level financial reporting", "Equipment financing and lease tracking", "Staff payroll support", "Supplier and lab account management"],
  },
  {
    slug: "lawyers",
    icon: "scale",
    name: "Lawyers",
    shortDescription: "General account bookkeeping that respects the line to your trust account.",
    metaTitle: "Bookkeeping for Law Firms & Lawyers | Canadian Bookkeeping Specialists",
    metaDescription: "General account bookkeeping for Canadian lawyers and law firms, built to work alongside your trust accounting obligations.",
    intro: "Our team handles general account bookkeeping for law firms and sole practitioners, keeping firm operating finances clean and organized so you can focus on your trust obligations separately.",
    points: ["General account bookkeeping and reconciliation", "Retainer and billing support on the operating side", "Firm expense tracking", "Year-end file preparation for your accountant"],
  },
  {
    slug: "marketing-agencies",
    icon: "megaphone",
    name: "Marketing Agencies",
    shortDescription: "Retainers, project billing, and contractor payments, all in one clear picture.",
    metaTitle: "Bookkeeping for Marketing Agencies | Canadian Bookkeeping Specialists",
    metaDescription: "Bookkeeping for marketing and creative agencies in Canada — retainer tracking, project profitability, and subcontractor payments.",
    intro: "Agencies juggle retainers, one-off projects, and a bench of subcontractors. Our team builds books that show you what's actually profitable, not just what's billed.",
    points: ["Retainer and project revenue tracking", "Subcontractor and freelancer payment tracking", "Project-level profitability reporting", "Software and tool expense tracking"],
  },
  {
    slug: "restaurants",
    icon: "utensils",
    name: "Restaurants",
    shortDescription: "Daily sales, tips, and thin margins, tracked with the detail they need.",
    metaTitle: "Bookkeeping for Restaurants | Canadian Bookkeeping Specialists",
    metaDescription: "Restaurant bookkeeping for Canadian owners, including daily sales reconciliation, tip tracking, and payroll support.",
    intro: "Restaurant margins are thin, so the details matter. Our team reconciles daily sales, tracks tips accurately, and keeps a close eye on food and labour costs.",
    points: ["Daily sales and POS reconciliation", "Tip tracking and reporting", "Payroll support for hourly staff", "Food and labour cost tracking"],
  },
  {
    slug: "retail",
    icon: "bag",
    name: "Retail",
    shortDescription: "Inventory-aware bookkeeping for stores with real stock to track.",
    metaTitle: "Bookkeeping for Retail Businesses | Canadian Bookkeeping Specialists",
    metaDescription: "Bookkeeping for Canadian retail businesses, including inventory-aware reporting, POS reconciliation, and GST/HST support.",
    intro: "Retail bookkeeping has to account for inventory, not just cash in and out. Our team reconciles your POS system and keeps your reporting aligned with what's actually on the shelf.",
    points: ["POS and daily sales reconciliation", "Inventory-aware cost of goods tracking", "Multi-location reporting", "GST/HST tracking and filing"],
  },
  {
    slug: "e-commerce",
    icon: "cart",
    name: "E-commerce",
    shortDescription: "Multi-platform sales, fees, and shipping costs, reconciled properly.",
    metaTitle: "Bookkeeping for E-commerce Businesses | Canadian Bookkeeping Specialists",
    metaDescription: "E-commerce bookkeeping for Canadian online sellers, including platform fee reconciliation, sales tax by province, and inventory tracking.",
    intro: "E-commerce sales come with platform fees, shipping costs, and sales tax that varies by province. Our team reconciles it all and keeps your true margins visible.",
    points: ["Reconciliation across Shopify, Amazon, Etsy and similar platforms", "Platform fee and payment processor tracking", "Multi-province sales tax tracking", "Inventory and cost of goods tracking"],
  },
  {
    slug: "trades",
    icon: "hammerWrench",
    name: "Trades",
    shortDescription: "Bookkeeping built for tools, trucks, and seasonal work.",
    metaTitle: "Bookkeeping for Trades Businesses | Canadian Bookkeeping Specialists",
    metaDescription: "Bookkeeping for Canadian trades businesses — electricians, plumbers, HVAC and more — including vehicle costs and seasonal cash flow.",
    intro: "Trades businesses deal with vehicle costs, tool purchases, and seasonal swings in revenue. Our team builds books that reflect the way trades actually work.",
    points: ["Vehicle and equipment expense tracking", "Job and material costing", "Seasonal cash flow reporting", "GST/HST tracking and filing"],
  },
  {
    slug: "startups",
    icon: "rocket",
    name: "Startups",
    shortDescription: "Investor-ready books from day one, without the enterprise overhead.",
    metaTitle: "Bookkeeping for Startups | Canadian Bookkeeping Specialists",
    metaDescription: "Startup bookkeeping for Canadian founders — clean, investor-ready books, burn rate tracking, and support that scales as you grow.",
    intro: "Startups need books that hold up to investor scrutiny without the cost of a full finance team. Our team builds clean, scalable bookkeeping from the earliest stage.",
    points: ["Investor-ready monthly reporting", "Burn rate and runway tracking", "Expense categorization aligned to your chart of accounts", "Scales with you as you add staff and complexity"],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
