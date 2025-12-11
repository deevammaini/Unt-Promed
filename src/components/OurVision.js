import React, { useState, useEffect } from 'react';
import './OurVision.css';
import { useTranslation } from 'react-i18next';

const OurVision = () => {
  const { i18n } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{
      padding: windowWidth < 1024 ? '40px 20px' : '80px 240px',
      backgroundColor: 'transparent',
      maxWidth: '1920px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        alignItems: windowWidth < 1024 ? 'center' : 'stretch',
        gap: windowWidth < 1024 ? '30px' : '40px',
        flexDirection: windowWidth < 1024 ? 'column' : 'row'
      }}>
        {/* Left Text Card */}
        <div style={{
          flex: windowWidth < 1024 ? 'none' : '1',
          width: windowWidth < 1024 ? '100%' : 'auto',
          backgroundColor: 'rgba(28, 55, 96, 0.6)',
          borderRadius: '24px',
          padding: windowWidth < 768 ? '30px' : '50px',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
        }}>
          {/* Title */}
          <h2 style={{
            fontSize: windowWidth < 480 ? '32px' : windowWidth < 768 ? '40px' : '48px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '25px',
            fontFamily: 'Roboto, sans-serif',
            lineHeight: '1.2',
            textAlign: i18n.language === 'ar' ? 'right' : 'left',
            width: '100%'
          }}>
            {i18n.language === 'ar' ? (
              <>رؤيتنا <span style={{ color: '#74FBC0' }}>المستقبلية</span></>
            ) : (
              <>Our <span style={{ color: '#74FBC0' }}>Vision</span></>
            )}
          </h2>
          
          {/* Description */}
          <div style={{
            color: '#9FA3BB',
            fontSize: windowWidth < 480 ? '14px' : windowWidth < 768 ? '15px' : '16px',
            lineHeight: '1.6',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '400',
            textAlign: i18n.language === 'ar' ? 'right' : 'left',
            width: '100%',
            marginBottom: '30px'
          }}>
            {i18n.language === 'ar' ? (
              <div>
                أن نكون الشريك المثالي لقطاع الرعاية الصحية في دولة الإمارات العربية المتحدة من خلال الابتكار والثقة والخدمة الاستثنائية. نسعى لتمكين المؤسسات الصحية بأدوات موثوقة وأداء متسق. نؤمن أن جودة المنتج هي أساس ثقة الطبيب وراحة المريض، لذلك نحن ملتزمون بتوفير أفضل المستلزمات الطبية بأعلى معايير السلامة.
              </div>
            ) : (
              <div>
                To be the ideal partner for the healthcare sector in the United Arab Emirates through<br />
                Innovation, Trust, and Exceptional Service. We strive to empower healthcare institutions<br />
                with reliable tools and consistent performance. We believe that product quality is the<br />
                foundation of a doctor's confidence and a patient's comfort, therefore, we are committed<br />
                to providing the finest medical supplies with the highest safety standards.
              </div>
            )}
          </div>

          {/* Features List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%'
          }}>
            {[
              i18n.language === 'ar' ? 'أكثر من 20 عاماً من الخبرة المثبتة في الصناعة' : '20+ years of proven industry experience',
              i18n.language === 'ar' ? 'مواد جراحية معتمدة ومختبرة الجودة' : 'Certified, quality-tested surgical materials',
              i18n.language === 'ar' ? 'شراكات مع مصنعين عالميين' : 'Partnerships with global manufacturers',
              i18n.language === 'ar' ? 'استجابة سريعة للحالات الطارئة والحرجة' : 'Fast response for emergency and critical cases',
              i18n.language === 'ar' ? 'سمعة قوية للموثوقية وتميز الخدمة' : 'Strong reputation for reliability and service excellence'
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#ffffff',
                fontSize: windowWidth < 480 ? '14px' : '15px',
                fontFamily: 'Roboto, sans-serif',
                direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
              }}>
                <span style={{
                  color: '#74FBC0',
                  fontSize: '12px',
                  flexShrink: 0
                }}>◆</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Logo Image */}
        <div style={{
          flex: windowWidth < 1024 ? 'none' : '0 0 500px',
          width: windowWidth < 1024 ? '100%' : '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img
            src={`${process.env.PUBLIC_URL}/our-visonlogo.jpg`}
            alt="Vision Logo"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;