import React from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuButton"

export default function ProjectsSection() {
  return (
    <Wrapper id="projects">
      <ContentWrapper>
        <Title>Projects</Title>
        <Underline />
        <ProjectWrapper>
          <ImageWrapper>
            <Screenshot src="/images/screenshots/portfolio/1.png" />
            <Screenshot src="/images/screenshots/portfolio/2.png" />
            <Screenshot src="/images/screenshots/portfolio/3.png" />
            <Screenshot src="/images/screenshots/portfolio/4.png" />
          </ImageWrapper>
          <TextWrapper>
            <ProjectTitle>Portfolio Website (this site)</ProjectTitle>
            <ProjectInfo>
              Built this site from scratch using Javascript, HTML, CSS, React,
              Gatsby, and NodeJS
            </ProjectInfo>
            <ProjectInfo>Designed the UI/UX using figma</ProjectInfo>
            <ProjectInfo>
              Coded with mobile web support (try it out!)
            </ProjectInfo>
            <ProjectInfo>
              Based on the Design+Code React tutorial (below)
            </ProjectInfo>
          </TextWrapper>
          <ButtonWrapper>
            <a
              href="https://github.com/jmulligan2020/my-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuButton
                item={{
                  title: "Github",
                  icon: "/images/icons/github.svg",
                }}
              />
            </a>
            <a
              href="https://www.figma.com/file/y4KvTA7EE4lACFzjwSIcaq/Portfolio-Website?node-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuButton
                item={{
                  title: "Figma",
                  icon: "/images/icons/web-design.svg",
                }}
              />
            </a>
          </ButtonWrapper>
        </ProjectWrapper>
        <ProjectWrapper>
          <ImageWrapper>
            <Screenshot src="/images/screenshots/designcode/1.png" />
            <Screenshot src="/images/screenshots/designcode/2.png" />
            <Screenshot src="/images/screenshots/designcode/3.png" />
            <Screenshot src="/images/screenshots/designcode/4.png" />
          </ImageWrapper>
          <TextWrapper>
            <ProjectTitle>React Hooks Course on Design+Code</ProjectTitle>
            <ProjectInfo>
              Guided lessons for the coding and styling of a website using React
            </ProjectInfo>
            <ProjectInfo>
              Course covered React, Javascript, HTML, CSS, Gatsby, NodeJS,
              Figma, and more
            </ProjectInfo>
            <ProjectInfo>
              Information from the course helped me build this site!
            </ProjectInfo>
          </TextWrapper>
          <ButtonWrapper>
            <a
              href="https://github.com/jmulligan2020/design-codeReact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuButton
                item={{
                  title: "Github",
                  icon: "/images/icons/github.svg",
                }}
              />
            </a>
            <a
              href="https://zealous-montalcini-e4f09f.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuButton
                item={{
                  title: "Website",
                  icon: "/images/icons/website.svg",
                }}
              />
            </a>
          </ButtonWrapper>
        </ProjectWrapper>
        <ProjectWrapper>
          <ImageWrapper>
            <Screenshot src="/images/screenshots/tagim/1.png" />
            <Screenshot src="/images/screenshots/tagim/2.png" />
            <Screenshot src="/images/screenshots/tagim/3.png" />
            <Screenshot src="/images/screenshots/tagim/4.png" />
          </ImageWrapper>
          <TextWrapper>
            <ProjectTitle>Software Development Project (CS 3308)</ProjectTitle>
            <ProjectInfo>
              Built a website in a team using Agile/Scrum methodology
            </ProjectInfo>
            <ProjectInfo>
              Brainstormed an image tagging website we called “TagIm”
            </ProjectInfo>
            <ProjectInfo>
              Used SQL to store and check login information in addition to image
              uploading
            </ProjectInfo>
            <ProjectInfo>Designed the UI/UX using figma</ProjectInfo>
          </TextWrapper>
          <ButtonWrapper>
            <a
              href="https://github.com/pickettmap/TagImProjCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuButton
                item={{
                  title: "Github",
                  icon: "/images/icons/github.svg",
                }}
              />
            </a>
            <a
              href="https://www.figma.com/file/SJFbRC0f3A0BeWoRxNKzLkRS/TagIm-Design?node-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuButton
                item={{
                  title: "Figma",
                  icon: "/images/icons/web-design.svg",
                }}
              />
            </a>
          </ButtonWrapper>
        </ProjectWrapper>
        <ProjectWrapper>
          <ImageWrapper>
            <Screenshot src="/images/screenshots/anxiety/1.png" />
            <Screenshot src="/images/screenshots/anxiety/2.png" />
            <Screenshot src="/images/screenshots/anxiety/3.png" />
            <Screenshot src="/images/screenshots/anxiety/4.png" />
          </ImageWrapper>
          <TextWrapper>
            <ProjectTitle>Productivity App Prototype (CS 3002)</ProjectTitle>
            <ProjectInfo>
              Designed multiple iterations of a productivity app
            </ProjectInfo>
            <ProjectInfo>
              Used design principles we learned in class
            </ProjectInfo>
            <ProjectInfo>
              Performed user-testing to improve the design
            </ProjectInfo>
          </TextWrapper>
          <ButtonWrapper>
            <a
              href="https://www.figma.com/proto/JiEwOYYn5jeSGxRecvctrhvK/Final-Prototype?page-id=0%3A1&node-id=4%3A109&viewport=-494%2C-177%2C0.2703247666358948&scaling=scale-down"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuButton
                item={{
                  title: "Prototype",
                  icon: "/images/icons/mobile-phone.svg",
                }}
              />
            </a>
            <a
              href="https://www.figma.com/file/JiEwOYYn5jeSGxRecvctrhvK/Final-Prototype?node-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuButton
                item={{
                  title: "Figma",
                  icon: "/images/icons/web-design.svg",
                }}
              />
            </a>
          </ButtonWrapper>
        </ProjectWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  background-image: url(/images/backgrounds/pexels-sand-3.jpg);
  background-size: cover;
`

const ContentWrapper = styled.div`
  max-width: 100%;
  padding: 20px 30px;

  display: grid;
  justify-items: center;
  gap: 30px;
`

const Title = styled.h1`
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
const ProjectWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
  padding-bottom: 60px;
`

const ImageWrapper = styled.div`
  background: rgba(196, 196, 196, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 14px;
  padding: 10px 10px;
  width: 80%;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  place-items: center;
  gap: 10px;

  @media (max-width: 450px) {
    padding: 5px;
    gap: 5px;
    border-radius: 5px;
    width: 100%;
  }
`
const Screenshot = styled.img`
  width: 100%;
  object-fit: contain;
`
const TextWrapper = styled.div`
  background: rgba(196, 196, 196, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 14px;

  width: 80%;
  padding: 20px;

  display: grid;
  grid-auto-flow: row;
  justify-items: left;
  gap: 10px;

  @media (max-width: 450px) {
    width: 100%;
  }
`
const ProjectTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  @media (max-width: 450px) {
    font-size: 26px;
  }
`
const ProjectInfo = styled.p`
  font-size: 16px;
  margin-left: 30px;
`
const ButtonWrapper = styled.div`
  width: 300px;

  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
`
