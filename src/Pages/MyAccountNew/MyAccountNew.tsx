import { NavBar2 } from "components/Navbar/NavBar";
import MyAccountDetail from "JsonData/MyAccountDetail";
import React, { useRef, useState } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Overlay,
    Popover,
    Table,
} from "react-bootstrap";
import "./MyAccountNew.scss";
import { BsArrowRight } from "react-icons/bs";
import { Footer } from "components/Footer/Footer";
import { PostsIcon, StrategiesIcon, WithDrawalIcon } from "components/Icons";
import { PostTab } from "./Tabs/PostTab";
import { StratgiesTab } from "./Tabs/StratgiesTab";
import { MyAccountNewGraph } from "components/MyAccountNewGraph";
import { DepositsTab } from "./Tabs/DepositsTab";
import { TabSection } from "components/TabSection";

export const tabs = [
    { text: "Posts", comp: <PostTab />, icon: <PostsIcon /> },
    { text: "Strategies", comp: <StratgiesTab />, icon: <StrategiesIcon /> },
    { text: "Deposits", comp: <DepositsTab title="Deposits" />, icon: <BsArrowRight size={20} /> },
    { text: "WithDrawal", comp:<DepositsTab title="Withdrawal" />, icon: <WithDrawalIcon /> },
];

export const MyAccountNew = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState<EventTarget | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setShow(!show);
        setTarget(event.target);
    };
    return (
        <>
            <NavBar2 />
            <section className="bg-buru">
                <div className="navbanHead rounded-0 pt-5 pb-5">
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
                                <h2 className="firstHeading mb-3">
                                    {MyAccountDetail.name}
                                </h2>
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
                                    <div ref={ref}>
                                        <Button onClick={handleClick}>
                                            {MyAccountDetail.name
                                                .substring(0, 3)
                                                .toLocaleUpperCase()}
                                        </Button>

                                        <Overlay
                                            show={show}
                                            target={target as any}
                                            placement="bottom"
                                            container={ref.current}
                                            containerPadding={20}
                                        >
                                            <Popover id="popover-contained">
                                                <Popover.Content>
                                                    <Row>
                                                        <Col
                                                            md={7}
                                                            sm={7}
                                                            xs={7}
                                                        >
                                                            <p className="d-inline-block">
                                                                Budget now
                                                            </p>
                                                        </Col>

                                                        <Col
                                                            md={5}
                                                            sm={5}
                                                            xs={5}
                                                            className="text-left"
                                                        >
                                                            <span>
                                                                {" "}
                                                                $ 50,000
                                                            </span>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col
                                                            md={7}
                                                            sm={7}
                                                            xs={7}
                                                        >
                                                            <p className="d-inline-block">
                                                                Next level
                                                            </p>
                                                        </Col>

                                                        <Col
                                                            md={5}
                                                            sm={5}
                                                            xs={5}
                                                            className="text-left"
                                                        >
                                                            <span>
                                                                {" "}
                                                                $ 100,000
                                                            </span>
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
                                            {MyAccountDetail.array.map(
                                                (item) => {
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
                                                                    .replace(
                                                                        /\B(?=(\d{2})+(?!\d))/g,
                                                                        ","
                                                                    )}
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
                                                                    .replace(
                                                                        /\B(?=(\d{2})+(?!\d))/g,
                                                                        ","
                                                                    )}
                                                                % $
                                                                {item.weekly_}
                                                            </td>

                                                            <td>
                                                                <img
                                                                    src="/assets/images/triangle.png"
                                                                    className="d-inline-block pr-1"
                                                                    alt="Image"
                                                                />
                                                                {item.to_date
                                                                    .toString()
                                                                    .replace(
                                                                        /\B(?=(\d{2})+(?!\d))/g,
                                                                        ","
                                                                    )}
                                                                % $
                                                                {item.to_date_}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>

                            <Col xl={4} lg={4} md={11} sm={12} xs={12}>
                                <div className="bannerrightCol">
                                    <Row>
                                        <Col
                                            md={9}
                                            sm={9}
                                            xs={9}
                                            className="text-left"
                                        >
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

                                        <Col
                                            md={3}
                                            sm={3}
                                            xs={3}
                                            className="text-right"
                                        >
                                            <span>
                                                {
                                                    MyAccountDetail.buru_token_minted
                                                }
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container>
                    <Row>
                        <Col md={8} lg={7}>
                            <h4 className="investment_title font-weight-bolder">
                                {" "}
                                Description
                            </h4>
                            <p style={{ fontSize: 15 }}>
                                We will run 2 main strategies:1) a long and
                                short algo on BTC, w/ a Sortino of 5.5 (will
                                post new backtest chart shortly, but it performs
                                better). 2) Active discretionary trading both
                                long / short across all synthetic assets
                                combining fundamental, technical, quantitative
                                and cross asset analysis (will post new backtest
                                chart shortly, but it performs better). Any
                                changes to strategy will be noted here...
                                <a
                                    href="#"
                                    className=" text-dark font-weight-bold p-0"
                                >
                                    See more
                                </a>
                            </p>
                        </Col>
                        <Col sm={12}>
                            <hr />
                        </Col>
                    </Row>
                </Container>
                <MyAccountNewGraph />
            </section>
            <TabSection tabs={tabs} />
            <Footer />
        </>
    );
};
