import { Header } from './Header';
import styled, { css } from 'styled-components';
import { Footer } from './Footer';

const PageContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    min-height: 100%;
    padding: ${theme.gutters.sm};
    margin-bottom: 190px;

    ${theme.mediaQueries.lg} {
      margin-bottom: 124px;
      padding: ${theme.gutters.lg};
    }
  `}
`;

export const Layout = ({ title, children }) => {
  return (
    <>
      <PageContainer>
        <Header title={title} />
        {children}
      </PageContainer>
      <Footer />
    </>
  );
};
