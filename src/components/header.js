import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 0 3rem;
  /* font-family: 'Roboto Condensed', Roboto, sans-serif; */
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Tory Dannenberg.</h1>
    </StyledHeader>
  )
};


export default Header;

