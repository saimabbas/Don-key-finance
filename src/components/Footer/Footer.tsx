import React from "react"
import { Container, Row, Col } from "react-bootstrap"


export const Footer = () => {
    return <footer className="pt-5 pb-5 mb-0">
    <Container>
      <Row>
        <Col md={3}>
          <div className="footcol">
            <div className="footHead mb-md-5 mb-3">
              <img
                src="/assets/images/footerLogo.png"
                className="d-inline-block"
                alt="Image"
              />
            </div>
            <p>
              Start building your crypto <br /> investment portfolio with{" "}
              <br /> a trusted partner
            </p>

            <p className="pt-5">2020</p>
          </div>
        </Col>

        <Col md={3}>
          <div className="footcol">
            <div className="footHead mb-md-5 mb-3">
              <h4>Company</h4>
            </div>
            <ul className="pl-0">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">GDPR</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={3}>
          <div className="footcol">
            <div className="footHead mb-md-5 mb-3">
              <h4>For users</h4>
            </div>
            <ul className="pl-0">
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Farmers free tier</a>
              </li>
              <li>
                <a href="#">How to Withdraw</a>
              </li>
              <li>
                <a href="#">How to Verify Your Account</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={3}>
          <div className="footcol">
            <div className="footHead mb-md-5 mb-3">
              <h4>Privacy and Regulation</h4>
            </div>
            <ul className="pl-0">
              <li>
                <a href="#"> Buru Cookie Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Regulation & License</a>
              </li>
              <li>
                <a href="#">General Risk Disclosure</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}