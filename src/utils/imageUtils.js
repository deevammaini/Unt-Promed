/**
 * Get the correct image path based on language
 * @param {string} language - 'en' or 'ar'
 * @param {string} imageName - base image name without extension (e.g., 'Hero', 'IndustriesWeServe')
 * @returns {string} - full image path
 */
export const getImagePath = (language, imageName) => {
  const ext = '.png';
  if (language === 'ar') {
    return `${process.env.PUBLIC_URL}/${imageName}-ar${ext}`;
  }
  return `${process.env.PUBLIC_URL}/${imageName}${ext}`;
};

/**
 * Hook to get the correct image path based on current i18n language
 * Usage: const imagePath = useImagePath('IndustriesWeServe');
 */
export const useImagePath = (imageName) => {
  const { i18n } = require('react-i18next').useTranslation();
  return getImagePath(i18n.language, imageName);
};
