import React from 'react';
import styled from 'styled-components/native';

const ProductCardWrap = styled.View`
   width: 300px;
   height: 360px;
`;

const ProductImg = styled.Image`
   width: 300px;
   height: 300px;
`;

const ProductCardTitle = styled.Text`
   font-size: 18px;
   font-weight: bold;
   text-align: center;
`;

const ProductCard = (props) => {
   return(
      <ProductCardWrap>
         <ProductImg source={props.data.thumbnail} />
         <ProductCardTitle>{props.data.name}</ProductCardTitle> 
      </ProductCardWrap>
   );
}

export default ProductCard;