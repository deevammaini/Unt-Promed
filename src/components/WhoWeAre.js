import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const WhoWeAre = () => {
  const { i18n } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const imagePath = i18n.language === 'ar' 
    ? `${process.env.PUBLIC_URL}/WhoWeAre-ar.png`
    : `${process.env.PUBLIC_URL}/WhoWeAre-ENG.png`;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive image size based on your measurements
  const getImageStyles = () => {
    if (windowWidth < 768) { // Mobile
      return {
        width: '100%',
        maxWidth: '100%',
        padding: '0 20px'
      };
    } else if (windowWidth < 1024) { // Tablet
      return {
        width: '100%',
        maxWidth: '800px',
        padding: '0 40px'
      };
    } else { // Desktop
      return {
        width: '100%',
        maxWidth: '1800px', // Your measurement
        padding: '0 240px',
        left : '100px'
      };
    }
  };

  const imageStyles = getImageStyles();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: windowWidth < 768 ? '400px' : '600px',
      backgroundColor: 'transparent'
    }}>
      <img
        src={imagePath}
        alt="Who We Are"
        style={{
          width: imageStyles.width,
          maxWidth: imageStyles.maxWidth,
          height: 'auto',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          padding: imageStyles.padding
        }}
      />
    </div>
  );
};

export default WhoWeAre;