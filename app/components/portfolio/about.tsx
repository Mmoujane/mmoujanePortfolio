import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const About: React.FC = () => {

  return (
    <section className="py-20 bg-gray-800" id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I&apos;m a passionate blockchain developer with 3+ years of experience building decentralized applications 
              and smart contracts. My journey in Web3 started with a fascination for how blockchain technology 
              can reshape traditional finance and create new opportunities for innovation.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in Ethereum development, DeFi protocols, and creating user-friendly Web3 interfaces. 
              When I&apos;m not coding, you&apos;ll find me exploring the latest in crypto research, contributing to 
              open-source projects, or writing about blockchain technology.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Solidity", "React", "Node.js", "Web3.js", "TypeScript", "Python", "Hardhat"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 text-cyan-400 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex space-x-4 mb-8">
              <Link href="https://www.linkedin.com/in/marwan-moujane-400799322/" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105">
                Let&apos;s Connect
              </Link>
              <a href="/general/CV.pdf"
                download className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-6 py-3 rounded-md font-medium transition-colors">
                Download CV
              </a>
            </div>
            {/* Contact Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
              <div className="flex flex-col gap-3 text-gray-300">
                <a href="mailto:moujane16marwane@gmail.com" className="flex items-center hover:text-cyan-400 transition-colors">
                  <FiMail className="mr-2" size={20} /> moujane16marwane@gmail.com
                </a>
                <a href="https://github.com/mmoujane" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors">
                  <FiGithub className="mr-2" size={20} /> github.com/mmoujane
                </a>
                <a href="https://www.linkedin.com/in/marwan-moujane-400799322/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors">
                  <FiLinkedin className="mr-2" size={20} /> linkedin.com/in/marwan-moujane
                </a>
                <a href="https://x.com/moujane73982" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors">
                  <FiTwitter className="mr-2" size={20} /> twitter.com/mmoujane
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/20">
              <Image 
                src="/general/me_linkedin.jpg" 
                alt="Profile photo of Marwan Moujane"
                width={500}
                height={600}
                className="w-full rounded-lg"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;