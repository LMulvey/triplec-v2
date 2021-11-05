import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%; 
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', 'Hevetica', sans-serif;
    background: url("/assets/walnutbg-comp.png") no-repeat center center fixed;
    background-size: cover;
    font-size: 100%;
    line-height: 1.618;
    color: #748391;
    margin-bottom: 100px;
  }

  a {
    color: #337ab7;
    text-decoration: none;
    transition: color 75ms ease;

    &:hover {
      color: white;
    }
  }

  h1, h2, h3, h4, h5 {
    color: white;
    line-height: 1em;
    margin-bottom: 0.609em;
    font-family: 'Fjalla One', 'Helvetica', sans-serif;
  }

  h1 {
    font-size: 4.236em;
    font-weight: 700;
  }

  p {
    margin-bottom: 1.618em;
    line-height: 1.618;
  }

  header {
    font-family: 'Open Sans', 'Helvetica', sans-serif;
    font-size: 14px;
    margin-bottom: 25px;
  }
`;

export const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const mediaQueries = {
  dark: '@media (prefers-color-scheme: dark)',
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
};

const theme = {
  mediaQueries,
  maxWidth: '1440px',
  gutters: {
    lg: '0 64px',
    sm: '0 32px',
  },
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
