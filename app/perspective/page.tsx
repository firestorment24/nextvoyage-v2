import React from 'react';

const PerspectivePage = () => {  
  const articles = [  
    {  
      category: 'Editorial',  
      title: 'The Silent ROI: Why Disconnection is the Ultimate Asset',  
      excerpt: 'In a world of constant noise, the ability to truly vanish has become the rarest luxury. We explore the cognitive benefits of the deep reset.',  
      date: 'May 2026'  
    },  
    {  
      category: 'Sanctuary Study',  
      title: 'Architecture of Calm: The Minimalist Alpinist',  
      excerpt: 'How geometric precision and high-altitude isolation create the perfect environment for strategic clarity.',  
      date: 'April 2026'  
    },  
    {  
      category: 'Intellectual Travel',  
      title: 'The Curated Horizon',  
      excerpt: 'A study on why the visual environment of a destination dictates the quality of the insights you return with.',  
      date: 'March 2026'  
    }  
  ];

  return (  
    <div className="bg-white text-[#1a1a1a] font-sans min-h-screen">  
      {/* Navigation */}  
      <nav className="flex justify-between items-center px-8 py-10 uppercase tracking-[0.2em] text-[10px] border-b border-gray-50">  
        <div className="font-bold"><a href="/">NexVoyage Collective</a></div>  
        <div className="space-x-8">  
          <a href="/archive" className="hover:text-gray-400 transition-colors">The Archive</a>  
          <a href="/perspective" className="text-gray-400">The Perspective</a>  
          <a href="/reserve" className="hover:text-gray-400 transition-colors border border-black px-4 py-2">The Reserve</a>  
        </div>  
      </nav>

      {/* Header */}  
      <header className="py-24 px-8 max-w-4xl mx-auto text-center border-b border-gray-50">  
        <h1 className="text-4xl md:text-6xl font-serif italic mb-6">The Perspective</h1>  
        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Intellectual Insights & Observations</p>  
      </header>

      {/* Featured Article (Hero Layout) */}  
      <section className="py-24 px-8 max-w-5xl mx-auto border-b border-gray-50">  
        <div className="text-center group cursor-pointer">  
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-6 block">{articles[0].category}</span>  
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8 group-hover:italic transition-all duration-500">  
            {articles[0].title}  
          </h2>  
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">  
            {articles[0].excerpt}  
          </p>  
          <span className="text-[10px] uppercase tracking-widest border-b border-black pb-1">Read Perspective</span>  
        </div>  
      </section>

      {/* Secondary Articles Grid */}  
      <section className="py-24 px-8 max-w-6xl mx-auto">  
        <div className="grid md:grid-cols-2 gap-20">  
          {articles.slice(1).map((post) => (  
            <div key={post.title} className="group cursor-pointer">  
              <div className="aspect-video bg-[#fafafa] mb-10 overflow-hidden" />  
              <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4 block">{post.category}</span>  
              <h3 className="text-2xl font-serif mb-4 group-hover:italic transition-all duration-500">{post.title}</h3>  
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">  
                {post.excerpt}  
              </p>  
              <div className="text-[9px] uppercase tracking-widest text-gray-400">{post.date}</div>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="py-20 px-8 border-t border-gray-100 text-center">  
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">  
          © 2026 NexVoyage Collective. All Rights Reserved.  
        </div>  
      </footer>  
    </div>  
  );  
};

export default PerspectivePage;  
