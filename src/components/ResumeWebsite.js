import React from 'react';
import { Github, Linkedin, MapPin } from 'lucide-react';

const ResumeWebsite = () => {
  const resumeData = {
    name: "Sukhrob Ikromov",
    title: "Machine Learning Engineer",
    contact: {
      email: "sukhrob.ikromov0@gmail.com",
      location: "Naju-si, Korea",
      linkedin: "www.linkedin.com/in/sukhrob-ikromov",
      github: "github.com/Ikromov247"
    },
    summary: "Machine Learning Engineer experienced in designing and deploying machine learning pipelines. Adept at improving model performance by applying both statistical methods and industry-specific concepts. Proven track record in automating workflows, significantly reducing manual intervention. Passionate about enabling companies to leverage AI solutions and seamlessly integrate them into existing systems, minimizing operational overhead.",
    experience: [
      {
        company: "Rec's Innovation",
        position: "Lead AI Engineer",
        period: "March 2025 - June 2025",
        highlights: [
          "Applied advanced statistical techniques including correlation analysis, distribution modeling, and mean reversion testing to validate 13 research hypotheses across 100,000+ bidding records",
          "Implemented and evaluated 10+ machine learning approaches across 1000+ automated experiments using Optuna optimization, systematically testing reinforcement learning, Bayesian probability models, and ensemble methods",
          "Streamlined onboarding of new members and transfer of maintenance responsibilities by creating 24 pages of comprehensive documentation and 4 video tutorials"
        ]
      },
      {
        company: "Rec's Innovation",
        position: "MLOps Engineer",
        period: "June 2024 - February 2025",
        highlights: [
          "Architected and implemented 3 end-to-end ML pipelines with robust FastAPI endpoints, achieving 99% uptime across 9 months of operation",
          "Achieved cross-platform compatibility on all major OSs by containerizing ML systems using Docker, reducing environment setup time on a clean machine from 1 day to 2 hours",
          "Reduced model deployment time from 1 hour to 1 minute by implementing CI/CD pipelines using Github Actions and integrating Docker cache optimization",
          "Minimized deployment errors by adding integration tests into the CI/CD pipelines",
          "Automated ML training and inference using a custom scheduler module, removing the need for manual intervention",
          "Reduced incident response time from manual discovery to automated instant alerts by developing a monitoring system using Prometheus and Grafana"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Woosong University",
        department: "AI and Big Data Department",
        location: "Daejeon, Korea",
        period: "Sept 2020 - Aug 2024",
        details: [
          "Minor in Software Engineering",
          "GPA: 4.28/4.50",
          "Coursework: Machine Learning, Deep Learning, Advanced Deep Learning Algorithms, Calculus, Natural Language Processing, Database management, Software Engineering principles"
        ]
      },
      {
        degree: "High School Diploma",
        school: "Bukhara School No. 23",
        location: "Bukhara, Uzbekistan",
        period: "Sept 2008 - July 2019",
        details: [
          "Specialized in Math",
          "GPA: 3.92/4.00"
        ]
      }
    ],
    projects: [
      {
        title: "Woosong University Capstone Project",
        period: "March 2024 - June 2024",
        description: "Led a team of 4 students to develop a computer vision model and a pipeline to detect an input object from a collection of videos",
        achievements: [
          "Gained the 4th place in the university-wide LINC Software contest competing with 20 other teams",
          "Divided tasks and set main objectives of the project while communicating with the supervising company GMDSoft"
        ]
      },
      {
        title: "100 Days of Code",
        period: "July 2022 - September 2022",
        description: "Completed 100 projects covering machine learning, web development, and data visualization"
      }
    ],
    skills: {
      programming: ["Python", "Bash"],
      tools: ["Docker", "Git", "PostgreSQL", "FastAPI", "PyTorch", "MLflow", "Prometheus", "Grafana", "Github Actions", "Uvicorn"],
      soft: ["Problem solving", "Cross-team collaboration", "Communication"]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold">{resumeData.name}</h1>
          <h2 className="text-xl mt-2 text-blue-100">{resumeData.title}</h2>
          
          <div className="mt-6 flex flex-wrap gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{resumeData.contact.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {resumeData.contact.linkedin}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github size={16} />
              <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {resumeData.contact.github}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-12 px-4">
        {/* Summary */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
          <p className="text-gray-600 leading-relaxed">{resumeData.summary}</p>
        </section>

        {/* Experience */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-semibold text-gray-900">{exp.company}</h4>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <div className="text-gray-700 font-medium mt-1">{exp.position}</div>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-semibold text-gray-900">{edu.school}</h4>
                <span className="text-gray-500">{edu.period}</span>
              </div>
              <div className="text-gray-700 mt-1">{edu.degree}</div>
              <div className="text-gray-600 mt-1">{edu.location}</div>
              <ul className="mt-2">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership & Extracurriculars</h3>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                <span className="text-gray-500">{project.period}</span>
              </div>
              <p className="text-gray-600 mt-2">{project.description}</p>
              {project.achievements && (
                <ul className="mt-2">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Programming</h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.programming.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.tools.map((tool, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.soft.map((skill, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResumeWebsite;