import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="contact-section text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center reveal-element">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold">
            Have a project in mind? <br />
            <span className="text-accent">Let's create something together.</span>
          </h2>
          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
            I'm always open to discussing new opportunities and collaborations. Feel free to reach out.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 max-w-3xl mx-auto stagger-children">
          <a href="mailto:ravindranathvidisha@gmail.com" className="contact-box p-6 rounded-2xl flex flex-col items-center text-center">
            <svg className="w-10 h-10 text-accent mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <p className="font-semibold text-lg text-white">Email Me</p>
            <p className="text-gray-400 mt-1 text-accent font-medium text-sm break-all">ravindranathvidisha@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/vidisha-ravindranath-0b3419187/" target="_blank" rel="noopener noreferrer" className="contact-box p-6 rounded-2xl flex flex-col items-center text-center">
            <svg className="w-10 h-10 text-accent mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            <p className="font-semibold text-lg text-white">Connect on LinkedIn</p>
            <p className="text-gray-400 mt-1 text-accent font-medium text-sm">View Profile</p>
          </a>
        </div>
        <div className="border-t border-gray-700/50 mt-24 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Vidisha Ravindranath. Designed & Built with Passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;