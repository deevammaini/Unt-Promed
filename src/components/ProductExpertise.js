import React, { useState, useEffect } from 'react';
import './ProductExpertise.css';
import { useTranslation } from 'react-i18next';

const ProductExpertise = () => {
  const { i18n } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const products = [
    {
      id: 'spine',
      image: 'spine-ac.jpg',
      titleEn: 'Spine',
      titleAr: 'العمود الفقري',
      featuresEn: [
        'Full range of spinal implants & fixation systems.',
        'Designed for degenerative, traumatic & corrective spine procedures.',
        'High stability & secure fixation.',
        'Supports faster surgery time & recovery.',
        'International quality materials for long-term performance.'
      ],
      featuresAr: [
        'مجموعة كاملة من غرسات العمود الفقري وأنظمة التثبيت.',
        'مصمم للإجراءات التنكسية والصدمات والتصحيحية للعمود الفقري.',
        'استقرار عالي وتثبيت آمن.',
        'يدعم وقت الجراحة الأسرع والتعافي.',
        'مواد ذات جودة دولية للأداء طويل المدى.'
      ]
    },
    {
      id: 'knee',
      image: 'knee-ac.jpg',
      titleEn: 'Knee',
      titleAr: 'الركبة',
      featuresEn: [
        'Components for knee replacement & reconstruction procedures.',
        'Engineered for strength, natural movement & durability.',
        'High-precision materials for better surgical outcomes.',
        'Supports smooth operation workflow.',
        'Ensures long-lasting postoperative results.'
      ],
      featuresAr: [
        'مكونات لاستبدال الركبة وإجراءات إعادة البناء.',
        'مهندس للقوة والحركة الطبيعية والمتانة.',
        'مواد عالية الدقة لنتائج جراحية أفضل.',
        'يدعم سير العمل السلس.',
        'يضمن نتائج طويلة الأمد بعد العملية.'
      ]
    },
    {
      id: 'screw',
      image: 'screw-ac.jpg',
      titleEn: 'Screw',
      titleAr: 'المسمار',
      featuresEn: [
        'Wide selection of cortical, cancellous, locking & cannulated screws.',
        'Made with medical-grade, biocompatible materials.',
        'Provides strong fixation for multiple surgical applications.',
        'High precision manufacturing for accuracy.',
        'Reliable performance in complex procedures.'
      ],
      featuresAr: [
        'مجموعة واسعة من المسامير القشرية والإسفنجية والقفل والمجوفة.',
        'مصنوع من مواد طبية متوافقة حيوياً.',
        'يوفر تثبيتاً قوياً للتطبيقات الجراحية المتعددة.',
        'تصنيع عالي الدقة للدقة.',
        'أداء موثوق في الإجراءات المعقدة.'
      ]
    },
    {
      id: 'trauma',
      image: 'trauma-ac.jpg',
      titleEn: 'Trauma',
      titleAr: 'الصدمة',
      featuresEn: [
        'Trauma plates, rods, nails & fixation devices.',
        'Ideal for emergency fracture stabilization & complex injuries.',
        'Built for rapid response in critical situations.',
        'Ensures secure fixation & faster healing.',
        'Trusted by surgeons for stability & precision.'
      ],
      featuresAr: [
        'ألواح الصدمات والقضبان والمسامير وأجهزة التثبيت.',
        'مثالي لتثبيت الكسور الطارئة والإصابات المعقدة.',
        'مبني للاستجابة السريعة في الحالات الحرجة.',
        'يضمن التثبيت الآمن والشفاء الأسرع.',
        'موثوق به من قبل الجراحين للاستقرار والدقة.'
      ]
    }
  ];

  return (
    <section style={{
      padding: windowWidth < 1024 ? '40px 20px' : '80px 240px',
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
          <>خبرتنا في <span style={{ color: '#74FBC0' }}>المنتجات</span></>
        ) : (
          <>Our Product <span style={{ color: '#74FBC0' }}>Expertise</span></>
        )}
      </h2>

      {/* Description */}
      <p style={{
        fontSize: windowWidth < 480 ? '14px' : windowWidth < 768 ? '16px' : '18px',
        color: '#9FA3BB',
        textAlign: i18n.language === 'ar' ? 'right' : 'left',
        marginBottom: '50px',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.6',
        maxWidth: '800px',
        margin: i18n.language === 'ar' ? '0 0 50px auto' : '0 0 50px 0',
        direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
      }}>
        {i18n.language === 'ar' ? (
          'مجموعة كاملة من المنتجات الطبية والجراحية المتميزة والمتنوعة والأدوات، وتقديم حلول متكاملة ومعايير الجودة العالمية الموثوقة من قبل الأطباء.'
        ) : (
          'A complete range of premium and diverse medical and surgical products and instruments, offering integrated solutions and global-quality standards trusted by doctors.'
        )}
      </p>

      {/* Products Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(2, 1fr)',
        gap: '30px',
        maxWidth: '1199px',
        margin: i18n.language === 'ar' ? '0 0 0 auto' : '0',
        justifyContent: i18n.language === 'ar' ? 'end' : 'start',
        direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
      }}>
        {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: '#1C3760',
                borderRadius: '24px',
                padding: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                minHeight: '282px',
                position: 'relative'
              }}
            >
              {/* Image and Title Row */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '16px',
                width: '100%',
                justifyContent: i18n.language === 'ar' ? 'flex-end' : 'flex-start',
                flexDirection: i18n.language === 'ar' ? 'row-reverse' : 'row'
              }}>
                {/* Product Image */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  order: i18n.language === 'ar' ? 2 : 1
                }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/${product.image}`}
                    alt={i18n.language === 'ar' ? product.titleAr : product.titleEn}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>

                {/* Product Title */}
                <h3 style={{
                  fontSize: windowWidth < 480 ? '20px' : '24px',
                  fontWeight: '700',
                  color: '#ffffff',
                  margin: '0',
                  fontFamily: 'Roboto, sans-serif',
                  textAlign: i18n.language === 'ar' ? 'right' : 'left',
                  direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                  order: i18n.language === 'ar' ? 1 : 2
                }}>
                  {i18n.language === 'ar' ? product.titleAr : product.titleEn}
                </h3>
              </div>

              {/* Product Features */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '100%',
                textAlign: i18n.language === 'ar' ? 'right' : 'left',
                direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
              }}>
                {(i18n.language === 'ar' ? product.featuresAr : product.featuresEn).map((feature, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: '#ffffff',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    fontFamily: 'Roboto, sans-serif',
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                    textAlign: i18n.language === 'ar' ? 'right' : 'left'
                  }}>
                    <span style={{ color: '#74FBC0', fontSize: '12px', marginTop: '4px', flexShrink: 0 }}>◆</span>
                    {i18n.language === 'ar' ? feature : feature}
                  </li>
                ))}
              </ul>
            </div>
        ))}
      </div>
    </section>
  );
};

export default ProductExpertise;