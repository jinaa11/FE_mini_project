import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import ProductCard from '../ui/ProductCard';
import axios from 'axios';

const Container = styled.ScrollView`
   background-color: #f3f3f3;
`;

const Title = styled.Text`
   font-size: 24px;
   font-weight: bold;
`;

const Products = ({ navigation, route }) => {
   const [productData, setProductData] = useState();

   const getData = async () => {
      try {
         // AVD로 데이터 불러올 때 주소(localhost 대신 10.0.2.2)
         const res = await axios.get('http://10.0.2.2:3001/products')
         // 웹으로 데이터 불러올 때 주소
         // const res = await axios.get('http://localhost:3001/products')
            .catch(err => console.log(err))
         console.log(res.data)
         setProductData(res.data)
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() => {
      getData();
   }, [])
   
   return (
      <Container>
         <Title>Product Screen</Title>
         {
            productData && productData.map(product => (
               <ProductCard key={product.id} data={product} navigation={navigation} />
            ))
         }
      </Container>
   );
}

export default Products;