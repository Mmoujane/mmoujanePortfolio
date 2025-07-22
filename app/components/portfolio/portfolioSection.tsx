import { FiGithub, FiExternalLink } from 'react-icons/fi';


// Sample data
const projects = [
    {
      id: 1,
      title: "EcoLink",
      description: "A Web3-powered platform that rewards individuals in underserved regions for verifiable eco-friendly actions, connecting local environmental stewardship to global carbon credit markets.",
      image: "/general/ecolink.png",
      technologies: ["Solidity", "next.js", "ether.js", "Ethereum", "ERC20", "ERC721", "IPFS", "OpenZeppelin"],
      demoUrl: "",
      githubUrl: "https://github.com/Mmoujane/EcoLink",
      contractAddress: "",
      blockchain: "Ethereum"
    },
    {
      id: 2,
      title: "ChainyVote",
      description: "A decentralized voting application built using Solidity, Ethers.js, and React. Designed as a tutorial for developers learning blockchain development and smart contract integration.",
      image: "/general/vote.png",
      technologies: ["Solidity", "React.js", "OpenZeppelin", "ethereum", "ether.js"],
      demoUrl: "",
      githubUrl: "https://github.com/chainyblock/VotingDapp",
      contractAddress: "",
      blockchain: "Ethereum"
    }
  ];

  
const PortfolioSection: React.FC = () => {

  return (
    <section className="py-20 bg-gray-800" id='portfolio'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest blockchain projects and decentralized applications built with cutting-edge technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-cyan-600 text-white rounded-full">
                    {project.blockchain}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.demoUrl}
                    className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    <FiExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 text-sm"
                  >
                    <FiGithub size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;