export interface TeamPerson {
    leaderName: string;
    designation?: string;
    experience: string;
    // defaults to the team's `image`
    image?: string;
}

export interface Team {
    id: string;
    name: string;
    image?: string;
    groupphoto: string;
    description: string;
    leadership?: TeamPerson;
    coLeaders?: TeamPerson[];
    // shown under the leader as "Function: Name"
    functionLeads?: { function: string; name: string }[];
    members?: TeamPerson[];
    teamSize?: number;
    coreServices: string[];
    keyStrengths: string[];
    toolsAndTechnologies?: string[];
    impact?: {
        policyholdersServed: number;
        partnerHospitalsOnboarded: number;
        fasterClaimProcessing: string;
    };
}

// Leadership for both Data Analytics (team-006) and Data Engineering (team-005).
// Bios use only what the PDF states: name, designation / function and this leadership role.
const pandu: TeamPerson = {
    leaderName: "Panduranga B P",
    designation: "Associate Manager",
    experience: "Panduranga B P is an Associate Manager and part of the leadership team for both Data Analytics and Data Engineering.",
    image: "/teamlead/panduranga-b-p.webp",
};

const divyaAnand: TeamPerson = {
    leaderName: "Divya Anand",
    designation: "Data Science",
    experience: "Divya Anand, from the Data Science function, is part of the leadership team for both Data Analytics and Data Engineering.",
    image: "/teamlead/divya-anand.webp",
};

export const teams: Team[] = [
    {
        id: "team-001",
        name: "Policy Processing Team",
        image: "/teamlead/aswani.jpeg",
        groupphoto: "ppa.jpeg",
        description:
            "The backbone of insurance, banking, and healthcare policy management, ensuring accuracy, compliance, and efficiency at every stage.",
        leadership: {
            leaderName: "Ms. Ashwini A.",
            experience: "Dynamic and results-driven professional with over 10 years of experience in digital marketing, sales strategy, and policy management. Proven expertise in driving brand growth through data-driven marketing campaigns, optimizing sales funnels, and crafting clear, compliant content for policy communication. Adept at cross-functional collaboration, market analysis, and delivering impactful messaging that aligns with organizational goals. Passionate about using digital tools and insights to enhance customer engagement, increase revenue, and ensure policy clarity across stakeholder groups.",
        },
        teamSize: 50,
        coreServices: [
            "Pre-Underwriting – Risk assessment and document verification",
            "New Business Review – Fast-tracking policy approvals",
            "Policy Servicing – Managing policy changes and renewals",
            "Quality Assurance – Ensuring compliance with industry standards",
            // "Voice & Chat Support – Handling customer queries and claims processing",
        ],
        keyStrengths: [
            "Speed & Accuracy – Quick approvals & settlements",
            "Multi-Sector Expertise – Insurance, healthcare, and banking",
            "Tech-Driven Solutions – AI, automation, and analytics",
        ],
        impact: {
            policyholdersServed: 600000,
            partnerHospitalsOnboarded: 120,
            fasterClaimProcessing: "30% reduction in claim processing time",
        },
    },
    {
        id: "team-002",
        name: "Pre-Claims Team ",
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.34.34.jpeg",
        groupphoto: "claims_bookrolls.JPG",
        description:
            "Specializes in efficient claims management, ensuring accuracy, compliance, and timely resolution.",
        leadership: {
            leaderName: "Ms. Chandana",
            designation: "Team Lead",
            experience: "Ms. Chandana brings over 5 years of entrepreneurial experience in the hospitality industry. She later transitioned into the insurance sector as a Claims Process Associate at Cabrillo Coastal General Insurance, where she has gained 3 years of experience. With over 2 years of experience in a team leadership role, she brings strong expertise in claims processing, team management and operational coordination.",
        },
        members: [
            {
                leaderName: "Sangeetha",
                designation: "Senior Quality Analyst",
                experience: "Sangeetha oversees claims quality during the day shift, ensuring accuracy, compliance with established standards, and consistent process excellence across claims operations.",
                image: "/teamlead/sangeetha.webp",
            },
            {
                // TODO: confirm the Vishnupriya name/photo pairing. The photo is used exactly as supplied in the PDF.
                leaderName: "Vishnupriya",
                designation: "Claims Assessment Associate",
                experience: "Vishnupriya supports efficient claims operations by ensuring timely assignment processing, smooth workflow coordination, and consistent client support for the US Harbor Claims team during US business hours.",
                image: "/teamlead/vishnupriya.webp",
            },
        ],
        teamSize: 15,
        coreServices: [
            "Claims Processing – End-to-end pre-claims support",
            "File Handling – Documentation & validation checks",
            "Claim Letters – Standardized & custom letter drafting",
            "Invoice Review – Verifying and processing payments",
            "Triage Support – Prioritization during surge seasons",
        ],
        keyStrengths: [
            "High-Volume Handling – Efficient even during peaks",
            "Compliance – Strong regulatory and documentation focus",
            "Agility – Flexible response to urgent claim scenarios",

        ],
    },
    {
        id: "team-004",
        name: "Software Testing Team",
        image: "/teamlead/rajesh-kumbara.webp",
        groupphoto: "Testing.JPG",
        description:
            "Dedicated to delivering high-quality results through manual and automated testing methodologies.",
        leadership: {
            leaderName: "Rajesh Kumbara",
            designation: "Team Lead (TL)",
            experience: "Rajesh is a technology professional with 12+ years of experience, including Software Testing and QA. He leads a team of 13 testing professionals and specializes in Manual Testing and Automation using Python, Selenium, and Playwright. With strong expertise in automation frameworks, functional and regression testing, and QA process improvement, he combines technical skills with effective team leadership to ensure quality software delivery.",
        },
        teamSize: 20,
        coreServices: [
            "Test Planning – Functional, regression, performance testing",
            "Test Case Development – Manual and automated tests",
            "Defect & Automation Management – Tracking and optimizing testing",
            "Collaboration & Continuous Improvement – Refining strategies",
        ],
        keyStrengths: [
            "Web & Mobile Apps – Selenium, Cypress, Appium",
            "API Testing – Postman, RestAssured",
            "Performance Testing – JMeter, LoadRunner",
            "Security Testing – OWASP ZAP, Burp Suite",
        ],
    },
    {
        id: "team-005",
        name: "Data Engineering",
        image: "/teamlead/panduranga-b-p.webp",
        groupphoto: "data.JPG",
        description:
            "Transforming raw data into valuable insights with smart integration and automation.",
        leadership: pandu,
        coLeaders: [divyaAnand],
        teamSize: 5,
        coreServices: [
            "Data Integration & ETL – Using Python, SQL, and Dimensional Insights",
            "Data Pipeline & Orchestration – Managing workflows efficiently",
            "Data Storage & Management – Amazon Redshift, columnar databases",
            "Business Intelligence & Visualization – Power BI, Sisense",
            "Cloud Platforms – AWS (EC2), experience with GCP",
            "Raters & Insurance Data – Managing pricing models and rules",
            "SQL Queries for Reporting – Extracting policy, claims, and fraud data",
            "JSON & API Integration – Automating data fetching",
            "Python Scripting – Automating repetitive tasks",
        ],
        keyStrengths: [
            "Insurance – ETL & BI solutions for pricing and claims",
            // "Analytics – Data-driven insights for business decisions",
            "Healthcare – Enhancing patient data analytics"

        ],
    },
    {
        id: "team-006",
        name: "Data Analysis",
        image: "/teamlead/panduranga-b-p.webp",
        groupphoto: "data-analytics-team.webp",
        description:
            "Driving insurance analytics and automation through advanced data tools and insights.",
        leadership: pandu,
        coLeaders: [divyaAnand],
        teamSize: 4,
        coreServices: [
            "Raters & Insurance Data – Managing raters (Excel, ASTEC, Python) for premium calculations",
            "Data Cleaning & Transformation – Using Pandas, NumPy, and SQL to clean and prepare insurance data",
            "SQL Queries for Reporting – Extracting policy, claims, and premium data for analysis",
            "API Integration – Automating data exchange via JSON & requests",
            "Python Scripting – Automating repetitive data tasks",
            " Reporting & Analysis – Excel, SQL, Pandas for dashboards"
        ],
        toolsAndTechnologies: [
            "Data Storage & Retrieval – SQL for querying insurance databases",
            "Data Processing & Analysis – Python (Pandas, NumPy, ASTEC, JSON)",
            "Insurance Raters – Excel-based and ASTEC-based models",
            "Data Automation – Python scripts for ETL and task scheduling",
            "APIs & Data Exchange – JSON, APIs (requests module)",
            "Reporting & Visualization – Excel, Pandas, SQL for aggregated reports"
        ],
        keyStrengths: [
            "Insurance – Managing raters and insurance data models for premium adjustments",
            "Analytics – Cleaning, transforming, and analyzing large insurance datasets",
            "Automation – Streamlining data workflows and reporting through Python scripting"
        ],
    },
    {
        id: "team-007",
        name: "Accounts",
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.39.53.jpeg",
        groupphoto: "account.JPG",
        description:
            "Specializing in all financial operations in compliance with US GAAP and regulations.",
        leadership: {
            leaderName: "Mr. Akshay Othayoth",
            experience: "I have 5+ years of hands-on experience in Accounts Payable, where I managed the end-to-end invoice processing cycle, including verifying vendor invoices, matching with purchase orders, resolving discrepancies, and ensuring timely payments.",
        },
        functionLeads: [
            { function: "Staff Accounting", name: "Prakash" },
            { function: "Book Rolls", name: "Rakesh" },
        ],
        teamSize: 10,
        coreServices: [
            "Bookkeeping – Daily entries & general ledger management",
            "Invoicing – Client billing and tracking",
            "Accounts Payable – Vendor payments and tracking",
            "Accounts Receivable – Client collections",
            "US Financial Reporting – GAAP-specific statements",
            "Account Reconciliation – Ensuring data accuracy",
        ],
        keyStrengths: [
            "Timely Closures – Daily accuracy in finances",
            "Client-Centric – Flexible to client needs",
            "Collaboration – Works with cross-functional teams",
            "Detail-Oriented – High accuracy & precision",
            "Integrity – Maintains data confidentiality",
        ],
    },
    {
        id: "team-008",
        name: "Bookrolls Team",
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.34.34.jpeg",
        groupphoto: "claims_bookrolls.JPG",
        description:
            "Delivering personalized insurance solutions through expert risk assessment, transparent communication, and client-focused coverage.",
        leadership: {
            leaderName: "Ms. Chandana",
            experience: "Chandana has  5+ years of experience running her own business in the hospitality industry. She then started her career in house insurance as a Claims Process Associate at Cabrillo Coastal General Insurance, where she has worked for 3 years. For the past year, she has been leading the team.",
        },
        teamSize: 6,
        coreServices: [
            "Quote Generation – Based on property, location, and insurance need",
            "Risk Assessment – Evaluating location, age & safety features",
            "Coverage Explanation – Clear breakdown of policy types",
            "Extra Coverage – Flood, earthquake & high-value protection",
            "Application Filing – Accurate, preference-based submission",
        ],
        keyStrengths: [
            "Open Communication – Sharing ideas and feedback freely",
            "Goal Alignment – Common purpose with clear direction",
            "Inclusion & Respect – Every member is valued",
            "Conflict Resolution – Addressing issues early, constructively",
            "Celebration Culture – Recognizing big & small wins",

        ],
    },
    {
        id: "team-009",
        name: "CAT Modeling",
        // TODO: CAT Modeling new TL name/photo/bio
        // The PDF asks to replace Bharti's image and details with the updated team member information and to
        // update the TL content and designation, but it names no new lead and has no photo. Bharti's card stays
        // until that is supplied: then set `image`, `leadership` (leaderName, designation, experience) here and
        // the "Led by ..." line for team-009 in data/teamcards.json.
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.45.52 (1).jpeg",
        groupphoto: "ppa.jpeg",
        description:
            "Delivering advanced catastrophe risk solutions through simulation-based modeling, strategic risk planning, and proactive disaster readiness.",
        leadership: {
            leaderName: "Bharti",
            experience: "Have experience of more than 3 years in Data Science, Business analytics along with Catastrophic Modeling in the Insurance domain. Currently, leading CAT modeling team and working as Risk Analyst at Sudhanand Business Solutions Private Limited. Have an expertise of SQL, Python, Tableau, Power BI, Machine Learning, AIR and software like AIR cloud use for NAT-CAT modeling. Other than this, have an interest of singing. playing guitar, cricket, badminton and love to watching anime.",
        },
        teamSize: 5,
        coreServices: [
            "CAT Risk Modeling – Simulating natural disaster impact using hazard, exposure & vulnerability data",
            "Portfolio Analysis – Evaluating property exposure across geographies and identifying risk concentration",
            "Reinsurance Strategy – Structuring layers with informed attachment points, limits & pricing",
            "Scenario Planning – Running disaster simulations for preparedness and capital planning",
            "Loss Estimation – Projecting financial impact for various catastrophe events",
        ],
        keyStrengths: [
            "Analytical Expertise – Translating complex data into actionable insights",
            "Proactive Planning – Anticipating risk before it strikes",
            "Strategic Decision Making – Guiding underwriting, pricing & growth",
            "Collaboration – Working cross-functionally with underwriting and reinsurance teams",
            "Preparedness Culture – Prioritizing readiness for high-impact events",

        ],
    },
    {
        id: "team-010",
        name: "COBOL Development",
        // TODO: Madhu photo. The PDF has none, so the placeholder avatar is shown.
        image: "/default-image.jpg",
        // TODO: COBOL team group photo. A company-wide photo stands in for now.
        groupphoto: "sbpl.JPG",
        description:
            "Delivering dependable enterprise solutions through COBOL development, AS400/IBM iSeries expertise, and efficient legacy application management.",
        leadership: {
            leaderName: "Madhu",
            experience: "Madhu leads the COBOL & Legacy Systems team, with expertise in COBOL-based legacy application systems.",
        },
        coreServices: [
            "COBOL Application Development – Developing and enhancing robust COBOL applications for enterprise and AS400/IBM iSeries environments",
            "Legacy System Maintenance – Maintaining, troubleshooting, and supporting critical legacy applications to ensure reliable business operations",
            "Application Modernization – Enhancing existing legacy applications while preserving core business functionality and continuity",
            "System Integration – Connecting legacy COBOL applications with databases and modern enterprise systems",
            "Performance Optimization – Improving application performance, stability, reliability, and resource efficiency",
        ],
        keyStrengths: [
            "COBOL & IBM i Expertise – Applying strong technical knowledge across COBOL, AS400, and IBM iSeries environments",
            "Reliable Solutions – Delivering stable and dependable solutions for business-critical applications",
            "Legacy Modernization – Improving existing systems while maintaining essential business processes",
            "Problem Solving – Diagnosing and resolving complex application and system issues",
            "Business Continuity – Ensuring critical legacy applications remain reliable, maintainable, and operational",
        ],
    },
    {
        id: "team-011",
        name: "Actuarial Sciences",
        // TODO: Actuarial Sciences team photo. A company-wide photo stands in for now.
        groupphoto: "sbpl1.JPG",
        description:
            "At Sudhanand Business Solutions, our Actuarial Sciences team focuses on risk assessment, data analysis, and predictive modelling to support informed decision-making in the insurance sector. By leveraging mathematical and statistical techniques, we help analyse claims trends, evaluate financial risks, and improve operational efficiency, enabling better risk management and data-driven business outcomes.",
        // TODO: Actuarial Sciences team lead. The PDF names none, so the Leadership block is hidden until
        // `image` and `leadership` are added here.
        coreServices: [
            "Risk Assessment & Analysis – Evaluating financial and insurance risks using statistical methods, mathematical models, and data analysis.",
            "Claims Analytics – Analysing claims data, identifying trends, and generating insights to support effective claims management.",
            "Predictive Modelling – Applying statistical techniques to forecast future risks, claim patterns, and potential financial outcomes.",
            "Loss Forecasting & Estimation – Estimating potential losses and evaluating risk exposure to support financial planning and risk mitigation.",
            "Data Analysis & Reporting – Transforming complex datasets into meaningful insights to support strategic planning and operational efficiency.",
        ],
        keyStrengths: [
            "Statistical & Mathematical Expertise – Applying quantitative methods to assess risk and interpret complex insurance data.",
            "Data-Driven Decision-Making – Delivering analytical insights that support informed business and financial decisions.",
            "Risk Modelling & Forecasting – Identifying emerging risk patterns and estimating potential future outcomes.",
            "Claims Performance Analysis – Evaluating claims trends, loss patterns, and operational performance to identify improvement opportunities.",
            "Analytical Problem-Solving – Using structured analytical approaches to address complex risk and insurance challenges.",
            "Operational Efficiency – Supporting improved processes through accurate analysis, reliable reporting, and actionable insights.",
        ],
    },
];
