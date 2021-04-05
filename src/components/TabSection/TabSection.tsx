import React, { useState } from "react";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import { TabItem } from "../TabItem/TabItem";

export const TabSection = ({tabs}: {tabs: {text: string; icon: React.ReactElement; comp: any }[]}) => {
    const [selectedTab, setSelectedTab] = useState<string>(tabs[0].text);

    return (
        <section className="tabssection">
            <div className="bg-buru">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="d-flex flex-wrap">
                                {tabs.map((item) => {
                                    return (
                                        <TabItem
                                            active={selectedTab === item.text}
                                            onClick={() => setSelectedTab(item.text)}
                                            icon={item.icon}
                                            text={item.text} />
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="py-5">
                {tabs.map((item) => {
                    if (item.text === selectedTab) {

                        return item.comp;
                    }
                })}
            </div>
        </section>
    );
};
