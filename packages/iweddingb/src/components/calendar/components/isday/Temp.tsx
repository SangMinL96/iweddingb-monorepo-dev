import { getStorage, setStorage } from '@common/webStorage/storage';
import { formatToday, isEmpty } from '@iweddingb-workspace/shared';
import 닫기아이콘 from '@styles/svg/닫기아이콘';
import 도트아이콘 from '@styles/svg/도트아이콘';
import theme from '@styles/theme';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'throttle-debounce';

function Temp() {
  const router = useRouter();
  const { curdate = formatToday() } = router.query;
  const ref = useRef<HTMLTextAreaElement>(null);
  // const [value, setValue] = useState<string>('' || localStorage.getItem(`${curdate}_temp`));
  const [open, setOpen] = useState<boolean>(false);

  const debounceSave = debounce(500, (text: string) => {
    localStorage.setItem(`${curdate}_temp`, ref.current.value);
  });
  const onTempChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = ev.target.value;
    return debounceSave(text);
  };
  useEffect(() => {
    const tempText = localStorage.getItem(`${curdate}_temp`);
    if (tempText && ref) {
      ref.current.value = tempText;
    }
  }, []);

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
            {isEmpty(global.window && localStorage.getItem(`${curdate}_temp`)) && 도트아이콘()}
          </>
        )}
      </motion.button>
      <motion.div
        animate={open ? { opacity: 1, width: 260, height: 280 } : { opacity: 0, width: 92, height: 0 }}
        className='textarea_box'
        aria-label='공지사항 입력 박스'
      >
        <textarea ref={ref} onChange={onTempChange} />
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
