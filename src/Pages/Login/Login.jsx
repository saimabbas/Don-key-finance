import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./LoginStyle.scss";
import ButtonComponent from "../../components/Button/Button";
import { getAuthTokenForPublicAddress } from "../../services/api";
import { Link, useHistory } from "react-router-dom";
import { useNotification } from "../../components/Notification";
import { useWalletConnectHook } from "../../hooks/useWalletConnectHook";
import { AuthToken } from "../../constants";
import { useDispatch } from "react-redux";
import { doLogin } from "../../actions/authActions/authActions";
import { getWeb3 } from "../../helpers/helpers";

const Login = () => {
  const history = useHistory();
  const { showNotification } = useNotification();

  const dispatch = useDispatch();

  const handleMetaMaskLogin = async () => {
    const web3 = await getWeb3();
    if (!web3) {
      return;
    }
    const coinbase = await web3.eth.getCoinbase();
    if (!coinbase) {
      return;
    }

    const publicAddress = coinbase.toLowerCase();
    const { token, user } = await getAuthTokenForPublicAddress(publicAddress);

    localStorage.setItem(AuthToken, token);
    localStorage.setItem("User", JSON.stringify(user));
    dispatch(doLogin(user));
    history.push("/dashboard");
    showNotification({
      msg: (
        <>
          <p className="text-center">Metamask Account Connected</p>
          <p className="text-center">{publicAddress}</p>
        </>
      ),
    });
  };

  useEffect(() => {
    const token = localStorage.getItem(AuthToken);
    let user = localStorage.getItem("User");
    if (user) {
      try {
        user = JSON.parse(user);
      } catch (e) {
        user = null;
      }
    }
    if (token && user) {
      dispatch(doLogin(user));
      history.push("/dashboard");
    } else {
      localStorage.removeItem(AuthToken);
      localStorage.removeItem("User");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { handleWalletConnect } = useWalletConnectHook();
  return (
    <div className="login">
      <div className="loginLeft">
        <div className="logo mt-5 ml-5">
          <Link to="/">
            <img
              src="/assets/images/logo.svg"
              className="d-inline-block align-top by-logo"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="text-center loginForm">
          <h1 className="mb-4">Join the Buru</h1>
          <p className="mb-4">
            Join our farmers <br /> Be the best
          </p>
          <Form className="">
            {/* <Form.Group>
              <Form.Control type="text" placeholder="Login" />
            </Form.Group> */}

            {/* <ButtonComponent className="btnYellow mt-4 d-block w-100">
              Connect Wallet
            </ButtonComponent> */}

            <Row>
              <Col md={6}>
                <ButtonComponent
                  onClick={handleWalletConnect}
                  className="btn-outline1 mt-4 d-block w-100"
                >
                  <img
                    src="/assets/images/login/wallet.png"
                    className="d-inline-block mr-lg-3 mr-2 ml-2"
                    alt="Image"
                  />
                  Walletconnect
                </ButtonComponent>
              </Col>
              <Col md={6}>
                <ButtonComponent
                  onClick={handleMetaMaskLogin}
                  className="btn-outline1 mt-4 d-block w-100"
                >
                  <img
                    src="/assets/images/login/mask.png"
                    className="d-inline-block mr-lg-3 mr-2 ml-2"
                    alt="Image"
                  />
                  Metamask
                </ButtonComponent>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="loginImage d-md-inline-block d-none"></div>
    </div>
  );
};

export default Login;
