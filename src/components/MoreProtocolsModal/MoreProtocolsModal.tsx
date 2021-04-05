import ModalPopup from "components/ProtocolsModal/ProtocolsModal";
import { Row, Col, Form, InputGroup, Tab, Nav, Tabs } from "react-bootstrap";
import ButtonComponent from "components/Button/Button";
import { useState } from "react";
import { IProtocolFromAPI } from "interfaces";
export const MoreProtocolsModal = ({
  isOpen,
  onClose,
  protocols,
}: {
  isOpen: boolean;
  onClose: () => void;
  protocols: IProtocolFromAPI[];
}) => {
  const [modalShow1, setModalShow1] = useState(false);
  const [key, setKey] = useState<string | null>("swap");

  return (
    <>
      <ModalPopup show={isOpen} onHide={onClose} className="p-0">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col md={3} className="pr-0">
              <div className="protocolLeft">
                <h6 className="mt-3">Protocols</h6>

                <div className="mt-5 pt-5">
                  <h6 className="headbottom mb-4">Select a category</h6>

                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Favorites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Landing Protocols</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Swap Protocols</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">DEX Protocols</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </Col>

            <Col md={9} className="pl-0">
              <div className="protocolRight">
                <Form.Row>
                  <Form.Group as={Col}>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text className="pl-0">
                          <img src="/assets/images/search.png" alt="Image" />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        placeholder="Search protocols"
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="selectProtocol pl-4 mt-3 mb-3">
                      <h4 className="mr-4">Protocols select: </h4>
                      <div className="selectprotolContent">
                        <h6> Dai (DAI) </h6>
                        <span>
                          <img src="/assets/images/cross1.png" />
                        </span>
                      </div>

                      <div className="selectprotolContent">
                        <h6> Сurve (СuSDT) </h6>
                        <span>
                          <img src="/assets/images/cross1.png" />
                        </span>
                      </div>

                      <div className="selectprotolContent">
                        <h6> USDT Coin (USDT) </h6>
                        <span>
                          <img src="/assets/images/cross1.png" />
                        </span>
                      </div>
                    </div>
                    <div className="pl-3 pr-3 available-items">
                      <Row className="mt-4">
                        {protocols.map((item) => {
                          if (item.showOnToolbar === "1") {
                            return (
                              <Col lg={4} md={6}>
                                <div className="protocolContent mb-0">
                                  <div className="protocolImg">
                                    <img
                                      src={item.toolbarImageURL}
                                      className="d-inline-block"
                                      alt="Image"
                                    />
                                  </div>
                                  <div className="protocolMain">
                                    <h5>{item.name}</h5>
                                  </div>
                                </div>
                              </Col>
                            );
                          }
                          return null;
                        })}
                      </Row>
                    </div>

                    <div className="text-left mt-md-5 mb-md-5">
                      <ButtonComponent
                        variant="colorBlack btn-outline ml-3 pt-2 pb-2 pl-5 pr-5"
                        onClick={() => setModalShow1(true)}
                      >
                        Use
                      </ButtonComponent>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <div className="selectProtocol pl-4 mt-3 mb-3">
                      <h4 className="mr-4">Protocols select: </h4>

                      <div className="selectprotolContent">
                        <h6> Dai (DAI) </h6>
                        <span>
                          <img src="/assets/images/cross1.png" />
                        </span>
                      </div>

                      <div className="selectprotolContent">
                        <h6> Сurve (СuSDT) </h6>
                        <span>
                          <img src="/assets/images/cross1.png" />
                        </span>
                      </div>

                      <div className="selectprotolContent">
                        <h6> USDT Coin (USDT) </h6>
                        <span>
                          <img src="/assets/images/cross1.png" />
                        </span>
                      </div>
                    </div>
                    <div className="pl-3 pr-3 available-items">
                      <Row className="mt-4">
                        <Col lg={4} md={6}>
                          <div className="protocolContent mb-0">
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
                          <div className="protocolContent mb-0">
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
                          <div className="protocolContent mb-0">
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
                          <div className="protocolContent mb-0">
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
                          <div className="protocolContent mb-0">
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
                          <div className="protocolContent mb-0">
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
                          <div className="protocolContent mb-0">
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
                          <div className="protocolContent mb-0">
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
                          <div className="protocolContent mb-0">
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
                    </div>

                    <div className="text-left mt-md-5 mb-md-5">
                      <ButtonComponent variant="colorBlack btn-outline ml-3 pt-2 pb-2 pl-5 pr-5">
                        Use
                      </ButtonComponent>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <div className="selectProtocol pl-4 mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="four">
                    <div className="selectProtocol pl-4 mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </ModalPopup>
      <ModalPopup
        show={modalShow1}
        onHide={() => setModalShow1(false)}
        className="p-0 customWidth"
      >
        <div className="pt-5 text-center protocolModal">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h2> Aave (AAVE) </h2>
              <div className="mt-3 mb-3">
                <img src="/assets/images/resource/protocol/7.png" alt="Image" />
              </div>
              <p className="mb-5">
                Aave is an open source and non-custodial protocol enabling the
                creation of money markets.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="pl-5 pr-5">
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className=""
                >
                  <Tab eventKey="swap" title="Swap">
                    Aave is an open source and non-custodial protocol enabling
                    the creation of money markets. Users can earn interest on
                    deposits and borrow assets.
                  </Tab>
                  <Tab eventKey="claim" title="Claim">
                    Aave is an open source and non-custodial protocol enabling
                    the creation of money markets. Users can earn interest on
                    deposits and borrow assets.
                  </Tab>
                  <Tab eventKey="repay" title="Repay">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Tab>
                  <Tab eventKey="borrow" title="Borrow">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Tab>
                </Tabs>

                <ButtonComponent
                  variant="colorBlack"
                  className="btnYellow pl-5 pr-5 mb-5 w-100 btnPadding"
                >
                  <span> Use action </span>
                </ButtonComponent>
              </div>
            </Col>
          </Row>
        </div>
      </ModalPopup>
    </>
  );
};
