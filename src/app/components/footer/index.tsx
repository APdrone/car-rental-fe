/* eslint-disable jsx-a11y/anchor-is-valid */
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  /* min-height: 20em; */
  background-color: #1d2124;
  ${tw`
        flex
        // flex-col
        flex-wrap
        w-full
        pt-10
        md:pt-16
        // pb-1
        items-center
        justify-center
     `};
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        w-full
        h-full
        max-w-screen-2xl
        // justify-center
    `}
`;

const BottomContainer = styled.div`
  background-color: #1d2124;
  ${tw`
        flex
        w-full
        justify-center
        max-w-screen-2xl
    `}
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
        text-gray-300
    `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-12
        px-10
        md:px-3
    `}
`;

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
    `}
`;

const SectionContainer = styled.div`
  ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        mr-2
        md:mr-16
        px-10
        md:px-3
        mt-6
        md:mt-0
    `}
`;

const LinksList = styled.ul`
  ${tw`
        
        outline-none
        list-none
        flex
        flex-col
    `}
`;

const ListItem = styled.li`
  ${tw`
        text-sm
        mb-3
    `}

  &>a {
    ${tw` 
        text-xs
        text-white
        transition-all
        hover:text-gray-200

    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw` 
        text-2xl
        font-bold
        text-white
        mb-3
    `}
`;

const HorizontalContainer = styled.div`
  ${tw`
        flex
        items-center

    `}
`;

const RedIcon = styled.span`
  ${tw`
        w-10
        h-10
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `}
`;

const SmallText = styled.h6`
  ${tw`
        text-sm
        text-white

    `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            YourCar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <LinksList>
            <HeaderTitle>Our Links</HeaderTitle>

            <ListItem>
              <a href="https://www.google.com/">Home</a>
            </ListItem>
            <ListItem>
              <a href="https://www.google.com/">About Us</a>
            </ListItem>
            <ListItem>
              <a href="https://www.google.com/">Services</a>
            </ListItem>
            <ListItem>
              <a href="https://www.google.com/">Models</a>
            </ListItem>
            <ListItem>
              <a href="https://www.google.com/">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <LinksList>
            <HeaderTitle>Other Links</HeaderTitle>

            <ListItem>
              <a href="https://www.google.com/">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="https://www.google.com/">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="https://www.google.com/">Support</a>
            </ListItem>
            <ListItem>
              <a href="https://www.google.com/">Privacy Poliy</a>
            </ListItem>
            <ListItem>
              <a href="https://www.google.com/">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhone} />
            </RedIcon>
            <SmallText>+91-123-3234-87</SmallText>
          </HorizontalContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All Rights
          Reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
