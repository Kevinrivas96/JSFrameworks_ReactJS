import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleTMDBClick = () => {
    window.open('https://www.themoviedb.org/', '_blank');
  };

  const handleAlexClick = () => {
    window.open('https://github.com/feldmansasha', '_blank');
  };

  const handleDeepClick = () => {
    window.open('https://github.com/DeepBwas', '_blank');
  };

  const handleKevinClick = () => {
    window.open('https://github.com/Kevinrivas96', '_blank');
  };

  const handleRichardClick = () => {
    window.open('https://github.com/Richard-LeBlanc', '_blank');
  };

  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <p className="fs-8 mb-2">
          &copy; {currentYear} CineSearch. All rights reserved.
          <br />
          <span className="badge rounded-pill name-pill mx-1" onClick={handleAlexClick} style={{cursor: 'pointer'}}>Alex</span>
          <span className="badge rounded-pill name-pill mx-1" onClick={handleDeepClick} style={{cursor: 'pointer'}}>Deep</span>
          <span className="badge rounded-pill name-pill mx-1" onClick={handleKevinClick} style={{cursor: 'pointer'}}>Kevin</span>
          <span className="badge rounded-pill name-pill mx-1" onClick={handleRichardClick} style={{cursor: 'pointer'}}>Richard</span>
        </p>
        <p className="fs-6 mb-1">Powered by</p>
        <img
          src="/src/assets/tmdb.svg"
          alt="The Movie Database"
          style={{ width: "200px", cursor: "pointer" }}
          onClick={handleTMDBClick}
        />
      </div>
    </footer>
  );
};

export default Footer;