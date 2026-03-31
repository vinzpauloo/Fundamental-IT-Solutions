export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "it-consulting",
    title: "IT Consulting",
    shortDescription:
      "Strategic technology guidance to align IT with your business goals.",
    fullDescription:
      "Our strategic consulting services help you align technology investments with business goals. We assess your current infrastructure, identify opportunities for improvement, and create actionable roadmaps for transformation. Whether you are modernizing legacy systems or planning a greenfield build, our consultants bring the experience to guide every decision.",
    icon: "Lightbulb",
    features: [
      "Technology assessment and audit",
      "IT strategy and roadmap development",
      "Vendor evaluation and selection",
      "Cost optimization and budgeting",
      "Risk assessment and mitigation",
      "Digital maturity evaluation",
    ],
    metaDescription:
      "Expert IT consulting services to align technology with your business strategy. Technology assessments, roadmaps, and vendor selection.",
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortDescription:
      "Custom software built with modern architectures and best practices.",
    fullDescription:
      "We build custom software solutions using modern architectures, clean code practices, and scalability-first design. From web applications and mobile platforms to complex enterprise systems, our engineering teams deliver software that performs under pressure and evolves with your business.",
    icon: "Code",
    features: [
      "Full-stack web and mobile development",
      "API design and microservices architecture",
      "Legacy system modernization",
      "Quality assurance and automated testing",
      "Agile delivery methodology",
      "Technical architecture design",
    ],
    metaDescription:
      "Custom software development with modern architectures. Web apps, mobile platforms, APIs, and enterprise systems built to scale.",
  },
  {
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    shortDescription:
      "Harness artificial intelligence and machine learning to drive innovation.",
    fullDescription:
      "We help organizations harness the power of artificial intelligence to automate processes, uncover insights, and build intelligent applications. From predictive models to natural language processing, our AI engineers design and deploy solutions that create measurable competitive advantage.",
    icon: "Brain",
    features: [
      "Machine learning model development",
      "Natural language processing (NLP)",
      "Computer vision solutions",
      "AI strategy and integration",
      "Predictive analytics and forecasting",
      "MLOps and model lifecycle management",
    ],
    metaDescription:
      "AI and machine learning solutions for enterprises. ML models, NLP, computer vision, and AI strategy to drive innovation.",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    shortDescription:
      "Transform raw data into actionable insights that power better decisions.",
    fullDescription:
      "Turn raw data into strategic business intelligence. Our analytics solutions help you understand market trends, predict outcomes, and make data-driven decisions with confidence. We design data pipelines, build dashboards, and implement governance frameworks that make your data an asset.",
    icon: "BarChart3",
    features: [
      "Business intelligence dashboards",
      "Data warehouse design and implementation",
      "Predictive and prescriptive analytics",
      "Data governance and quality frameworks",
      "ETL pipeline development",
      "Real-time analytics and streaming",
    ],
    metaDescription:
      "Data analytics services to transform raw data into business intelligence. Dashboards, data warehouses, and predictive analytics.",
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    shortDescription:
      "Scalable cloud infrastructure and migration strategies for modern enterprises.",
    fullDescription:
      "Migrate, optimize, and manage your cloud infrastructure with confidence. We work across AWS, Azure, and Google Cloud to design architectures that balance performance, reliability, and cost. Whether you are moving to the cloud for the first time or optimizing an existing deployment, we have the expertise.",
    icon: "Cloud",
    features: [
      "Cloud migration and strategy",
      "Infrastructure architecture and design",
      "Multi-cloud and hybrid cloud management",
      "Cost optimization and FinOps",
      "Serverless architecture",
      "Disaster recovery and business continuity",
    ],
    metaDescription:
      "Cloud services across AWS, Azure, and GCP. Migration, architecture, multi-cloud management, and cost optimization.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortDescription:
      "Comprehensive security solutions to protect your digital assets and data.",
    fullDescription:
      "Protect your digital assets with comprehensive security solutions designed for the modern threat landscape. From vulnerability assessments to incident response planning, we help you build a security posture that meets compliance requirements and keeps your data safe.",
    icon: "Shield",
    features: [
      "Security assessments and penetration testing",
      "Threat detection and monitoring",
      "Compliance and governance (SOC 2, ISO 27001)",
      "Incident response planning",
      "Security architecture review",
      "Employee security awareness training",
    ],
    metaDescription:
      "Cybersecurity services including assessments, threat monitoring, compliance, and incident response for enterprise protection.",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription:
      "End-to-end modernization to future-proof your business operations.",
    fullDescription:
      "Reimagine your business operations with end-to-end digital transformation. We help organizations adopt new technologies, automate manual processes, and build a culture of continuous innovation. Our approach combines strategic planning with hands-on implementation to deliver measurable results.",
    icon: "Workflow",
    features: [
      "Process automation and optimization",
      "Digital workplace solutions",
      "Change management and adoption",
      "Innovation workshops and ideation",
      "Technology modernization roadmap",
      "Customer experience transformation",
    ],
    metaDescription:
      "Digital transformation services to modernize your business. Process automation, change management, and innovation strategy.",
  },
  {
    slug: "devops",
    title: "DevOps",
    shortDescription:
      "Streamline development and operations with CI/CD, automation, and infrastructure as code.",
    fullDescription:
      "Accelerate your development lifecycle with modern DevOps practices. We design CI/CD pipelines, implement infrastructure as code, and build monitoring systems that keep your applications running smoothly. Our DevOps engineers help teams ship faster with confidence.",
    icon: "GitBranch",
    features: [
      "CI/CD pipeline design and implementation",
      "Infrastructure as code (Terraform, Pulumi)",
      "Container orchestration (Kubernetes, Docker)",
      "Monitoring, logging, and observability",
      "Site reliability engineering (SRE)",
      "Developer experience optimization",
    ],
    metaDescription:
      "DevOps services including CI/CD pipelines, infrastructure as code, Kubernetes, and monitoring for faster, reliable deployments.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}
