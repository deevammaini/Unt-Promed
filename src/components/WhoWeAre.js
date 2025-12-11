import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const WhoWeAre = () => {
  const { i18n } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imagePath = `${process.env.PUBLIC_URL}/whoweare---.jpg`;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      style={{
        padding: windowWidth < 768 ? '40px 20px' : '80px 240px',
        backgroundColor: 'transparent',
        maxWidth: '1920px',
        margin: '0 auto'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: windowWidth < 1024 ? 'column' : 'row',
          gap: windowWidth < 768 ? '30px' : '60px',
          alignItems: 'flex-start', // keep LTR/RTL alignment
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            flex: windowWidth < 1024 ? 'none' : '0 0 550px',
            width: windowWidth < 1024 ? '100%' : '550px'
          }}
        >
          <img
            src={imagePath}
            alt="Who We Are"
            style={{
              width: '100%',
              height: windowWidth < 1024 ? 'auto' : '589px',
              objectFit: 'cover',
              borderRadius: '24px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        {/* CONTENT */}
        <div
          style={{
            flex: windowWidth < 1024 ? 'none' : '1',
            width: windowWidth < 1024 ? '100%' : 'auto',
            direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
            textAlign: i18n.language === 'ar' ? 'right' : 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // vertical centering
            paddingTop: windowWidth < 768 ? '20px' : '80px' // moves block downward
          }}
        >

          {/* TITLE */}
          <h2
            style={{
              fontSize: windowWidth < 480 ? '32px' : windowWidth < 768 ? '40px' : '48px',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '30px',
              lineHeight: '1.2'
            }}
          >
            {i18n.language === 'ar' ? (
              <>من <span style={{ color: '#74FBC0' }}>نحن</span></>
            ) : (
              <>Who <span style={{ color: '#74FBC0' }}>We Are</span></>
            )}
          </h2>

          {/* CONTENT */}
          {i18n.language === 'ar' ? (
            <>
              <p style={pStyle}>
                مع أكثر من عقدين من الخبرة في توريد المواد الجراحية عالية الدقة في سوريا، نفخر بتوسيع خبرتنا إلى قطاع الرعاية الصحية في دولة الإمارات العربية المتحدة.
              </p>
              <p style={pStyle}>
                نحن نعمل بشكل وثيق مع كل من المستشفيات الخاصة والعامة، ونقدم حلولاً جراحية آمنة وموثوقة ومعتمدة عالمياً.
              </p>
              <p style={pStyle}>
                يضمن فريقنا من المتخصصين تقديم الدعم الفوري للإجراءات الطارئة والعمليات الحرجة، مما يضمن أعلى مستوى من الكفاءة.
              </p>
            </>
          ) : (
            <>
              <p style={pStyle}>
                With more than two decades of experience supplying high-precision surgical materials in Syria, we are proud to expand our expertise into the UAE healthcare sector.
              </p>
              <p style={pStyle}>
                We work closely with both private and public hospitals, delivering safe, reliable, and globally certified surgical solutions.
              </p>
              <p style={pStyle}>
                Our team of specialized professionals ensures timely support for emergency procedures and critical operations, guaranteeing the highest level of efficiency.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const pStyle = {
  color: '#9FA3BB',
  fontSize: '18px',
  lineHeight: '1.65',
  marginTop: '18px',
  fontWeight: '400',
  wordBreak: 'normal',
  overflowWrap: 'break-word',
  hyphens: 'none'
};

export default WhoWeAre;
