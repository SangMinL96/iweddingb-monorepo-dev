import 닫기아이콘 from '@styles/svg/닫기아이콘';
import 도트아이콘 from '@styles/svg/도트아이콘';
import theme from '@styles/theme';
import { motion } from 'framer-motion';
import React, { useRef, useState, useTransition } from 'react';
import styled from 'styled-components';

function Temp() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [_, startTransition] = useTransition();

  return (
    <Container open={open} animate={open ? { height: 320, width: 260 } : { height: 40, width: 92 }}>
      <motion.button
        onClick={() => {
          setOpen(prev => !prev);
          ref.current.focus();
        }}
        type='button'
        className='memo_open'
        animate={
          open
            ? {
                borderRadius: '0px',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
                width: 260,
                justifyContent: 'space-between',
              }
            : { borderRadius: '20px', width: 92 }
        }
      >
        {open ? (
          <>
            <p className='open_icon'>메모</p>
            {닫기아이콘()}
          </>
        ) : (
          <>
            <p>메모 열기</p>
            {도트아이콘()}
          </>
        )}
      </motion.button>
      <motion.div
        animate={open ? { opacity: 1, width: 260, height: 280 } : { opacity: 0, width: 92, height: 0 }}
        className='textarea_box'
        aria-label='공지사항 입력 박스'
      >
        <textarea
          ref={ref}
          value={value}
          onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => startTransition(() => setValue(ev.target.value))}
        />
      </motion.div>
    </Container>
  );
}

export default Temp;

const Container = styled(motion.div)<{ open: boolean }>`
  width: 92px;
  position: fixed;
  right: 40px;
  bottom: 20px;
  ${theme.flexCenter};
  flex-direction: column;
  align-items: flex-end;
  > button.memo_open {
    position: relative;
    width: 92px;
    height: 40px;
    background-color: #fd4381;
    color: white;
    font-size: 1.4rem;
    svg {
      position: absolute;
      top: 11px;
      right: 16px;
    }
    .open_icon {
      text-align: start;
      padding-left: 16px;
    }
  }
  .textarea_box {
    width: 100%;
    height: 0px;
    overflow: hidden;
    textarea {
      width: 100%;
      font-size: 1.4rem;
      line-height: 19px;
      border: 1px solid #fd4381;
      border-top: none;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      ${theme.hideScroll};
      color: ${theme.black};
      resize: none;
      height: auto;
      min-height: 280px;
      padding: 16px;
      &::placeholder {
        color: #b3b3b3;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
