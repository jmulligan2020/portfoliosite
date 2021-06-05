import React from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuButton"
import { H1 } from "../styles/TextStyles"

export default function ContactSection() {
  return (
    <Wrapper id="contact">
      <ContentWrapper>
        <Title>Contact</Title>
        <Underline />
        <TextWrapper>
          <Goodbye>
            Thanks for looking over my portfolio! Please reach out with any
            questions or inquires.
          </Goodbye>
          <Info>
            Email: jmulligan2020@gmail.com
            <br />
            Phone: (630)-977-9020
          </Info>
        </TextWrapper>
        <ButtonWrapper>
          <a href="mailto:jmulligan2020@gmail.com">
            <MenuButton
              item={{
                title: "Email",
                icon: "/images/icons/email.svg",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/john-mulligan-bb73a81a9
            https://www.linkedin.com/in/john-mulligan-bb73a81a9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuButton
              item={{
                title: "LinkedIn",
                icon: "/images/icons/linkedin-round-line.svg",
              }}
            />
          </a>
        </ButtonWrapper>
        <ImageInfo>
          Backgrounds: license free from pexels.com
          <br />
          Icons: license free from uxwing.com
        </ImageInfo>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  background-image: url(/images/backgrounds/pexels-city.jpg);
  background-size: cover;
`

const ContentWrapper = styled.div`
  max-width: 100%;
  padding: 20px 30px;

  display: grid;
  justify-items: center;
  gap: 20px;
`

const Title = styled(H1)`
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 38px;
  }
`

const Underline = styled.div`
  width: 300px;
  height: 5px;
  background: #ffffff;
  border-radius: 8px;

  @media (max-width: 450px) {
    width: 200px;
  }
`
const TextWrapper = styled.div`
  margin: 50px 30px;
  max-width: 600px;
  display: grid;
  gap: 50px;
  @media (max-width: 450px) {
    width: 100%;
  }
`
const Goodbye = styled.h1`
  font-size: 38px;
  font-weight: bold;
  color: white;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 25px;
  }
`
const Info = styled.p`
  color: white;
  text-align: center;
  font-size: 28px;
  line-height: 130%;
  font-weight: normal;

  @media (max-width: 450px) {
    font-size: 20px;
  }
`

const ButtonWrapper = styled.div`
  width: 300px;

  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
`

const ImageInfo = styled.p`
  color: white;
  text-align: center;
  font-size: 16px;
  line-height: 130%;
  font-weight: normal;
  margin-top: 50px;
`
