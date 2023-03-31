const 업다운아이콘 = (type: 'minus' | 'plus') => {
  if (type === 'minus') {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
        <g id='_-' data-name='-' transform='translate(-381 -245)'>
          <g id='타원_1' data-name='타원 1' transform='translate(381 245)' fill='#fff' stroke='#eaeaea' strokeWidth='1'>
            <circle cx='10' cy='10' r='10' stroke='none' />
            <circle cx='10' cy='10' r='9.5' fill='none' />
          </g>
          <line
            id='선_4'
            data-name='선 4'
            x2='8'
            transform='translate(387 255)'
            fill='none'
            stroke='#8c8c8c'
            strokeLinecap='round'
            strokeWidth='1'
          />
        </g>
      </svg>
    );
  }
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
      <g id='_' data-name='+' transform='translate(-432 -245)'>
        <g id='타원_2' data-name='타원 2' transform='translate(432 245)' fill='#fff' stroke='#eaeaea' strokeWidth='1'>
          <circle cx='10' cy='10' r='10' stroke='none' />
          <circle cx='10' cy='10' r='9.5' fill='none' />
        </g>
        <line
          id='선_5'
          data-name='선 5'
          x2='8'
          transform='translate(438 255)'
          fill='none'
          stroke='#8c8c8c'
          strokeLinecap='round'
          strokeWidth='1'
        />
        <line
          id='선_6'
          data-name='선 6'
          y1='8'
          transform='translate(442 251)'
          fill='none'
          stroke='#8c8c8c'
          strokeLinecap='round'
          strokeWidth='1'
        />
      </g>
    </svg>
  );
};

export default 업다운아이콘;
export { 업다운아이콘 };
