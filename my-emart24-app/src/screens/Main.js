import React from 'react';
import styled from 'styled-components/native';
import RecommendProduct from '../main/RecommendProduct';

const Container = styled.ScrollView`
   backgroundcolor: #f3f3f3;
   margin: auto;
   padding: 14px;
`;

const Title = styled.View`
   flex-direction: row;
   justify-content: space-between;
   height: 40px;
   
`;

const TitleText = styled.Text`
   font-size: 16px;
   font-weight: bold;
   color: #333;
`;

const TitleBtn = styled.Button`
   width: 50px;
   padding: 5px;
   border: 1px solid #333;
   border-radius: 5px;
   justify-contetn : center;
   align-items: center;
`;

const Main = ({ navigation, route }) => {
   return (
      <Container>
         <Title>
            <TitleText>행사 상품</TitleText>
            <TitleBtn
               title="더보기>"
               onPress={() => navigation.navigate('Products')}
            />
         </Title>
         <RecommendProduct navigation={navigation} route={route} />
      </Container>
   );
}

export default Main;