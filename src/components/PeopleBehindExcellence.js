import React, { useState, useEffect } from 'react';
import './PeopleBehindExcellence.css';
import { useTranslation } from 'react-i18next';

const PeopleBehindExcellence = () => {
  const { i18n } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{
      padding: windowWidth < 768 ? '40px 20px' : '80px 240px',
      backgroundColor: 'transparent',
      maxWidth: '1920px',
      margin: '0 auto'
    }}>
      {/* Title */}
      <h2 style={{
        fontSize: windowWidth < 480 ? '32px' : windowWidth < 768 ? '40px' : '48px',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '20px',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.2',
        textAlign: 'center',
        direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
      }}>
        {i18n.language === 'ar' ? (
          <>فريقنا مصدر <span style={{ color: '#74FBC0' }}>تميزنا</span></>
        ) : (
          <>The People Behind Our <span style={{ color: '#74FBC0' }}>Excellence</span></>
        )}
      </h2>

      {/* Description */}
      <div style={{
        fontSize: windowWidth < 480 ? '14px' : windowWidth < 768 ? '16px' : '18px',
        color: '#9FA3BB',
        textAlign: 'center',
        marginBottom: '50px',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.6',
        maxWidth: '800px',
        margin: '0 auto 50px auto',
        direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
      }}>
        {i18n.language === 'ar' ? (
          <>
            فريق متخصص من المهنيين المهرة الملتزمين بتقديم الدقة والموثوقية ،
            <br />
            ودعم استثنائي في كل إجراء طبي.
          </>
        ) : (
          <>
            A dedicated team of skilled professionals committed to delivering precision, reliability,
            <br />
            and exceptional support in every medical procedure.
          </>
        )}
      </div>

      {/* Team Members Images */}
      <div style={{
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: windowWidth < 768 ? 'column' : 'row',
        flexWrap: 'wrap'
      }}>
        {/* Ali Sultan */}
        <div style={{ flex: '1', maxWidth: '500px' }}>
          <img
            src={`${process.env.PUBLIC_URL}/${i18n.language === 'ar' ? 'ali-sultan-ac-ar.png' : 'ali-sultan-ac-eng.png'}`}
            alt="Ali Sultan"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              backgroundColor: 'transparent'
            }}
          />
        </div>

        {/* Shabban */}
        <div style={{ flex: '1', maxWidth: '500px' }}>
          <img
            src={`${process.env.PUBLIC_URL}/${i18n.language === 'ar' ? 'shabban-ac-ar.png' : 'shabban-ac-eng.png'}`}
            alt="Shabban"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              backgroundColor: 'transparent'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PeopleBehindExcellence;
