import styled, { css } from 'styled-components';

const FooterContainer = styled.footer`
  font-size: 16px;
  padding: 16px 0;
  width: 100%;
  background-color: #111416;
  position: absolute;
  bottom: 0;
`;

const FooterContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: ${theme.maxWidth};
    padding: ${theme.gutters.sm};

    & > p {
      margin: 0;
    }

    ${theme.mediaQueries.lg} {
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      padding: ${theme.gutters.lg};

      & > * {
        max-width: 260px;
      }
    }
  `}
`;

const Wordmark = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & a {
    font-family: 'Mansalva', cursive;
    font-size: 24px;
    color: #e71d36;
    line-height: 24px;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>All designs, photos, and assets are Copyright © Marc Bünder.</p>
        <Wordmark>
          Website designed by{' '}
          <a
            alt="Website designed and developed by Lee Mulvey"
            href="https://www.leemulvey.com"
          >
            Lee Mulvey
          </a>
        </Wordmark>
      </FooterContent>
    </FooterContainer>
  );
};
