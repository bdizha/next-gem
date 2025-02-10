// Background class pairs for sections
export const backgroundPairs = {
  greenPurple: {
    wave: 'waveGreenPurple',
    content: 'contentGradientGreenPurple'
  },
  pinkGreen: {
    wave: 'wavePinkGreen',
    content: 'contentGradientPinkGreen'
  },
  purpleYellow: {
    wave: 'wavePurpleYellow',
    content: 'contentGradientPurpleYellow'
  },
  yellowPink: {
    wave: 'waveYellowPink',
    content: 'contentGradientYellowPink'
  },
  greyLight: {
    wave: 'waveGreyLight',
    content: 'contentGradientGreyLight'
  },
  night: {
    wave: 'waveNight',
    content: 'contentGradientNight'
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
