import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import ProductCard from '../ui/ProductCard';

const RecommendWrap = styled.View`
   height: 420px; 
   flex-direction: row;

`;

const ProductImg = styled.Image`
   width: 300px;
   height: 300px;
`;

const RecommendProduct = () => {
   const [productData, setProductData] = useState();

   const getData = async () => {
      try {
         const res = await axios.get('http://localhost:3001/products')
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
      <RecommendWrap>
         <ScrollView horizontal={true}>
            {
               productData && productData.map(product => (
                  // <ProductImg key={product.id} source={product.thumbnail} />
                  <ProductCard key={product.id} data={product} />

               ))
            }
         </ScrollView>
      </RecommendWrap>
   );
}





export default RecommendProduct;