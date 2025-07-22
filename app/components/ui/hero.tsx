import { FiChevronRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero: React.FC = () => {

  return (
    
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20 py-20" id='home'>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Building the
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Future </span>
              with Blockchain
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-stack blockchain developer specializing in DeFi protocols, smart contracts, and Web3 applications. 
              Passionate about creating decentralized solutions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105 flex items-center space-x-2">
                <a href='#portfolio'>View My Work</a>
                <FiChevronRight size={16} />
              </button>
              <a
                href="/general/CV.pdf"
                download
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-md font-medium transition-colors inline-block text-center"
              >
                Download Resume
              </a>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              {[
                { icon: FiGithub, href: "https://github.com/Mmoujane" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/marwan-moujane-400799322/" },
                { icon: FiTwitter, href: "https://x.com/moujane73982" }
              ].map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Hero;