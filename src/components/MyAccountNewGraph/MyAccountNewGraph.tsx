import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import graph from "./graph.svg"


const GraphItem = ({
    direction = "up",
    value,
    title,
}: {
    direction?: "up" | "down";
    value: string;
    title: string;
}) => {
    return (
        <div className="d-flex">
            <div style={{ fontSize: 18 }}>
                {direction === "up" ? (
                    <BsArrowUp style={{ position: "relative", top: -4 }} />
                ) : (
                    <BsArrowDown style={{ position: "relative", top: -4 }} />
                )}
            </div>
            <div>
                <p className="font-weight-bold graph_date">{title}</p>
                <p>{value}</p>
            </div>
        </div>
    );
};

export const MyAccountNewGraph = () => {
    return (
        <Container className="py-2">
            <Row className="justify-content-between">
                <Col md={4}>
                    <h4 className="investment_title">Total Pool Value</h4>
                    <p className="pool_value">$907.45</p>
                </Col>
                <Col md={4}>
                    <p className="performance_title">
                        TOTAL PERFORMANCE{" "}
                        <AiOutlineQuestionCircle
                            className="ml-1 cursor-pointer performance_title_icon"
                            size={16}
                        />
                    </p>
                    <p className="pool_value text-right">+83.67%</p>
                </Col>
                <Col md={12}>
                    <img className="img-fluid" src={graph} />
                    <Row>
                        <Col md={3} lg={2}>
                            <div className="d-flex justify-content-between">
                                <div className="graph_duration">1D</div>
                                <div className="graph_duration active">1W</div>
                                <div className="graph_duration">1M</div>
                                <div className="graph_duration">3M</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={5}>
                    <p className="graph_date">OCT 26, 2020</p>
                    <p className="graph_date_sub">Creation Date</p>
                </Col>
                <Col className="d-flex justify-content-between" md={7}>
                    {[
                        { title: "5,56%", value: "1D" },
                        { title: "5,56%", value: "1W" },
                        {
                            title: "5,56%",
                            value: "1M",
                            direction: "down" as const,
                        },
                        { title: "5,56%", value: "3M" },
                        { title: "5,56%", value: "6M" },
                    ].map((item) => {
                        return <GraphItem {...item} />;
                    })}
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
};