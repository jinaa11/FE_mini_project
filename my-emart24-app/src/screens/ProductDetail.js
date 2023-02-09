import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Button } from 'react-native';

const Container = styled.View`
   flex: 1;
   background-color: #f3f3f3;
   align-items: center;
   justify-content: center;
`;

const ProductImg = styled.Image`
   width: 350px;
   height: 350px;
   
`;

const Title = styled.Text`
   font-size: 24px;
   font-weight: bold;
`;

const ProductDetail = (props) => {
   console.log(props);
   const productData = props.route.params.data;

   return(
      <Container>
         <ProductImg source={productData.thumbnail}/>
         <Title>{productData.name}</Title>
         <Text>{productData.description}</Text>
         <Text>{productData.price}원</Text>
         <Text>★ {productData.rating}</Text>
         {/* <Button title=''></Button> */}
      </Container>
   );
}

export default ProductDetail;