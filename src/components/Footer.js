import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <footer
      className="footer"
      style={{
        width: '100%',
        background: '#0E1750',
        textAlign: 'center',
        padding: 0,
        position: 'relative'
      }}
    >

      {/* Footer Image */}
      <img
        src={
          i18n.language === 'ar'
            ? `${process.env.PUBLIC_URL}/Footer-AR.png`
            : `${process.env.PUBLIC_URL}/Footer-Eng.png`
        }
        alt="Footer"
        style={{
          width: '100%',
          maxWidth: '1920px',
          height: 'auto',
          display: 'block',
          margin: '0 auto'
        }}
      />
    </footer>
  );
};

export default Footer;
