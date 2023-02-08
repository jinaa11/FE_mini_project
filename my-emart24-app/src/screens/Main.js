import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import RecommendProduct from '../main/RecommendProduct';

const Container = styled.ScrollView`
   backgroundcolor: #f3f3f3;
   margin: auto;
`;

const TitleText = styled.Text`
   font-size: 16px;
   font-weight: bold;
   color: #333;
`;

const Main = ({navigation, route}) => {
   return (
      <Container>
         <TitleText>상품</TitleText>
         <RecommendProduct navigation={navigation} route={route}/>
      </Container>
   );
}

export default Main;