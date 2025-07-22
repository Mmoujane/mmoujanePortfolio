import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

const experiences = [
    {
      id: 1,
      company: "ChainyBlock for blockchain education",
      position: "admin and founder",
      startDate: "2025-05",
      endDate: null,
      current: true,
      description: "ChainyBlock is a blockchain education and advocacy initiative. our mission is to make complex Web3 technologies—including blockchain, cryptocurrencies, smart contracts, and decentralized applications—accessible to everyone, from beginners to experienced users.",
      technologies: ["Solidity", "Ethereum", "tokenomics", "Dapps", "smart contract", "ether.js", "IPFS"],
      companyUrl: "https://hashnode.com/@chainyblock"
    },
    {
      id: 2,
      company: "DLT&BLOCKCHAIN CLUB at INPT morocco",
      position: "IT manager",
      startDate: "2025-01",
      endDate: null,
      current: true,
      description: "As IT Manager of the DLT Blockchain Club at INPT, I design and develop internal tools and blockchain projects for hackatons",
      technologies: ["blockchain", "React.js", "Next.js", "node.js", "express.js", "mongodb", "SQL"],
      companyUrl: "https://www.linkedin.com/company/dbc-inpt"
    }
  ];

  
const Experience: React.FC = () => {

  return (
    <section className="py-20 bg-gray-800" id='experience'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My experience building blockchain solutions across different industries and company stages.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative flex items-start mb-8 last:mb-0">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center relative z-10">
                <FiBriefcase size={20} className="text-white" />
              </div>
              {idx < experiences.length - 1 && (
                <div className="absolute left-6 top-12 w-px h-16 bg-gray-700"></div>
              )}
              <div className="ml-6 flex-1 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <div className="flex items-center text-gray-400 text-sm mt-1 sm:mt-0">
                      <FiCalendar size={16} className="mr-1" />
                      <span>
                        {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} -
                        {exp.current
                          ? ' Present'
                          : exp.endDate
                            ? ` ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`
                            : ''}
                      </span>
                    </div>
                  </div>
                  <p className="text-cyan-400 font-medium mb-3">
                    {exp.companyUrl ? (
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:underline">
                        {exp.company}
                        <FiExternalLink className="ml-1" size={16} />
                      </a>
                    ) : (
                      exp.company
                    )}
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;