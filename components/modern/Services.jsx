import React from 'react';

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="neo-card card-hover group cursor-pointer"
      style={{ 
        animationDelay: `${delay}ms`,
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'all 0.5s ease-out'
      }}
    >
      <div className="flex flex-col items-center">
        {/* Icon with glow effect */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-dark-100 mb-6 group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute inset-0 rounded-full bg-neon-green/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="text-3xl relative z-10 text-neon-green">{icon}</span>
        </div>
        
        {/* Title with underline effect */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-neon-green transition-colors duration-300">
          {title}
          <div className="h-0.5 w-0 bg-neon-green mt-1 group-hover:w-full transition-all duration-300 mx-auto"></div>
        </h3>
        
        {/* Description */}
        <p className="text-light/70 text-center">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that provide exceptional user experiences.",
      delay: 0
    },
    {
      icon: "⚛️",
      title: "Web Development",
      description: "Building responsive, fast, and scalable web applications using modern frameworks and technologies.",
      delay: 200
    },
    {
      icon: "🧠",
      title: "ML Development",
      description: "Developing machine learning models and AI-powered solutions to solve complex business problems.",
      delay: 400
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-dark relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark-50 to-transparent opacity-50"></div>
      
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="title-gradient text-3xl md:text-5xl font-bold mb-4">What I Offer</h2>
          <p className="text-light/70 max-w-2xl mx-auto">Specialized services tailored to meet your digital needs and drive your business forward.</p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn btn-outline">
            Discuss Your Project
          </a>
        </div>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-dark-50">
          <path d="M0,32L40,48C80,64,160,96,240,96C320,96,400,64,480,48C560,32,640,32,720,42.7C800,53,880,75,960,74.7C1040,75,1120,53,1200,42.7C1280,32,1360,32,1400,32L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Services; 