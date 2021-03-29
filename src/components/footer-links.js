import React from "react"
import styled from "styled-components"

const Links = styled.section`
  width: 80%;
  margin-left: 10%;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ul {
    list-style: none;
    padding-left: 0;
  }

  input {
    width: 100%;
  }

  @media screen and (min-width: 850px) {
    section {
      padding: 40px !important;
    }
  }
`

const FooterLinks = () => {
  return (
    <Links>
      <ul>
        <li>About</li>
        <li>Company</li>
        <li>Locations</li>
        <li>Contact</li>
        <li>Hours</li>
      </ul>
      <ul>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
      </ul>
      <ul>
        <h4>Newsletter:</h4>
        <input type="text" />
      </ul>
    </Links>
  )
}

export default FooterLinks
