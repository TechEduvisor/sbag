import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  TrendingUp,
  BookOpen,
  CheckCircle,
  BarChart3,
  FileText,
  Briefcase,
  DollarSign,
  PieChart,
  Users,
  X,
  ExternalLink,
  Tag,
  Eye,
  ThumbsUp,
  PlusCircle,
} from "lucide-react";

const EnhancedBlog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeParticles, setActiveParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogPosts = [
    // Bookkeeping Articles (15)
    {
      id: 1,
      title: "Top 10 Bookkeeping Best Practices for Small Businesses",
      excerpt: "Learn essential bookkeeping practices that can save your small business time and money while ensuring accurate financial records.",
      fullContent: "Bookkeeping is the backbone of any successful small business. Maintaining accurate financial records helps you make informed decisions, stay compliant with tax laws, and prepare for growth. Here are the top 10 best practices: 1) Separate personal and business finances, 2) Maintain organized records, 3) Reconcile accounts monthly, 4) Track all expenses with receipts, 5) Use accounting software, 6) Schedule regular bookkeeping sessions, 7) Understand basic financial statements, 8) Back up your data regularly, 9) Monitor cash flow closely, and 10) Consider professional help when needed. By following these practices, you'll have a clear picture of your business's financial health and be better prepared for tax season.",
      icon: BarChart3,
      category: "Bookkeeping",
      date: "2024-12-15",
      readTime: "5 min read",
      views: "2.3K",
      likes: "340",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      author: "Sarah Johnson"
    },
    {
      id: 2,
      title: "5 Small Business Bookkeeping Basics You Can't Ignore",
      excerpt: "Learning bookkeeping tips and basics is vital whether you've been handling your books for a while or just starting out.",
      fullContent: "Every small business owner needs to understand these fundamental bookkeeping concepts. First, maintain a separate business bank account to keep personal and business finances distinct. Second, track every expense with proper documentation - receipts, invoices, and statements. Third, reconcile your accounts monthly to catch errors early. Fourth, understand your cash flow by monitoring when money comes in and goes out. Fifth, use reliable accounting software to automate and streamline your processes. These basics form the foundation of good financial management and will save you countless hours during tax season while helping you make better business decisions.",
      icon: BookOpen,
      category: "Bookkeeping",
      date: "2024-12-10",
      readTime: "4 min read",
      views: "1.8K",
      likes: "280",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      author: "Michael Chen"
    },
    {
      id: 3,
      title: "How to Set Up a Chart of Accounts for Your Small Business",
      excerpt: "A step-by-step guide to creating an organized chart of accounts that makes bookkeeping simple and efficient.",
      fullContent: "A chart of accounts is your financial roadmap. Start by categorizing accounts into five main types: Assets, Liabilities, Equity, Revenue, and Expenses. For assets, include checking accounts, accounts receivable, and inventory. Liabilities should cover accounts payable, loans, and credit cards. Set up subcategories for detailed tracking - for example, break expenses into office supplies, utilities, marketing, and payroll. Keep your chart simple initially and add accounts as needed. Use a numbering system (1000s for assets, 2000s for liabilities, etc.) to maintain organization. Review and update quarterly to ensure it serves your evolving business needs.",
      icon: FileText,
      category: "Bookkeeping",
      date: "2024-12-05",
      readTime: "6 min read",
      views: "2.1K",
      likes: "310",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      author: "Jennifer Martinez"
    },
    {
      id: 4,
      title: "Month-End Close Checklist for Small Business Bookkeepers",
      excerpt: "Essential tasks to complete every month-end to keep your books accurate and up-to-date.",
      fullContent: "A systematic month-end close process ensures accuracy and timeliness. Start by reconciling all bank and credit card accounts. Review and categorize all transactions for the month. Process any outstanding invoices and bills. Reconcile accounts receivable and payable. Review inventory levels if applicable. Verify payroll transactions and tax withholdings. Generate financial statements including P&L and balance sheet. Review for any unusual transactions or discrepancies. Make necessary adjusting entries. Back up all financial data. This monthly routine helps catch errors early, provides timely financial insights, and makes year-end closing much smoother.",
      icon: CheckCircle,
      category: "Bookkeeping",
      date: "2024-11-28",
      readTime: "7 min read",
      views: "1.9K",
      likes: "265",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
      author: "David Thompson"
    },
    {
      id: 5,
      title: "Digital vs. Manual Bookkeeping: Which is Right for You?",
      excerpt: "Compare traditional and modern bookkeeping methods to find the best fit for your business needs.",
      fullContent: "The choice between digital and manual bookkeeping depends on your business size, complexity, and resources. Manual bookkeeping using ledgers and spreadsheets costs less upfront but is time-consuming and prone to errors. Digital bookkeeping with software like QuickBooks or Xero offers automation, real-time data, and easier collaboration. Consider digital if you process many transactions, need remote access, want automated reporting, or plan to scale. Manual might work for very small businesses with few transactions. However, most businesses benefit from digital solutions' efficiency, accuracy, and insights. Cloud-based software also provides automatic backups and security features that protect your financial data.",
      icon: BarChart3,
      category: "Bookkeeping",
      date: "2024-11-20",
      readTime: "5 min read",
      views: "2.5K",
      likes: "390",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/20 to-blue-500/20",
      author: "Amanda Wilson"
    },
    {
      id: 6,
      title: "Common Bookkeeping Mistakes and How to Avoid Them",
      excerpt: "Identify and prevent the most frequent bookkeeping errors that cost small businesses time and money.",
      fullContent: "Even experienced bookkeepers make mistakes. The most common include: mixing personal and business expenses, failing to reconcile accounts regularly, not backing up data, misclassifying expenses, forgetting to track cash transactions, losing receipts, and waiting until tax time to update books. Avoid these by establishing a dedicated business account, setting weekly bookkeeping time, using cloud backups, learning proper expense categories, implementing a receipt tracking system, and maintaining consistent monthly updates. Regular review and professional consultation can catch issues early. Remember, prevention is easier and cheaper than correction.",
      icon: FileText,
      category: "Bookkeeping",
      date: "2024-11-15",
      readTime: "6 min read",
      views: "3.2K",
      likes: "445",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/20 to-pink-500/20",
      author: "Robert Anderson"
    },
    {
      id: 7,
      title: "Bookkeeping for E-commerce: Special Considerations",
      excerpt: "Navigate the unique bookkeeping challenges of online retail including inventory, sales tax, and payment processing.",
      fullContent: "E-commerce bookkeeping requires tracking multiple sales channels, payment processors, and varying state sales tax rates. Use integrated accounting software that syncs with platforms like Shopify or Amazon. Track inventory in real-time to prevent stockouts and overstocking. Reconcile payment processor accounts (PayPal, Stripe) separately from bank accounts. Account for transaction fees and chargebacks. Monitor sales tax obligations across different states. Track shipping costs and returns separately. Set up automation to reduce manual data entry. Generate reports by channel to identify your most profitable platforms. Consider specialized e-commerce accounting software for complex operations.",
      icon: BarChart3,
      category: "Bookkeeping",
      date: "2024-11-10",
      readTime: "8 min read",
      views: "2.8K",
      likes: "380",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/20 to-cyan-500/20",
      author: "Emily Rodriguez"
    },
    {
      id: 8,
      title: "Accounts Receivable Management: Getting Paid Faster",
      excerpt: "Strategies to improve cash flow by reducing outstanding invoices and collecting payments efficiently.",
      fullContent: "Effective AR management is crucial for maintaining healthy cash flow. Send invoices immediately upon completion of work or delivery. Offer multiple payment options including online payments and credit cards. Set clear payment terms (Net 30, Net 15) and communicate them upfront. Send payment reminders before and after due dates. Implement late fees to encourage timely payment. Consider offering early payment discounts. Use aging reports to track overdue accounts. Follow up promptly on late payments with professional communication. For chronic late payers, consider requiring deposits or payment upfront. Automate reminder emails to save time and maintain consistency.",
      icon: DollarSign,
      category: "Bookkeeping",
      date: "2024-11-05",
      readTime: "6 min read",
      views: "2.4K",
      likes: "325",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      author: "James Patterson"
    },
    {
      id: 9,
      title: "Accounts Payable Best Practices for Small Businesses",
      excerpt: "Manage vendor relationships and cash flow with efficient AP processes and smart payment timing.",
      fullContent: "Good AP management balances maintaining vendor relationships with optimizing cash flow. Implement a three-way match system: purchase order, receiving report, and invoice. Schedule payments strategically to maximize cash on hand while avoiding late fees. Take advantage of early payment discounts when they make financial sense. Use bill pay software to automate recurring payments and reduce check writing. Maintain a payment schedule to track due dates. Negotiate favorable payment terms with vendors. Keep vendor communication open about any payment issues. Review vendor statements monthly to catch discrepancies. Consider using business credit cards for rewards on regular expenses.",
      icon: FileText,
      category: "Bookkeeping",
      date: "2024-10-30",
      readTime: "7 min read",
      views: "1.7K",
      likes: "245",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-600/20 to-indigo-600/20",
      author: "Maria Gonzalez"
    },
    {
      id: 10,
      title: "Cash vs. Accrual Accounting: Choosing the Right Method",
      excerpt: "Understand the differences between cash and accrual accounting to select the best approach for your business.",
      fullContent: "Cash accounting records transactions when money changes hands, while accrual accounting records them when earned or incurred. Cash basis is simpler and better for small businesses with straightforward operations and no inventory. It provides a clear picture of actual cash flow. Accrual basis is required for businesses with inventory, those exceeding $25 million in revenue, and C corporations. It provides a more accurate picture of profitability but requires more complex bookkeeping. Consider your business size, inventory needs, reporting requirements, and ability to manage complexity. Many businesses start with cash basis and switch to accrual as they grow. Consult a CPA before making changes.",
      icon: BarChart3,
      category: "Bookkeeping",
      date: "2024-10-25",
      readTime: "5 min read",
      views: "2.9K",
      likes: "410",
      gradient: "from-green-600 to-teal-600",
      bgGradient: "from-green-600/20 to-teal-600/20",
      author: "Christopher Lee"
    },
    {
      id: 11,
      title: "Inventory Management and Bookkeeping Integration",
      excerpt: "Keep accurate inventory records synchronized with your accounting system for better financial control.",
      fullContent: "Proper inventory tracking is essential for businesses selling products. Choose an inventory valuation method (FIFO, LIFO, or weighted average) and stick with it. Conduct regular physical counts to verify system accuracy. Use perpetual inventory systems that update in real-time with each sale. Integrate inventory software with your accounting system to automate cost of goods sold calculations. Track inventory shrinkage and investigate causes. Set reorder points to prevent stockouts. Monitor inventory turnover ratio to identify slow-moving items. Account for obsolete or damaged inventory. Use barcoding or RFID for accurate tracking. Generate reports showing inventory value, turnover, and profitability by item.",
      icon: PieChart,
      category: "Bookkeeping",
      date: "2024-10-20",
      readTime: "7 min read",
      views: "2.2K",
      likes: "295",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      author: "Lisa Thompson"
    },
    {
      id: 12,
      title: "Receipt Management: Go Paperless and Stay Organized",
      excerpt: "Modern solutions for capturing, organizing, and storing receipts to simplify bookkeeping and tax preparation.",
      fullContent: "Digital receipt management saves time and space while improving organization. Use mobile apps like Expensify or Receipt Bank to photograph receipts immediately. Set up forwarding rules to automatically capture email receipts. Organize receipts by category, date, or project. Store digital copies in cloud-based systems for easy access and backup. Implement a naming convention for easy searching. Shred paper receipts after digitizing (check retention requirements). Use OCR technology to extract data automatically. Link receipts directly to transactions in your accounting software. Create expense reports easily from organized receipts. Remember IRS requirements for digital records and ensure your system complies.",
      icon: FileText,
      category: "Bookkeeping",
      date: "2024-10-15",
      readTime: "5 min read",
      views: "1.9K",
      likes: "270",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-600/20 to-red-600/20",
      author: "Kevin Walsh"
    },
    {
      id: 13,
      title: "Bookkeeping Software Comparison: Finding Your Perfect Match",
      excerpt: "Compare popular bookkeeping software options to find the best fit for your business size and needs.",
      fullContent: "Choosing bookkeeping software depends on your business size, industry, and specific needs. QuickBooks Online leads in popularity with robust features and integrations. Xero offers excellent multi-currency support and user interface. FreshBooks excels for service-based businesses needing time tracking and invoicing. Wave provides free basic accounting for micro businesses. Zoho Books integrates well with other Zoho products. Consider factors like ease of use, mobile access, integration capabilities, reporting features, customer support, and pricing. Most offer free trials - test before committing. Look for cloud-based solutions for accessibility and automatic backups. Evaluate scalability to ensure the software grows with your business.",
      icon: BarChart3,
      category: "Bookkeeping",
      date: "2024-10-10",
      readTime: "8 min read",
      views: "3.5K",
      likes: "485",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/20 to-purple-500/20",
      author: "Rachel Foster"
    },
    {
      id: 14,
      title: "Year-End Bookkeeping Checklist: Close Your Books with Confidence",
      excerpt: "Comprehensive guide to year-end closing procedures ensuring accurate annual financial statements.",
      fullContent: "Year-end closing requires thorough review and reconciliation. Reconcile all bank, credit card, and loan accounts. Review and reclassify any miscategorized transactions. Process all invoices and bills dated in the current year. Review accounts receivable and write off uncollectible balances. Take physical inventory and adjust records. Verify fixed asset records and calculate depreciation. Reconcile payroll records and prepare W-2s and 1099s. Review and post any necessary adjusting entries. Generate trial balance and financial statements. Back up all data. Prepare documentation for tax preparation. Review financial performance against budget and prior years. Create reports for stakeholders. Document any accounting method or policy changes.",
      icon: CheckCircle,
      category: "Bookkeeping",
      date: "2024-10-05",
      readTime: "9 min read",
      views: "2.7K",
      likes: "365",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      author: "Daniel Kim"
    },
    {
      id: 15,
      title: "Outsourced Bookkeeping: When and Why to Consider It",
      excerpt: "Evaluate the benefits and considerations of outsourcing your bookkeeping to professional services.",
      fullContent: "Outsourcing bookkeeping can free up time and provide expert financial management. Consider it when bookkeeping takes too much of your time, you lack expertise, need to scale quickly, or want better financial insights. Benefits include cost savings compared to full-time staff, access to expertise, use of advanced software, scalability, and focus on core business. Evaluate providers based on experience in your industry, technology used, communication practices, and security measures. Expect to pay $300-2000 monthly depending on complexity. Maintain involvement through regular reports and meetings. Ensure clear communication protocols and data security agreements. Choose a provider who understands your business goals and can offer strategic advice beyond basic bookkeeping.",
      icon: Briefcase,
      category: "Bookkeeping",
      date: "2024-09-30",
      readTime: "7 min read",
      views: "3.1K",
      likes: "425",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-500/20 to-blue-500/20",
      author: "Nicole Sanders"
    },

    // Taxation Articles (18)
    {
      id: 16,
      title: "2024 Tax Planning Strategies for Small Businesses",
      excerpt: "Essential tax planning tips and strategies to help you minimize tax liability and maximize deductions.",
      fullContent: "Effective tax planning can significantly reduce your business tax burden. Start by maximizing retirement contributions to reduce taxable income. Take advantage of Section 179 deductions for equipment purchases. Consider accelerating expenses into the current year or deferring income. Review your business structure - S-Corp or LLC might save on self-employment taxes. Track all business expenses meticulously including home office, vehicle, travel, and meals. Hire family members to shift income to lower tax brackets. Invest in qualified business property. Consider income splitting strategies. Use tax-loss harvesting for investments. Plan estimated tax payments to avoid penalties. Review quarterly to adjust strategies. Work with a CPA to identify industry-specific deductions and credits.",
      icon: DollarSign,
      category: "Taxation",
      date: "2024-12-20",
      readTime: "10 min read",
      views: "4.2K",
      likes: "680",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
      author: "Thomas Anderson"
    },
    {
      id: 17,
      title: "Small Business Tax Deductions You Might Be Missing",
      excerpt: "Uncover commonly overlooked tax deductions that could save your business thousands of dollars.",
      fullContent: "Many businesses miss valuable deductions. Home office deduction includes not just the space but utilities, insurance, and repairs. Vehicle expenses can be deducted using actual expenses or standard mileage rate. Business meals are 50% deductible for client meetings. Continuing education and professional development are fully deductible. Bank fees, legal fees, and professional subscriptions qualify. Business insurance premiums including liability and property coverage. Advertising and marketing expenses including social media ads. Software subscriptions and technology expenses. Phone and internet costs for business use. Startup costs up to $5,000 in first year. Employee benefits including health insurance. Bad debts from uncollectible invoices. Depreciation on equipment and furniture.",
      icon: FileText,
      category: "Taxation",
      date: "2024-12-12",
      readTime: "8 min read",
      views: "3.8K",
      likes: "525",
      gradient: "from-green-600 to-teal-600",
      bgGradient: "from-green-600/20 to-teal-600/20",
      author: "Patricia Moore"
    },
    {
      id: 18,
      title: "Quarterly Estimated Tax Payments: A Complete Guide",
      excerpt: "Learn how to calculate and pay quarterly estimated taxes to avoid penalties and manage cash flow.",
      fullContent: "Self-employed individuals and businesses must pay estimated taxes quarterly. Calculate based on expected annual income using last year's tax liability as a guide. Pay at least 90% of current year's tax or 100% of prior year's tax to avoid penalties. Quarterly deadlines are April 15, June 15, September 15, and January 15. Use Form 1040-ES for individuals or appropriate form for your business entity. Account for self-employment tax, income tax, and any state taxes. Adjust payments if income changes significantly. Use IRS Direct Pay or EFTPS for electronic payments. Keep records of all payments. Consider making additional payments if you have a profitable quarter. Work with a tax professional to optimize payment amounts and timing.",
      icon: Calendar,
      category: "Taxation",
      date: "2024-12-08",
      readTime: "7 min read",
      views: "3.2K",
      likes: "445",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-600/20 to-indigo-600/20",
      author: "Steven Roberts"
    },
    {
      id: 19,
      title: "Self-Employment Tax: What You Need to Know",
      excerpt: "Understand self-employment tax calculations, deductions, and strategies to minimize your tax burden.",
      fullContent: "Self-employment tax covers Social Security and Medicare contributions. The rate is 15.3% (12.4% Social Security + 2.9% Medicare) on net self-employment income. Calculate on Schedule SE using net profit from Schedule C. You can deduct half of self-employment tax on Form 1040. High earners pay additional 0.9% Medicare tax on income over $200,000. Consider S-Corp election to potentially reduce self-employment tax by taking reasonable salary plus distributions. Maximize business deductions to reduce net profit subject to SE tax. Contribute to SEP-IRA or Solo 401(k) to reduce taxable income. Keep detailed records of all business income and expenses. Understand that SE tax is in addition to income tax. Plan quarterly estimated payments including SE tax component.",
      icon: Users,
      category: "Taxation",
      date: "2024-12-03",
      readTime: "6 min read",
      views: "2.9K",
      likes: "395",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      author: "Michelle Turner"
    },
    {
      id: 20,
      title: "Sales Tax Compliance for Multi-State Businesses",
      excerpt: "Navigate the complex world of sales tax nexus, collection, and remittance across multiple states.",
      fullContent: "Multi-state sales tax compliance is increasingly complex post-Wayfair decision. Economic nexus thresholds vary by state (typically $100,000 in sales or 200 transactions). Register for sales tax permits in states where you have nexus. Determine correct tax rates considering state, county, and local taxes. Understand what's taxable - products vs. services vs. digital goods vary by state. Use automated sales tax software like Avalara or TaxJar for accurate calculations. Collect tax at point of sale. File returns monthly, quarterly, or annually based on volume. Remit collected taxes by deadlines to avoid penalties. Maintain detailed records for audits. Consider marketplace facilitator laws where platforms collect tax. Review nexus regularly as business grows. Stay updated on changing regulations. Work with multi-state tax specialists for complex situations.",
      icon: PieChart,
      category: "Taxation",
      date: "2024-11-28",
      readTime: "9 min read",
      views: "2.5K",
      likes: "340",
      gradient: "from-red-600 to-orange-600",
      bgGradient: "from-red-600/20 to-orange-600/20",
      author: "Brian Collins"
    },
    {
      id: 21,
      title: "Tax-Advantaged Retirement Plans for Small Business Owners",
      excerpt: "Explore retirement plan options that reduce taxes while building wealth for your future.",
      fullContent: "Small business owners have several retirement plan options. SEP-IRA allows contributions up to 25% of compensation or $66,000 (2024). Solo 401(k) permits $23,000 employee contribution plus 25% employer contribution. SIMPLE IRA works for businesses with fewer than 100 employees. Traditional IRA and Roth IRA have lower limits but more flexibility. Compare setup costs, administrative burden, and contribution limits. SEP-IRA is easiest to establish and maintain. Solo 401(k) allows highest contributions and Roth option. Consider employee coverage requirements. Contributions reduce current taxable income (except Roth). Make contributions by tax filing deadline including extensions. Maximize contributions in profitable years. Start early to benefit from compound growth. Consult financial advisor to align retirement and tax strategies.",
      icon: TrendingUp,
      category: "Taxation",
      date: "2024-11-22",
      readTime: "8 min read",
      views: "3.4K",
      likes: "475",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      author: "Laura Mitchell"
    },
    {
      id: 22,
      title: "Choosing the Right Business Structure for Tax Purposes",
      excerpt: "Compare tax implications of different business entities to optimize your tax strategy.",
      fullContent: "Business structure significantly impacts taxes. Sole proprietorships are simple but owner pays self-employment tax on all income. LLCs offer liability protection with pass-through taxation by default. S-Corps avoid double taxation and can reduce self-employment tax through salary/distribution split. C-Corps face double taxation but may benefit from lower corporate rates and fringe benefits. Partnerships pass income to partners who report on personal returns. Consider factors: liability protection, administrative complexity, growth plans, profit distribution, exit strategy, and state taxes. S-Corp can save SE tax but requires payroll administration. C-Corp makes sense for high-growth companies seeking outside investment. Change structure as business evolves. Consult tax attorney and CPA to choose optimal structure for your situation.",
      icon: Briefcase,
      category: "Taxation",
      date: "2024-11-18",
      readTime: "9 min read",
      views: "4.1K",
      likes: "590",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      author: "George Hamilton"
    },
    {
      id: 23,
      title: "Home Office Deduction: Maximize Your Tax Savings",
      excerpt: "Calculate and claim the home office deduction correctly to reduce your tax bill without triggering audits.",
      fullContent: "Home office deduction offers significant tax savings. Qualify by using space regularly and exclusively for business. Calculate using simplified method ($5 per square foot up to 300 sq ft) or regular method (actual expenses). Regular method includes mortgage interest, insurance, utilities, repairs, and depreciation proportionate to office space. Simplified method is easier but may result in lower deduction. Measure your office space accurately. Document business use with photos and records. Claim on Schedule C or Form 8829. Storage space and daycare use have special rules. Direct expenses (office paint, repairs) are fully deductible. Indirect expenses (utilities, insurance) are proportionate. Depreciation recapture applies when selling home. Keep detailed records for audit protection. Maximize deduction by claiming all eligible expenses.",
      icon: DollarSign,
      category: "Taxation",
      date: "2024-11-12",
      readTime: "7 min read",
      views: "3.7K",
      likes: "510",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      author: "Rebecca Adams"
    },
    {
      id: 24,
      title: "Business Vehicle Tax Deductions: Actual vs. Standard Mileage",
      excerpt: "Compare vehicle deduction methods to maximize tax benefits from business-related driving.",
      fullContent: "Choose between actual expense method and standard mileage rate. Standard mileage rate for 2024 is 67 cents per mile for business use. Track miles with mileage log including date, destination, purpose, and miles. Actual expense method includes gas, oil, repairs, insurance, depreciation, lease payments, and registration. Calculate business-use percentage for mixed-use vehicles. Standard mileage is simpler but actual expenses may yield higher deduction for expensive vehicles. Must choose standard mileage in first year to have option later. Actual expenses require more recordkeeping. Depreciation under actual method follows specific IRS rules. Section 179 and bonus depreciation can accelerate deductions. Leased vehicles have special rules. Keep all receipts and documentation. Consider separate vehicle for 100% business use to maximize deductions.",
      icon: FileText,
      category: "Taxation",
      date: "2024-11-08",
      readTime: "8 min read",
      views: "2.8K",
      likes: "385",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/20 to-purple-500/20",
      author: "William Cooper"
    },
    {
      id: 25,
      title: "Tax Credits vs. Tax Deductions: Understanding the Difference",
      excerpt: "Learn how tax credits and deductions work differently to reduce your tax liability.",
      fullContent: "Tax credits reduce tax liability dollar-for-dollar while deductions reduce taxable income. Credits are more valuable. Common business credits include R&D credit, Work Opportunity Tax Credit, energy-efficient commercial building credit, and small business health care credit. Credits can be refundable or non-refundable. Deductions lower taxable income, saving taxes based on your tax bracket. Business deductions include ordinary and necessary expenses. Maximize both credits and deductions by working with a tax professional who understands your industry.",
      icon: BarChart3,
      category: "Taxation",
      date: "2024-11-02",
      readTime: "6 min read",
      views: "3.3K",
      likes: "460",
      gradient: "from-teal-500 to-green-500",
      bgGradient: "from-teal-500/20 to-green-500/20",
      author: "Jessica Park"
    },
    {
      id: 26,
      title: "IRS Audit Red Flags: How to Avoid Triggering an Audit",
      excerpt: "Identify common audit triggers and implement practices to reduce your audit risk.",
      fullContent: "Certain items increase audit likelihood. Excessive business losses year after year raise suspicions. Large charitable deductions relative to income get scrutiny. Home office deduction, especially if disproportionate to home size. High business vehicle expenses. Consistent round numbers suggest estimation rather than actual records. Cash-intensive businesses face more audits. Large meals and entertainment deductions. Failure to report all income especially 1099s. Mixing personal and business expenses. High ratio of independent contractors. To minimize risk: keep meticulous records, report all income, claim only legitimate deductions, be consistent across tax years, use professionals for complex returns, respond promptly to IRS notices, maintain documentation for 7 years, avoid cash transactions when possible, separate business and personal finances, and file on time.",
      icon: FileText,
      category: "Taxation",
      date: "2024-10-28",
      readTime: "8 min read",
      views: "4.5K",
      likes: "625",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/20 to-pink-500/20",
      author: "Marcus Johnson"
    },
    {
      id: 27,
      title: "1099 Forms: A Complete Guide for Business Owners",
      excerpt: "Understand when and how to issue 1099 forms to contractors and vendors to stay compliant.",
      fullContent: "Businesses must issue 1099-NEC to contractors paid $600+ annually. Obtain W-9 from contractors before payment. Verify TIN to avoid backup withholding. 1099-NEC deadline is January 31 for filing and recipient copies. 1099-MISC covers rents, royalties, and other income. 1099-INT and 1099-DIV report investment income. Use IRS FIRE system or approved software for electronic filing. Keep copies for your records. Provide copy to recipient and file with IRS. Penalties for failure to file: $50-$290 per form depending on lateness. Intentional disregard penalty is higher. Don't issue 1099s to corporations except for legal and medical services. Track contractor payments throughout year. Verify addresses before year-end. Consider accountant or payroll service for 1099 management.",
      icon: DollarSign,
      category: "Taxation",
      date: "2024-10-22",
      readTime: "7 min read",
      views: "3.9K",
      likes: "540",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-600/20 to-red-600/20",
      author: "Samantha White"
    },
    {
      id: 28,
      title: "Depreciation Strategies: Section 179 vs. Bonus Depreciation",
      excerpt: "Compare accelerated depreciation methods to maximize current-year tax deductions on asset purchases.",
      fullContent: "Section 179 allows immediate expensing of qualifying property up to $1,220,000 in 2024. Phases out dollar-for-dollar after $3,050,000 in purchases. Bonus depreciation currently at 80% for qualified property. Section 179 limited to taxable income while bonus depreciation creates losses. Both apply to new and used equipment. Qualifying property includes machinery, equipment, vehicles, computers, and software. Must be used more than 50% for business. Section 179 requires active business income. Bonus depreciation applies automatically unless elected out. Consider cash flow and future income projections when choosing. Mix methods to optimize tax benefit. Real property improvements may qualify. Document business-use percentage. Recapture applies if business use drops below 50%. Work with CPA to model scenarios and choose optimal strategy.",
      icon: TrendingUp,
      category: "Taxation",
      date: "2024-10-18",
      readTime: "9 min read",
      views: "2.6K",
      likes: "355",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-500/20 to-indigo-500/20",
      author: "Andrew Martinez"
    },
    {
      id: 29,
      title: "State and Local Tax (SALT) Strategies for Business Owners",
      excerpt: "Navigate state and local tax obligations and identify opportunities to minimize multi-jurisdictional tax burden.",
      fullContent: "SALT includes income, sales, property, and franchise taxes. Nexus determines filing obligations - physical presence or economic activity. Consider state tax rates when choosing business location. Some states have no income tax while others exceed 10%. Apportionment formulas determine what portion of income is taxable in each state. Domicile matters for personal income tax on pass-through entities. Research available credits and incentives - many states offer job creation, R&D, and investment credits. State rules for deductions often differ from federal. Monitor sales tax nexus vigilantly in age of e-commerce. Consider entity structure's impact on state taxes - some states tax S-Corps differently. Track state filing deadlines which vary from federal. Work with multi-state tax professional for complex situations. Document business activity by state for accurate apportionment.",
      icon: PieChart,
      category: "Taxation",
      date: "2024-10-12",
      readTime: "10 min read",
      views: "2.4K",
      likes: "330",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-600/20 to-cyan-600/20",
      author: "Victoria Clark"
    },
    {
      id: 30,
      title: "Tax Strategies for Real Estate Investors and Property Owners",
      excerpt: "Specialized tax planning for rental properties and real estate investments to maximize returns.",
      fullContent: "Real estate offers unique tax advantages. Depreciation allows deductions while property appreciates. Residential property depreciates over 27.5 years, commercial over 39 years. Cost segregation accelerates depreciation by identifying components with shorter lives. Rental losses offset other income up to $25,000 for active participants. Real estate professionals can deduct unlimited losses against ordinary income. 1031 exchange defers capital gains when selling and buying like-kind property. Keep detailed records of improvements vs. repairs. Repairs are immediately deductible, improvements must be depreciated. Track separately for each property. Home office deduction available for property management activities. Travel to properties is deductible. Mortgage interest and property taxes are deductible. Consider LLC for liability protection without tax classification change. Understand passive activity loss rules.",
      icon: Briefcase,
      category: "Taxation",
      date: "2024-10-08",
      readTime: "11 min read",
      views: "3.1K",
      likes: "430",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-600/20 to-emerald-600/20",
      author: "Richard Bennett"
    },
    {
      id: 31,
      title: "Cryptocurrency Tax Reporting: What Business Owners Must Know",
      excerpt: "Navigate the complex tax treatment of cryptocurrency transactions and digital asset holdings.",
      fullContent: "IRS treats cryptocurrency as property, not currency. Every transaction is potentially taxable - trading, selling, or using crypto to buy goods. Report gains and losses on Form 8949 and Schedule D. Short-term gains (held under 1 year) taxed as ordinary income. Long-term gains receive preferential rates. Mining income is ordinary income. Receiving crypto for goods/services is income at fair market value. Track cost basis for each acquisition. Use specific identification or FIFO to calculate gains. Cryptocurrency exchanges don't always provide complete tax forms. Use specialized crypto tax software like CoinTracker or TokenTax. Report all transactions - IRS receives data from exchanges. Penalties for non-reporting are severe. Consider tax-loss harvesting opportunities. Understand wash sale rules may apply. Keep detailed records of all transactions with dates, amounts, and values. Report foreign crypto accounts on FBAR if exceeding thresholds.",
      icon: DollarSign,
      category: "Taxation",
      date: "2024-10-02",
      readTime: "9 min read",
      views: "2.9K",
      likes: "405",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-500/20 to-orange-600/20",
      author: "Elena Rodriguez"
    },
    {
      id: 32,
      title: "Qualified Business Income Deduction (QBI): A Complete Guide",
      excerpt: "Maximize the Section 199A deduction for pass-through entity owners to reduce taxable income by up to 20%.",
      fullContent: "QBI deduction allows up to 20% deduction of qualified business income for pass-through entities. Available to sole proprietors, partnerships, S-Corps, and some trusts. Phases out at higher income levels. Full deduction available if taxable income below $191,950 (single) or $383,900 (joint) for 2024. Above thresholds, specified service businesses face limitations. SSTB includes health, law, accounting, consulting, and financial services. Calculate based on lesser of 20% of QBI or 20% of taxable income minus capital gains. W-2 wage and property limitations apply at higher incomes. Aggregation rules allow grouping related businesses. Consider paying reasonable wages in S-Corp to maximize QBI. Track QBI separately for each business. Rental real estate may qualify if it's a trade or business. Form 8995 or 8995-A required. Work with CPA to optimize structure and maximize deduction. Plan entity structure and compensation to qualify for maximum benefit.",
      icon: BarChart3,
      category: "Taxation",
      date: "2024-09-28",
      readTime: "10 min read",
      views: "3.6K",
      likes: "495",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-600/20 to-purple-600/20",
      author: "Jonathan Hayes"
    },
    {
      id: 33,
      title: "Tax Implications of Hiring Employees vs. Contractors",
      excerpt: "Understand the tax and legal differences between employees and independent contractors to make informed hiring decisions.",
      fullContent: "Classification impacts taxes, benefits, and liability. Employees require payroll tax withholding, unemployment insurance, workers' comp, and benefits. Employers pay 7.65% FICA taxes matching employee contribution. Contractors receive 1099-NEC, pay self-employment tax, and handle their own benefits. IRS uses behavioral control, financial control, and relationship type to determine status. Misclassification penalties are severe. Employees give you more control but cost more. Contractors offer flexibility but less control. Consider total cost including benefits and taxes when comparing. Form SS-8 available to request IRS determination. State rules may differ from federal. Document independent contractor relationship with written agreement. Contractors should have their own business, serve multiple clients, provide own tools, and control how work is done. Regular review of classification important as relationships evolve. Consult employment attorney for questionable situations.",
      icon: Users,
      category: "Taxation",
      date: "2024-09-22",
      readTime: "8 min read",
      views: "4.0K",
      likes: "555",
      gradient: "from-teal-600 to-cyan-600",
      bgGradient: "from-teal-600/20 to-cyan-600/20",
      author: "Melissa Davis"
    },

    // Payroll Articles (10)
    {
      id: 34,
      title: "Payroll Compliance: Avoiding Common Mistakes That Cost Businesses",
      excerpt: "Common payroll mistakes that can cost your business and how to avoid them with proper processes.",
      fullContent: "Payroll errors lead to penalties, unhappy employees, and legal issues. Common mistakes include misclassifying employees as contractors, incorrect overtime calculations, missing pay deadlines, improper tax withholding, and failing to report new hires. Other errors: not tracking hours accurately, miscalculating PTO, ignoring garnishment orders, and failing to update tax tables. Consequences include IRS penalties, DOL fines, employee lawsuits, and damaged morale. Avoid mistakes by using reliable payroll software, maintaining accurate time records, understanding federal and state laws, conducting regular audits, training payroll staff, staying current with law changes, and considering outsourcing to specialists. Implement review processes before each payroll run. Keep detailed documentation. Update employee information promptly. Verify tax deposit deadlines. Reconcile payroll accounts monthly. Ensure backups of payroll data.",
      icon: Users,
      category: "Payroll",
      date: "2024-12-18",
      readTime: "7 min read",
      views: "2.1K",
      likes: "295",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/20 to-cyan-500/20",
      author: "Karen Thompson"
    },
    {
      id: 35,
      title: "Understanding Payroll Taxes: Employer Responsibilities and Deadlines",
      excerpt: "Master federal and state payroll tax requirements including withholding, deposits, and reporting obligations.",
      fullContent: "Employers must withhold federal income tax, Social Security (6.2%), and Medicare (1.45%) from employee wages. Employers match Social Security and Medicare contributions. Additional 0.9% Medicare tax on high earners. Federal tax deposits required semi-weekly or monthly depending on tax liability. FUTA tax (6% on first $7,000) funds unemployment with credit for state unemployment taxes paid. File Form 941 quarterly reporting withheld taxes and employer portions. Form 940 reports FUTA annually. State requirements vary - most have income tax withholding and unemployment insurance. Deposit deadlines are strict - late deposits incur penalties. Electronic deposits required for most employers. Keep detailed records for at least 4 years. Reconcile payroll tax accounts monthly. Year-end filing includes W-2s and W-3. Miss deadlines and face penalty charges. Use payroll software or service to ensure compliance.",
      icon: Calendar,
      category: "Payroll",
      date: "2024-12-14",
      readTime: "9 min read",
      views: "2.7K",
      likes: "370",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-600/20 to-indigo-600/20",
      author: "Timothy Anderson"
    },
    {
      id: 36,
      title: "Setting Up Payroll for Your First Employee: A Step-by-Step Guide",
      excerpt: "Complete guide to establishing payroll systems and processes when hiring your first employee.",
      fullContent: "Hiring your first employee is exciting but requires proper setup. Obtain an Employer Identification Number (EIN) from IRS if you don't have one. Register for state payroll taxes and unemployment insurance in states where you have employees. Set up workers' compensation insurance. Have new employees complete W-4 for federal withholding and equivalent state form. Complete I-9 to verify employment eligibility. Report new hires to state within required timeframe. Choose payroll frequency (weekly, bi-weekly, semi-monthly, or monthly) and stick to it. Select payroll software or service to handle calculations, tax deposits, and filing. Establish process for tracking hours. Set up direct deposit or check printing. Create employee files with all required documentation. Determine employee classification (exempt vs. non-exempt) for overtime purposes. Establish policies for PTO, sick leave, and benefits. Communicate pay schedule and policies clearly.",
      icon: CheckCircle,
      category: "Payroll",
      date: "2024-12-09",
      readTime: "10 min read",
      views: "3.3K",
      likes: "455",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-600/20 to-emerald-600/20",
      author: "Diana Foster"
    },
    {
      id: 37,
      title: "Payroll Software Comparison: Finding the Right Solution for Your Business",
      excerpt: "Compare popular payroll software options based on features, pricing, and ease of use.",
      fullContent: "Payroll software automates calculations, tax filing, and direct deposits. Gusto offers user-friendly interface, benefits administration, and HR tools. ADP provides enterprise-grade features and dedicated support. Paychex offers full-service options with HR services. QuickBooks Payroll integrates seamlessly with QuickBooks accounting. Patriot Software is affordable for small businesses. OnPay offers excellent value with unlimited payrolls. Evaluate based on: number of employees, pay frequency, complexity of pay structure, state locations, benefits administration needs, time tracking requirements, reporting needs, integration with accounting software, customer support quality, and pricing structure. Most offer free trials. Key features include: automatic tax calculations and filing, direct deposit, employee self-service portal, PTO tracking, compliance alerts, year-end reporting, mobile access, and new hire reporting. Cloud-based solutions offer flexibility and automatic updates.",
      icon: BarChart3,
      category: "Payroll",
      date: "2024-12-04",
      readTime: "8 min read",
      views: "2.9K",
      likes: "400",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      author: "Gregory Wilson"
    },
    {
      id: 38,
      title: "Employee vs. Independent Contractor: Payroll Implications",
      excerpt: "Navigate the critical differences in payroll processing for employees versus independent contractors.",
      fullContent: "Classification determines tax withholding, benefits, and employer costs. Employees have taxes withheld from paychecks - federal income tax, Social Security, and Medicare. Employers match Social Security and Medicare. Employees typically receive benefits like health insurance and PTO. Employers pay unemployment insurance and workers' compensation. Independent contractors receive gross payment without withholding. They receive 1099-NEC instead of W-2. Contractors handle their own taxes through estimated payments. No employer payroll taxes required. Contractors not eligible for employer benefits. Misclassification risks include back taxes, penalties, interest, and potential lawsuit. IRS factors: behavioral control, financial control, and relationship type. Common law test examines degree of control. When in doubt, classify as employee - safer legally. Document contractor relationships thoroughly. Regular audits ensure proper classification as relationships evolve.",
      icon: Users,
      category: "Payroll",
      date: "2024-11-30",
      readTime: "7 min read",
      views: "3.8K",
      likes: "520",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-600/20 to-red-600/20",
      author: "Monica Garcia"
    },
    {
      id: 39,
      title: "Overtime Rules and Exempt vs. Non-Exempt Employees",
      excerpt: "Understand FLSA overtime requirements and proper employee classification to ensure compliance.",
      fullContent: "Fair Labor Standards Act (FLSA) requires overtime pay at 1.5 times regular rate for hours over 40 per week. Non-exempt employees entitled to overtime. Exempt employees include executive, administrative, professional, computer, and outside sales employees meeting specific criteria. Exemption requires salary basis (not hourly), minimum salary threshold ($684/week as of 2024), and duties test. Duties test varies by exemption type. Executives must supervise at least two employees. Administrative employees perform office work directly related to management. Professional exemption requires advanced knowledge and education. Misclassifying employees as exempt risks back pay liability and penalties. Document job duties and responsibilities. Salary basis means consistent pay regardless of hours or quality of work. Some states have higher thresholds. Track non-exempt hours accurately. Overtime calculated on regular rate including bonuses. Some states have daily overtime rules. Review classifications annually as duties change.",
      icon: Clock,
      category: "Payroll",
      date: "2024-11-25",
      readTime: "9 min read",
      views: "2.5K",
      likes: "340",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/20 to-pink-500/20",
      author: "Brandon Scott"
    },
    {
      id: 40,
      title: "Garnishments and Payroll Deductions: A Complete Guide",
      excerpt: "Handle wage garnishments and other involuntary deductions correctly to comply with court orders and laws.",
      fullContent: "Employers must comply with various garnishment orders. Child support withholding orders are priority garnishments. Federal tax levies take precedence over most other creditors. Creditor garnishments for debts follow federal and state limits. CCPA limits garnishment to 25% of disposable earnings or amount exceeding 30 times federal minimum wage. Multiple garnishments follow priority rules. Child support has highest priority, then federal tax levies, then creditor garnishments. Calculate based on disposable earnings (gross pay minus required deductions). Track start and end dates carefully. Remit withheld amounts to appropriate agency by deadlines. Keep detailed records of all garnishments. Don't ignore garnishment orders - penalties include fines and possible termination liability. Can't terminate employee due to one garnishment. Communicate with employees compassionately about garnishments. Some states provide greater protection with lower percentages or higher exempt amounts. Handle confidentially to respect employee privacy.",
      icon: FileText,
      category: "Payroll",
      date: "2024-11-20",
      readTime: "8 min read",
      views: "1.9K",
      likes: "265",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      author: "Stephanie Chen"
    },
    {
      id: 41,
      title: "Multi-State Payroll: Managing Employees Across Different States",
      excerpt: "Navigate the complexities of payroll for employees working in multiple states including taxes and compliance.",
      fullContent: "Multi-state payroll adds significant complexity. Register in each state where you have employees. Obtain state employer identification numbers and unemployment accounts. Understand reciprocity agreements - some states have agreements allowing withholding for employee's residence state. Determine state income tax withholding based on state rules - convenience of employer rules may apply. Some states tax based on where work performed, others on residence. Unemployment insurance generally paid to state where employee works. Workers' compensation based on work location. Track employee work locations carefully especially for remote workers. Some states have convenience of employer rules deeming income sourced to employer location unless business necessity. Maintain separate records by state. File state payroll tax returns as required. Consider payroll software with multi-state capabilities. Stay current with state law changes. Professional employer organizations can help manage multi-state complexity.",
      icon: PieChart,
      category: "Payroll",
      date: "2024-11-15",
      readTime: "10 min read",
      views: "2.3K",
      likes: "315",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/20 to-teal-500/20",
      author: "Nathan Brooks"
    },
    {
      id: 42,
      title: "Year-End Payroll Checklist: W-2s, 1099s, and Compliance",
      excerpt: "Essential year-end payroll tasks and deadlines to close the year properly and prepare for tax filing.",
      fullContent: "Year-end payroll requires attention to detail and strict deadline adherence. Reconcile payroll records with tax deposits and filings. Verify all employee information including names, addresses, and SSNs. Process any outstanding bonuses or payments for current year. Review and adjust any necessary corrections. Prepare W-2s for employees showing wages and tax withholding. W-2 deadline is January 31 for distribution to employees and filing with SSA. Prepare 1099-NEC for contractors paid $600 or more. File Form 941 for Q4 by January 31. File Form 940 (FUTA) by January 31. State year-end filings vary by state. Reconcile state unemployment accounts. Review and reconcile benefits deductions. Prepare annual summaries for employees. Backup all payroll data. Update payroll software with new tax tables. Review classification of all workers. Assess payroll processes and identify improvements. Consider payroll service or CPA for complex situations.",
      icon: Calendar,
      category: "Payroll",
      date: "2024-11-10",
      readTime: "9 min read",
      views: "3.4K",
      likes: "465",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-600/20 to-purple-600/20",
      author: "Patricia Williams"
    },
    {
      id: 43,
      title: "Payroll for Remote Workers: Tax and Compliance Considerations",
      excerpt: "Address the unique payroll challenges of remote employees including state tax withholding and nexus issues.",
      fullContent: "Remote work creates complex payroll situations. Determine state tax withholding based on where employee works from, not office location (with exceptions). Some states have convenience of employer rule taxing remote workers in employer's state. Understand state reciprocity agreements. Register for withholding in states where remote workers reside. Track employee locations especially for workers who travel or relocate. Unemployment insurance typically paid to state where employee works. Workers' compensation must cover remote work locations. Understand if remote worker creates nexus for state income tax filing. Some states require employer registration after one remote employee. Document business necessity for remote work to avoid convenience rule taxation. Communicate with remote employees about potential tax obligations in multiple states. Use payroll software capable of handling multi-state scenarios. Stay updated on changing remote work tax laws. Consider PEO or payroll service with multi-state expertise. Review agreements with remote workers about location requirements.",
      icon: Users,
      category: "Payroll",
      date: "2024-11-05",
      readTime: "10 min read",
      views: "2.8K",
      likes: "385",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-500/20 to-orange-600/20",
      author: "Christopher Lee"
    },

    // Financial Analysis & Strategy Articles (12)
    {
      id: 44,
      title: "Financial Statement Analysis: Key Metrics Every Business Owner Should Know",
      excerpt: "Learn how to read and interpret financial statements to make informed business decisions.",
      fullContent: "Financial statements tell your business story in numbers. Balance sheet shows assets, liabilities, and equity at a point in time. Income statement (P&L) reveals revenue, expenses, and profit over a period. Cash flow statement tracks cash in and out. Key metrics include gross profit margin (gross profit / revenue), operating profit margin, net profit margin, current ratio (current assets / current liabilities), quick ratio, debt-to-equity ratio, and return on assets. Working capital measures short-term financial health. Days sales outstanding indicates collection efficiency. Inventory turnover shows how quickly inventory sells. Compare metrics to industry benchmarks and historical performance. Ratios help identify trends and potential problems. Understand that profit doesn't equal cash - profitable companies can have cash flow problems. Regular review enables proactive management. Use trend analysis to spot patterns. Consider both absolute numbers and percentages.",
      icon: PieChart,
      category: "Financial Analysis",
      date: "2024-12-16",
      readTime: "11 min read",
      views: "3.5K",
      likes: "485",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/20 to-blue-500/20",
      author: "Alexander Martin"
    },
    {
      id: 45,
      title: "Cash Flow Management: Strategies to Avoid Running Out of Money",
      excerpt: "Master cash flow forecasting and management to ensure your business always has adequate working capital.",
      fullContent: "Cash flow problems kill businesses even if profitable on paper. Create 13-week cash flow forecast updating weekly. Accelerate receivables and strategically delay payables. Build cash reserves during peak seasons. Monitor daily and use cash flow software for visibility.",
      icon: TrendingUp,
      category: "Financial Analysis",
      date: "2024-12-11",
      readTime: "9 min read",
      views: "4.1K",
      likes: "570",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-600/20 to-emerald-600/20",
      author: "Olivia Thompson"
    },
    {
      id: 46,
      title: "Break-Even Analysis: Understanding Your Profitability Threshold",
      excerpt: "Calculate your break-even point to understand minimum sales needed for profitability.",
      fullContent: "Break-even analysis identifies when revenue covers all costs. Formula: Fixed Costs / (Price per Unit - Variable Cost per Unit). Use for pricing decisions, cost control, and sales targets. Lower break-even means less risk. Model different scenarios to understand impact of price changes or cost reductions.",
      icon: BarChart3,
      category: "Financial Analysis",
      date: "2024-12-06",
      readTime: "7 min read",
      views: "2.7K",
      likes: "365",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      author: "Benjamin Harris"
    },
    {
      id: 47,
      title: "Budgeting for Small Businesses: Creating and Managing Your Annual Budget",
      excerpt: "Develop realistic budgets and use them as tools for planning and measuring business performance.",
      fullContent: "Annual budgets guide business decisions and measure performance. Start with revenue projections based on historical data and growth plans. Estimate costs by category - COGS, payroll, rent, marketing, etc. Include one-time expenses and capital investments. Build in contingency for unknowns. Review monthly comparing actuals to budget. Investigate significant variances. Adjust forecasts quarterly based on actual performance. Involve department heads for buy-in. Use zero-based budgeting occasionally to justify all expenses. Consider different scenarios (conservative, realistic, aggressive). Link budget to strategic goals. Track KPIs aligned with budget objectives.",
      icon: FileText,
      category: "Financial Analysis",
      date: "2024-12-01",
      readTime: "8 min read",
      views: "3.2K",
      likes: "440",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-600/20 to-cyan-600/20",
      author: "Sarah Mitchell"
    },
    {
      id: 48,
      title: "Profit Margins: Improving Profitability Through Better Pricing",
      excerpt: "Understand and optimize your profit margins to increase overall business profitability.",
      fullContent: "Profit margin = Net Profit / Revenue. Gross margin = (Revenue - COGS) / Revenue. Operating margin = Operating Income / Revenue. Margins vary by industry - know your benchmarks. Improve by increasing prices, reducing COGS, improving operational efficiency, or changing product mix. Analyze profitability by product, customer, and channel. Drop unprofitable products or repricing them. Focus on high-margin offerings. Bundle products to increase average transaction value. Reduce discounting. Negotiate better supplier terms. Improve productivity to reduce labor costs per unit.",
      icon: TrendingUp,
      category: "Financial Analysis",
      date: "2024-11-26",
      readTime: "7 min read",
      views: "2.9K",
      likes: "395",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/20 to-teal-500/20",
      author: "James Rodriguez"
    },
    {
      id: 49,
      title: "Financial Forecasting: Predicting Future Performance",
      excerpt: "Use forecasting techniques to project revenue, expenses, and cash needs for better planning.",
      fullContent: "Financial forecasts project future performance based on historical data and assumptions. Create rolling 12-month forecasts updated monthly. Use multiple scenarios (best, worst, likely). Forecast revenue by analyzing trends, seasonality, and growth initiatives. Project expenses by category considering inflation and planned changes. Include cash flow timing. Build in assumptions about market conditions, competition, and economic factors. Use forecasts for budgeting, staffing decisions, and investment planning. Compare forecasts to actuals to improve accuracy. Involve sales and operations teams. Software tools help model complex scenarios.",
      icon: BarChart3,
      category: "Financial Analysis",
      date: "2024-11-21",
      readTime: "9 min read",
      views: "2.4K",
      likes: "330",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
      author: "Emma Wilson"
    },
    {
      id: 50,
      title: "Working Capital Management: Optimizing Your Business Operations",
      excerpt: "Manage working capital efficiently to improve cash flow and operational effectiveness.",
      fullContent: "Working capital = Current Assets - Current Liabilities. Positive working capital means short-term assets exceed liabilities. Optimize by managing receivables, payables, and inventory. Reduce days sales outstanding through better collections. Extend days payable outstanding without harming supplier relationships. Minimize inventory while preventing stockouts. Calculate working capital ratio and cycle. Industry norms vary significantly. Monitor changes in working capital - increases consume cash while decreases generate cash. Seasonal businesses need working capital planning. Consider working capital financing for growth.",
      icon: PieChart,
      category: "Financial Analysis",
      date: "2024-11-16",
      readTime: "8 min read",
      views: "2.6K",
      likes: "355",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-600/20 to-purple-600/20",
      author: "Michael Chen"
    },
    {
      id: 51,
      title: "Understanding Your Cost Structure: Fixed vs. Variable Costs",
      excerpt: "Analyze your cost structure to make better pricing, outsourcing, and scaling decisions.",
      fullContent: "Fixed costs don't change with production volume (rent, salaries, insurance). Variable costs change with activity (materials, commissions, shipping). Semi-variable costs have both components (utilities, some labor). High fixed costs mean greater operating leverage - profitability improves quickly as sales increase but losses accumulate faster if sales decline. High variable costs mean less risk but slower profit growth. Analyze your mix for break-even, pricing, and outsourcing decisions. Convert fixed to variable through outsourcing to reduce risk. Reduce fixed costs to lower break-even point. Understanding cost behavior enables better decision-making.",
      icon: BarChart3,
      category: "Financial Analysis",
      date: "2024-11-11",
      readTime: "7 min read",
      views: "2.8K",
      likes: "380",
      gradient: "from-teal-600 to-cyan-600",
      bgGradient: "from-teal-600/20 to-cyan-600/20",
      author: "Rachel Adams"
    },
    {
      id: 52,
      title: "Return on Investment (ROI): Evaluating Business Investments",
      excerpt: "Calculate and use ROI to make informed decisions about business investments and initiatives.",
      fullContent: "ROI = (Gain from Investment - Cost of Investment) / Cost of Investment. Express as percentage or ratio. Use to evaluate equipment purchases, marketing campaigns, new products, and other investments. Compare alternatives on equal footing. Consider payback period alongside ROI. Include all costs (purchase, installation, training, maintenance) and benefits (increased revenue, reduced costs, time savings). Account for time value of money in multi-year investments using NPV. Set minimum ROI threshold for investments. Review historical ROIs to improve future projections. Track actual results vs. projections. ROI helps prioritize limited resources.",
      icon: TrendingUp,
      category: "Financial Analysis",
      date: "2024-11-06",
      readTime: "8 min read",
      views: "3.1K",
      likes: "425",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      author: "David Kim"
    },
    {
      id: 53,
      title: "Financial Ratios for Business Health Assessment",
      excerpt: "Use key financial ratios to assess and monitor your business's financial health.",
      fullContent: "Liquidity ratios measure ability to meet short-term obligations. Current ratio = Current Assets / Current Liabilities (target 1.5-2.0). Quick ratio excludes inventory. Profitability ratios assess earning power. Net profit margin = Net Income / Revenue. ROA = Net Income / Total Assets. ROE = Net Income / Shareholders' Equity. Efficiency ratios measure asset utilization. Asset turnover = Revenue / Total Assets. Inventory turnover = COGS / Average Inventory. Leverage ratios show debt levels. Debt-to-equity = Total Debt / Total Equity. Interest coverage = EBIT / Interest Expense. Compare to industry benchmarks and trends over time.",
      icon: PieChart,
      category: "Financial Analysis",
      date: "2024-11-01",
      readTime: "10 min read",
      views: "2.5K",
      likes: "345",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/20 to-purple-500/20",
      author: "Jennifer Taylor"
    }
  ];

  const categories = [
    "All",
    "Bookkeeping",
    "Accounting Standards",
    "Business Strategy",
    "Taxation",
    "Financial Analysis",
    "Payroll",
  ];

  useEffect(() => {
    setIsVisible(true);

    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }));
    setActiveParticles(particles);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
const [visibleCount, setVisibleCount] = useState(15);

// Optional: Reset count to 15 whenever the user filters or searches
useEffect(() => {
  setVisibleCount(15);
}, [searchTerm, selectedCategory]);

// Slice the filtered posts to only show the specific amount
const displayedPosts = filteredPosts.slice(0, visibleCount);
  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative -padding py-20 bg-gradient-to-br from-secondary to-forest-green overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {activeParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-accent/20 animate-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}

          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />

          <div
            className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
            style={{
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30 animate-pulse-subtle">
              <Sparkles className="text-accent w-5 h-5 animate-spin-slow" />
              <span className="text-accent font-semibold text-sm">
                Expert Insights
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Our{" "}
              <span className="relative inline-block">
                <span className="text-accent relative z-10">Blog</span>
                <span className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse-glow" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Insights, tips, and best practices from accounting experts.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                {
                  icon: BookOpen,
                  text: "50+ Articles",
                  stat: "100% Expert Written",
                },
                { icon: TrendingUp, text: "50K+ Readers", stat: "Monthly" },
                { icon: CheckCircle, text: "5 Categories", stat: "Covered" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-1 px-5 py-3 bg-secondary/80 backdrop-blur-sm rounded-full border border-accent/20 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent/20 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="text-accent w-5 h-5" />
                    <span className="text-white font-medium text-sm">
                      {item.text}
                    </span>
                    <span className="text-white/60 text-xs">{item.stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Search Bar */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-100 translate-y-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400  w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card hover:border-primary/50 focus:border-primary focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl"
              />
            </div>
          </div>

          {/* Categories Filter */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-100 translate-y-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 border flex items-center gap-2 ${
                    selectedCategory === category
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                      : "bg-card border-border hover:bg-primary hover:text-white hover:border-primary"
                  }`}
                >
                  {selectedCategory === category && (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {filteredPosts.length > 0 ? (
            <>
              <div
                className={`mb-8 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-100 translate-y-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-center text-gray-600 font-medium">
                  Showing{" "}
                  <span className="text-primary font-bold">
                    {filteredPosts.length}
                  </span>{" "}
                  article{filteredPosts.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post, index) => (
                  <div
                    key={post.id}
                    onMouseEnter={() => setHoveredCard(post.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative bg-card rounded-3xl shadow-lg overflow-hidden border border-border hover-lift cursor-pointer transition-all duration-700 ${
                      hoveredCard === post.id ? "scale-105 shadow-2xl" : ""
                    } ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-100 translate-y-0"
                    }`}
                    style={{ transitionDelay: `${700 + index * 75}ms` }}
                  >
                    {/* Animated gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        post.gradient
                      } opacity-0 transition-opacity duration-500 ${
                        hoveredCard === post.id ? "opacity-5" : ""
                      }`}
                    />

                    {/* Image Section with Icon */}
                    <div
                      className={`relative h-48 bg-gradient-to-br ${post.bgGradient} flex items-center justify-center overflow-hidden`}
                    >
                      <div
                        className={`transition-all duration-500 ${
                          hoveredCard === post.id
                            ? "scale-125 rotate-12"
                            : "scale-100"
                        }`}
                      >
                        {post.icon && (
                          <post.icon
                            className={`w-24 h-24 bg-gradient-to-br ${post.gradient} bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity`}
                            strokeWidth={1.5}
                          />
                        )}
                      </div>

                      {/* Floating particles on hover */}
                      {hoveredCard === post.id &&
                        [...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-accent/60 rounded-full animate-float-particle"
                            style={{
                              left: `${30 + i * 10}%`,
                              top: `${30 + (i % 3) * 15}%`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}

                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 relative z-10">
                      {/* Category & Meta */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white`}
                          >
                            {post.category}
                          </span>
                        </div>
                        <div
                          className={`flex items-center text-xs text-gray-400  font-medium transition-all duration-300 ${
                            hoveredCard === post.id
                              ? "opacity-100"
                              : "opacity-70"
                          }`}
                        >
                          <Clock size={12} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
                          hoveredCard === post.id ? "line-clamp-none" : ""
                        }`}
                      >
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center text-xs text-gray-400 ">
                          <Calendar size={12} className="mr-1" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        {/* <button className="inline-flex items-center text-primary font-medium group-hover:text-accent transition-all duration-300 hover:gap-3 gap-2">
                          Read
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button> */}
                      </div>
                    </div>

                    {/* Corner sparkle */}
                    {hoveredCard === post.id && (
                      <>
                        <Sparkles className="absolute top-4 right-4 text-accent w-5 h-5 animate-pulse" />
                        <Sparkles
                          className="absolute bottom-4 left-4 text-primary w-5 h-5 animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
              {visibleCount < filteredPosts.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 15)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold transition-all duration-300 hover:bg-secondary hover:shadow-xl hover:-translate-y-1"
            >
              <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              Show More Articles
            </button>
            <p className="mt-4 text-gray-500 text-sm">
              Showing {visibleCount} of {filteredPosts.length} articles
            </p>
          </div>
        )}
            </>
          ) : (
            
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-400  mx-auto mb-4 opacity-50" />
              <p className="text-xl text-gray-400  font-medium">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding  bg-gradient-to-r from-secondary to-forest-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-primary" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-100 translate-y-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Want to Stay Updated?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter for the latest accounting insights and
              best practices delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-8 py-3 bg-accent hover:bg-white text-secondary font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
{/* ==================== GALLERY SECTION ==================== */}
<section className="section-padding bg-background relative overflow-hidden">
  {/* Background glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full mb-6">
        <Sparkles className="text-primary w-5 h-5" />
        <span className="text-primary font-semibold text-sm">
          Our Gallery
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Life at <span className="text-primary">S B A G & Co. LLP</span>
      </h2>
      <p className="text-lg text-gray-600">
        A glimpse into our culture, people, and professional journey.
      </p>
    </div>

    {/* Gallery Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {[
        {
          title: "Team Collaboration",
          subtitle: "Working together",
        },
        {
          title: "Client Meetings",
          subtitle: "Building trust",
        },
        {
          title: "Office Workspace",
          subtitle: "Professional environment",
        },
        {
          title: "Training Sessions",
          subtitle: "Continuous learning",
        },
        {
          title: "Leadership Discussions",
          subtitle: "Strategic planning",
        },
        {
          title: "Celebrations",
          subtitle: "Moments that matter",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-500"
        >
          {/* Placeholder Image */}
          <div className="h-64 bg-gradient-to-br from-secondary to-forest-green flex items-center justify-center">
            <Users className="w-20 h-20 text-white/60 group-hover:scale-110 transition-transform duration-500" />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
            <h3 className="text-white text-xl font-bold">
              {item.title}
            </h3>
            <p className="text-white/80 text-sm">
              {item.subtitle}
            </p>
          </div>

          {/* Corner sparkle */}
          <Sparkles className="absolute top-4 right-4 text-accent w-5 h-5 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity" />
        </div>
      ))}
    </div>
  </div>
</section>

      <style>{`
        @keyframes particle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-5deg); }
          66% { transform: translate(20px, -20px) rotate(5deg); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.9; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(0.95); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-particle {
          animation: particle linear infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </div>
  );
};

export default EnhancedBlog;
