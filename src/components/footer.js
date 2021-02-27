import React from "react";
import styled from "styled-components";
import githubLogo from "../images/github.png";
import linkedinLogo from "../images/linkedin.png";
import email from "../images/email1.png";

const StyledFooter = styled.div`
  min-height: 15vh;
  display: flex;
  justify-content: center;

  .footer-links {
    margin: 0 1rem;
  }

  img {
    height: 30px;
    width: 30px;
    &:hover {
      transform: rotate(3deg);
      height: 33px;
      width:33px;
    }
  }

`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href='https://github.com/tdberg21' target='_blank' className='footer-links' rel='noopener noreferrer'><img src={githubLogo} alt='github' /></a>
      <a href='https://www.linkedin.com/in/tory-dannenberg-a46b6337/' target='_blank' className='footer-links' rel='noopener noreferrer'><img src={linkedinLogo} alt='linkedin' /></a>
      <a href='mailto:rfdberg@gmail.com' className='footer-links'><img src={email} alt='email' /></a> 
    </StyledFooter>
  )
};

export default Footer;