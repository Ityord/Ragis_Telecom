import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// The CSS for the animation is self-contained here.
const styles = `
  .bubbles-background-wrapper {
    position: fixed; /* This is the key: it covers the entire viewport, always */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Ensures it's behind all content */
    background-color: #FAF7F3; /* The page background color is now part of the animation wrapper */
    overflow: hidden;
  }
  .bubbles-background-wrapper span {
    position: absolute;
    bottom: -150px;
    border-radius: 50%;
    background: rgba(217, 162, 153, 0.25);
    animation: rise 25s linear infinite;
  }
  .bubbles-background-wrapper span:nth-child(1) { left: 25%; width: 80px; height: 80px; animation-delay: 0s; }
  .bubbles-background-wrapper span:nth-child(2) { left: 10%; width: 20px; height: 20px; animation-delay: 2s; animation-duration: 12s; }
  .bubbles-background-wrapper span:nth-child(3) { left: 70%; width: 20px; height: 20px; animation-delay: 4s; }
  .bubbles-background-wrapper span:nth-child(4) { left: 40%; width: 60px; height: 60px; animation-delay: 0s; animation-duration: 18s; }
  .bubbles-background-wrapper span:nth-child(5) { left: 65%; width: 20px; height: 20px; animation-delay: 0s; }
  .bubbles-background-wrapper span:nth-child(6) { left: 75%; width: 110px; height: 110px; animation-delay: 3s; }
  .bubbles-background-wrapper span:nth-child(7) { left: 35%; width: 150px; height: 150px; animation-delay: 7s; }

  @keyframes rise {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
  }
`;

const Layout: React.FC = () => {
  return (
    <>
      {/* Inject the styles and render the background */}
      <style>{styles}</style>
      <div className="bubbles-background-wrapper" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, i) => <span key={i} />)}
      </div>

      {/* The main content area must have a transparent background */}
      <div className="flex flex-col min-h-screen bg-transparent">
        <Header />
        <main className="flex-grow">
          <Outlet /> {/* Renders the current page */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;