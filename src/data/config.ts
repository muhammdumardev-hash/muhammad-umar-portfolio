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
    codeUrl: 'https://github.com/muhammdumardev-hash/HOSPITAL-RAG-ASSISTANT',
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
    codeUrl: 'https://github.com/muhammdumardev-hash/STUDENT-DROP-OUT-PREDICTION-MODEL',
    accent: '#8b5cf6',
    visual: 'ml',
  },
  {
    id: 'ecommerce-agent',
    title: 'E-commerce Customer Support AI Agent',
    shortDescription:
      'Answers e-commerce customer queries using knowledge retrieval and context-aware LLM responses.',
    problem:
      'E-commerce support teams face repetitive questions about orders, policies, and products that can be automated with grounded AI.',
    solution:
      'Built a RAG agent over product/policy knowledge (ChromaDB) with Streamlit chat and Groq for low-latency, context-aware replies.',
    features: [
      'RAG over product and policy knowledge base',
      'Context-aware conversational responses',
      'Streamlit interactive demo',
      'ChromaDB + embeddings pipeline',
      'Demo admin panel code: Umar8423',
      'If the app is sleeping, please wait 1–2 minutes for it to wake up.',
    ],
    tech: ['Python', 'Streamlit', 'RAG', 'ChromaDB', 'Groq API'],
    category: 'Generative AI',
    demoUrl: 'https://afk82cfa8cxkkbbzbsvbvi.streamlit.app/',
    codeUrl: 'https://github.com/muhammdumardev-hash/AI-Powered-E-Commerce-Customer-Support-Agent--',
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
  {
    id: 'advanced-rag-hybrid-search',
    title: 'Advanced RAG with Hybrid Search',
    shortDescription: 'A document question-answering system combining semantic search, keyword search, hybrid retrieval, and cross-encoder reranking.',
    problem: 'Basic document chat can miss important passages when relying on only one retrieval method.',
    solution: 'Built a modular RAG pipeline that combines semantic and BM25-style keyword retrieval, merges results, reranks the strongest candidates, and generates answers from retrieved context.',
    features: ['Semantic and keyword retrieval', 'Hybrid score weighting', 'Cross-encoder reranking', 'Configurable retrieval controls', 'Source-grounded document answers'],
    tech: ['Python', 'Streamlit', 'RAG', 'FAISS', 'BM25', 'Sentence Transformers'],
    category: 'Generative AI',
    demoUrl: '',
    codeUrl: 'https://github.com/muhammdumardev-hash/advanced-rag-hybrid-search',
    accent: '#06b6d4',
    visual: 'hospital',
  },
  {
    id: 'hr-policy-rag',
    title: 'HR Policy RAG Assistant',
    shortDescription: 'Upload an HR policy PDF and ask questions answered from relevant policy passages.',
    problem: 'Employees often need to search lengthy policy documents to find specific rules.',
    solution: 'Created a PDF question-answering app that extracts and chunks text, embeds it, retrieves relevant passages with FAISS, and uses Groq to produce context-grounded answers.',
    features: ['HR policy PDF upload', 'Page-aware document extraction', 'Semantic retrieval', 'Relevant page and similarity display', 'Context-grounded answers'],
    tech: ['Python', 'Streamlit', 'FAISS', 'Sentence Transformers', 'PyMuPDF', 'Groq'],
    category: 'Generative AI',
    demoUrl: '',
    codeUrl: 'https://github.com/muhammdumardev-hash/HR-POLICY-RAG-ASSISTANT',
    accent: '#8b5cf6',
    visual: 'hospital',
  },
  {
    id: 'ai-document-assistant',
    title: 'AI Document Assistant',
    shortDescription: 'Ask questions about PDF, DOCX, TXT, and Markdown files using hybrid document search.',
    problem: 'Finding reliable answers across long documents takes time and requires manual searching.',
    solution: 'Built a document assistant that extracts and chunks uploaded content, combines semantic and keyword search, and asks an LLM to answer using retrieved source passages.',
    features: ['Multiple document formats', 'Semantic and keyword search', 'Hybrid retrieval', 'Source-aware answers', 'Google Drive link support'],
    tech: ['Python', 'Streamlit', 'Groq', 'FAISS', 'Sentence Transformers', 'RAG'],
    category: 'Generative AI',
    demoUrl: '',
    codeUrl: 'https://github.com/muhammdumardev-hash/AI-DOCUMENT-ASSISTANT--',
    accent: '#6366f1',
    visual: 'hospital',
  },
  {
    id: 'mcp-student-agent',
    title: 'MCP Student Assistant',
    shortDescription: 'An AI student assistant that uses MCP tools for percentage, CGPA, and course-information tasks.',
    problem: 'Students need quick academic calculations and course information without manually switching between tools.',
    solution: 'Connected a Groq-powered assistant to custom Model Context Protocol tools, allowing it to select and execute relevant functions and combine tool results when needed.',
    features: ['Custom MCP server and tools', 'Automatic tool selection', 'Percentage calculation', 'CGPA calculation', 'Course information lookup', 'Multi-tool workflows'],
    tech: ['Python', 'Streamlit', 'MCP', 'Groq API'],
    category: 'Generative AI',
    demoUrl: '',
    codeUrl: 'https://github.com/muhammdumardev-hash/MCP-Student-Agent',
    accent: '#22c55e',
    visual: 'agent',
  },
  {
    id: 'ai-research-multi-agent',
    title: 'AI Research Multi-Agent System',
    shortDescription: 'A multi-agent research workflow designed to organize research, verify sources, analyze findings, and draft reports.',
    problem: 'Research tasks require several distinct steps that are difficult to coordinate manually.',
    solution: 'Developed a Streamlit-based multi-agent prototype using CrewAI and Groq, with specialized research roles in the workflow.',
    features: ['Specialized research agents', 'Research and source gathering workflow', 'Fact-checking role', 'Analysis and writing roles', 'Streamlit interface'],
    tech: ['Python', 'CrewAI', 'Groq', 'Streamlit', 'Multi-Agent AI'],
    category: 'Generative AI',
    demoUrl: '',
    codeUrl: 'https://github.com/muhammdumardev-hash/ai-research-multi-agent',
    accent: '#ec4899',
    visual: 'agent',
  },
  {
    id: 'multimodal-ai-assistant',
    title: 'AI Image & Document Assistant',
    shortDescription: 'A multimodal assistant that analyzes uploaded images and answers questions about their visible content.',
    problem: 'Users need to interpret images, document snapshots, and educational diagrams without manually extracting every detail.',
    solution: 'Built a Streamlit app that sends an image and the user question to a vision-capable multimodal model for visual analysis.',
    features: ['Image understanding', 'Visual question answering', 'Document image analysis', 'Information extraction', 'Educational diagram explanations'],
    tech: ['Python', 'Streamlit', 'Groq', 'Multimodal LLMs'],
    category: 'Generative AI',
    demoUrl: '',
    codeUrl: 'https://github.com/muhammdumardev-hash/MULTIMODAL-AI-ASSISTANT',
    accent: '#06b6d4',
    visual: 'hospital',
  },
  {
    id: 'ai-agent-memory',
    title: 'AI Agent with Memory',
    shortDescription: 'A conversational AI assistant with short-term chat context and persistent user-controlled memory.',
    problem: 'Typical chat sessions can lose useful context between conversations.',
    solution: 'Created a Streamlit assistant that stores selected memories in SQLite and retrieves relevant information for later conversations.',
    features: ['Recent conversation context', 'Persistent SQLite memory', 'Keyword-based memory retrieval', 'Memory search and management', 'User-controlled memory saving'],
    tech: ['Python', 'Streamlit', 'Groq API', 'SQLite'],
    category: 'Generative AI',
    demoUrl: '',
    codeUrl: 'https://github.com/muhammdumardev-hash/AI-Agent-Memory',
    accent: '#8b5cf6',
    visual: 'agent',
  },
  {
    id: 'student-result-tool-calling',
    title: 'Student Result AI Assistant',
    shortDescription: 'A tool-calling demo where an AI assistant retrieves fictional student results by invoking a Python function.',
    problem: 'An LLM alone cannot reliably retrieve structured records unless it can call an external tool.',
    solution: 'Implemented a function-calling flow in which the model chooses a result lookup tool, receives its output, and explains the result conversationally.',
    features: ['Custom result lookup tool', 'Model-directed function calls', 'Structured result retrieval', 'Unknown student handling', 'Test scenarios'],
    tech: ['Python', 'Streamlit', 'OpenAI API', 'Function Calling'],
    category: 'Generative AI',
    demoUrl: '',
    codeUrl: 'https://github.com/muhammdumardev-hash/tool-calling',
    accent: '#22c55e',
    visual: 'agent',
  }
]

export const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
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
