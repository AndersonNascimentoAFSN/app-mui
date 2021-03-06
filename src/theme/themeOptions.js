const themeOptions = {
  palette: {
    primary: {
      main: '#3f50b5',
      // light: '#6579c3',
      // dark: '#2c3e7e',
      // contrastText: '#ffffff',
    },
    secondary: {
      main: 'rgba(245,0,77,0.97)',
      // light: 'rgba(247,51,105,0.97)',
      // dark: 'rgba(171,0,47,0.97)',
      // contrastText: '#ffffff',
    },
    text: {
      primary: 'rgba(0,0,0,0.89)',
      // secondary: 'rgba(0,0,0,0.54)',
      // disabled: 'rgba(0,0,0,0.38)',
      // hint: 'rgba(0,0,0,0.38)',
    },
    background: {
      paper: '#ffffff',
      default: '#fafafa',
    },
    error: {
      main: '#f44136',
      // light: '#f66c5e',
      // dark: '#aa3225',
      // contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9400',
      // light: '#ff9333',
      // dark: '#b26e00',
      // contrastText: 'rgba(0,0,0,0.88)',
    },
    info: {
      main: '#21b4f3',
      // light: '#4dc9f5',
      // dark: '#1773aa',
      // contrastText: 'rgba(0,0,0,0.87)',
    },
    success: {
      main: '#4caf4c',
      // light: '#72bf6f',
      // dark: '#357a35',
      // contrastText: 'rgba(0,0,0,0.87)',
    },
    divider: 'rgba(0,0,0,0.1)',
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    htmlFontSize: 16,
    h1: {
      fontSize: '1.4rem',
      fontWeight: 300,
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: 'Open Sans',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.4,
    },
    button: {
      fontFamily: 'Open Sans',
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    caption: {
      fontFamily: 'Open Sans',
      fontSize: '0.8rem',
      fontWeight: 400,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: 'Open Sans',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
};

export default themeOptions;