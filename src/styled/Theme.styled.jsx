export const light = {
  name: 'light-mode',
  colors: {
    mainColor: '#01465d',
    accentColor: '#ac48cd',
    mainBackgroundColor: '#defff5',
    secondaryBackgroundColor: '#baf8e4',
  },
  fontStyles: {
    size: '18px',
    weight: '700',
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
    mainColor: '#d7fff1',
    accentColor: '#e8d1ff',
    mainBackgroundColor: '#297f91',
    secondaryBackgroundColor: '#073f51',
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
