import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const ProductCardWrap = styled.View`
   width: 250px;
   height: 250px;
   align-items: center;
   justify-content : center;
`;

const ProductImg = styled.Image`
   width: 200px;
   height: 200px;
`;

const ProductCardTitle = styled.Text`
   font-size: 15px;
   font-weight: bold;
   text-align: center;
`;

const ProductCard = (props) => {
   const handlePress = () => {
      props.navigation.navigate('ProductDetail', {data: props.data})
   }

   return (
      <ProductCardWrap>
         {/* 웹에서는 이미지 나오는데 폰으로는 안 나옴 */}
         <ProductImg source={props.data.thumbnail}/>
         <ProductCardTitle>{props.data.name}</ProductCardTitle>
         <ProductCardTitle>{props.data.price}원</ProductCardTitle>
         <Button title="상세보기" onPress={handlePress} />
      </ProductCardWrap>
   );
}

export default ProductCard;