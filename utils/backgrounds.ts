// Background class pairs for sections
export const backgroundPairs = {
  greenPurple: {
    wave: 'waveGreenPurple',
    content: 'contentBannerGreenPurple'
  },
  pinkGreen: {
    wave: 'wavePinkGreen',
    content: 'contentBannerPinkGreen'
  },
  purpleYellow: {
    wave: 'wavePurpleYellow',
    content: 'contentBannerPurpleYellow'
  },
  yellowPink: {
    wave: 'waveYellowPink',
    content: 'contentBannerYellowPink'
  },
  greyLight: {
    wave: 'waveGreyLight',
    content: 'contentBannerGreyLight'
  },
  night: {
    wave: 'waveNight',
    content: 'contentBannerNight'
  }
};

// Get matching wave and content banner classes
export const getBackgroundClasses = () => {
  const themes = Object.keys(backgroundPairs);
  const theme = themes[Math.floor(Math.random() * themes.length)];
  return backgroundPairs[theme];
};

// Banner classes for cards
export const bannerClasses = [
  'bannerGreenPurple',
  'bannerPinkGreen',
  'bannerPurpleYellow',
  'bannerYellowPink',
  'bannerGreyLight',
  'bannerGreyDark',
  'bannerNight'
];
