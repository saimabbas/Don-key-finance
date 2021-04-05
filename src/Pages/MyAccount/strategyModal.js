import React, { Component, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ButtonComponent from "../../components/Button/Button";
import { Row, Col } from "react-bootstrap";
import "./MyaccountStyle.scss";
import StrategyConfirmationModal from "./strategyConfirmation";

export default function StrategyModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="mt-0">
          Select template strategy
        </Modal.Title>
      </Modal.Header>
      <Row>
        <Col className="ml-md-3" md={12}>
          <p>
            Solldy are waiting for your new strategy or we will use ready-made
            templates.
          </p>
        </Col>
      </Row>

      <Modal.Body>
        <Row>
          <Col md={4}>
            <div className="cardStrategy">
              <h5 className="mb-2">NEW STRATEGY</h5>
              <div className="strategyimg">
                <img src="/assets/images/strategy/1.png" alt="Image" />
              </div>
              <Row className="mt-3">
                <Col md={6} className="text-left">
                  <span> </span>
                </Col>

                <Col md={6} className="text-right">
                  <span> </span>
                </Col>
              </Row>
              <p className="mt-2">
                By being able to create strategies from a blank slate, you can
                find statistically significant strategy milestones based on
                dominance data. Become the best farmer with BURU.
              </p>
              <ButtonComponent
                variant="colorBlack dark btn-outline"
                className="mt-2 w-100"
                onClick={() => setModalShow(true)}
              >
                Select
              </ButtonComponent>
            </div>
          </Col>

          <Col md={4}>
            <div className="cardStrategy">
              <h5 className="mb-2">
                <img
                  src="/assets/images/strategy/usd.png"
                  className="pr-2"
                  alt="Image"
                />
                USDCoin /3pool LP
              </h5>
              <div className="strategyimg">
                <img src="/assets/images/strategy/2.png" alt="Image" />
              </div>
              <Row className="mt-3">
                <Col md={6} className="text-left">
                  <span> 3 protocols</span>
                </Col>

                <Col md={6} className="text-right">
                  <span> 3 action</span>
                </Col>
              </Row>
              <p className="mt-2">
                The basic strategy includes 5 different protocols, which are
                connected by logical actions, the strategy will show the
                capabilities of the BURU builder and give a quick start
              </p>
              <ButtonComponent
                variant="colorBlack btn-outline btnpadding"
                className="mt-2 w-100"
              >
                Select
              </ButtonComponent>
            </div>
          </Col>

          <Col md={4}>
            <div className="cardStrategy">
              <h5 className="mb-2">
                <img
                  src="/assets/images/strategy/btc.png"
                  className="pr-2"
                  alt="Image"
                />
                BTCUSD/3pool LP, 220
              </h5>
              <div className="strategyimg">
                <img src="/assets/images/strategy/3.png" alt="Image" />
              </div>
              <Row className="mt-3">
                <Col md={6} className="text-left">
                  <span> 3 protocols</span>
                </Col>

                <Col md={6} className="text-right">
                  <span> 3 action</span>
                </Col>
              </Row>
              <p className="mt-2">
                A more complex strategy includes 5 different protocols that are
                connected by logical actions, the strategy will show the
                advanced capabilities of the BURU strategy builder
              </p>
              <ButtonComponent
                variant="colorBlack btn-outline btnpadding"
                className="mt-2 w-100"
              >
                Select
              </ButtonComponent>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <StrategyConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Modal>
  );
}
