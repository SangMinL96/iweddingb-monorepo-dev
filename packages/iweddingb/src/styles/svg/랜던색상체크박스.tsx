const 랜던색상체크박스 = (checked: boolean = false, color) => {
  if (checked) {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
        <g id='check_box' transform='translate(-20 -391)'>
          <rect id='bg' width='18' height='18' rx='6' transform='translate(20 391)' fill={color} />
          <g id='State_Checked_Size_24_Theme_Regular' data-name='State=Checked, Size=24, Theme=Regular' transform='translate(21 392)'>
            <rect id='사각형_1815' data-name='사각형 1815' width='16' height='16' fill='none' />
            <path
              id='패스_4'
              data-name='패스 4'
              d='M13.3,5.3a.778.778,0,0,0-1.1-1.1L6,10.4,3.8,8.2A.778.778,0,0,0,2.7,9.3L5.5,12a.785.785,0,0,0,1.1,0Z'
              fill='#fff'
            />
          </g>
        </g>
      </svg>
    );
  }
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
      <g id='check_box' transform='translate(-20 -391)'>
        <g id='bg' transform='translate(20 391)' fill='#fff' stroke='#ddd' strokeWidth='1'>
          <rect width='18' height='18' rx='6' stroke='none' />
          <rect x='0.5' y='0.5' width='17' height='17' rx='5.5' fill='none' />
        </g>
        <g id='State_Checked_Size_24_Theme_Regular' data-name='State=Checked, Size=24, Theme=Regular' transform='translate(21 392)'>
          <rect id='사각형_1815' data-name='사각형 1815' width='16' height='16' fill='none' />
          <path
            id='패스_4'
            data-name='패스 4'
            d='M13.3,5.3a.778.778,0,0,0-1.1-1.1L6,10.4,3.8,8.2A.778.778,0,0,0,2.7,9.3L5.5,12a.785.785,0,0,0,1.1,0Z'
            fill='#ddd'
          />
        </g>
      </g>
    </svg>
  );
};
export default 랜던색상체크박스;
export { 랜던색상체크박스 };
