export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  focus?: string;
  features?: string[];
  context?: string;
  grade?: string;
  imagePath: string;
  imageFit?: "cover" | "contain";
  gallery?: string[];
  role: string;
  responsibilities: string[];
  challenges: string;
  solutions: string;
  outcome?: string;
};

export const technologies = {
  Development: ["Node.js", "Express.js", "Laravel", "PHP", "JavaScript", "Python"],
  Database: ["MySQL", "MongoDB", "PostgreSQL"],
  "Cloud & Monitoring": ["AWS EC2", "AWS ECS", "AWS ALB", "Splunk", "Datadog", "Jenkins", "Linux CLI"],
  "Tools & Workflow": ["Git", "GitLab", "GitHub Desktop", "Postman", "API Integration"]
};

export const experiences = [
  {
    company: "PT. Sigma Cipta Caraka (Telkomsigma)",
    position: "L2 Application Support (Contract)",
    period: "August 2022 – Present",
    location: "Jakarta, Hybrid",
    description: "Maintain performance and stability of enterprise B2C digital services.",
    details: ["Monitor Transaction Success Rate, Response Time, AWS ECS, EC2, ALB, CPU, and Memory.", "Perform troubleshooting, error log analysis, RCA, and deployment/release support.", "Support Digital Smart Care migration.", "Applications: Digital Smart Care, Antreaja, Knowledge Management System, FMC Indihome."]
  },
  {
    company: "PT. Nurul Fikri Cipta Inovasi",
    position: "Mobile App Developer (Independent Study – MBKM)",
    period: "February 2025 – June 2025",
    location: "Online",
    description: "Integrated Attendance and Automated SPP Payment Information System.",
    details: ["QR code attendance, WhatsApp Bot notifications, and Payment Gateway integration."]
  },
  {
    company: "PT. Invensi Digital Nusantara",
    position: "Full-Stack Developer (Internship)",
    period: "September 2024 – April 2025",
    location: "Jakarta, Onsite",
    description: "Projects: BPOM Command Center and ASROT.",
    details: ["Technologies: Laravel, CodeIgniter, MySQL.", "Database optimization, technical documentation, application development, and Git workflow."]
  },
  {
    company: "PT. Vnue",
    position: "Data Analysis Intern",
    period: "August 2022 – October 2022",
    location: "Online",
    description: "Analyze location entry/exit data using Python.",
    details: []
  },
  {
    company: "RnD",
    position: "Backend Developer Intern",
    period: "February 2022 – October 2022",
    location: "Depok, Onsite",
    description: "Backend development for alumni management and foundation donation mobile applications.",
    details: []
  },
  {
    company: "PT. Hijau Solusi Utama",
    position: "Full-Stack Web Developer Intern",
    period: "June 2021 – August 2021",
    location: "Depok, Onsite",
    description: "BKK Alumni Website.",
    details: ["Technologies: Laravel and MySQL."]
  }
];

export const projects: Project[] = [
  {
    slug: "bpom-command-center",
    name: "BPOM Command Center",
    shortDescription: "A web-based command center project for operational visibility.",
    description: "Web-based command center project.",
    technologies: ["Laravel", "CodeIgniter"],
    imagePath: "/images/projects/bpom-command-center.png",
    imageFit: "contain",
    role: "Full-Stack Developer",
    responsibilities: ["Application development and maintenance.", "Collaborating through an organized Git workflow."],
    challenges: "Building a clear operational view while working with an existing application context.",
    solutions: "Structured the interface and implementation around the available operational needs and maintainable backend patterns."
  },
  {
    slug: "asrot-bpom",
    name: "ASROT – BPOM",
    shortDescription: "Application development project supporting BPOM workflows.",
    description: "Application development project for BPOM.",
    technologies: ["Laravel", "CodeIgniter", "MySQL"],
    imagePath: "/images/projects/asrot.png",
    role: "Full-Stack Developer",
    responsibilities: ["Application development.", "Database optimization and technical documentation."],
    challenges: "Working across application functionality and data concerns in an established project.",
    solutions: "Improved implementation consistency through documented workflows and focused database optimization."
  },
  {
    slug: "attendance-spp-payment",
    name: "Integrated Attendance & Automated SPP Payment System",
    shortDescription: "An integrated mobile system for attendance and school payment information.",
    description: "Integrated Attendance and Automated SPP Payment Information System.",
    technologies: ["Mobile App", "QR Code", "WhatsApp Bot", "Payment Gateway"],
    features: ["QR Code Attendance", "WhatsApp Bot", "Payment Gateway"],
    imagePath: "/images/projects/attendance-system/home-dashboard.jpeg",
    imageFit: "contain",
    gallery: [
      "/images/projects/attendance-system/home-dashboard.jpeg",
      "/images/projects/attendance-system/edit-account.jpeg",
      "/images/projects/attendance-system/attendance-scan.jpeg",
      "/images/projects/attendance-system/attendance-history.jpeg",
      "/images/projects/attendance-system/profile.jpeg",
      "/images/projects/attendance-system/attendance-statistics.jpeg",
      "/images/projects/attendance-system/edit-password.jpeg",
      "/images/projects/attendance-system/teacher-dashboard.jpeg",
      "/images/projects/attendance-system/attendance-schedule.jpeg",
      "/images/projects/attendance-system/edit-profile.jpeg",
      "/images/projects/attendance-system/teacher-schedule.jpeg",
      "/images/projects/attendance-system/teacher-profile.jpeg",
      "/images/projects/attendance-system/attendance-qr.jpeg",
      "/images/projects/attendance-system/attendance-filter.jpeg",
      "/images/projects/attendance-system/meeting-filter.jpeg"
    ],
    role: "Mobile App Developer",
    responsibilities: ["Implementing QR code attendance.", "Integrating WhatsApp Bot notifications and Payment Gateway."],
    challenges: "Connecting attendance and payment-related flows into a practical information system.",
    solutions: "Combined focused integrations around the core attendance and payment information journeys."
  },
  {
    slug: "educational-management-api",
    name: "Educational Management Information System",
    shortDescription: "A REST API-based system for POS PAUD Melati Azzahra.",
    description: "Educational Management Information System for POS PAUD Melati Azzahra.",
    technologies: ["Node.js", "Express.js", "REST API"],
    context: "POS PAUD Melati Azzahra",
    grade: "A / 92.10",
    imagePath: "/images/projects/education-api.svg",
    role: "Student Developer",
    responsibilities: ["Developing an educational management REST API.", "Designing backend flows for the final project."],
    challenges: "Creating a useful and structured API for an education management context.",
    solutions: "Used Node.js, Express.js, and REST API patterns to keep the system organized and extensible.",
    outcome: "Final project grade: A / 92.10."
  },
  {
    slug: "bkk-alumni-website",
    name: "BKK Alumni Website",
    shortDescription: "A web platform for BKK alumni information and management.",
    description: "BKK Alumni Website.",
    technologies: ["Laravel", "MySQL"],
    imagePath: "/images/projects/bkk-alumni.svg",
    role: "Full-Stack Web Developer Intern",
    responsibilities: ["Web application development.", "Working with Laravel and MySQL."],
    challenges: "Delivering a maintainable website for alumni information.",
    solutions: "Built the application around Laravel conventions with MySQL-backed data management."
  },
  {
    slug: "alumni-mobile-backend",
    name: "Alumni Management Mobile Application Backend",
    shortDescription: "Backend services supporting an alumni management mobile application.",
    description: "Backend development for an alumni management mobile application.",
    technologies: ["Backend Development"],
    focus: "Backend development",
    imagePath: "/images/projects/alumni-mobile-backend.svg",
    role: "Backend Developer Intern",
    responsibilities: ["Backend development for alumni management features."],
    challenges: "Supporting a mobile application with focused backend functionality.",
    solutions: "Kept backend responsibilities centered on reliable data and application flows."
  },
  {
    slug: "foundation-donation-backend",
    name: "Foundation Donation Mobile Application Backend",
    shortDescription: "Backend services for a foundation donation mobile application.",
    description: "Backend development for a foundation donation mobile application.",
    technologies: ["Backend Development"],
    focus: "Backend development",
    imagePath: "/images/projects/donation-app-backend.svg",
    role: "Backend Developer Intern",
    responsibilities: ["Backend development for foundation donation application features."],
    challenges: "Building backend support for donation-focused mobile workflows.",
    solutions: "Focused on clear service responsibilities and dependable application data flows."
  },
  {
    slug: "location-data-analysis",
    name: "Location Data Analysis",
    shortDescription: "Analysis of location entry and exit data using Python.",
    description: "Location data analysis project.",
    technologies: ["Python"],
    focus: "Location data analysis",
    imagePath: "/images/projects/location-analysis.svg",
    role: "Data Analysis Intern",
    responsibilities: ["Analyze location entry/exit data using Python."],
    challenges: "Turning location entry and exit data into useful analysis.",
    solutions: "Used Python-based analysis to examine the available location data."
  }
];

export const supportCapabilities = ["Application Health Monitoring", "Error Log Analysis", "Troubleshooting", "Root Cause Analysis", "Deployment and Release Support", "SLA Management", "AWS Infrastructure Monitoring"];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
