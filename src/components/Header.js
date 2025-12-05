import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 14px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(14, 23, 80, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
          font-size: 16px;
        }

        .header-container {
          max-width: 1920px;
          width: 100%;
          padding: 0 240px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .header-logo {
          display: flex;
          align-items: center;
        }

        .logo-image {
          height: auto;
          max-height: 100px;
          width: auto;
          display: block;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .language-selector {
          position: relative;
        }

        .language-selector::after {
          content: '';
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 6px solid #0E1750;
          pointer-events: none;
          z-index: 1;
        }

        .language-dropdown {
          background: linear-gradient(135deg, #74FBC0 0%, #5CE6B0 100%) !important;
          color: #0E1750;
          border: none;
          padding: 12px 32px;
          border-radius: 50px;
          font-size: 1em;
          font-weight: 600;
          cursor: pointer;
          outline: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(116, 251, 192, 0.3);
          width: 100%;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }

        .language-dropdown:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(116, 251, 192, 0.4);
        }

        .language-dropdown:active {
          transform: translateY(0);
        }

        .language-dropdown:focus {
          box-shadow: 0 4px 15px rgba(116, 251, 192, 0.3), 0 0 0 2px rgba(116, 251, 192, 0.2);
        }

        .language-dropdown option {
          background: #FFFFFF;
          color: #0E1750;
          padding: 8px 12px;
          font-weight: 500;
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }

        .contact-button {
          background: linear-gradient(135deg, #74FBC0 0%, #5CE6B0 100%);
          color: #0E1750;
          border: none;
          padding: 12px 32px;
          border-radius: 50px;
          font-size: 1em;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(116, 251, 192, 0.3);
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }

        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(116, 251, 192, 0.4);
        }

        .contact-button:active {
          transform: translateY(0);
        }

        @media (max-width: 1200px) {
          .header-container {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (max-width: 768px) {
          .header {
            padding: 15px 0;
          }

          .header-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .logo-image {
            max-height: 80px;
          }

          .contact-button {
            padding: 10px 24px;
            font-size: 0.875em;
          }

          .header-right {
            gap: 15px;
          }

          .language-dropdown {
            padding: 10px 24px;
            font-size: 0.875em;
          }

          .language-selector::after {
            right: 8px;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            border-top: 5px solid #0E1750;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <img
              src={`${process.env.PUBLIC_URL}/logo-img.png`}
              alt="UPM Logo"
              className="logo-image"
            />
          </div>

          <div className="header-right">
            <div className="language-selector">
              <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="language-dropdown"
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>

            <button className="contact-button" onClick={scrollToContact}>
              {t('header.contactUs')}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;