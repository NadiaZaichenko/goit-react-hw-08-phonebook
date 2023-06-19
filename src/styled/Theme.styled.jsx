export const light = {
  name: 'light-mode',
  colors: {
    mainColor: '#150c3c',
    accentColor: '#371358',
    mainBackgroundColor: '#d1a9fff7',
    secondaryBackgroundColor: '#9778ff',
  },
  fontStyles: {
    size: '18px',
    weight: '600',
  },
  breakPoints: {
    mobile: '@media screen and (min-width: 320px)',
    tablet: '@media screen and (min-width: 768px)',
    desktop: '@media screen and (min-width: 1200px)',
  },
  borderRadius: '8px',
  boxShadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
};

export const dark = {
  name: 'dark-mode',
  colors: {
    mainColor: '#9bd4dd',
    accentColor: '#03d196',
    mainBackgroundColor: '#03315e',
    secondaryBackgroundColor: '#010d1a',
  },
  fontStyles: {
    size: '18px',
    weight: '700',
  },
  breakPoints: {
    mobile: '@media (min-width: 320px)',
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1200px)',
  },
  borderRadius: '8px',
  boxShadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
};

export const theme = {
  dark,
  light,
};
