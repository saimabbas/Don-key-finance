import React, { useRef, useState } from "react";
import { NavBar2 } from "../../components/Navbar/NavBar";
import { Container, Overlay } from "react-bootstrap";
import {
  Row,
  Col,
  Form,
  Pagination,
  Table,
  Popover,
  OverlayTrigger,
  Button
} from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./NotificationStyle.scss";
import ButtonComponent from "../../components/Button/Button";

const NotificationPage = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = event => {
    setShow(!show);
    setTarget(event.target);
  };
  
  return (
    <div className="bgColor">
      <NavBar2 />
      <div className="navbanHead pt-5 pb-5">
        <Container>
          <Row>
            <Col
              className="pr-md-0 pl-md-0 ml-md-3 pr-sm-2 pr-0"
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={8}
            >
              <h2 className="firstHeading mb-3">Solldy</h2>
            </Col>

            <Col
              className="pr-md-0 pl-md-0 ml-md-3 pr-sm-2"
              xl={1}
              lg={1}
              md={2}
              sm={3}
              xs={4}
            >
              <div className="firstLetter">
                {/* <p>SOL </p> */}

                <div ref={ref}>
                  <Button onClick={handleClick}>SOL</Button>

                  <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref.current}
                    containerPadding={20}
                  >
                    <Popover id="popover-contained">
                      <Popover.Content>
                        <Row>
                          <Col md={7} sm={7} xs={7}>
                            <p className="d-inline-block">Budget now</p>
                          </Col>

                          <Col md={5} sm={5} xs={5} className="text-left">
                            <span> $ 50,000</span>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={7} sm={7} xs={7}>
                            <p className="d-inline-block">Next level</p>
                          </Col>

                          <Col md={5} sm={5} xs={5} className="text-left">
                            <span> $ 100,000</span>
                          </Col>
                        </Row>
                      </Popover.Content>
                    </Popover>
                  </Overlay>
                </div>

                <img
                  src="/assets/images/pattern.png"
                  className="d-inline-block align-top pattern"
                  alt="Image"
                />
                <img
                  src="/assets/images/borderyellowstar.png"
                  className="d-inline-block align-top star1"
                  alt="Image"
                />
              </div>
            </Col>

            <Col xl={6} lg={6} md={9} sm={9} xs={12}>
              <div className="bannerDetail">
                <Table responsive className="m-0">
                  <thead>
                    <tr>
                      <th>AUM</th>
                      <th>Daily</th>
                      <th>Weekly</th>
                      <th>To Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>$50,000</td>
                      <td>
                        <img
                          src="/assets/images/triangle.png"
                          className="d-inline-block pr-1"
                          alt="Image"
                        />
                        0,73% $370
                      </td>
                      <td>
                        <img
                          src="/assets/images/triangle.png"
                          className="d-inline-block pr-1"
                          alt="Image"
                        />
                        0,98% $620
                      </td>

                      <td>
                        <img
                          src="/assets/images/triangle.png"
                          className="d-inline-block pr-1"
                          alt="Image"
                        />
                        0,66% $330
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>

            <Col xl={4} lg={4} md={11} sm={12} xs={12}>
              <div className="bannerrightCol">
                <Row>
                  <Col md={9} sm={9} xs={9} className="text-left">
                    <h6>
                      BURU tokens
                      <img
                        src="/assets/images/center.png"
                        className="d-inline-block pl-2"
                        alt="iamge"
                      />
                    </h6>
                    <p>For end of the month</p>
                  </Col>

                  <Col md={3} sm={3} xs={3} className="text-right">
                    <span>790</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Table */}
      <div className="mt-4 mb-5 pb-3 tablebgHead">
        <Container>
          <h5 className="d-inline-block mt-4 mb-5">Strategies</h5>

          <ButtonComponent variant="colorBlack d-inline-block mt-md-4 mt-3 mb-5 text-right">
            <img
              src="/assets/images/btnplus.png"
              className="d-inline-block align-top"
              alt="Image"
            />
          </ButtonComponent>

          <div className="tablebg tablebgAuto tablebg1">
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Data Open</th>
                  <th>Earnings</th>
                  <th>Allocation</th>
                  <th>Profit</th>
                  <th>Last transaction</th>
                  <th> APY</th>
                  <th>BURU tokens</th>
                  <th>Status</th>
                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="nodata1">First strategy</td>
                  <td>16h</td>
                  <td>-</td>
                  <td>-</td>
                  <td> -</td>
                  <td>-</td>
                  <td>- </td>
                  <td>- </td>
                  <td className="fontlighBold">Waiting</td>
                  <td>
                    <a href="#">
                      <img
                        src="/assets/images/delete.png"
                        className="d-inline-block align-top"
                        alt="Logo"
                      />
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="nodata1">Curve DAL * *</td>
                  <td>11.09.2019</td>
                  <td>
                    $74 <span className="fontlight"> +0,05% </span>
                  </td>
                  <td>$93,600</td>
                  <td> $125,36</td>
                  <td>$300,30</td>
                  <td>
                    <strong> 30% </strong>
                  </td>
                  <td>890</td>
                  <td className="fontlighBold">Approved </td>
                  <td>
                    <Form>
                      <Form.Check type="switch" id="custom-switch" />
                    </Form>
                  </td>
                </tr>

                <tr>
                  <td className="nodata1">Curve DAL * *</td>
                  <td>25.10.2020</td>
                  <td>
                    $60 <span className="fontlight"> +0,02% </span>
                  </td>
                  <td>$63,600</td>
                  <td> $105,36</td>
                  <td>$250,10</td>
                  <td>
                    <strong> 25% </strong>
                  </td>
                  <td>730</td>
                  <td className="fontlighBold">Approved </td>
                  <td>
                    <Form>
                      <Form.Check type="switch" id="custom-switch1" />
                    </Form>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </div>

      {/* Table */}
      <div className="mt-4 mb-5 tablebgHead">
        <Container>
          <h5 className="d-inline-block mt-4 mb-5">
            Your position on the list
          </h5>
          <p className="d-inline-block mt-4 mb-5 text-right">
            You are better than 49 farmers
          </p>
          <div className="tablebg tablebgAuto">
            <Table responsive className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>RANK</th>
                  <th></th>
                  <th>NAME</th>
                  <th>
                    Budget
                    <img
                      src="/assets/images/icon1.png"
                      className="d-inline-block pl-2"
                      alt="Image"
                    />
                  </th>
                  <th>AGE</th>
                  <th> BURU TOKEN</th>
                  <th>Chart</th>
                  <th>APY</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="nodata">1</td>
                  <td>
                    <img
                      src="/assets/images/blackstar.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td>
                    <span className="spanname"> Dj</span>
                  </td>
                  <td>
                    <span className="spanbold">Djony </span> <br />
                    <span className="fontlight">Nb of farmers: 112</span>
                  </td>
                  <td> $2 280,00</td>
                  <td>3 years</td>
                  <td className="fontlighBold">280 </td>
                  <td className="tdGraphic">
                    <img
                      src="/assets/images/graphic2.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td className="fontdBold">+11,0%</td>
                </tr>

                <tr>
                  <td className="nodata">2</td>
                  <td>
                    <img
                      src="/assets/images/blackstar.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td>
                    <span className="spanname"> Sa</span>
                  </td>
                  <td>
                    <span className="spanbold">Saly </span> <br />
                    <span className="fontlight">Nb of farmers: 103</span>
                  </td>
                  <td> $2 1230,10</td>
                  <td>3 years</td>
                  <td className="fontlighBold">276 </td>
                  <td className="tdGraphic">
                    <img
                      src="/assets/images/graphic2.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td className="fontdBold">+10,5%</td>
                </tr>

                <tr>
                  <td className="nodata">3</td>
                  <td>
                    <img
                      src="/assets/images/blackstar.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td>
                    <span className="spanname"> Ja</span>
                  </td>
                  <td>
                    <span className="spanbold">Jack </span> <br />
                    <span className="fontlight">Nb of farmers: 97</span>
                  </td>
                  <td> $2 080,00</td>
                  <td>3 years</td>
                  <td className="fontlighBold">265 </td>
                  <td className="tdGraphic">
                    <img
                      src="/assets/images/graphic2.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td className="fontdBold">+10,1%</td>
                </tr>

                <tr>
                  <td className="nodata">4</td>
                  <td>
                    <img
                      src="/assets/images/blackstar.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td>
                    <span className="spanname"> Ra</span>
                  </td>
                  <td>
                    <span className="spanbold">Ramp </span> <br />
                    <span className="fontlight">Nb of farmers: 92</span>
                  </td>
                  <td> $1 980,20</td>
                  <td>3 years</td>
                  <td className="fontlighBold">260 </td>
                  <td className="tdGraphic">
                    <img
                      src="/assets/images/graphic2.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td className="fontdBold">+9,7%</td>
                </tr>

                <tr>
                  <td className="nodata">5</td>
                  <td>
                    <img
                      src="/assets/images/blackstar.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td>
                    <span className="spanname"> GQ</span>
                  </td>
                  <td>
                    <span className="spanbold">Ramp </span> <br />
                    <span className="fontlight">Nb of farmers: 81</span>
                  </td>
                  <td> $1 842,00</td>
                  <td>3 years</td>
                  <td className="fontlighBold">245 </td>
                  <td className="tdGraphic">
                    <img
                      src="/assets/images/graphic2.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td className="fontdBold">+8,8%</td>
                </tr>

                <tr>
                  <td className="nodata">6</td>
                  <td>
                    <img
                      src="/assets/images/greystar.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td>
                    <span className="spanname"> NI</span>
                  </td>
                  <td>
                    <span className="spanbold">Nikol </span> <br />
                    <span className="fontlight">Nb of farmers: 80</span>
                  </td>
                  <td> $1 784,00</td>
                  <td>3 years</td>
                  <td className="fontlighBold">240 </td>
                  <td className="tdGraphic">
                    <img
                      src="/assets/images/graphic2.png"
                      className="d-inline-block"
                      alt="Image"
                    />
                  </td>
                  <td className="fontdBold">+7,8%</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </div>

      {/*  footer */}
      <footer className="pt-5 pb-5 mb-0">
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
    </div>
  );
};

export default NotificationPage;
