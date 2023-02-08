import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import ProductCard from '../ui/ProductCard';

const RecommendWrap = styled.View`
   height: 420px; 
   flex-direction: row;

`;

const RecommendProduct = (props) => {
   const [productData, setProductData] = useState();

   const getData = async () => {
      try {
         // AVD로 데이터 불러올 때 주소(localhost 대신 10.0.2.2)
         // const res = await axios.get('http://10.0.2.2:3001/products')
         // 웹으로 데이터 불러올 때 주소
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
                  <ProductCard key={product.id} data={product} navigation={props.navigation}/>
               ))
            }
         </ScrollView>
      </RecommendWrap>
   );
}





export default RecommendProduct;