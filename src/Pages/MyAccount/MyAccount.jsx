import React, { useEffect, useRef, useState } from "react";
import { NavBar2 } from "../../components/Navbar/NavBar";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { api } from "../../services/api";
import {
  Row,
  Col,
  Form,
  Pagination,
  Table,
  Popover,
  Button,
  Container,
  Overlay,
} from "react-bootstrap";
import "./MyaccountStyle.scss";
import ButtonComponent from "../../components/Button/Button";
import DummyData from "../../JsonData/MyAccountDetail";
import DataFarmer from "../../JsonData/DataFarmer";
import StrategiesTable from "../../JsonData/StrategiesTable";
import { waitFor } from "../../helpers/helpers";
import { Loader } from "components/Loader/Loader";
import { useDispatch } from "react-redux";
import { apiRequest } from "actions/apiActions";
import { Footer } from "components/Footer/Footer";

const MyAccount = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);


  const ref = useRef(null);
  const [MyAccountDetail, setAccountDetail] = useState(DummyData);
  const [isReady, setIsReady] = useState(false);
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      apiRequest({
        method: "GET",
        endpoint: "/api/v1/users/1",
        onDone: (res) => {
          // setAccountDetail(res.data.data);
          setIsReady(true);
        },
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={clsx("bgColor", { blur: !isReady })}>
      {!isReady &&
        createPortal(
          <div className="loading">
            <Loader />
          </div>,
          document.body
        )}
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
              <h2 className="firstHeading mb-3">{MyAccountDetail.name}</h2>
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
                  <Button onClick={handleClick}>
                    {MyAccountDetail.name.substring(0, 3).toLocaleUpperCase()}
                  </Button>

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
                    {MyAccountDetail.array.map((item, index) => {
                      return (
                        <tr>
                          <td>${item.aum}</td>
                          <td>
                            <img
                              src="/assets/images/triangle.png"
                              className="d-inline-block pr-1"
                              alt="Image"
                            />
                            {item.daily
                              .toString()
                              .replace(/\B(?=(\d{2})+(?!\d))/g, ",")}
                            % ${item.daily_}
                          </td>
                          <td>
                            <img
                              src="/assets/images/triangle.png"
                              className="d-inline-block pr-1"
                              alt="Image"
                            />
                            {item.weekly
                              .toString()
                              .replace(/\B(?=(\d{2})+(?!\d))/g, ",")}
                            % ${item.weekly_}
                          </td>

                          <td>
                            <img
                              src="/assets/images/triangle.png"
                              className="d-inline-block pr-1"
                              alt="Image"
                            />
                            {item.to_date
                              .toString()
                              .replace(/\B(?=(\d{2})+(?!\d))/g, ",")}
                            % ${item.to_date_}
                          </td>
                        </tr>
                      );
                    })}
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
                    <span>{MyAccountDetail.buru_token_minted}</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Table Strategies */}
      <div className="mt-4 mb-5 pb-3 tablebgHead">
        <Container>
          <h5 className="d-inline-block mt-4 mb-5">Strategies</h5>

          <ButtonComponent
            variant="colorBlack d-inline-block mt-md-4 mt-3 mb-5 text-right"
            onClick={() => history.push("/strategy/new")}
          >
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
                {StrategiesTable.map((item, index) => {
                  return (
                    <>
                      {item.status == 1 ? (
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
                      ) : (
                        <tr>
                          <td className="nodata1">{item.name}</td>
                          <td>{item.data_open}</td>
                          <td>
                            ${item.earnings}
                            <span className="fontlight">
                              {"+" + `${item.earnings_per}` + "%"}{" "}
                            </span>
                          </td>
                          <td>${item.allocation}</td>
                          <td> ${item.profit}</td>
                          <td>${item.last_transaction}</td>
                          <td>
                            <strong> {item.apy}% </strong>
                          </td>
                          <td>{item.buru_token}</td>
                          <td className="fontlighBold">
                            {item.status == 1 ? "Waiting" : "Approved"}
                          </td>
                          <td>
                            <Form>
                              <Form.Check type="switch" id="custom-switch1" />
                            </Form>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
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
                {DataFarmer.map((item, index) => {
                  var str = item.name;
                  var res = str.substring(0, 2).toLocaleUpperCase();
                  var number = item.apy;
                  if (number.toString().length >= 3) {
                    var num = number
                      .toString()
                      .replace(/\B(?=(\d{2})+(?!\d))/g, ",");
                  } else {
                    var num = number
                      .toString()
                      .replace(/\B(?=(\d{1})+(?!\d))/g, ",");
                  }
                  return (
                    <>
                      <tr>
                        <td className="nodata">{item.id}</td>
                        <td>
                          <img
                            src="/assets/images/blackstar.png"
                            className="d-inline-block"
                            alt="Image"
                          />
                        </td>
                        <td>
                          <span className="spanname"> {res}</span>
                        </td>
                        <td>
                          <span className="spanbold">{item.name} </span> <br />
                          <span className="fontlight">
                            Nb of farmers: {item.nb_farmers}
                          </span>
                        </td>
                        <td>
                          {" "}
                          $
                          {item.budget
                            .toString()
                            .replace(/\B(?=(\d{4})+(?!\d))/g, ",")}
                        </td>
                        <td>{item.age} years</td>
                        <td className="fontlighBold">{item.buru_token} </td>
                        <td className="tdGraphic">
                          <img
                            src="/assets/images/graphic2.png"
                            className="d-inline-block"
                            alt="Image"
                          />
                        </td>
                        <td className="fontdBold">{"+" + `${num}` + "%"}</td>
                      </tr>
                      {item.id === 4 ? (
                        <tr>
                          <td className="rowData" colspan="8">
                            Join our farmers team
                            <ButtonComponent
                              variant="colorBlack"
                              className="btnYellow ml-md-5 btnPadding"
                            >
                              <span> Join us </span>
                            </ButtonComponent>
                          </td>
                          <td></td>
                        </tr>
                      ) : null}
                    </>
                  );
                })}

                {/* <tr>
                  <td className="rowData" colspan="8">
                    Join our farmers team
                    <ButtonComponent
                      variant="colorBlack"
                      className="btnYellow ml-md-5 btnPadding"
                    >
                      <span> Join us </span>
                    </ButtonComponent>
                  </td>
                  <td></td>
                </tr> */}
              </tbody>
            </Table>

            <div className="mt-4 pagePosition">
              <p className="pageTable">Showing 1-10 of 120</p>
              <div className="paginationTable">
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Item>{120}</Pagination.Item>

                  <Pagination.Next />
                </Pagination>
              </div>
              <div className="dropTable">
                Show rows
                <span>
                  <img
                    src="/assets/images/selectdrop.png"
                    className="d-inline-block align-top mr-3 ml-2 ml-md-0 mr-md-4"
                    alt="Logo"
                  />
                </span>
                <Form.Group>
                  <Form.Control as="select">
                    <option>100</option>
                    <option>200</option>
                    <option>300</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/*  footer */}
      <Footer />
    </div>
  );
};

export default MyAccount;
