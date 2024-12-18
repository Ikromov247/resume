import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const ResumeWebsite = () => {
  const resumeData = {
    name: "Sukhrob Ikromov",
    title: "Machine Learning Engineer",
    contact: {
      email: "sukhrob.ikromov0@gmail.com",
      phone: "",
      location: "Naju-si, Korea",
      linkedin: "www.linkedin.com/in/sukhrob-ikromov"
    },
    summary: "Machine Learning Engineer experienced in designing and optimizing machine learning pipelines, API deployments, and database management. Adept at improving model performance by applying both statistical methods and industry-specific concepts. Proven track record in enhancing system efficiency and automating workflows, significantly reducing manual intervention.",
    experience: [
      {
        company: "Rec's Innovation",
        position: "MLOps Engineer",
        period: "June 2024 - Present",
        highlights: [
          "Architected and implemented end-to-end ML pipeline including data processing, feature engineering, training, inference, and monitoring components",
          "Designed robust API endpoints using FastAPI and Uvicorn for real-time anomaly detection and power prediction, achieving uptime of 99%",
          "Reduced model deployment time from 1 hour to 1 minute by implementing CI/CD pipelines using Github Actions",
          "Achieved instant response to model performance issues by developing monitoring system using Prometheus and Grafana",
          "Streamlined onboarding through comprehensive documentation and project templates"
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
          "Relevant Coursework: Machine Learning, Deep Learning, Advanced Deep Learning Algorithms, NLP, Database Management"
        ]
      },
      {
        degree: "High School Diploma",
        school: "Bukhara School No. 23",
        location: "Bukhara, Uzbekistan",
        period: "Sept 2008 - July 2019",
        details: [
          "Specialized in Math",
          "GPA: 3.92/4.00",
          "IELTS: 8.5",
          "SAT: 1500"
        ]
      }
    ],
    projects: [
      {
        title: "Woosong University Capstone Project",
        period: "March 2024 - June 2024",
        description: "Led a team of 4 students to develop a computer vision model and pipeline",
        achievements: [
          "4th place in university-wide LINC Software contest",
          "Developed object detection system from video collections",
          "Managed communication with partner company GMDSoft"
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
      tools: ["Docker", "Git", "Github Actions", "Caddy", "PostgreSQL", "MLflow", "Prometheus", "Grafana"],
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
              <Mail size={16} />
              <span>{resumeData.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{resumeData.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{resumeData.contact.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <span>{resumeData.contact.linkedin}</span>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Projects</h3>
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