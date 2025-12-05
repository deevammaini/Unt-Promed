import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

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

        /* --------------------------
           RTL (Arabic) layout fixes
           -------------------------- */
        html[lang="ar"] .hero-container {
          flex-direction: row-reverse; /* logo left, text right */
          padding-left: 240px !important;
          padding-right: 310px !important;
          text-align: right;
        }

        /* make the text block a bit narrower and push it slightly inward
           so it matches Figma spacing for the Arabic hero */
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 44%;
          max-width: 620px;
        }

        html[lang="ar"] .hero-content {
          align-items: flex-end;    /* right-align content in RTL */
          margin-right: 80px;       /* pushes content leftward a bit to match design */
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .title-main {
          font-size: 64px;
          font-weight: 700;
          color: #74FBC0;
          line-height: 1.05;
          white-space: pre-line;
        }

        .title-subtitle {
          font-size: 32px;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.35;
        }

        .highlight {
          color: #74FBC0;
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.8;
          color: #e0e0e0;
          margin-top: 6px;
          max-width: 520px;
        }

        /* Make description width a little smaller in RTL so lines match Figma */
        html[lang="ar"] .hero-description {
          max-width: 520px;
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
          margin-top: 10px;
          position: relative;
          overflow: hidden;
          align-self: flex-start; /* default for LTR: keep button left under text column */
        }

        /* In RTL, align CTA to the right edge of the text column so it sits under the heading */
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
          margin-top: 30px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
        }

        .feature-line {
          width: 100px;
          height: 2px;
          background: rgba(255, 255, 255, 0.25);
          flex-shrink: 0;
        }

        .feature-text-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .feature-text {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.6;
          margin: 0;
        }

        /* Adjust feature layout for Arabic:
           keep small horizontal line visually to the left of the feature text (as in Figma),
           but because container is row-reverse we force ordering so it appears correctly. */
        html[lang="ar"] .hero-features {
          /* keep internal order left->right as line then text so the line stays on left side */
          flex-direction: row;
          justify-content: flex-start;
        }

        /* to ensure the little line isn't too far from the text in RTL */
        html[lang="ar"] .feature-line {
          margin-left: 0;
          margin-right: 8px;
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

        /* Responsive */
        @media (max-width: 1200px) {
          .hero-container {
            padding-left: 40px;
            padding-right: 40px;
            flex-direction: column;
            text-align: center;
          }

          .hero-content {
            width: 100%;
            max-width: 800px;
            align-items: center;
            margin-right: 0;
          }

          html[lang="ar"] .hero-content {
            align-items: center !important;
            text-align: center !important;
          }

          .hero-logo-large {
            display: none;
          }

          .title-main {
            font-size: 48px;
          }

          .title-subtitle {
            font-size: 24px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 0 60px;
          }

          .hero-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .title-main {
            font-size: 36px;
          }

          .title-subtitle {
            font-size: 20px;
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-cta-button {
            padding: 16px 36px;
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
