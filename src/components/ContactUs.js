import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+971',
    phone: '',
    industry: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <style>{`
        .contact-us { 
          padding: 100px 0; 
          position: relative; 
          font-size: 16px; 
          direction: ${i18n.language === "ar" ? "rtl" : "ltr"}; 
        }
        .contact-container { 
          max-width: 1920px; 
          width: 100%; 
          margin: 0 auto; 
          padding: 0 240px; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
        }
        .contact-content { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          text-align: center; 
          gap: 30px; 
          max-width: 900px; 
          width: 100%; 
        }
        .contact-title { 
          font-size: 4em; 
          font-weight: 700; 
          line-height: 1.2; 
          margin: 0; 
        }
        .title-prefix { color: #fff; }
        .title-highlight { color: #00d4aa; }
        .contact-description { 
          font-size: 1.125em; 
          line-height: 1.8; 
          color: #fff; 
          margin: 0; 
        }
        .contact-form { 
          width: 100%; 
          display: flex; 
          flex-direction: column; 
          gap: 20px; 
          margin-top: 20px; 
        }
        .form-row { 
          display: flex; 
          gap: 20px; 
          width: 100%; 
          flex-direction: ${i18n.language === "ar" ? "row-reverse" : "row"}; 
        }
        .form-row-full { display: flex; width: 100%; }
        .form-row-button { display: flex; justify-content: center; width: 100%; }
        .form-group { flex: 1; display: flex; flex-direction: column; gap: 8px; text-align: left; }
        .form-group label { 
          font-size: 0.875em; 
          font-weight: 500; 
          color: #fff; 
          margin-bottom: 4px; 
          text-align: ${i18n.language === "ar" ? "right" : "left"}; 
        }
        .form-group input, 
        .form-group select, 
        .form-group textarea { 
          width: 100%; 
          padding: 12px 16px; 
          background: #1C3760; 
          border: 1.5px solid #262E61; 
          border-radius: 4px; 
          color: #fff; 
          font-size: 1em; 
        }
        .form-group textarea { resize: vertical; min-height: 220px; }
        .submit-button { 
          min-width: 200px; 
          padding: 16px 48px; 
          background: #74FBC0; 
          color: #0E1750; 
          border: none; 
          border-radius: 50px; 
          font-size: 1.125em; 
          font-weight: 600; 
          cursor: pointer; 
        }
        @media (max-width: 1200px) { .contact-container { padding: 0 40px; } }
        @media (max-width: 768px) {
          .contact-us { padding: 60px 0; }
          .contact-container { padding: 0 20px; }
          .contact-title { font-size: 2.625em; }
          .form-row { flex-direction: column !important; }
        }
      `}</style>

      <section id="contact-us" className="contact-us">
        <div className="contact-container">
          <div className="contact-content">
            <h2 className="contact-title">
              <span className="title-prefix">{t('contact.title')}</span>{' '}
              <span className="title-highlight">{t('contact.titleHighlight')}</span>
            </h2>

            <p className="contact-description">{t('contact.description')}</p>

            {/* PURE HTML FORM SUBMIT - NO AJAX */}
            <form 
              className="contact-form" 
              action="contact.php" 
              method="POST"
            >
              {/* NAME + EMAIL */}
              <div className="form-row">
                <div className="form-group">
                  <label>{t('contact.form.fullName')}</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              {/* PHONE + INDUSTRY */}
              <div className="form-row">
                <div className="form-group">
                  <label>{t('contact.form.phoneNo')}</label>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <select 
                      name="countryCode" 
                      value={formData.countryCode} 
                      onChange={handleChange}
                    >
                      <option value="+971">+971</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+966">+966</option>
                    </select>

                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>{t('contact.form.industry')}</label>
                  <select 
                    name="industry" 
                    value={formData.industry} 
                    onChange={handleChange}
                  >
                    <option value="">{t('contact.form.industryOptions.select')}</option>
                    <option value="government-hospital">{t('contact.form.industryOptions.governmentHospital')}</option>
                    <option value="private-hospital">{t('contact.form.industryOptions.privateHospital')}</option>
                    <option value="clinic">{t('contact.form.industryOptions.clinic')}</option>
                    <option value="trauma-center">{t('contact.form.industryOptions.traumaCenter')}</option>
                    <option value="surgical-center">{t('contact.form.industryOptions.surgicalCenter')}</option>
                    <option value="others">{t('contact.form.industryOptions.others')}</option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="form-row-full">
                <div className="form-group" style={{ width: "100%" }}>
                  <label>{t('contact.form.message')}</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {/* BUTTON */}
              <div className="form-row-button">
                <button 
                  type="submit" 
                  className="submit-button"
                  name="submit"
                >
                  {t('contact.form.sendButton')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;