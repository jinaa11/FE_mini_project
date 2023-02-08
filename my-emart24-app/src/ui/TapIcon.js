import React from 'react';
import styled from 'styled-components/native';

const EmartTabIcon = styled.Image`
   width: 25px;
   height: 30px;
`;

const TapIcon = ({ source, color, size, focused }) => {
   return (
      <EmartTabIcon source={source} />
   );

}

export default TapIcon;