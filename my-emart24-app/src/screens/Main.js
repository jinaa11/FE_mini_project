import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content : center;
`;

const TitleText = styled.Text`
   font-size: 16px;
   font-weight: bold;
   color: #333;
`;

const Main = () => {
   return (
      <Container>
         <TitleText>Main</TitleText>
      </Container>
   );
}

export default Main;