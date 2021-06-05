import React from "react"
import styled from "styled-components"

export default function MenuButton(props) {
  const { item } = props
  return (
    <MenuItem>
      <img src={item.icon} alt={item.title} className="icon" />
      {item.title}
    </MenuItem>
  )
}

const MenuItem = styled.div`
  background: rgba(255, 255, 255, 0.4);
  //color: black;
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 20px;
  align-items: center;
  justify-items: center;
  padding: 10px;

  .icon {
    width: 30px;
    height: 30px;
    justify-self: left;
  }

  transition: 0.5s ease-out;
  border-radius: 10px;
  :hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    color: white;
  }
`
