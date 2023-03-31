import theme from '@styles/theme';
import styled from 'styled-components';

function Textarea() {
  return (
    <Container>
      <textarea
        id='modify_text'
        name='변경/추가요청사항 입력박스'
        placeholder={`예시)\n- 7~8월 토요일 저녁 19시 촬영 스케줄 오픈했어요.\n- 24년 1월 전체 스케줄 오픈되었어요.\n- 올해 남은 촬영이 기존 10시, 14시에서 11시, 15시 스케줄로 변경되었어요.`}
        required
      />
    </Container>
  );
}

export default Textarea;
const Container = styled.div`
  margin-top: 20px;
  textarea {
    width: 100%;
    font-size: 1.4rem;
    line-height: 19px;
    border: 1px solid ${theme.black};
    border-radius: 8px;
    ${theme.hideScroll};
    color: ${theme.black};
    resize: none;
    min-height: 220px;
    padding: 16px;
    &::placeholder {
      color: #aaaaaa;
      font-size: 1.4rem;
    }
    &:focus {
      outline: none;
    }
  }
`;
