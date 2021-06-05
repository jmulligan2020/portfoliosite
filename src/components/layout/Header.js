import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuButton"
import NavMenu from "../menus/NavMenu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const navMenuRef = useRef()

  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !navMenuRef.current.contains(event.target)
    ) {
      console.log("Document is clicked")
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Wrapper>
      <ContentWrapper>
        <HamburgerWrapper onClick={event => handleClick(event)}>
          <MenuButton
            item={{
              title: "Menu",
              icon: "/images/icons/hamburger-menu.svg",
            }}
          />
        </HamburgerWrapper>
        <NavMenuWrapper ref={navMenuRef}>
          <NavMenu isOpen={isOpen} />
        </NavMenuWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  width: 100%;

  z-index: 1;
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 10px;
  // padding: 0px 30px;
  justify-items: right;
`

const HamburgerWrapper = styled.a`
  margin: 0px 10px;
  @media (max-width: 450px) {
    margin: 0px 35px;
  }
`
const NavMenuWrapper = styled.div`
  margin: 0px 200px;
`
