import React from "react";
import styled from "styled-components";

import GlobalStyle from "./globalStyle";

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  `
const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <main>{children}</main>
    </StyledLayout>
  );
}

export default Layout;