import windowOpen from '@common/window';
import 로그아웃아이콘 from '@styles/svg/로그아웃아이콘';
import 링크보내기아이콘 from '@styles/svg/링크보내기아이콘';
import 스케줄변경추가요청아이콘 from '@styles/svg/스케줄변경추가요청아이콘';
import postTokenTest from 'api/login/api';
import { destroyAccessToken, setAccessToken } from 'common/webStorage/storage';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { isDesktop } from 'react-device-detect';
import styled from 'styled-components';
import theme from 'styles/theme';
import PortalModal from '@common/ui/PortalModal';

function Header() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter();
  const onLogoutClick = () => {
    destroyAccessToken();
    router.push('/login');
  };
  return (
    <Container>
      <div className='left_box'>
        <h3>스케줄 관리</h3>
        <div className='divide' />
        <p>스튜디오</p>
      </div>
      <div className='right_box'>
        <button type='button'>{링크보내기아이콘()}링크 보내기</button>
        <button
          type='button'
          onClick={() => {
            if (isDesktop) {
              return windowOpen({ url: '/modify', name: 'modify_popup' });
            }
            return router.push('/modify');
          }}
        >
          {스케줄변경추가요청아이콘()}등록 스케줄 변경/추가 요청
        </button>
        <button onClick={() => setOpenModal(true)} type='button' className='logout'>
          {로그아웃아이콘()}로그아웃
        </button>
      </div>
      <PortalModal title='로그아웃 하시겠습니까?' open={openModal} close={() => setOpenModal(false)} onYesClick={onLogoutClick} />
    </Container>
  );
}

export default React.memo(Header);

const Container = styled.section`
  width: 100%;
  height: 56px;
  background-color: #f8f8f8;
  ${theme.flexCenter};
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 10px;
  .left_box {
    ${theme.flexCenter};
    justify-content: flex-start;
    font-size: 1.6rem;
    font-weight: 700;
    > h3 {
      color: ${theme.black};
    }
    > .divide {
      margin: 0 16px;
      height: 10px;
      width: 1px;
      background-color: #dddddd;
    }
    > p {
      color: ${theme.blue};
    }
  }
  .right_box {
    ${theme.flexCenter};
    justify-content: flex-end;

    > button {
      ${theme.flexCenter};
      height: 32px;
      font-size: 1.4rem;
      background-color: ${theme.blue};
      color: white;
      padding: 0 10px;
      margin-left: 10px;
      border-radius: 6px;
      svg {
        margin-right: 6px;
      }
    }
    > button.logout {
      color: #8c8c8c;
      background-color: #f8f8f8;
    }
  }
`;
