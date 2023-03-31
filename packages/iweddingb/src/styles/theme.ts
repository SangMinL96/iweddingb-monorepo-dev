import { css } from 'styled-components';

// color: ${props => props.theme.red}; 이런식으로
const colors = {
  black: '#111111',
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

const colorPalette = [
  '#CCCCCC',
  '#D092B6',
  '#EB8EB2',
  '#EFA0F2',
  '#AB5ABA',
  '#9F70EA',
  '#BEA2F4',
  '#516AC3',
  '#7B8DD8',
  '#ACB5FF',
  '#6BB5C3',
  '#9BD7E5',
  '#789549',
  '#9FBC81',
  '#AFE09A',
  '#D19D5F',
  '#987762',
  '#FFB574',
  '#FFD562',
  '#E06969',
  '#FF9B88',
  '#F8F8F8',
  '#EAEAEA',
  '#DDDDDD',
  '#AAAAAA',
  '#8C8C8C',
  '#777777',
  '#111111',
  '#4866E4',
  '#FFFFFF',
  '#FD4381',
];
const opacityColorPalette = [
  'rgba(204, 204, 204, 0.1)',
  'rgba(208, 146, 182, 0.1)',
  'rgba(235, 142, 178, 0.1)',
  'rgba(239, 160, 242, 0.1)',
  'rgba(172, 90, 186, 0.1)',
  'rgba(159, 112, 234, 0.1)',
  'rgba(189, 162, 244, 0.1)',
  'rgba(81, 106, 195, 0.1)',
  'rgba(123, 142, 216, 0.1)',
  'rgba(172, 182, 255, 0.1)',
  'rgba(107, 180, 195, 0.1)',
  'rgba(155, 215, 229, 0.1)',
  'rgba(120, 149, 73, 0.1)',
  'rgba(159, 188, 129, 0.1)',
  'rgba(175, 224, 154, 0.1)',
  'rgba(209, 158, 95, 0.1)',
  'rgba(152, 119, 98, 0.1)',
  'rgba(255, 181, 116, 0.1)',
  'rgba(255, 213, 98, 0.1)',
  'rgba(224, 105, 105, 0.1)',
  'rgba(255, 156, 136, 0.1)',
  'rgba(248, 248, 248, 0.1)',
  'rgba(234, 234, 234, 0.1)',
  'rgba(221, 221, 221, 0.1)',
  'rgba(170, 170, 170, 0.1)',
  'rgba(140, 140, 140, 0.1)',
  'rgba(119, 119, 119, 0.1)',
  'rgba(17, 17, 17, 0.1)',
  'rgba(72, 103, 228, 0.1)',
  'rgba(255, 255, 255, 0.1)',
  'rgba(253, 67, 129, 0.1)',
];
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
  colorPalette,
  opacityColorPalette,
};

export default theme;
