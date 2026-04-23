// Personal Info
export const PERSONAL_INFO = {
  name: 'Vishakha Sah',
  role: 'Aspiring Software Engineer | AI/ML Enthusiast',
  tagline: 'CSE Undergraduate at KIIT building intelligent systems at the intersection of research and real-world impact.',
  email: 'vishakhasah36@gmail.com',
  phone: '+91 6206103663',
  linkedin: 'https://www.linkedin.com/in/vishakha-sah-56777031b',
  github: 'https://github.com/Vishakha-sah',
  location: 'Kathmandu, Nepal / Bhubaneswar, India',
}

// Bio for About section
export const BIO = `I'm a 4th year Computer Science & Engineering undergraduate at KIIT University with a passion for AI/ML and building intelligent systems. With a CGPA of 9.32, I've focused my academic journey on deep learning, computer vision, and natural language processing.

My research-oriented approach led me to develop a plant disease detection system using GANs and attention mechanisms, achieving 99.89% accuracy. I'm also a Top 4 Finalist at Startup Hackathon 2025, where I built an AI-powered platform serving the Nepali diaspora.

When I'm not training models or writing code, you'll find me exploring new AI research papers or contributing to open-source projects.`

// Stats for About section
export const STATS = [
  { value: 9.32, label: 'CGPA', suffix: '', decimals: 2 },
  { value: 2, label: 'Internships', suffix: '', decimals: 0 },
  { value: 4, label: 'Hackathon Rank', prefix: 'Top ', decimals: 0 },
  { value: 5, label: 'Experiments', suffix: '', decimals: 0 },
]

// Skills categorized
export const SKILLS = {
  'AI / ML': [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Natural Language Processing',
    'GANs (DCGAN, WGAN-GP)',
    'CBAM',
    'Prompt Engineering',
  ],
  'Languages': ['Python', 'Java', 'SQL', 'C', 'JavaScript', 'TypeScript'],
  'Frameworks & Libraries': [
    'PyTorch',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'Hugging Face',
    'Gradio',
    'Matplotlib',
    'React.js',
    'Next.js',
    'Django',
  ],
  'Web & Backend': [
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Django',
    'Supabase',
    'MySQL',
  ],
  'Tools & Design': [
    'Figma',
    'GitHub',
    'VS Code',
    'IntelliJ IDEA',
    'Anaconda',
    'Google Colab',
  ],
}

// Experience
export const EXPERIENCES = [
  {
    company: 'Nexalaris Tech',
    role: 'Web Development Intern',
    type: 'Hybrid',
    duration: 'May 2025 – July 2025',
    bullets: [
      'Developed responsive frontend components using HTML, CSS, JavaScript, and Tailwind CSS, improving usability and performance.',
      'Managed version control and team collaboration workflows using Git and GitHub.',
      'Applied prompt engineering and AI-assisted development tools to enhance productivity.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Git', 'GitHub'],
  },
  {
    company: 'Microsoft AI National Skilling Initiative',
    role: 'AI Foundation Intern',
    type: 'Remote',
    duration: 'May 2025',
    bullets: [
      'Built machine learning models using Python, Scikit-learn, and Hugging Face libraries.',
      'Applied Natural Language Processing and studied transformer architectures.',
      'Gained hands-on experience with deployment workflows.',
    ],
    tags: ['Python', 'Scikit-learn', 'Hugging Face', 'NLP', 'Transformers'],
  },
]

// Projects
export const PROJECTS = {
  featured: {
    title: 'Plant Disease Detection',
    description:
      'A progressive deep learning pipeline for plant disease classification using CNN architectures and synthetic data augmentation.',
    highlights: [
      'Started with a 2-class potato disease classifier using ResNet50, scaled to a 6-class multi-plant system covering potato, tomato, and pepper from the PlantVillage dataset.',
      'Resolved severe class imbalance using WGAN-GP per minority class.',
      'Validated generative quality via KID scores (0.09–0.15).',
      'Used stratified 70:15:15 splits and 5-fold cross-validation (SD < 0.003) for reproducibility.',
    ],
    experiments: [
      { id: 1, name: 'Real Data Only', result: '99.14% Accuracy' },
      { id: 2, name: 'Geometric Augmentation', result: '99.89% Accuracy' },
      { id: 3, name: 'WGAN-GP Augmentation', result: '99.79% Accuracy' },
      { id: 4, name: 'Balanced Mixed Dataset', result: 'AUC: 1.0000, G-Mean: 0.9915' },
      { id: 5, name: 'CBAM Attention Mechanism', result: 'Enhanced feature extraction' },
    ],
    tech: ['Python', 'PyTorch', 'ResNet50', 'WGAN-GP', 'CBAM', 'Scikit-learn', 'Google Colab'],
    github: 'https://github.com/Vishakha-sah/Plant-Disease-Detection',
  },
  others: [
    {
      title: 'Student Mental Health Treatment Prediction',
      description:
        'Developed a Random Forest machine learning model to predict mental health treatment needs. Performed preprocessing, feature engineering, and model evaluation.',
      tech: ['Python', 'Scikit-learn', 'Gradio', 'Hugging Face Spaces'],
      link: 'https://github.com/Vishakha-sah/Student-Mental-Health-Treatment-Prediction',
    },
    {
      title: 'CareConnect',
      description:
        'Built during a 24-hour hackathon as an AI orchestration platform serving the Nepali diaspora. Designed UI/UX wireframes in Figma and led frontend prototyping. Secured Top 4 Finalist at Startup Hackathon 2025.',
      tech: ['AI Tools', 'HTML/CSS/JS', 'SQL', 'Figma'],
      link: 'https://github.com/Vishakha-sah/CareConnect',
      highlight: 'Top 4 Finalist — Startup Hackathon 2025',
    },
  ],
}

// Achievements
export const ACHIEVIEVEMENTS = [
  {
    title: 'Top 4 Finalist',
    description: 'Startup Hackathon 2025 (AI for Social Impact & Scale)',
    icon: 'trophy',
  },
  {
    title: 'PwC Launchpad Advisory Program',
    description: 'Selected participant — Expected Completion: June 2026',
    icon: 'target',
  },
]

// Certifications
export const CERTIFICATIONS = [
  {
    name: 'Business Analytics for Decision Making',
    issuer: 'University of Colorado Boulder',
  },
  {
    name: 'Strategy and Game Theory for Management',
    issuer: 'IIM Ahmedabad',
  },
  {
    name: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
  },
]

// Navigation links
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
