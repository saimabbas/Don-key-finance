/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useMemo, useState } from "react";
import { useToggle } from "../../hooks";
import clsx from "clsx";
import { ProtocolBar } from "../../components/ProtocolBar/ProtocolBar";
import Protocol from "../../components/Protocol/Protocol";
import { BuilderModal } from "../../components/BuilderModal/BuilderModal";
import { ActionConfig } from "../../components/ActionConfig/ActionConfig";
import { GraphProvider } from "../../components/GraphProvider/GraphProvider";
import { NavBar3 } from "../../components/Navbar/NavBar";
import "./main.scss";
import { getQueryParam, getWeb3, uuidv4 } from "../../helpers/helpers";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiRequest } from "actions/apiActions";
import moreIcon from "./more.svg";
import { MoreProtocolsModal } from "components/MoreProtocolsModal/MoreProtocolsModal";
import axios, { AxiosResponse } from "axios";
import { IProtocolFromAPI } from "interfaces";
import { withYFITokens } from "components/YFITokensProvider";
import BalanceBar from "components/BalanceBar/BalanceBar";
import Web3 from "web3";

const Builder = () => {
  const [panel, setPanel] = useState(null);
  const [isModalOpen, , , toggleModal] = useToggle();
  const [protocols, setProtocols] = useState<IProtocolFromAPI[]>([]);
  const closePanel = () => setPanel(null);

  const history = useHistory();

  const [showMoreProtocols, setShowMoreProtocols] = useState(false);

  const [strategy, setStrategy] = useState({
    protocolCells: [
      {
        protocolId: uuidv4(),
        protocol: "BY",
        lastProtocol: null,
        x: 200,
        y: 150,
        w: 110,
        h: 110,
        vertex: null,
      },
    ],
    actionCells: [],
  });

  const dispatch = useDispatch();

  const getStrategy = () => {
    return new Promise<AxiosResponse>((res, rej) => {
      const strategy = getQueryParam("id");
      dispatch(
        apiRequest({
          method: "GET",
          endpoint: "/api/v1/strategies?id=" + strategy,
          onDone: res,
          onFail: rej,
        })
      );
    });
  };

  const createStrategy = () => {
    return new Promise<AxiosResponse>((res, rej) => {
      dispatch(
        apiRequest({
          method: "POST",
          endpoint: "/api/v1/strategies",
          onDone: res,
          onFail: rej,
        })
      );
    });
  };
  const getProtocols = () => {
    return new Promise<AxiosResponse>((res, rej) => {
      dispatch(
        apiRequest({
          method: "GET",
          endpoint: "/api/v1/protocols",
          onDone: res,
          onFail: rej,
        })
      );
    });
  };

  useEffect(() => {
    const strategy = getQueryParam("id");
    const request = strategy ? getStrategy() : createStrategy();
    Promise.all([request, getProtocols()]).then(([strategy, protocol]) => {
      const json = strategy.data.data.json;
      const strategyid = strategy.data.data.id;
      history.replace("/strategy/build?id=" + strategyid);
      setStrategy((old) => {
        const data = json ? JSON.parse(json) : old;
        return { ...data, id: strategyid };
      });
      setProtocols(protocol.data.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const firstSeven = useMemo(() => {
    return protocols.length > 6
      ? protocols.slice(0, protocols.length - 1)
      : protocols;
  }, [protocols]);
  const [isApproved, setApproved] = useState(false);
  const handleApprove = async () => {
    setApproved(true);
  };

  return (
    <>
      <div className={clsx(`page-wrapper`, { blur: isModalOpen })}>
        <NavBar3 />
        <MoreProtocolsModal
          protocols={protocols}
          isOpen={showMoreProtocols}
          onClose={() => setShowMoreProtocols(false)}
        />
        {/* <img src={generateGradientImage("red", "blue")} /> */}
        {protocols.length > 0 ? (
          <GraphProvider
            strategy={strategy}
            openPanel={setPanel}
            protocols={protocols}
          >
            <ProtocolBar>
              {firstSeven.map(
                ({
                  name,
                  showOnToolbar,
                  toolbarImageURL,
                  website,
                  description,
                }) => {
                  return (
                    <Protocol
                      key={name}
                      onClose={closePanel}
                      openedPanel={panel}
                      icon={toolbarImageURL}
                      name={name}
                      website={website}
                      description={description}
                      showOnToolbar={showOnToolbar === "1"}
                    />
                  );
                }
              )}
              <li>
                <hr />
              </li>
              <li
                onClick={() => setShowMoreProtocols(true)}
                className={clsx("protocol-list-item cursor-pointer")}
              >
                <img src={moreIcon} style={{ maxWidth: 58 }} />
              </li>
            </ProtocolBar>
            <BuilderModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
            <ActionConfig />
            <div
              style={{
                position: "absolute",
                top: 120,
                right: 87,
                padding: "15px 20px",
                backgroundColor: "white",
                border: "3px solid black",
                borderRadius: "8px",
                cursor: "pointer"
              }}
              onClick={handleApprove}
            >
              {isApproved ? "Approved" : "Approve strategy"}
            </div>
            <BalanceBar />
          </GraphProvider>
        ) : (
          "Loading"
        )}
      </div>
    </>
  );
};

export default withYFITokens(Builder);
