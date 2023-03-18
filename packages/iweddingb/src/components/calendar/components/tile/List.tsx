import React from 'react';

type PropsType = {
  products: any[];
};
function List({ products }: PropsType) {
  return (
    <React.Fragment>
      {products.map(product => {
        return <li key={product}>{product}</li>;
      })}
    </React.Fragment>
  );
}

export default List;
export { List };
