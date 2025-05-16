import React from 'react';

const ContactLink = ({ icon, text, href, label }) => {
  return (
    <a 
      href={href}
      aria-label={label}
      className="group flex items-center mb-6 hover:text-neon-green transition-colors duration-300"
      target="_blank"
      rel="noreferrer"
    >
      <div className="w-12 h-12 flex items-center justify-center mr-4 rounded-full bg-dark-100 border border-neon-green/30 group-hover:border-neon-green/80 group-hover:shadow-glow transition-all duration-300">
        {icon}
      </div>
      <div>
        <span className="text-lg relative inline-block">
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300"></span>
        </span>
      </div>
    </a>
  );
};

const SocialButton = ({ icon, href, label }) => {
  return (
    <a 
      href={href}
      aria-label={label}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-100 border border-neon-green/30 hover:border-neon-green hover:shadow-glow transition-all duration-300 text-neon-green"
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>,
      text: "spriyad.inf@gmail.com",
      href: "mailto:spriyad.inf@gmail.com",
      label: "Email me"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>,
      text: "(+44) 739 294 64 87",
      href: "tel:+447392946487",
      label: "Call me"
    }
  ];
  
  const socialLinks = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>,
      href: "https://github.com/sathishkapriyad",
      label: "GitHub"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>,
      href: "https://www.linkedin.com/in/sathishka-priyad/",
      label: "LinkedIn"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>,
      href: "https://twitter.com/devinbrit",
      label: "Twitter"
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-dark-50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-neon-green opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-green opacity-5 blur-3xl rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let&apos;s Work <span className="title-gradient">Together</span>
            </h2>
            <p className="text-light/70 max-w-2xl mx-auto">I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
          </div>
          
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact info */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                {/* Contact links */}
                <div className="mb-8">
                  {contactInfo.map((contact, index) => (
                    <ContactLink key={index} {...contact} />
                  ))}
                </div>
                
                {/* Social media */}
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <SocialButton key={index} {...social} />
                  ))}
                </div>
              </div>
              
              {/* Simple form */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-light/80 mb-1 text-sm">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-100 text-light focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-light/80 mb-1 text-sm">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-100 text-light focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-light/80 mb-1 text-sm">Message</label>
                    <textarea 
                      id="message" 
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-100 text-light focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 