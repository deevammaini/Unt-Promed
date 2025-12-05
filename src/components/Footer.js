import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <footer className="footer" style={{ width: '100%', background: '#0E1750', textAlign: 'center', padding: 0, position: 'relative' }}>
      {/* Logo positioned in top left as in Figma - Only shown in English */}
      {i18n.language !== 'ar' && (
        <img
          src={`${process.env.PUBLIC_URL}/logo-img.png`}
          alt="United Pro Med Logo"
          style={{
            position: 'absolute',
            top: '40px',
            left: '240px',
            height: '150px',
            width: 'auto',
            zIndex: 10,
            objectFit: 'contain',
          }}
        />
      )}
      
      {/* Existing footer image */}
      <img
        src={i18n.language === 'ar'
          ? `${process.env.PUBLIC_URL}/Footer-AR.png`
          : `${process.env.PUBLIC_URL}/Footer.png`}
        alt="Footer"
        style={{ width: '100%', maxWidth: '1920px', height: 'auto', display: 'block', margin: '0 auto' }}
      />
    </footer>
  );
};

export default Footer;