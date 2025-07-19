import React from 'react';

// You can use an icon library like 'react-icons' for cleaner code
// Example: import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  // Helper component for social media icons to keep the code clean
  const SocialIcon: React.FC<{ href: string; path: string }> = ({ href, path }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  );

  return (
    <footer style={{ backgroundColor: '#D9A299' }} className="w-full text-white shadow-inner">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Brand and Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Ragis Telecom and Services Pvt. Ltd.</h3>
            <p className="text-sm text-white/80 text-center md:text-left mb-4">
              Your trusted partner in fiber optic and network solutions.
            </p>
            <div className="flex space-x-4">
              {/* Example SVGs for social icons. Replace with your actual links. */}
              <SocialIcon href="#" path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> {/* Facebook */}
              <SocialIcon href="#" path="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /> {/* Twitter */}
              <SocialIcon href="#" path="M16 8a6 6 0 01-12 0c0-1.8.8-3.4 2-4.5V1h2v2.5a4 4 0 104 4zM12 2a10 10 0 100 20 10 10 0 000-20zm-1 15v-4a1 1 0 011-1h2a1 1 0 110 2h-1v2a1 1 0 11-2 0z" /> {/* LinkedIn */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-center">
              <li><a href="/" className="hover:underline text-white/80">Home</a></li>
              <li><a href="/products" className="hover:underline text-white/80">Products</a></li>
              <li><a href="/about" className="hover:underline text-white/80">About Us</a></li>
              <li><a href="/contact" className="hover:underline text-white/80">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="text-center md:text-right text-white/80">
              <p>Ambernath, Maharashtra, India</p>
              <p>Email: contact@ragassolutions.com</p>
              <p>Phone: +91 12345 67890</p>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Ragas Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;