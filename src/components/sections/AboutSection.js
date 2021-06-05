import React from "react"
import styled from "styled-components"

export default function AboutSection() {
  return (
    <Wrapper id="about">
      <ContentWrapper>
        <div className="leftside">
          <ProfilePic src="/images/pictures/profile.png" />
          <TextWrapper>
            <Name>John Mulligan</Name>
            <Info>
              Graduated May 2021 from University of Colorado - Boulder
            </Info>
            <Info>
              Seeking job opportunities related to software development, UI/UX
              design, or data analysis
            </Info>
          </TextWrapper>
        </div>
        <MacBookPic src="/images/pictures/pexels-macbook.png" />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  background: black;
`

const ContentWrapper = styled.div`
  max-width: 100%;
  padding: 100px 30px;
  display: grid;
  grid-template-columns: 360px auto;
  justify-content: center;
  align-items: center;

  @media (max-width: 670px) {
    grid-template-columns: auto;
    gap: 10px;
    padding: 100px 20px 50px;
  }

  .leftside {
    display: grid;
    gap: 30px;
    justify-items: center;
  }
`
const ProfilePic = styled.img`
  width: 300px;
  @media (max-width: 450px) {
    width: 250px;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
  @media (max-width: 360px) {
    width: 80%;
  }
`
const MacBookPic = styled.img`
  width: 500px;
  justify-self: center;

  @media (max-width: 450px) {
    width: 300px;
  }

  @media (max-width: 900px) {
    width: 300px;
  }
`

const Name = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-align: center;
`
const Info = styled.p`
  color: white;
  text-align: center;
  font-size: 17px;
  line-height: 130%;
  font-weight: normal;
`
