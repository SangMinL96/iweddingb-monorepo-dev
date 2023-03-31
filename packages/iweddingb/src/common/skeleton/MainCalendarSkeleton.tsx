import React from 'react';
import styled from 'styled-components';

function MainCalendarSkeleton() {
  const arr = Array.from({ length: 35 });

  return (
    <Container>
      {arr.map((_, index) => {
        return (
          <div className='card'>
            <div className='header'>
              <div className='img' />
            </div>
            <div className='description'>
              <div className='line line-1' />
              <div className='line line-2' />
              <div className='line line-3' />
            </div>
            <div className='btns'>
              <div className='btn btn-1' />
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default MainCalendarSkeleton;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 8px;
  .card {
    position: relative;
    min-width: calc(100% / 7);
    min-height: calc(100% / 7);
    background: #fff;
    padding: 15px;
    box-shadow: 0 1px 3px #ddd;
  }
  .card .header {
    display: flex;
    align-items: center;
  }
  .header .img {
    height: 35px;
    width: 35px;
    background: #d9d9d9;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }

  .card .description {
    margin: 25px 0;
  }
  .description .line {
    background: #d9d9d9;
    border-radius: 10px;
    height: 13px;
    margin: 10px 0;
    overflow: hidden;
    position: relative;
  }
  .description .line-1 {
    width: calc(100% - 15%);
  }
  .description .line-3 {
    width: calc(100% - 40%);
  }
  .card .btns {
    width: 100%;
    height: 45px;
    position: absolute;
    bottom: 0;
    display: flex;
  }
  .card .btns .btn {
    height: 25px;
    width: calc(100% - 30px);
    left: 0;
    bottom: 0px;
    border-radius: 6px;
    background: #d9d9d9;
    position: relative;
    overflow: hidden;
  }
  .btns .btn-1 {
    margin-right: 8px;
  }
  .btns .btn-2 {
    margin-left: 8px;
  }
  .header .img::before,
  .description .line::before,
  .btns .btn::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #d9d9d9 0%, rgba(0, 0, 0, 0.07) 20%, #d9d9d9 40%, #d9d9d9 100%);
    background-repeat: no-repeat;
    background-size: 200px 200px;
    animation: shimmer 1s linear infinite;
  }
  .header .img::before {
    background-size: 650px 600px;
  }
  .btns .btn-2::before {
    animation-delay: 0.22s;
  }
  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: 200px 0;
    }
  }
`;
// td {
//   width: calc((100% / 7) - 7px);
//   height: calc((100% / 7) - 7px);
//   position: relative;
//   overflow: hidden;
//   background-color: #686868;
//   > div {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     transform: translateX(-100%);
//     z-index: 555;
//     background: -webkit-gradient(
//       linear,
//       left top,
//       right top,
//       color-stop(0%, transparent),
//       color-stop(20%, rgba(255, 255, 255, 0.2)),
//       color-stop(60%, rgba(255, 255, 255, 0.5)),
//       color-stop(100%, transparent)
//     ); /* Chrome, Safari4+ */
//     background: -webkit-linear-gradient(left, transparent 0%, #fff 0.2 20%, #fff 0.5 60%, transparent 100%); /* Chrome10+, Safari5.1+ */
//     background: -moz-linear-gradient(left, transparent 0%, #fff 0.2 20%, #fff 0.5 60%, transparent 100%); /* FF3.6+ */
//     background: linear-gradient(to left, transparent 0%, #fff 0.2 20%, #fff 0.5 60%, transparent 100%); /* W3C */
//     animation: shimmer 2s infinite;
//     content: '';
//   }

//   @keyframes shimmer {
//     100% {
//       transform: translateX(100%);
//     }
//   }
// }
