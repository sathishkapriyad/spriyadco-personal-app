import React from 'react';

const BlogCard = ({ image, title, excerpt, date, readTime, category, link }) => {
  return (
    <div className="card card-hover overflow-hidden group">
      {/* Image container with hover effect */}
      <div className="relative overflow-hidden h-60">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-neon-green text-dark shadow-glow">
            {category}
          </span>
        </div>
        
        {/* Reading time */}
        <div className="absolute bottom-4 right-4 text-xs text-light/90 bg-dark/70 px-2 py-1 rounded-md backdrop-blur-sm">
          {readTime} min read
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-3">
          {/* Author image placeholder (can be replaced with actual avatar) */}
          <div className="w-8 h-8 rounded-full bg-dark-100 flex items-center justify-center border border-neon-green/30 mr-3">
            <span className="text-neon-green text-xs">SP</span>
          </div>
          
          {/* Date */}
          <span className="text-light/60 text-sm">{date}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-neon-green transition-colors">
          {title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-light/70 mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        {/* Read more link */}
        <a 
          href={link} 
          className="inline-flex items-center text-neon-green hover:underline"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const articles = [
    {
      image: "/dark/assets/imgs/blog/1.jpg",
      title: "The Evolution of Frontend Development",
      excerpt: "Exploring how frontend development has transformed over the years and where it's headed next.",
      date: "May 15, 2023",
      readTime: "8",
      category: "Development",
      link: "#"
    },
    {
      image: "/dark/assets/imgs/blog/2.jpg",
      title: "Integrating AI into Modern Web Applications",
      excerpt: "A practical guide to incorporating artificial intelligence into your web applications.",
      date: "April 22, 2023",
      readTime: "12",
      category: "AI",
      link: "#"
    },
    {
      image: "/dark/assets/imgs/blog/3.jpg",
      title: "Optimizing Performance with React and Next.js",
      excerpt: "Best practices for creating lightning-fast user experiences with React and Next.js.",
      date: "March 8, 2023",
      readTime: "10",
      category: "Performance",
      link: "#"
    }
  ];
  
  return (
    <section id="blog" className="py-20 bg-dark relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark-50 to-transparent opacity-30"></div>
      
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="title-gradient text-3xl md:text-5xl font-bold mb-4">Read Latest Articles</h2>
          <p className="text-light/70 max-w-2xl mx-auto">Insights, tutorials, and thoughts on development, design, and technology.</p>
        </div>
        
        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <BlogCard key={index} {...article} />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <a href="/blog" className="btn btn-outline">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog; 