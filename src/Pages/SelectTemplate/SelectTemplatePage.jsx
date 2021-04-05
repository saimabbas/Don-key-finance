import React from "react";
import { NavBar } from "../../components/Navbar/NavBar";
import { Row, Col } from "react-bootstrap";
import "./SelectTemplateStyle.scss";
import CreateStrategy from "../../JsonData/CreateStrategyJson";
import ButtonComponent from "../../components/Button/Button";
import { Link } from "react-router-dom";

const SelectTemplatePage = () => {
  return (
    <div className="newStrategy">
      <div className="newStrategyContent">
        <Row>
          <Col md={12}>
            <h4>Select template strategy</h4>
            <p>
              Solldy are waiting for your new strategy or we will use ready-made
              templates.
            </p>
          </Col>
        </Row>
        <Row>
          {CreateStrategy.map((item, index) => {
            return (
              <Col md={4}>
                <div className="cardStrategy">
                  <h5 className="mb-2">
                    <img src={item.image} className="pr-2" alt="Image" />
                    {item.name}
                  </h5>
                  <div className="strategyimg">
                    <img src={item.picture} alt="Image" />
                  </div>
                  <Row className="mt-3">
                    <Col md={6} className="text-left">
                      <span>{item.protocols}</span>
                    </Col>

                    <Col md={6} className="text-right">
                      <span> {item.actions}</span>
                    </Col>
                  </Row>
                  <p className="mt-2">{item.desc}</p>
                  <Link to="/strategy/build">
                    <ButtonComponent
                      variant="colorBlack dark btn-outline"
                      className="mt-2 w-100"
                    >
                      Select
                    </ButtonComponent>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default SelectTemplatePage;
