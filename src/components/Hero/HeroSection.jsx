import React from 'react';
import './HeroSection.css';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';
import laptopImage from '../../assets/images/Hero/laptop-image.png'; // Use your actual image here

const HeroSection = ({ language }) => {
  const translations = language === 'ar' ? arTranslations : enTranslations;

  return (
    <section className={`hero-outer-container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="hero-teal-card">
        <div className="hero-content">
          <h1 className="hero-title">
            {translations.hero.title || "A platform that brings together doctors and patients in one place"}
          </h1>
          
          <div className="hero-description">
            <p>
              {translations.hero.subtitle || "Find a reliable doctor/ hospitals / centers, book your appointment easily,"}
            </p>
            <p>
              {translations.hero.orJoin || "or join as a doctor and start seeing your patients in a smarter way."}
            </p>
          </div>

          <div className="hero-action-buttons">
            <button className="btn-client">
              {translations.hero.forClient || "client"}
            </button>
            <button className="btn-doctor">
              {translations.hero.forDoctor || "doctor / hospitals / centers"}
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <img src={laptopImage} alt="Laptop Mockup" className="laptop-img" />
          <div className="laptop-placeholder">
             {/* This represents the laptop/mobile mockup from your image */}
             <div className="mockup-elements">
                <div className="laptop-shape"></div>
                <div className="mobile-shape"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;