import React from "react";
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;
const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <h1>{titulo}</h1>
    </ContenedorHeader>
  );
};
export default Header;
