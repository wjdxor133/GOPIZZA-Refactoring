import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub, FaBlogger } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={() => scroll.scrollToTop()}>
              GOPIZZA
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/wjdxor133/GOPIZZA-Refactoring"
                target="_blank"
                rel="noopner"
                aria-label="github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://wjdxor133.github.io/"
                target="_blank"
                rel="noopner"
                aria-label="github"
              >
                <FaBlogger />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
