import React from 'react';
import './ProductExpertise.css';
import { useTranslation } from 'react-i18next';

const ProductExpertise = () => {
  const { i18n } = useTranslation();
  const imageSrc = i18n.language === 'ar'
    ? `${process.env.PUBLIC_URL}/OurProductExpertise-AR.png`
    : `${process.env.PUBLIC_URL}/ourprodudctexpertise-eng.png`;

  return (
    <section className="product-expertise">
      <div className="product-expertise-container animate-on-scroll" data-animation="slide-in-left">
        <img
          src={imageSrc}
          alt="Product Expertise"
          className="product-expertise-image"
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '24px' }}
        />
      </div>
    </section>
  );
};

export default ProductExpertise;