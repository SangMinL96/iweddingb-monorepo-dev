import theme from '@styles/theme';
import React, { useEffect, useState } from 'react';
import reactDom, { createPortal } from 'react-dom';
import styled from 'styled-components';

type PropsType = {
  title: '로그아웃 하시겠습니까?';
  customButton?: React.ReactElement;
  open: boolean;
  close: () => void;
  onYesClick?: () => void;
};
function PortalModal({ title, customButton, close, open = false, onYesClick }: PropsType) {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const el = document.getElementById('portal-modal');
  if (!mounted) return null;
  return (
    open &&
    createPortal(
      <Container>
        <div role='button' aria-hidden='true' className='background' onClick={close} />
        <Modal>
          <h5>{title}</h5>
          <div className='button_box'>
            {customButton || (
              <>
                <button onClick={close} type='button' className='no'>
                  아니요
                </button>
                <button onClick={onYesClick} type='button' className='yes'>
                  네
                </button>
              </>
            )}
          </div>
        </Modal>
      </Container>,
      el,
    )
  );
}

export default PortalModal;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  ${theme.flexCenter};
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Modal = styled.div`
  min-width: 350px;
  padding: 30px;
  z-index: 1001;
  background-color: white;
  border-radius: 12px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  > h5 {
    ${theme.flexCenter};
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .button_box {
    > button {
      min-width: 140px;
      height: 40px;
      margin: 0 5px;
      border-radius: 6px;
    }
    .yes {
      background-color: ${theme.blue};
      font-size: 1.4rem;
      color: white;
    }
    .no {
      background-color: #f8f8f8;
      font-size: 1.4rem;
      color: #aaaaaa;
    }
  }
`;
