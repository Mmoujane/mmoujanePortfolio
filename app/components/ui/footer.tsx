import { FiChevronRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer: React.FC = () => {

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              mmoujane
            </h3>
            <p className="text-gray-400 mt-1">Building the decentralized future</p>
          </div>
          <div className="flex space-x-6">
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
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 mmoujane Portfolio. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;