const 메뉴접기아이콘 = (isOpen: boolean) => {
  return isOpen ? (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
      <g id='__icon' data-name='&lt;_icon' transform='translate(20) rotate(90)'>
        <rect id='사각형_1813' data-name='사각형 1813' width='20' height='20' fill='none' />
        <path
          id='chevron-right'
          d='M0,12,6,6,0,0'
          transform='translate(16 7.5) rotate(90)'
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1'
        />
      </g>
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
      <g id='icon' transform='translate(20) rotate(90)'>
        <rect id='사각형_1813' data-name='사각형 1813' width='20' height='20' fill='none' />
        <line
          id='선_1'
          data-name='선 1'
          y1='10'
          transform='translate(6 5)'
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeWidth='1'
        />
        <line
          id='선_2'
          data-name='선 2'
          y1='10'
          transform='translate(10 5)'
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeWidth='1'
        />
        <line
          id='선_3'
          data-name='선 3'
          y1='10'
          transform='translate(14 5)'
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeWidth='1'
        />
      </g>
    </svg>
  );
};
export default 메뉴접기아이콘;
export { 메뉴접기아이콘 };
