import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const Navbar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 32px 8px;
    background: linear-gradient(
      transparent 0%,
      rgba(255, 255, 255, 0.03) 50%,
      transparent 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.01);
    border-width: 0px 1px;

    & > * {
      margin-bottom: 16px;
    }

    ${theme.mediaQueries.lg} {
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      & > * {
        margin-bottom: 0px;
      }
    }
  `}
`;

const Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;

  & span {
    margin-left: 24px;
  }
`;

const DetailsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 8px 4px;
    background-color: rgba(51, 54, 60, 0.5);
    border-radius: 10px;
    width: 100%;

    ${theme.mediaQueries.lg} {
      padding: 12px 8px;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 344px;
    }
  `}
`;

const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    font-size: 18px;
    padding: 4px 0;

    ${theme.mediaQueries.lg} {
      padding: 0 4px;
      font-size: 14px;
    }

    & i {
      font-size: 18px;
      margin-right: 8px;
      color: white;
      width: 18px;
    }

    &.address {
      ${theme.mediaQueries.lg} {
        text-align: right;
      }

      & i {
        font-size: 32px;
      }

      & p {
        margin: 0;
        flex-grow: 0;
      }
    }
  `}
`;

const Detail = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 8px;
`;

const Address = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Divider = styled.div`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    height: 2px;
    background-color: #595b60;
    flex-shrink: 0;
    flex-grow: 0;
    margin: 4px 0;

    ${theme.mediaQueries.lg} {
      margin: 0;
      width: 2px;
      height: auto;
    }
  `}
`;

export const Header = ({ title = 'Custom Furniture by Marc Bünder' }) => {
  return (
    <>
      <Head>
        <title>{title} | Triple C Woodworx</title>
      </Head>
      <header>
        <Navbar>
          <Logo>
            <Link passHref href="/">
              <a>
                <Image
                  alt="Triple C Woodworx"
                  src="/assets/triplec-logo.png"
                  width="250px"
                  height="79px"
                />
              </a>
            </Link>
            <span className="tagline">CUSTOM CREATIONS & CABINETRY</span>
          </Logo>
          <DetailsContainer>
            <Details>
              <Detail>
                <i className="fa fa-phone" aria-hidden="true" />
                <a href="tel:17807001665">1-780-700-1665</a>
              </Detail>
              <Detail>
                <i className="fa fa-envelope" aria-hidden="true" />
                <a href="mailto:marc@triplec.ca">Marc@TripleC.ca</a>
              </Detail>
            </Details>
            <Divider />
            <Details className="address">
              <Detail>
                <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                <Address>
                  <p>15431 110 Avenue </p>
                  <p>Edmonton, AB</p>
                </Address>
              </Detail>
            </Details>
          </DetailsContainer>
        </Navbar>
      </header>
    </>
  );
};
