import { BuruPagination } from "components/BuruPagination/BuruPagination";
import { Post } from "components/Post/Post";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { postList } from "./postList";

export const PostTab = () => {
    const history = useHistory();
    return (
        <Container>
            <Row>
                <Col
                    className="d-flex align-items-center justify-content-between mb-5"
                    sm={12}
                >
                    <h2>Posts</h2>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            history.push("/strategy/new");
                        }}
                    >
                        <svg
                            width={29}
                            height={28}
                            viewBox="0 0 29 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.002 12.434h3.33v2.822h-3.33v3.818h-3.076v-3.818h-3.34v-2.822h3.34V8.723h3.076v3.71z"
                                fill="#252525"
                            />
                            <rect
                                x={1.5}
                                y={1}
                                width={26}
                                height={26}
                                rx={1}
                                stroke="#070602"
                                strokeWidth={2}
                            />
                        </svg>
                    </a>
                </Col>

                {postList.map((item) => {
                    return (
                        <Col sm={12}>
                            <Post {...item} />
                        </Col>
                    );
                })}
            </Row>
            <Row className="align-items-center">
                <Col>
                    <a href="#" className=" text-dark p-0">
                        Show more Posts
                    </a>
                </Col>
                <Col className="d-flex align-items-center justify-content-end">
                    <BuruPagination />
                </Col>
            </Row>
        </Container>
    );
};