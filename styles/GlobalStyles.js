import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html {
      scroll-behavior: smooth;
    }

    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Noto Sans', sans-serif;
        padding: 0;
        margin: 0;
        background-color: #1a1d29;
        color: #f9f9f9;
    }

    a {
        text-decoration: none;
        color: #fff;
        text-decoration: none;
    }

    .title {
      font-weight: 400;
      padding-left: 8px;
      font-size: 30px;
      margin: 10px;
    }
`;

export const Section = styled.div`
    max-width: 1400px;
    margin: auto;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    margin: auto;
    padding: 0 0 26px;
    max-width: 1400px;
`;

export const Image1 = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: 1;
`;

export const Image2 = styled(Image1)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 500ms ease-in-out;
  visibility: hidden;
`;

export const Border = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  border-radius: 10px;
  border: 4px solid rgba(249, 249, 249, 0.1);
  transition: transform 250ms ease-in-out, border 250ms ease-in-out, box-shadow 250ms ease-in-out;
`;

export const Item = styled.div`
  width: 100%;
  position: relative;
  padding: 15px;
  cursor: pointer;

  &:hover ${Border} {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px, rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
    transform: scale(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);
  }

  &:hover ${Image2} {
    position: absolute;
    top: 0;
    z-index: -1;
    opacity: 1;
    visibility: visible;
  }
`;

export default GlobalStyle;