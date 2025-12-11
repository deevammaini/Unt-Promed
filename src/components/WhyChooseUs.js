import React, { useEffect, useState } from 'react';
import './WhyChooseUs.css';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
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
        textAlign: i18n.language === 'ar' ? 'right' : 'left',
        direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
      }}>
        {i18n.language === 'ar' ? (
          <>لماذا <span style={{ color: '#74FBC0' }}>تختارنا</span></>
        ) : (
          <>Why <span style={{ color: '#74FBC0' }}>Choose Us</span></>
        )}
      </h2>

      {/* Description */}
      <div style={{
        fontSize: windowWidth < 480 ? '14px' : windowWidth < 768 ? '16px' : '18px',
        color: '#9FA3BB',
        textAlign: i18n.language === 'ar' ? 'right' : 'left',
        marginBottom: '50px',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.65', // ✅ same as Who We Are
        maxWidth: '1200px',
        margin: i18n.language === 'ar' ? '0 0 50px auto' : '0 0 50px 0',
        direction: i18n.language === 'ar' ? 'rtl' : 'ltr',

        // ✅ FIXED — no breaking, no hyphens, smooth wrapping
        wordBreak: 'normal',
        overflowWrap: 'break-word',
        hyphens: 'none',
        whiteSpace: 'normal'
      }}>

        {i18n.language === 'ar' ? (
          <>
            اختيار الشريك المناسب للمواد الجراحية أمر بالغ الأهمية لضمان سلامة المرضى وكفاءة العمليات ونتائج سريرية متسقة. مع أكثر من عقدين من الخبرة المثبتة، نحن نقدم مستوى من الثقة والموثوقية والخبرة التي يمكن للمستشفيات ومراكز الجراحة الاعتماد عليها بثقة.
            <br /><br />
            نعمل عن كثب مع الجراحين وفرق المشتريات ومديري المستشفيات لتقديم ليس فقط مواد عالية الجودة، ولكن أيضًا تجربة خدمة سلسة. كل منتج نقدمه مختار لدقته ومتانته والامتثال للمعايير الطبية الدولية، مما يضمن أن المهنيين الصحيين يمكنهم التركيز على ما يهم أكثر: إنقاذ الأرواح.
          </>
        ) : (
          <>
            Choosing the right surgical materials partner is critical for ensuring patient safety, operational efficiency, and consistent clinical outcomes. With over two decades of proven experience, we provide a level of trust, reliability, and expertise that hospitals and surgical centers can confidently depend on.
            <br /><br />
            We work closely with surgeons, procurement teams, and hospital administrators to deliver not only high-quality materials, but also a seamless service experience. Every product we supply is selected for its precision, durability, and compliance with international medical standards, ensuring that healthcare professionals can focus on what matters most saving lives.
          </>
        )}
      </div>

      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        gap: windowWidth < 1024 ? '40px' : '40px',
        alignItems: 'center',
        flexDirection: windowWidth < 1024 ? 'column' : 'row',
        justifyContent: 'space-between'
      }}>

        {/* Left Image */}
        <div style={{
          flex: windowWidth < 1024 ? 'none' : '0 0 calc(50% - 20px)',
          width: windowWidth < 1024 ? '100%' : 'calc(50% - 20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={`${process.env.PUBLIC_URL}/whychooseus-ac.jpg`}
            alt="Medical Consultation"
            style={{
              width: '100%',
              height: windowWidth < 768 ? 'auto' : '540px',
              objectFit: 'cover',
              objectPosition: 'center center',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}
          />
        </div>

        {/* Right Cards Image */}
        <div style={{
          flex: windowWidth < 1024 ? 'none' : '0 0 calc(50% - 20px)',
          width: windowWidth < 1024 ? '100%' : 'calc(50% - 20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={`${process.env.PUBLIC_URL}/${i18n.language === 'ar' ? 'whychooseus-ac-ar.png' : 'whychooseus-ac1.png'}`}
            alt="Why Choose Us Features"
            style={{
              width: '100%',
              height: windowWidth < 768 ? 'auto' : '570px',
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
