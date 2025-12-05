import React, { useEffect, useState } from 'react';
import './IndustriesWeServe.css';
import { useTranslation } from 'react-i18next';

const IndustriesWeServe = () => {
  const { i18n } = useTranslation();
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const language = i18n.language;
    const baseImage = 'IndustriesWeServe';
    const ext = '.png';
    const imagePath = language === 'ar'
      ? `${process.env.PUBLIC_URL}/IndustriesWeServe-AR.png`
      : `${process.env.PUBLIC_URL}/${baseImage}${ext}`;
    setImageSrc(imagePath);
  }, [i18n.language]);

  return (
    <section className="industries-we-serve">
      <div className="industries-container animate-on-scroll" data-animation="slide-in-left">
        <div className="industries-image-wrapper">
          {imageSrc && <img 
            src={imageSrc}
            alt=""
            className="industries-image"
          />}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;

