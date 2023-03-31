import theme from '@styles/theme';
import styled from 'styled-components';
import TextArea from './textarea';

function Notice() {
  return (
    <Container>
      <TextArea>
        <TextArea.Trigger />
        <TextArea.Inputbox />
      </TextArea>
    </Container>
  );
}

export default Notice;

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  padding: 0 20px;
  .notice_section {
    ${theme.flexCenter};
    height: 24px;
    justify-content: flex-start;
    .notice_icon {
      margin-right: 8px;
    }
    > button {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${theme.black};
    }
    > p {
      margin-left: 10px;
      color: ${theme.blue};
      font-size: 1.2rem;
    }
  }
`;
