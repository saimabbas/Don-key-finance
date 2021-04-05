import React from "react";
import { NavBar } from "../../components/Navbar/NavBar";
import { Row, Col } from "react-bootstrap";
import "./StrategyConfirmationStyle.scss";
import CreateStrategy from "../../JsonData/CreateStrategyJson";
import ButtonComponent from "../../components/Button/Button";
// import StrategyConfirmation from ".";

const StrategyConfirmation = () => {
  return (
    <div className="newStrategy">
      <div className="newStrategyContent thankyouModal">
        <Row>
          <Col md={6}>
            <div className="thankyou-left p-5">
              <img src="/assets/images/strategy/logo1.png" alt="Image" />
              <div className="mt-5 text-center">
                <img src="/assets/images/strategy/thankyou.png" alt="Image" />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="bgBlack pt-5 pb-5 pl-5 pr-5">
              <h5 className="pt-5 mt-5">Thank you! All set</h5>
              <p className="mt-5 mb-5">
                Solldy thanks for the created strategy, everything went well.
                <br /> <br />
                After we consider the strategy, you will receive a notification
                in your personal account, and your profile will have the
                opportunity to activate a confirmed strategy from the list of
                strategies. <br /> <br /> We are waiting for new strategies from
                you.
              </p>
              <ButtonComponent className="btnYellow mb-5">
                Discover best farmers
              </ButtonComponent>
              <ButtonComponent variant="btnWhite" className="ml-3 mb-5">
                Learn
              </ButtonComponent>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StrategyConfirmation;
