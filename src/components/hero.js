import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
.title {
  margin-bottom:0;
}
.subtitle {
  margin-bottom:0;
}
.highlighted {
  box-shadow: inset 0 -2.5rem 0 #bada55;
  color: black;
}
.description {
  padding-top: 1rem;
}
`;

const Hero = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content;
  return (
    <StyledSection id="hero">
      <h1 className="title"> 
      {frontmatter.title} {" "}
        <span 
          role="img" 
          aria-label="waving-emoji">
        {frontmatter.emoji} {" "}
        </span> 
      </h1>
      <h2 className="subtitle">{frontmatter.subtitlePrefix} 
        <span className="highlighted">
        {frontmatter.subtitleHighlight}
        </span>
      </h2>
      <div className="description">
      {rawMarkdownBody}
      </div>
    </StyledSection>
    )
  };
  
  export default Hero;