import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Ensure html lang attribute is set
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = isArabic ? 'ar' : 'en';
    }
  }, [isArabic]);

  return (
    <>
      <style>{`
        .footer {
          width: 100%;
          background: #0E1750;
          padding: 60px 240px 30px;
          position: relative;
          max-width: 1920px;
          margin: 0 auto;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
          width: 100%;
        }

        /* English Layout: Logo Left, Contact Right */
        html[lang="en"] .footer-content {
          flex-direction: row;
        }

        /* Arabic Layout: Contact Left, Logo Right */
        html[lang="ar"] .footer-content {
          flex-direction: row-reverse;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          flex: 0 0 auto;
          margin-top: -10px;
          padding-top: 0;
        }

        html[lang="ar"] .footer-left {
          align-items: flex-end;
        }

        .footer-logo {
          width: 100%;
          height: auto;
          max-width: 150px;
          margin-bottom: 6px;
          margin-top: 0;
          display: block;
          padding: 0;
          align-self: flex-start;
          object-fit: contain;
        }

        html[lang="ar"] .footer-logo {
          align-self: flex-end;
        }

        .footer-tagline {
          font-size: 16px;
          color: #ffffff;
          font-weight: 400;
          line-height: 1.5;
          margin: 0;
          text-align: center;
          max-width: 100%;
          width: 100%;
        }

        html[lang="ar"] .footer-tagline {
          text-align: center;
        }

        .footer-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;
          justify-content: flex-start;
          flex: 0 0 auto;
          margin-top: 10px;
          padding-top: 0;
        }

        html[lang="ar"] .footer-right {
          align-items: flex-end;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          flex-direction: row;
          margin-top: 0;
          padding-top: 0;
        }

        html[lang="ar"] .contact-item {
          flex-direction: row-reverse;
        }

        .contact-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          align-self: flex-start;
          margin-top: 0;
          padding: 0;
          vertical-align: top;
        }
        
        .footer-right .contact-item:first-child {
          margin-top: 0;
          padding-top: 0;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: flex-start;
          text-align: left;
        }

        html[lang="ar"] .contact-info {
          align-items: flex-end;
          text-align: right;
        }

        .contact-label {
          font-size: 14px;
          color: #ffffff;
          font-weight: 400;
          margin: 0;
          line-height: 1.4;
        }

        .contact-value {
          font-size: 16px;
          color: #ffffff;
          font-weight: 400;
          margin: 0;
          line-height: 1.4;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: 20px 0 15px;
        }

        .footer-copyright {
          text-align: center;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          padding: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 1200px) {
          .footer {
            padding: 50px 40px 30px;
          }

          .footer-logo {
            max-width: 140px !important;
            width: auto !important;
          }

          .footer-content {
            flex-direction: column !important;
            align-items: center !important;
            gap: 40px;
          }

          .footer-left {
            align-items: center !important;
            margin-top: 0 !important;
          }

          html[lang="ar"] .footer-left {
            align-items: center !important;
            margin-top: 0 !important;
          }

          .footer-right {
            align-items: center !important;
            margin-top: 0 !important;
          }

          html[lang="ar"] .footer-right {
            align-items: center !important;
            margin-top: 0 !important;
          }

          .footer-tagline,
          html[lang="ar"] .footer-tagline {
            text-align: center !important;
          }

          .contact-item {
            flex-direction: row !important;
            justify-content: flex-start;
            align-items: flex-start !important;
            width: 100%;
            max-width: 300px;
          }

          html[lang="ar"] .contact-item {
            flex-direction: row-reverse !important;
            justify-content: flex-end;
            align-items: flex-start !important;
            width: 100%;
            max-width: 300px;
          }

          .contact-icon {
            align-self: flex-start !important;
            margin-top: 0 !important;
            flex-shrink: 0;
          }

          .contact-info {
            align-items: flex-start !important;
            text-align: left !important;
          }

          html[lang="ar"] .contact-info {
            align-items: flex-end !important;
            text-align: right !important;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 20px 20px;
          }

          .footer-logo {
            max-width: 240px !important;
            width: auto !important;
          }

          .footer-tagline {
            font-size: 14px;
          }

          .contact-item {
            justify-content: flex-start !important;
            align-items: flex-start !important;
          }

          html[lang="ar"] .contact-item {
            justify-content: flex-end !important;
            align-items: flex-start !important;
          }

          .contact-icon {
            align-self: flex-start !important;
            margin-top: 0 !important;
          }

          .contact-label {
            font-size: 12px;
          }

          .contact-value {
            font-size: 14px;
          }

          .footer-copyright {
            font-size: 12px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-content">
          {/* Left Section - Logo and Tagline */}
          <div className="footer-left">
            <img
              src={`${process.env.PUBLIC_URL}/logo-img.png`}
              alt="United Pro Med Logo"
              className="footer-logo"
            />
            <p className="footer-tagline">
              {i18n.language === 'ar' ? (
                <>
                  شريكك الموثوق<br />
                  للمستلزمات الطبية
                </>
              ) : (
                <>
                  Your Trusted Partner<br />
                  for Medical Supplies
                </>
              )}
            </p>
          </div>

          {/* Right Section - Contact Information */}
          <div className="footer-right">
            <div className="contact-item">
              <img
                src={`${process.env.PUBLIC_URL}/Icon.png`}
                alt="Phone"
                className="contact-icon"
              />
              <div className="contact-info">
                <p className="contact-label">{t('footer.phoneLabel')}</p>
                <p className="contact-value">+971 56 430 0761</p>
              </div>
            </div>
            <div className="contact-item">
              <img
                src={`${process.env.PUBLIC_URL}/mail.png`}
                alt="Email"
                className="contact-icon"
              />
              <div className="contact-info">
                <p className="contact-label">{t('footer.emailLabel')}</p>
                <p className="contact-value">info@untpromed.ae</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <p className="footer-copyright">
          {t('footer.copyright')}
        </p>
      </footer>
    </>
  );
};

export default Footer;
