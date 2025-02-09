// Background classes for main sections
export const scapeClasses = [
  'waveGreenPink',
  'waveGreenPurple',
  'waveGreenYellow',
  'waveLight',
  'waveNight',
  'wavePinkPurple',
  'waveYellowPink',
  'waveYellowPurple'
];

// Background classes for content sections
export const contentBannerClasses = [
  'contentBannerGreenPurple',
  'contentBannerPinkGreen',
  'contentBannerPurpleYellow',
  'contentBannerYellowPink',
  'contentBannerGreyLight',
  'contentBannerGreyDark'
];

// Background classes for cards
export const bannerClasses = [
  'bannerGreenPurple',
  'bannerPinkGreen',
  'bannerPurpleYellow',
  'bannerYellowPink',
  'bannerGreyLight',
  'bannerGreyDark'
];

// Helper function to get random class from array
export const getRandomClass = (classes: string[]) => {
  return classes[Math.floor(Math.random() * classes.length)];
};
