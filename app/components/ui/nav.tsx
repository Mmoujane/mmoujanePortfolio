'use client'

import React, { useState } from 'react';
import Button from './button';
import { FiHome, FiCode, FiBriefcase, FiBookOpen, FiUser, FiX, FiMenu } from 'react-icons/fi';
import { FaAward, FaBook, FaGraduationCap } from 'react-icons/fa';

const navItems = [
  { key: 'home', label: 'Home', icon: FiHome },
  { key: 'portfolio', label: 'Portfolio', icon: FiCode },
  { key: 'education', label: 'education', icon: FaGraduationCap },
  { key: 'experience', label: 'Experience', icon: FiBriefcase },
  { key: 'blog', label: 'Blog', icon: FiBookOpen },
  { key: 'about', label: 'About', icon: FiUser },
];

const Nav: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                mmoujane
              </h1>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navItems.map(({ key, label, icon }) => (
                  <Button
                    key={key}
                    label={label}
                    icon={icon}
                    isActive={currentPage === key}
                    href={`#${key}`}
                    onClick={() => setCurrentPage(key)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            {navItems.map(({ key, label, icon }) => (
              <Button
                key={key}
                label={label}
                icon={icon}
                isActive={currentPage === key}
                href={`#${key}`}
                onClick={() => {
                  setCurrentPage(key);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left"
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;