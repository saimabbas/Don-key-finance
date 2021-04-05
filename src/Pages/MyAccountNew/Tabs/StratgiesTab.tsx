import React from "react";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BuruPagination } from "components/BuruPagination/BuruPagination";
import { strategyList2 } from "./strategyList2";
import { AddIcon } from "components/Icons";
import { StrategyCard2 } from "components/StrategyCard2";

export const StratgiesTab = () => {
    const history = useHistory();
    return (
        <Container>
            <Row>
                <Col
                    className="d-flex align-items-center justify-content-between mb-5"
                    sm={12}
                >
                    <h2>Strategies</h2>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            history.push("/strategy/new");
                        }}
                    >
                        <AddIcon />
                    </a>
                </Col>

                {strategyList2.map((item) => {
                    return (
                        <Col sm={4}>
                            <StrategyCard2 {...item} />
                        </Col>
                    );
                })}
            </Row>
            <Row className="align-items-center">
                <Col>
                    <a href="#" className=" text-dark p-0">
                        Show more Strategies
                    </a>
                </Col>
                <Col className="d-flex align-items-center justify-content-end">
                    <BuruPagination />
                </Col>
            </Row>
        </Container>
    );
};
