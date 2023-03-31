const 드랍다운아이콘 = (isOpen: boolean) => {
  return isOpen ? (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
      <g id='_' data-name='&lt;' transform='translate(275 -306) rotate(90)'>
        <rect id='사각형_1813' data-name='사각형 1813' width='24' height='24' transform='translate(306 251)' fill='#fff' />
        <path id='다각형_1' data-name='다각형 1' d='M5,0l5,8H0Z' transform='translate(314 268) rotate(-90)' fill='#111' />
      </g>
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' width='24.415' height='24.415' viewBox='0 0 24.415 24.415'>
      <g id='_' data-name='&lt;' transform='matrix(0.017, -1, 1, 0.017, -256.302, 325.569)'>
        <rect id='사각형_1813' data-name='사각형 1813' width='24' height='24' transform='translate(306 251)' fill='#fff' />
        <path id='다각형_1' data-name='다각형 1' d='M5,0l5,8H0Z' transform='translate(314 268) rotate(-90)' fill='#111' />
      </g>
    </svg>
  );
};

export default 드랍다운아이콘;
export { 드랍다운아이콘 };
