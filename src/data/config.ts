/**
 * ============================================================
 *  CENTRAL CONFIG — Edit this file to update portfolio content
 * ============================================================
 *  - Project links (demo / code)
 *  - Contact details
 *  - CV path
 *  - Personal info
 */

export const siteConfig = {
  name: 'Muhammad Umar',
  headline: 'Generative AI Developer | AI/ML Enthusiast | Web Developer',
  intro:
    'I build practical AI applications using LLMs, RAG, semantic search, and machine learning to solve real-world problems.',
  email: 'f20232661022@umt.edu.pk',
  phone: '0327-9774324',
  linkedin: 'https://www.linkedin.com/in/muhammad-umar488/',
  github: 'https://github.com/muhammdumardev-hash',
  /**
   * Place your CV PDF at: public/cv/Muhammad_Umar_CV.pdf
   * Then set cvPath below. Until then the button shows a placeholder state.
   */
  cvPath: '/cv/UMAR_CV.pdf',
  cvAvailable: true, // CV PDF is available in public/cv/
} as const

export type ProjectCategory = 'All' | 'Generative AI' | 'Machine Learning' | 'Web/Automation'

export interface Project {
  id: string
  title: string
  shortDescription: string
  problem: string
  solution: string
  features: string[]
  tech: string[]
  category: Exclude<ProjectCategory, 'All'>
  /** Live demo URL — leave empty string to hide the button */
  demoUrl: string
  /** Source code URL — leave empty string to hide the button */
  codeUrl: string
  /** Accent color for the project visual (hex) */
  accent: string
  /** Icon key used for illustration */
  visual: 'agent' | 'hospital' | 'ml' | 'ecommerce' | 'whatsapp'
  /** Set to false to disable the interactive 360 preview for this project */
  orbitPreview?: boolean
}

export const projects: Project[] = [
  {
    id: 'threatlens',
    title: 'ThreatLens — AI Cybersecurity Threat Analyzer',
    shortDescription:
      'Analyzes URLs, domains, and IP addresses using threat intelligence sources with AI-generated explanations.',
    problem:
      'Checking whether a URL, domain, or IP address may be malicious often requires using several separate security tools and interpreting their results manually.',
    solution:
      'Built a Python and Streamlit application that combines VirusTotal threat-detection results, WHOIS/RDAP information, and Groq AI explanations in one interface.',
    features: [
      'Scan URLs, domains, and IP addresses',
      'VirusTotal threat intelligence lookup',
      'WHOIS/RDAP domain and IP information',
      'AI-generated explanations of scan results',
      'Interactive Streamlit interface',
    ],
    tech: ['Python', 'Streamlit', 'VirusTotal API', 'Groq API', 'WHOIS/RDAP', 'Requests', 'python-whois', 'ipwhois'],
    category: 'Generative AI',
    demoUrl: 'https://threat-lens-application.streamlit.app/',
    codeUrl: '',
    accent: '#ef4444',
    visual: 'hospital',
  },
  {
    id: 'big-brains-agent',
    title: 'Big Brains Customer Support AI Agent',
    shortDescription:
      'A knowledge-grounded support agent for courses, internships, products, services, resources, and policies.',
    problem:
      'Students and prospects needed fast, accurate answers about Big Brains offerings without waiting for human support.',
    solution:
      'Built a RAG-powered Streamlit agent that retrieves from a curated knowledge base (ChromaDB + embeddings) and generates grounded responses via Groq API, with SQLite for session context.',
    features: [
      'Knowledge-grounded answers for courses, internships, and policies',
      'Semantic search over product and resource documents',
      'Streamlit chat interface with clear source context',
      'SQLite-backed conversation state',
    ],
    tech: ['Python', 'Streamlit', 'ChromaDB', 'Sentence Transformers', 'Groq API', 'SQLite'],
    category: 'Generative AI',
    demoUrl: '', // add live demo URL when available
    codeUrl: 'https://github.com/muhammdumardev-hash/BigBrains-Customer-Support-Agent',
    accent: '#6366f1',
    visual: 'agent',
  },
  {
    id: 'hospital-rag',
    title: 'Hospital RAG AI Assistant',
    shortDescription:
      'Retrieves relevant information from hospital PDF documents to answer questions with grounded responses.',
    problem:
      'Hospital staff and patients needed reliable answers from dense PDF documentation without reading entire manuals.',
    solution:
      'Implemented a PDF-to-vector pipeline (PyMuPDF → embeddings → FAISS) and a Streamlit interface that answers questions with retrieved context via Groq LLM.',
    features: [
      'PDF ingestion and chunking with PyMuPDF',
      'FAISS vector index for fast retrieval',
      'Grounded LLM responses with source snippets',
      'Streamlit UI for clinical/administrative queries',
    ],
    tech: ['Python', 'Streamlit', 'PyMuPDF', 'Sentence Transformers', 'FAISS', 'Groq API'],
    category: 'Generative AI',
    demoUrl: 'https://hospital-rag-assistant-arg7co7qdhslq9d98qrajg.streamlit.app/',
    codeUrl: '',
    accent: '#06b6d4',
    visual: 'hospital',
  },
  {
    id: 'dropout-prediction',
    title: 'Student Dropout Prediction System',
    shortDescription:
      'Machine learning model predicting dropout vs continued study using a higher-education dataset (~4,424 records, 36 features).',
    problem:
      'Institutions need early signals of students at risk of dropping out so they can intervene.',
    solution:
      'Trained a logistic regression model on a public higher-education dataset with feature engineering and evaluation of classification metrics.',
    features: [
      'Dataset of ~4,424 records and 36 features',
      'Logistic Regression classifier',
      'Pandas preprocessing and feature handling',
      'Clear train/test evaluation workflow',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Logistic Regression'],
    category: 'Machine Learning',
    demoUrl: 'https://student-drop-out-prediction-model-8urqnadxnappfds3zjzujapp.streamlit.app/',
    codeUrl: '',
    accent: '#8b5cf6',
    visual: 'ml',
  },
  {
    id: 'ecommerce-agent',
    title: 'E-commerce Customer Support AI Agent',
    shortDescription:
      'AI customer support agent that answers product questions and privacy, return, refund, and shipping policy queries; tracks demo orders (ORD-GRW-2026-1 to ORD-GRW-2026-500); escalates unresolved requests by creating unique support tickets; and provides an admin panel to review tickets, reply to customers, and update ticket statuses. Supabase stores queries, tickets, and chat history. Demo admin panel code: Umar8423.',
    problem:
      'E-commerce support teams handle repetitive product, order, and policy questions while complex or unresolved requests still need to reach a human support representative.',
    solution:
      'Built an AI-powered e-commerce customer support agent using CrewAI, RAG, Groq, Streamlit, and Supabase. It answers customer questions using a knowledge base covering company policies such as privacy, returns, refunds, and shipping; looks up demo order details from CSV data; and escalates requests to human support by generating a unique support ticket/request number. A separate admin panel lets support staff review and manage tickets, respond to customers, and update request statuses, while Supabase stores user queries, support tickets, and conversation history. To test order tracking, enter any order ID from ORD-GRW-2026-1 to ORD-GRW-2026-500 (any number from 1-500), for example: “Check the status of order ORD-GRW-2026-1”.',
    features: [
      'RAG-powered answers about privacy, returns, refunds, shipping, and other company policies',
      'Product and policy questions answered using the knowledge base',
      'Order status lookup from demo CSV data (ORD-GRW-2026-1 to ORD-GRW-2026-500)',
      'Human-support escalation for explicit or unresolved customer requests',
      'Unique support ticket/request number generation',
      'Separate admin panel to view and manage support tickets',
      'Admin staff can respond to requests and update ticket statuses',
      'Supabase-backed storage for user queries, tickets, and conversation history',
      'Demo admin panel code: Umar8423',
      'If the app is sleeping, please wait 1–2 minutes for it to wake up.',
    ],
    tech: ['Python', 'CrewAI', 'Streamlit', 'RAG', 'FAISS', 'Sentence Transformers', 'Groq API', 'Supabase'],
    category: 'Generative AI',
    demoUrl: 'https://afk82cfa8cxkkbbzbsvbvi.streamlit.app/',
    codeUrl: '',
    accent: '#ec4899',
    visual: 'ecommerce',
  },
  {
    id: 'whatsapp-bot',
    title: 'WhatsApp AI Chatbot',
    shortDescription:
      'Automates message handling and conversational responses on WhatsApp using n8n and an AI chat model.',
    problem:
      'Manual WhatsApp replies do not scale for frequent customer or community messages.',
    solution:
      'Designed an n8n workflow that receives WhatsApp messages, routes them to an AI chat model, and returns automated conversational replies.',
    features: [
      'n8n workflow automation',
      'WhatsApp message intake and reply',
      'AI chat model integration',
      'Conversational response handling',
    ],
    tech: ['n8n', 'WhatsApp', 'AI Chat Model'],
    category: 'Web/Automation',
    demoUrl: '',
    codeUrl: '',
    accent: '#22c55e',
    visual: 'whatsapp',
  },

] as const


export const skillCategories = [
  {
    title: 'AI / ML',
    skills: [
      'Machine Learning',
      'Generative AI',
      'LLMs',
      'Prompt Engineering',
      'RAG',
      'Embeddings',
      'Semantic Search',
      'AI Chatbots',
      'Function Calling',
      'MCP',
    ],
  },
  {
    title: 'Libraries & Frameworks',
    skills: [
      'Streamlit',
      'Pandas',
      'Scikit-learn',
      'Sentence Transformers',
      'FAISS',
      'ChromaDB',
      'PyMuPDF',
    ],
  },
  {
    title: 'Web Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Responsive Web Design'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Groq API'],
  },
  {
    title: 'Computer Science',
    skills: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'Database Systems',
      'Compiler Design',
      'Computer Networks',
    ],
  },
] as const

export const internships = [
  {
    role: 'AI/ML Intern',
    company: 'Big Brains',
    period: '2026',
    status: 'Completed',
    description:
      'Completed an AI/ML internship focused on practical machine learning concepts and applications.',
    certificate: 'Internship Completion Certificate — average score 98% (issued 16 September 2026)',
  },
  {
    role: 'Generative AI Intern',
    company: 'Big Brains',
    period: '2026',
    status: 'Completed',
    description:
      'Completed a Generative AI internship focused on practical LLM applications. Worked with prompt engineering, embeddings, vector search, RAG pipelines, Python, Streamlit, and AI APIs to build knowledge-grounded support systems.',
    certificate: 'Internship Completion Certificate — average score 99% (issued 14 October 2026)',
  },
]



export const education = {
  school: 'University of Management and Technology (UMT)',
  degree: 'BS Computer Science',
  period: '2023 – Present',
  note: 'Currently in 7th semester',
}

export const volunteering = {
  org: 'Allah Walay Trust',
  description: 'Volunteer experience supporting community initiatives.',
}

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const
