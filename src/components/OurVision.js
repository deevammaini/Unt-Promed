import React from 'react';
import './OurVision.css';
import { useTranslation } from 'react-i18next';

const OurVision = () => {
  const { i18n } = useTranslation();
  const imageSrc = i18n.language === 'ar'
    ? `${process.env.PUBLIC_URL}/Our Vision-AR.png`
    : `${process.env.PUBLIC_URL}/Our Vision.png`;

  return (
    <section className="our-vision">
      <div className="our-vision-container">
        <div className="vision-card-image">
          <img
            src={imageSrc}
            alt="Our Vision"
            className="vision-background-image"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '24px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;