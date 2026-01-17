import React, { useState, useEffect } from 'react';
import './Navbar.css';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';
import imagelogotababati from '../../assets/images/Asset 7@4x.png';

const Navbar = ({ language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const translations = language === 'ar' ? arTranslations : enTranslations;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    onLanguageChange(newLang);
  };

  return (
    <nav className={`navbar ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="navbar-container">
        {/* Logo/Brand on the left */}
        <div className="navbar-brand">
          <img 
            src={imagelogotababati} 
            alt="Tababati Logo" 
            className="navbar-logo"
          />
        </div>

        {/* Navigation and language switcher on the right */}
        <div className="navbar-right-group">
          {/* Desktop Navigation Menu - Now on the right side */}
          <div className="navbar-menu desktop-menu">
            <ul className="nav-links">
              <li><a href="#" className="nav-link">{translations.nav.home}</a></li>
              <li><a href="#" className="nav-link">{translations.nav.findDoctor}</a></li>
              <li><a href="#" className="nav-link">{translations.nav.hospitals}</a></li>
              <li><a href="#" className="nav-link">{translations.nav.centers}</a></li>
              <li><a href="#" className="nav-link">{translations.nav.forDoctors}</a></li>
            </ul>
          </div>

          {/* Language Switcher */}
          <div className="language-switcher">
            <button 
              className="lang-btn"
              onClick={handleLanguageChange}
              aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#" className="nav-link">{translations.nav.home}</a></li>
            <li><a href="#" className="nav-link">{translations.nav.findDoctor}</a></li>
            <li><a href="#" className="nav-link">{translations.nav.hospitals}</a></li>
            <li><a href="#" className="nav-link">{translations.nav.centers}</a></li>
            <li><a href="#" className="nav-link">{translations.nav.forDoctors}</a></li>
            <li className="language-mobile">
              <button 
                className="lang-btn"
                onClick={handleLanguageChange}
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  