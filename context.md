# Portfolio Website — Context for Claude Code

## Personal Info

- **Name:** Vishakha Sah
- **Email:** vishakhasah36@gmail.com
- **Phone:** +91 6206103663
- **LinkedIn:** https://www.linkedin.com/in/vishakha-sah-56777031b
- **GitHub:** https://github.com/Vishakha-sah
- **Location:** Kathmandu, Nepal / Bhubaneswar, India

---

## Education

| Degree | Institution | Year | Score |
|---|---|---|---|
| B.Tech — Computer Science & Engineering | Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar | 2023 – 2027 | CGPA: 9.32 / 10 |
| Higher Secondary — Science Stream | St. Xavier's College, Kathmandu | — | GPA: 3.36 / 4 |

---

## Skills

### Languages
Python, Java, SQL, C

### AI / ML
Machine Learning, Deep Learning, Computer Vision, Natural Language Processing (NLP), GANs (DCGAN, WGAN-GP), CBAM, Prompt Engineering

### Libraries & Frameworks
Scikit-learn, Pandas, NumPy, PyTorch, Hugging Face, Gradio, Matplotlib, React.js, Next.js, Django

### Web Technologies
HTML, CSS, JavaScript, Tailwind CSS, React.js, Next.js

### Backend & Database
Django, Supabase, MySQL

### Design & Tools
Figma, GitHub, VS Code, IntelliJ IDEA, Anaconda, Google Colab

### Core Concepts
Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems

---

## Work Experience

### Web Development Intern — Nexalaris Tech *(Hybrid)*
**May 2025 – July 2025**
- Developed responsive frontend components using HTML, CSS, JavaScript, and Tailwind CSS, improving usability and performance.
- Managed version control and team collaboration workflows using Git and GitHub.
- Applied prompt engineering and AI-assisted development tools to enhance productivity.

### AI Foundation Intern — Microsoft AI National Skilling Initiative
**May 2025**
- Built machine learning models using Python, Scikit-learn, and Hugging Face libraries.
- Applied Natural Language Processing and studied transformer architectures.
- Gained hands-on experience with deployment workflows.

---

## Projects

### 1. Plant Disease Detection *(Deep Learning / Computer Vision)*
A progressive deep learning pipeline for plant disease classification using CNN architectures and synthetic data augmentation.

**Pipeline overview:**
- Started with a 2-class potato disease classifier using ResNet50, scaled to a 6-class multi-plant system covering potato, tomato, and pepper from the PlantVillage dataset.

**Experiments conducted:**

| Experiment | Description | Key Result |
|---|---|---|
| Exp 1 — Real Data Only | Baseline ResNet50 on real data | Accuracy: 99.14% |
| Exp 2 — Geometric Augmentation | RandomCrop, Flip, Rotation, ColorJitter | Accuracy: 99.89% |
| Exp 3 — WGAN-GP Augmentation | Synthetic minority-class images via WGAN-GP | Accuracy: 99.79% |
| Exp 4 — Balanced Mixed Dataset | WGAN-GP synthetics + real data, class-balanced | AUC: 1.0000, G-Mean: 0.9915 |
| Exp 5 — CBAM Attention Mechanism | Channel & Spatial Attention (CBAM) integrated into CNN | *(Add your result here)* |

**Key highlights:**
- Resolved severe class imbalance (Potato healthy: 152 images out of 6,218 total) using WGAN-GP per minority class.
- Validated generative quality via KID scores (0.09–0.15).
- Used stratified 70:15:15 splits and 5-fold cross-validation (SD < 0.003) for reproducibility.
- Built balanced Mixed Train dataset of 6,148 images.

**Tech:** Python, PyTorch, ResNet50, WGAN-GP, CBAM, Scikit-learn, Google Colab

---

### 2. Student Mental Health Treatment Prediction *(ML / NLP)*
- Developed a Random Forest machine learning model to predict mental health treatment needs.
- Performed preprocessing, feature engineering, and model evaluation.
- Deployed using Gradio and Hugging Face Spaces.

**Tech:** Python, Scikit-learn, Gradio, Hugging Face Spaces

---

### 3. CareConnect *(Hackathon MVP — AI Platform)*
- Built during a 24-hour hackathon as an AI orchestration platform serving the Nepali diaspora.
- Designed initial UI/UX wireframes in Figma and led frontend prototyping.
- Mapped relational database concepts and entity relationships using SQL principles.
- Secured **Top 4 Finalist** at Startup Hackathon 2025 (AI for Social Impact & Scale).

**Tech:** AI tools, Frontend (HTML/CSS/JS), SQL, Figma

---

## Achievements

- 🏆 **Top 4 Finalist** — Startup Hackathon 2025 (AI for Social Impact & Scale): Built an AI-powered service orchestration platform in 24 hours.
- 🎯 **Selected** for PwC Launchpad Advisory Program *(Expected Completion: June 2026)*

---

## Certifications

- Business Analytics for Decision Making — *University of Colorado Boulder*
- Strategy and Game Theory for Management — *IIM Ahmedabad*
- Microsoft Azure AI Fundamentals
- Introduction to Cybersecurity — *Cisco*

---

## Portfolio Website Design Notes

- **Tone:** Professional, clean, modern — reflects both technical depth and creativity.
- **Sections to include:** Hero, About, Skills, Experience, Projects, Achievements, Certifications, Contact.
- **Suggested stack for website:** Next.js + Tailwind CSS (or React.js), deployed on Vercel.
- **Design inspiration:** Minimal dark or light theme with accent color; project cards with experiment breakdowns for the Plant Disease project.
- **Key emphasis:** AI/ML work, strong CGPA, internship experience, hackathon achievement.

---

*Note: Fill in actual LinkedIn and GitHub URLs before passing to Claude Code.*
