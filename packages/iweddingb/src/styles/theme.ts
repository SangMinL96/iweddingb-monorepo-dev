import { css } from 'styled-components';

// color: ${props => props.theme.red}; 이런식으로
const colors = {
  black: '#262626',
  lightBlack: '#707070',
  pink: '#fd4381',
  yellow: '#ffc31c',
  lightBlue: '#ebf2ff',
  mediumBlue: '#d7e3fb',
  blue: '#4866E4',
  gray: '#8c8c8c',
  lightGray: '#F5F5F5',
  red: '#FF3535',
  ashgray: '#e4e2e3',
  whiteYellow: '#fafafa',
};

const breakpoints = {
  mobileSM: 320,
  mobileMD: 375,
  mobileLG: 425,
  tablet: 768,
  tabletLG: 1024,
  pcSM: 1280,
  pcMD: 1919,
  pcLG: 2559,
  pcXLG: 3840,
  pc: 1080,
  fixedPc: 560,
};
const hideScroll = css`
  --ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;
const textEllipsis = css`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
  ...breakpoints,
  ...colors,
  flexCenter,
  hideScroll,
  textEllipsis,
};

export default theme;
