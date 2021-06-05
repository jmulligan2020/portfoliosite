import React from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuButton"
import { H1 } from "../styles/TextStyles"

export default function ResumeSection() {
  return (
    <Wrapper id="resume">
      <ContentWrapper>
        <Title>Resume</Title>
        <Underline />
        <Resume src="/uploads/resume.jpg" />
        <a
          href="/uploads/Resume_John_Mulligan.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MenuButton
            item={{
              title: "Download",
              icon: "/images/icons/download-file.svg",
            }}
          />
        </a>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  background-image: url(/images/backgrounds/pexels-mountains.jpg);
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
const Resume = styled.img`
  width: 600px;

  @media (max-width: 650px) {
    width: 80%;
  }
`
