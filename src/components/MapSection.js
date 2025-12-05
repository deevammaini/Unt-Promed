import React from 'react';

const MapSection = () => {
  return (
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.227646278051!2d55.207629075112585!3d25.127993434500777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b7af14700cf%3A0x9866fd60b4ad99ed!2sBinayah%20Properties%20LLC!5e0!3m2!1sen!2sin!4v1764950293286!5m2!1sen!2sin" 
      width="100%"
      height="450"
      style={{
        border: '0',
        display: 'block',
        backgroundColor: '#0A1333'
      }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="United Pro Med Location Map"
    />
  );
};

export default MapSection;