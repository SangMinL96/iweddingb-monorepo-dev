import React from 'react';
import TimeList from './TimeList';
import Title from './Title';

type PropsType = {
  children: React.ReactNode;
};
function Product({ children }: PropsType) {
  return <>{children}</>;
}
Product.Title = Title;
Product.TimeList = TimeList;
export default Product;
export { Product };
