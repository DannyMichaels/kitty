import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  width: 100%;
  left: 0;
  color: black;
  font-size: 36px;
  margin-top: 20px;
  align-items: center;
  border-top: 1px solid black;
  z-index: 1;
  background-color: white;

  img {
    width: 100px;
    height: 50px;
    margin: 20px;
  }
  img:hover {
    transform: translateY(-4px);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <a
        href="https://github.com/dannymichaels"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://www.flaticon.com/premium-icon/icons/svg/527/527589.svg"
          alt="GitHub"
        ></img>
      </a>
    </StyledFooter>
  );
}

export default Footer;
