import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "./OnboardingStyle.scss";
import ButtonComponent from "../../components/Button/Button";
import ControlledCarousel from "../../components/Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Onboarding = () => {
  return (
    <div>
      <Navbar expand="lg" className="pt-4 pb-4">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/assets/images/logo.png"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <ButtonComponent variant="colorBlack btn-farming">
            Start farming
          </ButtonComponent>
        </Container>
      </Navbar>

      {/* Content */}

      <ControlledCarousel
        children1={
          <div>
            <div className="boardContent">
              <Container>
                <Row>
                  <Col md={12} className="text-center">
                    <div className="onboardimg">
                      <img
                        src="/assets/images/onboarding/1.png"
                        className="d-inline-block"
                        alt="Image"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <footer className="pt-5 footer">
              <Container className="newContainer content1Foot">
                <Row>
                  <Col md={5}>
                    <h2> First steps with the strategy builder</h2>
                  </Col>
                  <Col md={6}>
                    <p>
                      BURU Strategy Builder guides you step by step through
                      creating your first strategy. Just drag and drop the
                      protocols you want, link them to actions, and your
                      strategy is ready. Become the best farmer with BURU
                      Strategy Builder
                    </p>
                  </Col>
                </Row>

                <a href="/login" className="d-inline-block skipLink">
                  Skip
                </a>
              </Container>
            </footer>
          </div>
        }
        children2={
          <div>
            <div className="boardContent">
              <Container className="newContainer">
                <Row>
                  <Col md={12}>
                    <div className="onboardimg">
                      <img
                        src="/assets/images/onboarding/2.png"
                        className="d-inline-block"
                        alt="Image"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <footer className="pt-5 footer">
              <Container className="newContainer content1Foot">
                <Row>
                  <Col md={5}>
                    <h2> First steps with the strategy builder</h2>
                  </Col>
                  <Col md={6}>
                    <p>
                      BURU Strategy Builder guides you step by step through
                      creating your first strategy. Just drag and drop the
                      protocols you want, link them to actions, and your
                      strategy is ready. Become the best farmer with BURU
                      Strategy Builder
                    </p>
                  </Col>
                </Row>
                <a href="/login" className="d-inline-block skipLink">
                  Skip
                </a>
              </Container>
            </footer>
          </div>
        }
        children3={
          <div>
            <div className="boardContent">
              <Container className="newContainer">
                <Row>
                  <Col md={12}>
                    <div className="onboardimg">
                      <img
                        src="/assets/images/onboarding/3.png"
                        className="d-inline-block"
                        alt="Image"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <footer className="pt-5 footer">
              <Container className="newContainer content5Foot">
                <Row>
                  <Col md={5} className="mr-5 text-md-right text-left">
                    <h2> Experienced farmer</h2>
                  </Col>
                  <Col md={5} className="pr-md-0">
                    <p className="pt-2 pr-2">
                      BURU Strategy Builder helps you to improve the quality of
                      your strategies in an easy way by dragging and dropping
                      the required protocols, linking them to actions and
                      improving your strategies. Become the best farmer with
                      BURU Strategy Builder
                    </p>
                  </Col>
                </Row>
                <a href="/login" className="d-inline-block skipLink">
                  Skip
                </a>
              </Container>
            </footer>
          </div>
        }
        children4={
          <div>
            <div className="boardContent">
              <Container className="newContainer">
                <Row>
                  <Col md={12}>
                    <div className="onboardimg">
                      <img
                        src="/assets/images/onboarding/4.png"
                        className="d-inline-block"
                        alt="Image"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <footer className="pt-5 footer">
              <Container className="newContainer content5Foot">
                <Row>
                  <Col
                    md={{ span: 3, offset: 1 }}
                    className="mr-5 text-md-right text-left"
                  >
                    <h2>Farmers Rating</h2>
                  </Col>
                  <Col md={5} className="pr-md-0">
                    <p className="pt-2 pr-2">
                      With Buru, you can become part of a farming team and
                      compete for the title of the best farmer, which will give
                      you the opportunity to attract investments of up to USD 1
                      million to your trading portfolio.
                    </p>
                  </Col>
                </Row>
                <a href="/login" className="d-inline-block skipLink">
                  Skip
                </a>
              </Container>
            </footer>
          </div>
        }
        children5={
          <div>
            <div className="boardContent">
              <Container className="newContainer">
                <Row>
                  <Col md={12}>
                    <div className="onboardimg">
                      <img
                        src="/assets/images/onboarding/5.png"
                        className="d-inline-block"
                        alt="Image"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <footer className="pt-5 footer">
              <Container className="newContainer content5Foot">
                <Row>
                  <Col md={5} className="mr-5 text-md-right text-left">
                    <h2> Top farmers comments</h2>
                  </Col>
                  <Col md={5} className="pr-md-0">
                    <p className="pt-2 pr-2">
                      Buru is a decentralized yield farming automation platform
                      whic allows farmers to publicly share yield farming
                      strateg
                    </p>
                  </Col>
                </Row>
                <a href="/login" className="d-inline-block skipLink">
                  Skip
                </a>
              </Container>
            </footer>
          </div>
        }
      />
    </div>
  );
};

export default Onboarding;
