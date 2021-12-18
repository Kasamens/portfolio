import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:kwadwoasamoa7@gmail.com">kwadwoasamoa7@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovation for the future</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/Kasamens">
        <AiFillGithub size="3rem"/>   
        </SocialIcons> 
        <SocialIcons href="https://www.linkedin.com/in/kojo-asamoa-mensah-29217214b/">
        <AiFillLinkedin size="3rem"/>   
        </SocialIcons> 
        <SocialIcons href="https://www.instagram.com/kojokhan247/">
        <AiFillInstagram size="3rem"/>   
        </SocialIcons> 
    </SocialIconsContainer>

      
    </FooterWrapper>
  );
};

export default Footer;
