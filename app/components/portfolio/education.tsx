import { FiChevronRight, FiGithub, FiLinkedin, FiTwitter, FiBriefcase, FiCalendar } from 'react-icons/fi';
import { FaGraduationCap, FaAward, FaStar, FaBook, FaCode, FaUsers } from 'react-icons/fa';

const education = [
    {
      id: 1,
      institution: "Institut National des Postes et Télécommunications",
      degree: "Master’s-level Engineering Degree – Diplôme d’Ingénieur ",
      specialization: "CyberSecurity",
      startDate: "2024-09",
      endDate: "2027-06",
      gpa: "",
      description: "After successfully passing the Concours National Commun, I chose to pursue an engineering degree in cybersecurity at the Institut National des Postes et Télécommunications (INPT) in Rabat. This decision was driven by my passion for technology and the growing importance of cybersecurity in today’s digital world. INPT’s specialized program in cybersecurity provides the ideal environment for me to develop the skills and knowledge necessary to address the challenges of securing information systems and networks, aligning with my long-term career goals.",
      achievements: [
        "succesufully accepted into UZH's deep dive into blockchain program"
      ],
      coursework: ["Cryptography", "Distributed Systems", "Network Security", "Advanced Algorithms", "Blockchain", "hashgraph", "Penetration Testing", "Linux System Administration"]
    },
    {
      id: 2,
      institution: "Lycée Mohammed VI d'Excellence(LM6E)",
      degree: "Classe Préparatoire program",
      specialization: "physics and electrical enginering",
      startDate: "2022-09",
      endDate: "2024-06",
      gpa: "",
      description: "I successfully completed my Classe Préparatoire program, achieving a national ranking of 7th in Concours National Commun (CNC). This program, known for its rigorous curriculum in mathematics, physics, and engineering, prepared me to excel in problem-solving and critical thinking. My strong performance in the CNC, a national exam for entrance into top engineering schools in Morocco, reflects my dedication and determination throughout this challenging academic journey.",
      achievements: [
        "ranked 7 in morocco"
      ],
      coursework: ["MATLAB", "Electronics", "Experimental Physics", "Mathematics", "Theoretical Physics"]
    },
    {
        id: 3,
        institution: "mohammed 5 high school ",
        degree: "baccalaureate in electrical science",
        specialization: "electrical science",
        startDate: "2020-09",
        endDate: "2022-06",
        gpa: "",
        description: "I successfully obtained my high school degree in Electrical Science and Technology with Awarded distinction grade, achieving a great mark reflects not only my dedication and hard work,but also my genuine love for exploring the fascinating world of technology",
        achievements: [
          "integrate the best Classe Préparatoire program in Morocco"
        ],
        coursework: ["Electronics", "Mathematics", "Physics", "Electrical Engineering", "Programming"]
      },
    {
      id: 4,
      type: "certification",
      institution: "Hashgraph Foundation",
      degree: "Certified hedera Developer",
      startDate: "2025-03",
      endDate: "2025-02",
      description: "This certification demonstrates proficiency in developing and maintaining client applications using the latest Hedera programming model, including smart contract deployment and lifecycle management",
      skills: ["Solidity", "Smart Contracts", "DApp Development", "Hedera Native Services", "HCS", "HSCS", "HTS"]
    },
    {
      id: 5,
      type: "certification",
      institution: "university of Zurich",
      degree: "Deep Dive Into Blockchain",
      startDate: "2025-06",
      endDate: "2025-07",
      description: "This intensive program features over 40 lectures from 60+ distinguished experts including world-renowned academics, CEOs, CTOs, and blockchain industry leaders, making it the largest and most prestigious blockchain summer school with participants from over 60 countries",
      skills: ["blockchain technology", "tokenomics", "blockchain laws and regulations"]
    },
    {
      id: 6,
      type: "course",
      institution: "Coursera - University of Buffalo",
      degree: "Blockchain Specialization",
      startDate: "2025-02",
      endDate: "2025-05",
      description: "The Blockchain Specialization is a comprehensive 4-course program offered by the University at Buffalo on Coursera that introduces blockchain as a revolutionary technology enabling peer-to-peer transfer of digital assets without intermediaries",
      skills: ["Integrated Development Environments", "Distributed Computing", "Software Architecture", "Consensus Algorithms", "Cryptography", "Encryption"]
    }
  ];

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900" id='education'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Educational Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic foundation and continuous learning path in computer science, blockchain technology, and web development.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          {/* Formal Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center">
              <FaGraduationCap className="mr-3" size={28} />
              Formal Education
            </h3>
            <div className="space-y-8">
              {education.filter((edu: any) => edu.type !== 'certification' && edu.type !== 'course').map((edu: any, idx: number) => (
                <div key={edu.id} className="relative flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center relative z-10">
                    <FaGraduationCap size={20} className="text-white" />
                  </div>
                  {idx < education.filter((e: any) => e.type !== 'certification' && e.type !== 'course').length - 1 && (
                    <div className="absolute left-6 top-12 w-px h-32 bg-gray-700"></div>
                  )}
                  <div className="ml-6 flex-1">
                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                          <p className="text-cyan-400 font-medium mb-1">{edu.institution}</p>
                          {edu.specialization && (
                            <p className="text-gray-400 text-sm mb-2">Specialization: {edu.specialization}</p>
                          )}
                          {edu.gpa && (
                            <p className="text-gray-400 text-sm">GPA: <span className="text-green-400 font-medium">{edu.gpa}</span></p>
                          )}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mt-2 lg:mt-0">
                          <FiCalendar size={16} className="mr-1" />
                          <span>
                            {new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} -
                            {edu.endDate ? ` ${new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}` : ' Present'}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                      {edu.achievements && (
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-white mb-2 flex items-center">
                            <FaAward size={16} className="mr-2 text-yellow-400" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement: string, idx: number) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start">
                                <FaStar size={12} className="mr-2 mt-1 text-yellow-400 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {edu.coursework && (
                        <div>
                          <h5 className="text-sm font-medium text-white mb-2">Key Coursework</h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course: string) => (
                              <span key={course} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Certifications & Courses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                <FaAward className="mr-3" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {education.filter((edu: any) => edu.type === 'certification').map((cert: any) => (
                  <div key={cert.id} className="bg-gray-900 p-5 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">{cert.degree}</h4>
                        <p className="text-purple-400 font-medium text-sm">{cert.institution}</p>
                      </div>
                      <div className="text-gray-400 text-xs">
                        {new Date(cert.startDate).getFullYear()}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{cert.description}</p>
                    {cert.skills && (
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill: string) => (
                          <span key={skill} className="text-xs px-2 py-1 bg-purple-600/20 text-purple-400 rounded border border-purple-600/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Online Courses */}
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                <FaBook className="mr-3" size={24} />
                Online Learning
              </h3>
              <div className="space-y-4">
                {education.filter((edu: any) => edu.type === 'course').map((course: any) => (
                  <div key={course.id} className="bg-gray-900 p-5 rounded-lg border border-gray-700 hover:border-green-500/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">{course.degree}</h4>
                        <p className="text-green-400 font-medium text-sm">{course.institution}</p>
                      </div>
                      <div className="text-gray-400 text-xs">
                        {new Date(course.startDate).getFullYear()}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{course.description}</p>
                    {course.skills && (
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill: string) => (
                          <span key={skill} className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded border border-green-600/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Learning Philosophy */}
          <div className="mt-16 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-8 rounded-lg border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Continuous Learning Philosophy</h3>
            <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              In the rapidly evolving blockchain space, continuous learning is essential. I stay updated with the latest 
              developments through research papers, technical blogs, attending conferences, and hands-on experimentation 
              with new protocols. My goal is to bridge the gap between cutting-edge research and practical implementation.
            </p>
            <div className="flex justify-center mt-6 space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <FaBook size={16} className="mr-2 text-cyan-400" />
                <span>Weekly Research</span>
              </div>
              <div className="flex items-center">
                <FaCode size={16} className="mr-2 text-purple-400" />
                <span>Hands-on Learning</span>
              </div>
              <div className="flex items-center">
                <FaUsers size={16} className="mr-2 text-green-400" />
                <span>Community Engagement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;