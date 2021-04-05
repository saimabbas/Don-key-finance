import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { NavBar } from "../../components/Navbar/NavBar";
import { Container } from "react-bootstrap";
import {
  Row,
  Col,
  Form,
  InputGroup,
  Tab,
  Tabs,
  Nav,
  Button,
} from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./ResourceStyle.scss";
import ButtonComponent from "../../components/Button/Button";
import ModalPopup from "../../components/ProtocolsModal/ProtocolsModal";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { MoreProtocolsModal } from "components/MoreProtocolsModal/MoreProtocolsModal";

const ResourcePage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [rangeValue, setRangeValue] = React.useState(10);

  const handleRange = (val) => {
    const element = document.querySelector(".rc-slider-step");
    // if (element) {
    //   const childElement = element.children ? [...element.children] : [];
    //   if (childElement) {
    //     childElement.forEach(c => {
    //       if (c.classList.contains("rc-slider-dot-active")) {
    //         c.classList.remove("rc-slider-dot-active");
    //       }
    //     });
    //   }
    // }
    setRangeValue(val);
  };

  return (
    <div>
      <NavBar />

      {/* Banner */}
      <div className="mt-4 bgImage">
        <Container>
          <Row>
            <Col lg={{ span: 9, offset: 2 }} md={{ span: 10, offset: 1 }}>
              <div className="bannerText mt-md-5 pt-md-4">
                <h1 className="colorBlack">Resources about Cryptocurrency</h1>
                <Row>
                  <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
                    <p className="mt-md-5 mt-3 mb-5 text-center">
                      Everything you ever wanted to know about cryptography and
                      more is brought to you by the cryptographic data
                      aggregator BURU
                    </p>
                  </Col>
                </Row>
              </div>

              <div className="bannerCol mb-5">
                <Row>
                  <Col lg={3} md={6} sm={6}>
                    <div className="bannercontent">
                      <img
                        src="/assets/images/resource/banner/1.png"
                        className="d-inline-block"
                        alt="Image"
                      />
                      <p> Crypto Basics </p>
                    </div>
                  </Col>

                  <Col lg={3} md={6} sm={6}>
                    <div className="bannercontent">
                      <img
                        src="/assets/images/resource/banner/2.png"
                        className="d-inline-block"
                        alt="Image"
                      />
                      <p> Protocols </p>
                    </div>
                  </Col>

                  <Col lg={3} md={6} sm={6}>
                    <div className="bannercontent">
                      <img
                        src="/assets/images/resource/banner/3.png"
                        className="d-inline-block"
                        alt="Image"
                      />
                      <p> Actions</p>
                    </div>
                  </Col>

                  <Col lg={3} md={6} sm={6}>
                    <div className="bannercontent">
                      <img
                        src="/assets/images/resource/banner/4.png"
                        className="d-inline-block"
                        alt="Image"
                      />
                      <p> Glossary </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Crypto */}

      <div className="actionsDiv bgyellowColor pt-5 pb-5 mt-md-5">
        <Container className="mb-md-5">
          <h2 className="text-center mt-5 pt-md-5 pt-3 resourcehead">
            {" "}
            Crypto Basics
          </h2>
          <Row>
            <Col
              lg={{ span: 8, offset: 2 }}
              md={{ span: 9, offset: 2 }}
              sm={12}
            >
              <p className="text-center resourcepara ml-lg-5 mr-lg-5 mb-5">
                All you need to know about basics of cryptocurrency in one
                place. Learn how Bitcoin, blockchain and altcoins work, how to
                actually use them, and why it matters to you
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="cryptoContent mt-md-4">
                <div className="cryptoImg">
                  <img
                    src="/assets/images/resource/action/1.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="cryptoMain">
                  <h4>Central Bank Digital Currencies - A Map of the World</h4>
                  <p>
                    Central bank digital currencies are being talked about all
                    over the world — CMC breaks down what exactly each country
                    is doing with their CBDCs.
                  </p>
                  <span>November 23, 2020</span>
                </div>
              </div>
            </Col>

            <Col md={6} className="mt-md-0 mt-4">
              <div className="cryptoContent mt-md-4">
                <div className="cryptoImg">
                  <img
                    src="/assets/images/resource/action/2.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="cryptoMain">
                  <h4>Hot Wallets vs Cold Wallets: What’s the Difference?</h4>
                  <p>
                    The difference between hot and cold wallets, and the amount
                    of security that they offer for your crypto assets, differs
                    — find out which type of wallet is best for you.
                  </p>
                  <span>November 18, 2020</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6}>
              <div className="cryptoContent mt-md-4">
                <div className="cryptoImg">
                  <img
                    src="/assets/images/resource/action/3.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="cryptoMain">
                  <h4>Private keys: the keys to your cryptographic wallet</h4>
                  <p>
                    The difference between private keys and public keys is huge
                    — find out what "not your coins, not your coins" really
                    means.
                  </p>
                  <span>November 04, 2020</span>
                </div>
              </div>
            </Col>

            <Col md={6} className="mt-md-0 mt-4">
              <div className="cryptoContent mt-md-4">
                <div className="cryptoImg">
                  <img
                    src="/assets/images/resource/action/4.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="cryptoMain">
                  <h4>5 Myths Beginners Don't Know About Bitcoin</h4>
                  <p>
                    For those just getting started in crypto, we've broken down
                    five common misconceptions about Bitcoin, the first
                    cryptocurrency.
                  </p>
                  <span>November 02, 2020</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Protocols */}
      <div className="actionsDiv bglightColor pt-5 pb-5">
        <Container>
          <h2 className="text-center mt-md-3 resourcehead"> Protocols</h2>
          <Row className="mb-5">
            <Col
              lg={{ span: 8, offset: 2 }}
              md={{ span: 9, offset: 2 }}
              sm={12}
            >
              <p className="text-center resourcepara ml-lg-5 mr-lg-5 mb-lg-5 mb-md-3 mb-0">
                All you need to know about basics of cryptocurrency in one
                place. Learn how Bitcoin, blockchain and altcoins work, how to
                actually use them, and why it matters to you
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={4} md={6}>
              <div className="protocolContent mb-3">
                <div className="protocolImg">
                  <img
                    src="/assets/images/resource/protocol/1.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="protocolMain">
                  <h5>Dai (DAI)</h5>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="protocolContent mb-3">
                <div className="protocolImg">
                  <img
                    src="/assets/images/resource/protocol/2.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="protocolMain">
                  <h5>Сurve (СuSDT)</h5>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="protocolContent mb-3">
                <div className="protocolImg">
                  <img
                    src="/assets/images/resource/protocol/1.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="protocolMain">
                  <h5>Dai (DAI)</h5>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="protocolContent mb-3">
                <div className="protocolImg">
                  <img
                    src="/assets/images/resource/protocol/3.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="protocolMain">
                  <h5>USDT Coin (USDT)</h5>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="protocolContent mb-3">
                <div className="protocolImg">
                  <img
                    src="/assets/images/resource/protocol/4.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="protocolMain">
                  <h5>Compound (СSDT)</h5>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="protocolContent mb-3">
                <div className="protocolImg">
                  <img
                    src="/assets/images/resource/protocol/3.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="protocolMain">
                  <h5>USDT Coin (USDT)</h5>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="protocolContent mb-3">
                <div className="protocolImg">
                  <img
                    src="/assets/images/resource/protocol/5.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="protocolMain">
                  <h5>True USDT (TUSD)</h5>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="protocolContent mb-3">
                <div className="protocolImg">
                  <img
                    src="/assets/images/resource/protocol/6.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="protocolMain">
                  <h5>Yearn.finance (yFUSDT)</h5>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="protocolContent mb-3">
                <div className="protocolImg">
                  <img
                    src="/assets/images/resource/protocol/5.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>
                <div className="protocolMain">
                  <h5>True USDT (TUSD)</h5>
                </div>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-md-5 mb-md-5">
            <ButtonComponent
              variant="colorBlack btn-outline pl-5 pr-5"
              onClick={() => setModalShow(true)}
            >
              More
            </ButtonComponent>
          </div>
        </Container>
      </div>

      {/* Actions */}
      <div className="actionsDiv bgyellowColor pt-5 pb-5">
        <Container>
          <h2 className="text-center mt-md-3 resourcehead"> Actions</h2>
          <Row>
            <Col
              lg={{ span: 8, offset: 2 }}
              md={{ span: 9, offset: 2 }}
              sm={12}
            >
              <p className="text-center resourcepara ml-lg-5 mr-lg-5 mb-5">
                All you need to know about basics of cryptocurrency in one
                place. Learn how Bitcoin, blockchain and altcoins work, how to
                actually use them, and why it matters to you
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="actionContent mt-md-4 mb-5">
                <div className="actionImg">
                  <img
                    src="/assets/images/resource/action/1.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>

                <div className="actionMain">
                  <h5>Deposit</h5>
                  <p>Deposit funds to a protocol and receive protocol tokens</p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="actionContent mt-md-4 mb-5">
                <div className="actionImg">
                  <img
                    src="/assets/images/resource/action/2.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>

                <div className="actionMain">
                  <h5>Swap</h5>
                  <p>Swap 2 different tokens using an exchange</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="actionContent mb-5">
                <div className="actionImg">
                  <img
                    src="/assets/images/resource/action/3.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>

                <div className="actionMain">
                  <h5>Repay</h5>
                  <p>Repay funds to a loan</p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="actionContent mb-5">
                <div className="actionImg">
                  <img
                    src="/assets/images/resource/action/4.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>

                <div className="actionMain">
                  <h5>Borrow</h5>
                  <p>Create new loan </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="actionContent mb-5">
                <div className="actionImg">
                  <img
                    src="/assets/images/resource/action/2.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>

                <div className="actionMain">
                  <h5>Claim</h5>
                  <p>
                    Claim tokens minted from a protocol and receive protocol
                    tokens
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="actionContent mb-5">
                <div className="actionImg">
                  <img
                    src="/assets/images/resource/action/1.png"
                    className="d-inline-block"
                    alt="Image"
                  />
                </div>

                <div className="actionMain">
                  <h5>Code</h5>
                  <p>Swap 2 different tokens using an exchange </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*  Join the BURU Community */}
      <div className="community pt-5 pb-5 text-center">
        <Container>
          <h4 className="mt-4 pt-3">Join the BURU Community</h4>
          <p className="mt-5">Follow us Social Media</p>
          <ul className="pl-0 mt-3 pb-3">
            <li>
              <a href="#">
                <img
                  src="/assets/images/social/medium.png"
                  className="d-inline-block"
                  alt="Image"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/assets/images/social/telegram.png"
                  className="d-inline-block"
                  alt="Image"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/assets/images/social/twitter.png"
                  className="d-inline-block"
                  alt="Image"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/assets/images/social/github.png"
                  className="d-inline-block"
                  alt="Image"
                />
              </a>
            </li>
          </ul>
        </Container>
      </div>

      {/* slider */}
      <div className="p-5 deposit">
        <div className="deposit-head">
          <h5>
            <img
              src="/assets/images/action/icon1.png"
              className="mr-3 ml-4"
              alt="Image"
            />
            Deposit action
          </h5>
        </div>
        <div className="deposit-body pt-5 pl-5 pr-4 pb-5">
          <Row>
            <Col md={8}>
              <h6 className="mb-4"> Deposit amount:</h6>
              <Slider
                defaultValue={rangeValue}
                min={10}
                max={100}
                step={10}
                marks={{
                  10: 10,
                  20: 20,
                  30: 30,
                  40: 40,
                  50: 50,
                  60: 60,
                  70: 70,
                  80: 80,
                  90: 90,
                  100: 100,
                }}
                onAfterChange={handleRange}
              />

              <Form>
                {/* <div key={"checkbox"} className="mb-3">
                  <Form.Check type={"checkbox"} id={`check-api-checkbox`}>
                    <Form.Check.Input type={"checkbox"} isValid />
                    <Form.Check.Label>{`Custom api checkbox`}</Form.Check.Label>
                    <Form.Control.Feedback type="valid">
                      You did it!
                    </Form.Control.Feedback>
                  </Form.Check>
                </div> */}

                <div key={`custom--react`} className="mb-3 mt-5">
                  <Form.Check
                    custom
                    className="test-checkbox"
                    type="checkbox"
                    id={`custom-checkbox-react`}
                  >
                    <Form.Check.Input
                      className="styled-checkbox"
                      type={"checkbox"}
                    />
                    <Form.Check.Label className="pl-3 pt-1">{`Custom api checkbox`}</Form.Check.Label>
                  </Form.Check>
                </div>
              </Form>
            </Col>

            <Col md={4}>
              <div className="deposit-right mb-3 mt-4">
                <p>60% ($3 000 USDT)</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              <h6 className="mb-4 loanhead mt-3"> Loan to Value:</h6>
              <Slider
                defaultValue={rangeValue}
                min={10}
                max={100}
                step={10}
                marks={{
                  10: 10,
                  20: 20,
                  30: 30,
                  40: 40,
                  50: 50,
                  60: 60,
                  70: 70,
                  80: 80,
                  90: 90,
                  100: 100,
                }}
                onAfterChange={handleRange}
              />

              <Form>
                <div key={`custom--react1`} className="mb-3 mt-5">
                  <Form.Check
                    custom
                    className="test-checkbox"
                    type="checkbox"
                    id={`custom-checkbox-react1`}
                  >
                    <Form.Check.Input
                      className="styled-checkbox"
                      type={"checkbox"}
                    />
                    <Form.Check.Label className="pl-3 pt-1">{`Alert me about low LTV`}</Form.Check.Label>
                  </Form.Check>
                </div>

                {/* <Form.Group id="formGridCheckbox" className="mt-5">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
              </Form>
            </Col>

            <Col md={4}>
              <div className="deposit-right mb-3 mt-4">
                <p>80% (min 70%)</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="text-center">
              <ButtonComponent variant="colorBlack btn-outline ml-3 mt-5 pl-5 pr-5">
                Add deposit
              </ButtonComponent>
            </Col>
          </Row>
        </div>
      </div>

      {/*  footer */}
      <footer className="pt-5 pb-5">
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
      <MoreProtocolsModal
        protocols={[]}
        isOpen={modalShow}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default ResourcePage;
