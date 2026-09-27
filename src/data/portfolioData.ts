export interface PersonalInfo {
  name: string;
  degree: string;
  headline: string;
  phone: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    leetcode: string;
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  isHighlighted?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  technologies: string[];
  models?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  points: string[];
  summary: string;
}

export interface InternshipItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  year: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: 'MOHAMMED ANAS N',
  degree: 'B.Tech Artificial Intelligence and Data Science',
  headline: 'Data Analytics | Machine Learning | Python | SQL',
  phone: '+91 93440 82774',
  email: 'anasnasar136@gmail.com',
  social: {
    github: 'https://github.com/AnasMohammedN',
    linkedin: 'https://www.linkedin.com/in/mohammed-anas-7b38a9434/',
    leetcode: 'https://leetcode.com/u/mohammed-anas/',
  },
};

export const PROFESSIONAL_SUMMARY =
  'B.Tech Artificial Intelligence and Data Science student with hands-on experience in data analysis and machine learning. Proficient in Python, SQL, Excel, and Power BI, with knowledge of data cleaning, exploratory data analysis, data visualization, and machine learning. Interested in using data to generate insights and support data-driven decision-making.';

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    institution: 'Dhaanish Chennai College of Engineering',
    location: 'Chennai',
    period: '2023 – 2027',
    grade: '8.21',
    gradeType: 'CGPA',
    isHighlighted: true,
  },
  {
    degree: 'Higher Secondary',
    institution: 'Krishnasamy Memorial Matriculation Higher Secondary School',
    location: 'Cuddalore',
    period: '2022 – 2023',
    grade: '78%',
    gradeType: 'Percentage',
    isHighlighted: false,
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'SQL'],
  },
  {
    category: 'Data Analysis',
    skills: ['Pandas', 'NumPy', 'Excel'],
  },
  {
    category: 'Visualization',
    skills: ['Power BI', 'Matplotlib'],
  },
  {
    category: 'Machine Learning',
    skills: ['Scikit-learn', 'Exploratory Data Analysis (EDA)', 'Feature Engineering'],
  },
  {
    category: 'Tools',
    skills: ['GitHub', 'Jupyter Notebook', 'VS Code'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'financial-risk-analytics',
    title: 'Financial Risk Analytics Platform',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    summary:
      'A machine learning-based financial risk prediction system with complete data cleaning, preprocessing, exploratory data analysis, and feature engineering pipelines.',
    points: [
      'Developed a machine learning-based financial risk prediction system using Python and Scikit-learn.',
      'Performed data cleaning, preprocessing, exploratory data analysis (EDA), and feature engineering using Pandas and NumPy.',
      'Built a machine learning solution for financial risk prediction.',
    ],
  },
  {
    id: 'flight-delay-analysis',
    title: 'Flight Delay Analysis System',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    models: ['Logistic Regression', 'Decision Tree', 'Random Forest'],
    metrics: [
      {
        label: 'Random Forest Accuracy',
        value: '~77.40%',
      },
    ],
    summary:
      'Airline operational data analysis identifying key patterns and factors associated with flight delays, evaluating multiple predictive machine learning models.',
    points: [
      'Analyzed airline operational data to identify patterns and factors associated with flight delays.',
      'Performed data cleaning, preprocessing, exploratory data analysis, and data visualization using Python, Pandas, and NumPy.',
      'Developed machine learning models using Logistic Regression, Decision Tree, and Random Forest.',
      'Random Forest achieved approximately 77.40% accuracy.',
    ],
  },
];

export const INTERNSHIP_DATA: InternshipItem = {
  role: 'Data Science Intern',
  company: 'NSIC (National Small Industries Corporation)',
  period: 'Jan 22 – Jan 28, 2025',
  responsibilities: [
    'Worked with real-world datasets and performed data cleaning and preprocessing to prepare data for analysis.',
    'Applied Python to process and analyze datasets as part of data science tasks.',
    'Used SQL for data extraction, cleaning, and analysis.',
    'Applied data analysis techniques to understand and work with structured datasets.',
    'Gained practical exposure to Linear Regression and Logistic Regression for machine learning use cases.',
  ],
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'NPTEL – Big Data Computing',
    issuer: 'NPTEL',
    year: '2025',
  },
  {
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
  },
  {
    title: 'Introduction to NumPy',
    year: '2025',
  },
  {
    title: 'MongoDB Basics',
    year: '2025',
  },
];

export const LANGUAGES_DATA: LanguageItem[] = [
  {
    language: 'English',
    proficiency: 'Intermediate',
  },
  {
    language: 'Tamil',
    proficiency: 'Native',
  },
];
