import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-8 border-t border-dark-100">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img 
              src="/dark/assets/imgs/logo-light.png" 
              alt="Dev In Brit" 
              className="h-12 object-contain"
            />
          </div>
          
          {/* Copyright */}
          <div className="text-light/60 text-sm">
            © {currentYear} <span className="text-neon-green">devinbrit.co.uk</span>. All rights reserved.
          </div>
          
          {/* Back to top */}
          <div className="mt-6 md:mt-0">
            <a 
              href="#" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-100 text-neon-green hover:bg-neon-green hover:text-dark transition-colors duration-300"
              aria-label="Back to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 