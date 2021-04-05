import React from "react";
import { Container, Row, Col, Table, Pagination } from "react-bootstrap";

const deposits = [
    {
        date: "2021-01-27, 15:20",
        tokens: "20,000",
        investor: "0x867...19B",
        txHash: "0x3c067...19B",
    },
    {
        date: "2021-01-27, 15:20",
        tokens: "20,000",
        investor: "0x867...19B",
        txHash: "0x3c067...19B",
    },
    {
        date: "2021-01-27, 15:20",
        tokens: "20,000",
        investor: "0x867...19B",
        txHash: "0x3c067...19B",
    },
    {
        date: "2021-01-27, 15:20",
        tokens: "20,000",
        investor: "0x867...19B",
        txHash: "0x3c067...19B",
    },
    {
        date: "2021-01-27, 15:20",
        tokens: "20,000",
        investor: "0x867...19B",
        txHash: "0x3c067...19B",
    },
    {
        date: "2021-01-27, 15:20",
        tokens: "20,000",
        investor: "0x867...19B",
        txHash: "0x3c067...19B",
    },
    {
        date: "2021-01-27, 15:20",
        tokens: "20,000",
        investor: "0x867...19B",
        txHash: "0x3c067...19B",
    },
];

export const DepositsTab = ({title}: {title:string}) => {
    return (
        <Container>
            <Row>
                <Col
                    className="d-flex align-items-center justify-content-between mb-5"
                    sm={12}
                >
                    <h2>{title}</h2>
                </Col>

                <Col sm={12}>
                    <div className="tablebg tablebgAuto">
                        <Table responsive className="table">
                            <thead>
                                <tr>
                                    <th>DATE</th>
                                    <th>POOL TOKENS</th>
                                    <th>INVESTOR</th>
                                    <th>TX HASH</th>
                                </tr>
                            </thead>

                            <tbody>
                                {deposits.map((item, index) => {
                                    return (
                                        <>
                                            <tr className="deposit-row">
                                                <td>{item.date}</td>

                                                <td>{item.tokens}</td>
                                                <td>
                                                    <span className="deposit-hash">
                                                        {item.investor}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="deposit-hash">
                                                        {item.txHash}
                                                    </span>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <div className="mt-4 pagePosition">
                            <div className="paginationTable">
                                <Pagination>
                                    <Pagination.Prev />
                                    <Pagination.Item active>
                                        {1}
                                    </Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Item>{4}</Pagination.Item>
                                    <Pagination.Ellipsis />

                                    <Pagination.Item>{120}</Pagination.Item>

                                    <Pagination.Next />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
