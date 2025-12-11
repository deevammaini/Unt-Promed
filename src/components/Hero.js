import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Set the language attribute on <html>
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = isArabic ? "ar" : "en";
    }
  }, [isArabic]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 0 80px;
          position: relative;
          margin-top: 0;
        }

        .hero-container {
          max-width: 1920px;
          width: 100%;
          margin: 0 auto;
          padding-left: 310px;
          padding-right: 240px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Desktop Arabic RTL ONLY */
        @media (min-width: 1201px) {
          html[lang="ar"] .hero-container {
            flex-direction: row;
            padding-left: 310px !important;
            padding-right: 240px !important;
          }

          html[lang="ar"] .hero-content {
            align-items: flex-end !important;
            text-align: right !important;
            margin-top: 60px !important;
          }

          html[lang="ar"] .hero-title,
          html[lang="ar"] .title-main,
          html[lang="ar"] .title-subtitle,
          html[lang="ar"] .hero-description {
            text-align: right !important;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          width: 44%;
          max-width: 520px;
          margin-top: 40px;
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          margin-top: 6px;
        }

        .title-main {
          font-size: 64px;
          font-weight: 700;
          color: #74FBC0;
          line-height: 1.05;
          white-space: normal !important;
        }

        .title-subtitle {
          font-size: 32px;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.35;
          white-space: normal !important;
        }

        .highlight {
          color: #74FBC0;
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.8;
          color: #9FA3BB;
          margin-top: 6px;
          width: 100%;
          max-width: 480px;
          white-space: normal !important;
        }

        .hero-cta-button {
          background: linear-gradient(135deg, #74FBC0 0%, #5CE6B0 100%);
          color: #0E1750;
          border: none;
          padding: 18px 48px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(116, 251, 192, 0.3);
          width: fit-content;
          margin-top: 20px;
          position: relative;
          overflow: hidden;
          align-self: flex-start;
        }

        html[lang="ar"] .hero-cta-button {
          align-self: flex-end;
        }

        .hero-cta-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .hero-cta-button:hover::before {
          width: 400px;
          height: 400px;
        }

        .hero-cta-button:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 25px rgba(116, 251, 192, 0.4);
        }

        .hero-features {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        html[lang="ar"] .feature-text-container {
          align-items: flex-end;
          text-align: right;
        }

        .feature-line {
          width: 100px;
          height: 2px;
          background: rgba(255, 255, 255, 0.25);
          flex-shrink: 0;
        }

        .feature-text {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.6;
          margin: 0;
        }

        .hero-logo-large {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
        }

        .logo-image-large {
          width: 100%;
          max-width: 500px;
          height: auto;
          object-fit: contain;
        }

        /* ------------------- MOBILE VIEW FIXED ------------------- */
        @media (max-width: 1200px) {
          .hero-container {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            text-align: center !important;
          }

          .hero-content {
            width: 100% !important;
            max-width: 800px !important;
            text-align: center !important;
            align-items: center !important;
            margin-top: 0 !important;
          }

          /* Arabic mobile = same as English mobile */
          html[lang="ar"] .hero-content,
          html[lang="ar"] .hero-title,
          html[lang="ar"] .title-main,
          html[lang="ar"] .title-subtitle,
          html[lang="ar"] .hero-description,
          html[lang="ar"] .hero-features {
            text-align: center !important;
            align-items: center !important;
          }

          .hero-logo-large {
            display: block !important;
            margin-top: 40px !important;
            width: 60% !important;
            max-width: 300px !important;
          }

          .title-main {
            font-size: 40px !important;
          }

          .title-subtitle {
            font-size: 20px !important;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 0 60px;
          }

          .title-main {
            font-size: 34px !important;
          }

          .title-subtitle {
            font-size: 18px !important;
          }

          .hero-description {
            font-size: 16px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">{t('hero.title')}</span>
              <span className="title-subtitle">{t('hero.subtitle1')}</span>
              <span className="title-subtitle">
                {t('hero.subtitle2')
                  .replace('{{highlight1}}', '')
                  .replace('{{highlight2}}', '')
                  .trim()}{' '}
                <span className="highlight">{t('hero.highlight1')}</span>{' '}
                <span className="highlight">{t('hero.highlight2')}</span>
              </span>
            </h1>

            <p className="hero-description">
              {t('hero.description')}
            </p>

            <button
              className="hero-cta-button"
              onClick={scrollToContact}
            >
              {t('hero.contactButton')}
            </button>

            <div className="hero-features">
              <div className="feature-line" />
              <div className="feature-text-container">
                <p className="feature-text">{t('hero.feature1')}</p>
                <p className="feature-text">{t('hero.feature2')}</p>
              </div>
            </div>
          </div>

          <div className="hero-logo-large">
            <img
              src={`${process.env.PUBLIC_URL}/logo-img.png`}
              alt="UPM Logo"
              className="logo-image-large"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
