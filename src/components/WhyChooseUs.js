import React, { useEffect, useState } from 'react';
import './WhyChooseUs.css';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t, i18n } = useTranslation();
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const language = i18n.language;
    const baseImage = 'WhychooseUS';
    const ext = '.png';
    const imagePath = language === 'ar'
      ? `${process.env.PUBLIC_URL}/WhyChooseUs-AR.png`
      : `${process.env.PUBLIC_URL}/${baseImage}${ext}`;
    setImageSrc(imagePath);
  }, [i18n.language]);
  
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        {imageSrc && <img
          src={imageSrc}
          alt=""
          className="why-choose-us-image"
        />}
      </div>
    </section>
  );
};

export default WhyChooseUs;