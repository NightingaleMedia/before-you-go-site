const { createTheme } = require('@mui/material/styles')

let theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, sm: 600, md: 1300, lg: 1600, xl: 1536 },
    unit: 'px',
  },
  palette: {
    background: {
      default: '#FF9A00',
    },
    secondary: {
      main: '#4297CB',
      contrastText: 'white',
      light: '#82CAF7',
    },
    primary: {
      main: '#FF9A00',
    },
  },
})

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: black;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          textTransform: 'unset',
          minWidth: '200px',
          padding: '12px 20px',
          fontSize: '1rem',
          color: 'white',
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            boxShadow: 'none',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'ff-tisa-sans-web-pro, sans-serif',
    h2: {
      fontFamily: 'ff-tisa-sans-web-pro, sans-serif',
      fontSize: 'clamp(2rem,9vw,3.5rem)',
      color: 'white',
      fontWeight: 800,
    },
    h3: {
      fontFamily: 'ff-tisa-sans-web-pro, sans-serif',
      fontWeight: 'normal',
      fontSize: 'clamp(2rem,9vw,3.5rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
      margin: '1rem 0',
      color: theme.palette.secondary.main,
    },
    h4: {
      fontFamily: 'goodlife-sans-condensed, sans-serif',
      color: 'white',
      fontSize: '3.5rem',
    },
    h5: {
      fontFamily: 'kopius, serif',
      fontWeight: 600,
      fontStyle: 'italic',
      color: 'white',
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: 'ff-tisa-sans-web-pro, sans-serif',
      fontWeight: 400,
      fontSize: 'clamp(1rem,5vw,1.5rem)',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      color: theme.palette.secondary.main,
    },
    special: {
      fontFamily: 'kopius, serif',
      fontWeight: 800,
      fontStyle: 'italic',
      fontSize: 'clamp(2.5rem,11vw,4.5rem)',
      display: 'block',
      '-webkit-text-stroke': `1px #4297CB`,
      color: 'white',
      '-webkit-font-smoothing': 'antialiased',
      zIndex: 100,
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      minWidth: '350px',

      color: 'white',
    },
  },
})

export { theme }
