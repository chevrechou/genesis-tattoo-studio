import React, { useEffect, useRef } from 'react';
import './Home.css';
import About from '../About/About';
import Artists from '../Artists/Artists';
import FAQ from '../FAQ/FAQ';

export default function Home() {
  const columnsRef = useRef(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const yOffset = -80; // adjust to match navbar height
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const columns = columnsRef.current?.children;
      if (columns) {
        [...columns].forEach((col, i) => {
          const direction = i % 2 === 0 ? 1 : -1;
          col.style.transform = `translateY(${scrollY * 0.05 * direction}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const artists = [
    '/h1.jpg',
    '/h2.jpg',
    '/h3.jpg',
    '/h4.jpg',
    '/h5.jpg',
    '/h3.jpg'
  ];

  return (
    <>
      <div className="home-wrapper">
        <div className="columns" ref={columnsRef}>
          {artists.map((img, i) => (
            <div key={i} className="artist-column" style={{ backgroundImage: `url(${img})` }}></div>
          ))}
        </div>
        <div className="center-text">
          <h1 className="studio-name">Genesis</h1>
          <h2 className="tagline">TATTOO STUDIO</h2>
        </div>
        <div className="scroll-arrow" onClick={scrollToAbout}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <About />
      <Artists />
      <FAQ/>
    </>
  );
}
