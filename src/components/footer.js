import React from "react"
import FooterLinks from "./footer-links"
import { Callout, Blurb } from "./footer-styles"
import CalloutImage from "../images/callout.jpg"

const Footer = () => {
  return (
    <footer>
      <Callout image={CalloutImage}>
        <h2>
          "The surprising styles of Fashion House are advanced for all seasons."
        </h2>
        <p>Hansel Andersen</p>
      </Callout>
      <FooterLinks />
      <Blurb>
        <p>
          This project was built with Gatsby
        </p>
      </Blurb>
    </footer>
  )
}

export default Footer
