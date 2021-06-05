import React from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuButton"
import { Link } from "react-scroll"

export default function NavMenu(props) {
  const { isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <MenuButton
          item={{
            title: "About",
            icon: "/images/icons/user.svg",
          }}
        />
      </Link>
      <Link
        activeClass="active"
        to="resume"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <MenuButton
          item={{
            title: "Resume",
            icon: "/images/icons/resume-cv.svg",
          }}
        />
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <MenuButton
          item={{
            title: "Projects",
            icon: "/images/icons/project-work.svg",
          }}
        />
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <MenuButton
          item={{
            title: "Contact",
            icon: "/images/icons/contacts.svg",
          }}
        />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;

  padding: 20px 20px;
  position: absolute;

  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  @media (max-width: 450px) {
    grid-template-columns: 125px;
  }
  transition: 0.3s ease-in-out;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
