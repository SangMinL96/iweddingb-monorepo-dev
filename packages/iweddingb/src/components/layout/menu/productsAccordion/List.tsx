import CheckBox from '@common/ui/CheckBox';
import { EnterPriseResultIft } from '@iweddingb-workspace/shared';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type PropsType = {
  enterpriseInfo: EnterPriseResultIft;
  isAccordion: boolean;
};

function List({ enterpriseInfo, isAccordion }: PropsType) {
  const variants = {
    open: { height: 'auto' },
    closed: { height: '0' },
  };
  return (
    <ListStyled animate={isAccordion ? 'open' : 'closed'} variants={variants} transition={{ duration: 0.2 }}>
      {enterpriseInfo?.products.map(product => {
        return <CheckBox key={`product_${product.name}`} id={product.name} label={product.name} onChange={ev => console.log(ev)} />;
      })}
    </ListStyled>
  );
}

export default List;

const ListStyled = styled(motion.ul)`
  width: 100%;
  height: 400px;
  background-color: red;
  overflow-y: hidden;
  > li {
    width: 100%;
    height: 30px;
  }
`;
