import clsx from "clsx";
import ButtonComponent from "components/Button/Button";
import { Footer } from "components/Footer/Footer";
import { NavBar2 } from "components/Navbar/NavBar";
import { PopularStrategy } from "components/PopularStrategy/PopularStrategy";
import DataFarmer from "JsonData/DataFarmer";
import { Form, Pagination, Row, Container, Col, Table } from "react-bootstrap";
import "./DashboardPage.scss";
export const DashboardPage = () => {
  return (
    <div className={clsx("bgColor")}>
      <NavBar2 />

      <div className="navbanHead pt-5 pb-5">
        <Container>
          <Row>
            <Col>
              <h2 className="firstHeading mb-3">Explore Strategies</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="popular__section">
        <Container>
          <Row>
            {Array.from({ length: 3 }).map((_) => {
              return (
                <Col md={4}>
                  <PopularStrategy />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Table */}
      <div className="mt-4 mb-5 tablebgHead">
        <Container>
          <h5 className="d-inline-block mt-4 mb-5">Leaderboard</h5>

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
                {[...DataFarmer,...DataFarmer].map((item, index) => {
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
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>

      {/*  footer */}
      <Footer />
    </div>
  );
};
