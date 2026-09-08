import type { IconName } from "@/components/Icons";

export type Service = {
  slug: string;
  icon: IconName;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "monthly-bookkeeping",
    icon: "layers",
    name: "Monthly Bookkeeping",
    shortDescription: "Your books, reconciled and reported every month — never a scramble at tax time.",
    metaTitle: "Monthly Bookkeeping Services for Canadian Small Businesses",
    metaDescription:
      "Ongoing monthly bookkeeping for Canadian small businesses and self-employed professionals. Accurate books, on-time reports, and a dedicated bookkeeping specialist.",
    keywords: ["monthly bookkeeping Canada", "small business bookkeeper", "bookkeeping services Canada"],
    intro:
      "Monthly bookkeeping is the foundation everything else depends on. Our team categorizes every transaction, reconciles every account, and delivers a clean set of books each month — so you always know where your business stands.",
    bullets: [
      "Transaction categorization across all your accounts",
      "Monthly bank and credit card reconciliations",
      "Monthly financial statements (P&L, balance sheet)",
      "A dedicated bookkeeping specialist who knows your business",
      "Support for QuickBooks Online, Xero, and Wave",
    ],
    faqs: [
      {
        q: "How often will I hear from my bookkeeper?",
        a: "You'll receive a monthly report and summary, with email support in between whenever you have a question.",
      },
      {
        q: "Do I need to keep my own records too?",
        a: "No. We ask for access to your accounts and receipts, and our team handles the entry and reconciliation from there.",
      },
    ],
  },
  {
    slug: "catch-up-bookkeeping",
    icon: "clock",
    name: "Catch-Up Bookkeeping",
    shortDescription: "Behind on your books? Our team gets you current — one month or three years back.",
    metaTitle: "Catch-Up & Back Bookkeeping Services | Canadian Bookkeeping Specialists",
    metaDescription:
      "Fallen behind on your bookkeeping? Our specialists reconcile months or years of backlogged books quickly and accurately, so you can file with confidence.",
    keywords: ["catch up bookkeeping", "back bookkeeping services", "behind on bookkeeping Canada"],
    intro:
      "Falling behind happens to busy business owners all the time. Our team reviews your existing records, rebuilds what's missing, and brings your books fully current — without judgment and without the drama.",
    bullets: [
      "Bookkeeping cleanup for any time period, from one quarter to several years",
      "Reconciliation of historical bank and credit card statements",
      "Correction of miscategorized or duplicate entries",
      "Books brought current and ready for your accountant or CRA filing",
      "A clear, upfront estimate before any work begins",
    ],
    faqs: [
      {
        q: "How far behind can you help with?",
        a: "We regularly catch up businesses that are one to three years behind. Send us your records and we'll scope the work.",
      },
      {
        q: "Will this help if I'm being audited?",
        a: "Accurate, reconciled books make any CRA review considerably smoother. We'll organize everything so it's ready to hand over.",
      },
    ],
  },
  {
    slug: "bank-reconciliations",
    icon: "checkSquare",
    name: "Bank Reconciliations",
    shortDescription: "Every transaction matched, every discrepancy explained.",
    metaTitle: "Bank & Credit Card Reconciliation Services | Bookkeeping for Canadian Businesses",
    metaDescription:
      "Professional bank and credit card reconciliation services that catch errors, duplicate charges, and missing transactions before they become bigger problems.",
    keywords: ["bank reconciliation service", "credit card reconciliation", "bookkeeping reconciliation Canada"],
    intro:
      "Reconciliation is where small errors get caught before they become expensive ones. Our team matches every transaction against your statements each month, so your books always reflect reality.",
    bullets: [
      "Monthly reconciliation of all bank and credit card accounts",
      "Identification of duplicate, missing, or miscoded transactions",
      "Clear notes on any discrepancies and how they were resolved",
      "Multi-account and multi-currency reconciliation support",
    ],
    faqs: [
      {
        q: "What happens if you find an error?",
        a: "We flag it, investigate the cause, and correct it in your books, then let you know what happened and why.",
      },
    ],
  },
  {
    slug: "financial-reporting",
    icon: "barChart",
    name: "Financial Reporting",
    shortDescription: "Clear reports that tell you what's actually happening in your business.",
    metaTitle: "Financial Reporting Services for Small Business Owners | Canada",
    metaDescription:
      "Monthly and custom financial reports — profit & loss, balance sheet, and cash flow — built for owners who want clarity, not just compliance.",
    keywords: ["financial reporting small business", "profit and loss statement", "bookkeeping reports Canada"],
    intro:
      "Numbers only help if you can read them. Our team builds financial reports that are accurate and genuinely useful, with a plain-language summary so you understand what changed and why.",
    bullets: [
      "Monthly profit & loss and balance sheet statements",
      "Cash flow summaries",
      "Custom reports by project, location, or department",
      "A plain-language summary alongside every report",
    ],
    faqs: [
      {
        q: "Can reports be customized to my business?",
        a: "Yes. Once your books are set up, we can build reports around the categories and periods that matter most to you.",
      },
    ],
  },
  {
    slug: "accounts-payable",
    icon: "arrowUpRight",
    name: "Accounts Payable",
    shortDescription: "Bills tracked and paid on time, without the manual chasing.",
    metaTitle: "Accounts Payable Management Services | Canadian Bookkeeping",
    metaDescription:
      "Accounts payable support that tracks vendor bills, manages payment timing, and keeps your cash flow predictable.",
    keywords: ["accounts payable services", "bill pay bookkeeping", "vendor payment management"],
    intro:
      "Late fees and missed payments are avoidable. Our team tracks every vendor bill, keeps payments organized, and gives you visibility into what's owed and when.",
    bullets: [
      "Vendor bill tracking and entry",
      "Payment scheduling to protect cash flow",
      "Vendor record organization",
      "Monthly accounts payable aging reports",
    ],
    faqs: [
      { q: "Do you make the payments yourselves?", a: "We can track and prepare payments for your approval, or coordinate directly with your existing payment process." },
    ],
  },
  {
    slug: "accounts-receivable",
    icon: "arrowDownLeft",
    name: "Accounts Receivable",
    shortDescription: "Invoices out on time, and follow-up handled before it becomes awkward.",
    metaTitle: "Accounts Receivable & Invoicing Support | Canadian Bookkeeping Specialists",
    metaDescription:
      "Accounts receivable support that keeps invoices accurate, tracks who owes what, and follows up professionally on overdue accounts.",
    keywords: ["accounts receivable services", "invoicing support small business", "overdue invoice follow up"],
    intro:
      "Getting paid on time shouldn't depend on remembering to send a reminder. Our team manages invoicing and receivables so outstanding balances get followed up professionally and consistently.",
    bullets: [
      "Invoice creation and tracking",
      "Accounts receivable aging reports",
      "Professional follow-up on overdue accounts",
      "Clear visibility into who owes what, and since when",
    ],
    faqs: [
      { q: "Will you contact my clients directly?", a: "Only with your approval and in the tone you choose — we can follow up on your behalf or simply flag accounts for you to reach out to." },
    ],
  },
  {
    slug: "payroll-support",
    icon: "users",
    name: "Payroll Support",
    shortDescription: "Accurate, on-time payroll for your team, done right the first time.",
    metaTitle: "Small Business Payroll Support Services | Canada",
    metaDescription:
      "Payroll support for Canadian small businesses, including remittances, records of employment, and year-end T4 preparation.",
    keywords: ["small business payroll services", "payroll bookkeeping Canada", "T4 preparation"],
    intro:
      "Payroll has to be right every single time. Our team handles the calculations, remittances, and filings so your employees are paid accurately and on schedule.",
    bullets: [
      "Payroll processing and calculations",
      "CRA payroll remittances",
      "Records of Employment (ROEs) as needed",
      "Year-end T4 and T4A preparation",
    ],
    faqs: [
      { q: "How many employees can you support?", a: "We support solo owner-operators up to small teams. Let us know your headcount and pay schedule and we'll confirm fit." },
    ],
  },
  {
    slug: "gst-hst-support",
    icon: "receipt",
    name: "GST/HST Support",
    shortDescription: "Returns filed accurately and on time, with the rules explained in plain English.",
    metaTitle: "GST/HST Filing & Support for Small Businesses | Canadian Bookkeeping",
    metaDescription:
      "GST/HST bookkeeping support for Canadian small businesses — accurate tracking, return preparation, and filing so you never miss a deadline.",
    keywords: ["GST HST filing services", "GST bookkeeping Canada", "small business HST support"],
    intro:
      "GST/HST rules are confusing, and getting them wrong is costly. Our team tracks what you've collected and paid, prepares your returns, and keeps you ahead of every CRA deadline.",
    bullets: [
      "GST/HST tracking within your monthly books",
      "Return preparation and filing",
      "Input tax credit review",
      "Deadline tracking so nothing is filed late",
    ],
    faqs: [
      { q: "I'm not sure if I need to be registered for GST/HST. Can you help?", a: "Yes. Our team can review your revenue and business activity and walk you through whether registration applies to you." },
    ],
  },
  {
    slug: "year-end-preparation",
    icon: "folderCheck",
    name: "Year-End Preparation",
    shortDescription: "Books closed, reconciled, and handed to your accountant ready to file.",
    metaTitle: "Year-End Bookkeeping Preparation Services | Canada",
    metaDescription:
      "Year-end bookkeeping preparation that closes out your books, reconciles every account, and gets your records ready for your accountant or CPA.",
    keywords: ["year end bookkeeping", "year end preparation small business", "tax season bookkeeping Canada"],
    intro:
      "Year-end shouldn't mean weeks of stress before a filing deadline. Our team closes out your books, confirms every account is reconciled, and prepares a clean file for your accountant or CPA.",
    bullets: [
      "Final reconciliation of all accounts for the year",
      "Review of asset, liability, and equity accounts",
      "Organized, accountant-ready financial file",
      "Coordination directly with your CPA if you'd like",
    ],
    faqs: [
      { q: "Do you also file my corporate or personal tax return?", a: "We handle the bookkeeping side and prepare everything your accountant needs; we can also refer you to a CPA partner if you don't have one." },
    ],
  },
  {
    slug: "quickbooks-online-support",
    icon: "refresh",
    name: "QuickBooks Online Support",
    shortDescription: "Setup, cleanup, and ongoing support for QuickBooks Online — no learning curve required.",
    metaTitle: "QuickBooks Online Setup & Support Services | Canadian Bookkeeping",
    metaDescription:
      "QuickBooks Online setup, cleanup, and training for Canadian small businesses. Get your books organized in the software you already use — or should be using.",
    keywords: ["QuickBooks Online setup Canada", "QuickBooks bookkeeping support", "QBO cleanup services"],
    intro:
      "QuickBooks Online is powerful, but only if it's set up correctly. Our team can build your file from scratch, clean up an existing one, or simply manage it for you every month.",
    bullets: [
      "New QuickBooks Online account setup and chart of accounts design",
      "Cleanup of existing QBO files",
      "App and bank feed integration",
      "Ongoing monthly management",
    ],
    faqs: [
      { q: "I already use QuickBooks. Can you just take it over?", a: "Yes — we'll review your existing file, clean up anything that needs it, and take on the ongoing bookkeeping from there." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
