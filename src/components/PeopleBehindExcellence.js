import React from 'react';
import './PeopleBehindExcellence.css';
import { useTranslation } from 'react-i18next';

const PeopleBehindExcellence = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="people-behind-excellence">
      <div className="people-container">
        <img
          src={i18n.language === 'ar'
            ? `${process.env.PUBLIC_URL}/People-AR.png`
            : `${process.env.PUBLIC_URL}/People Behind Excellence.png`}
          alt="People Behind Excellence"
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '24px' }}
        />
      </div>
    </section>
  );
};

export default PeopleBehindExcellence;

