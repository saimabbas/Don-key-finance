import React from "react";
import { NavBar, NavBar2 } from "../../components/Navbar/NavBar";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./LandingStyle.scss";
import ButtonComponent from "../../components/Button/Button";
import NumberFromjson from "../../JsonData/NumberFromJson";
import ListofFarmerjson from "../../JsonData/ListofFarmerJson";
import boostyield from "./boost-yield.png";
import buildStrategy from "./build-strategy.png";
import getLiquidity from "./get-liquidity.png";

const LandingPage = () => {
 return (
   <div>
     <NavBar />

     {/* Banner */}
     <div className="mt-4">
       <Container>
         <Row>
           <Col md={5}>
             <div className="bannerLeft mt-md-5 pt-md-4">
               <h1 className="colorBlack">Outsmart DeFi</h1>
               <p className="mt-4">
                 Create your DeFi strategy with a few clicks, get liquidity and
                 boost your profits.
               </p>
               <div className="mt-5">
                 <ButtonComponent className="btnYellow">
                   Start farming
                 </ButtonComponent>

                 <a href="#" className="pl-4">
                   How it works
                 </a>
               </div>
             </div>
           </Col>
           <Col md={7}>
             <div className="bannerRight">
               <img
                 src="https://byfinance.s3.us-east-2.amazonaws.com/animation_500_kl9tdo9z.gif"
                 className="d-inline-block"
                 alt="Image"
               />
             </div>
           </Col>
         </Row>
       </Container>
     </div>

     {/* Cards */}
     <div className="cardsBanner mt-5">
       {/* <Container>
          <Row>
          {
            NumberFromjson.map((item,index)=>{
              if(item.id ==1){
                var imag= '/assets/images/total/1.png'
              }
              else if( item.id==2){
                var imag= '/assets/images/total/2.png'
              }
              else if(item.id == 3){
                var imag= '/assets/images/total/3.png'
              }
              else if(item.id == 4){
                var imag= '/assets/images/total/4.png'
              }
             
              return(
              <Col md={6} lg={3}>
                <Card>
                  <Card.Body className="text-center">
                    <img
                      src={imag}
                      className="d-inline-block"
                      alt="Image"
                    />
                    <Card.Title className="mb-3">
                    {item.id == 1 || item.id==2 ? "$"+`${item.number}` : item.number}
                     </Card.Title>
                    <Card.Subtitle className="mb-2">
                     {item.title}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>

           
              )
         
            })
           }
           </Row>
          
        </Container> */}

       {/* Advantage */}

       <div className="advantage bgyellowColor">
         <div className="borderCurve"></div>
         <Container>
           <h3 className="headsame mb-3 my-5 justify-content-center">
             Painless DeFi
           </h3>
           <Row className="pt-5">
             <Col md={4}>
               <Card>
                 <Card.Body>
                   <img className="advantage-img" src={buildStrategy} />
                   <Card.Title>Build your strategy</Card.Title>
                   <Card.Text className="mt-4">
                     The most user friendly interface in the DeFi space. create
                     complicated strategies with 0 code.
                   </Card.Text>
                 </Card.Body>
               </Card>
             </Col>

             <Col md={4}>
               <Card>
                 <Card.Body>
                   <img className="advantage-img" src={getLiquidity} />
                   <Card.Title>Get liquidity</Card.Title>
                   <Card.Text className="mt-4">
                     Сlimb up the rank ladder and get up to 1M USD budget for
                     your trading portfolio
                   </Card.Text>
                 </Card.Body>
               </Card>
             </Col>
             <Col md={4}>
               <Card>
                 <Card.Body>
                   <img className="advantage-img" src={boostyield} />
                   <Card.Title>Boost your yield</Card.Title>
                   <Card.Text className="mt-4">
                     Make commission on your yields and get extra bonuses based
                     on your ranks and performance
                   </Card.Text>
                 </Card.Body>
               </Card>
             </Col>
           </Row>
         </Container>
       </div>
     </div>

     {/* Farmers Team */}
     <div className="farmer bggeryColor pt-5 pb-5">
       <Container>
         <Row className="mt-md-5 mb-5 mt-1">
           <Col md={6}>
             <h3 className="headsame mb-3 mt-3">
               Join the best <br /> Be part of farmers team
             </h3>
             <p className="parasame mt-4">
               Don-key encourages successful farmers to share their wisdom, with
               Don-key you can trade , get liquidity based on your results, share
               the yield and get extra dividend just for being a part of our
               farmers community
             </p>
             <ButtonComponent className="btnYellow mt-4">
               Discover best farmers
             </ButtonComponent>
             {ListofFarmerjson.map((item, index) => {
               var str = item.name;
               var res = str.substring(0, 2).toLocaleUpperCase();
               return item.id == 3 || item.id == 4 ? (
                 <div className="cardTeam mt-5">
                   <Card
                     className="ml-auto mr-auto ml-md-auto mr-md-0 cardEven text-center pt-5 pb-3"
                     style={{ width: "23rem" }}
                   >
                     <img
                       src="/assets/images/starblack.png"
                       className="d-inline-block cardStar"
                       alt="Image"
                     />
                     <Card.Body>
                       <span className="cardLetter">
                         {item.picture ? (
                           <img
                             src={item.chart_image_url}
                             //  className="d-inline-block mt-4"
                             alt="Image"
                           />
                         ) : (
                           res
                         )}
                       </span>
                       <Card.Title>{item.name}</Card.Title>

                       <ul className="p-0">
                         <li>{item.description}</li>
                       </ul>

                       <img
                         src={item.chart_image_url}
                         className="d-inline-block mt-4"
                         alt="Image"
                       />

                       <Row className="mt-4">
                         <Col md={6}>
                           <p className="cardPara">
                             <span className="pr-2">
                               {" "}
                               {"+" + `${item.apy}` + "%"}{" "}
                             </span>{" "}
                             APY
                           </p>
                         </Col>
                         <Col md={6}>
                           <p className="cardPara1">
                             {"strategies " + `${item.strategies}`}
                           </p>
                         </Col>
                       </Row>
                     </Card.Body>
                   </Card>
                 </div>
               ) : null;
             })}
           </Col>

           <Col md={6}>
             <div className="cardTeam mt-3 ml-lg-5 ml-md-2 ml-auto mr-auto mb-5">
               {ListofFarmerjson.map((item, index) => {
                 var str = item.name;
                 var res = str.substring(0, 2).toLocaleUpperCase();
                 return item.id == 3 || item.id == 4 ? null : (
                   <Card
                     className="cardEven text-center pt-5 pb-3"
                     style={{ width: "23rem" }}
                   >
                     <img
                       src="/assets/images/starblack.png"
                       className="d-inline-block cardStar"
                       alt="Image"
                     />
                     <Card.Body>
                       <span className="cardLetter">
                         {item.picture ? (
                           <img
                             src={item.chart_image_url}
                             //  className="d-inline-block mt-4"
                             alt="Image"
                           />
                         ) : (
                           res
                         )}
                       </span>
                       <Card.Title>{item.name}</Card.Title>

                       <ul className="p-0">
                         <li>{item.description}</li>
                       </ul>

                       <img
                         src={item.chart_image_url}
                         className="d-inline-block mt-4"
                         alt="Image"
                       />

                       <Row className="mt-4">
                         <Col md={6}>
                           <p className="cardPara">
                             <span className="pr-2">
                               {" "}
                               {"+" + `${item.apy}` + "%"}{" "}
                             </span>{" "}
                             APY
                           </p>
                         </Col>
                         <Col md={6}>
                           <p className="cardPara1">
                             {"strategies " + `${item.strategies}`}
                           </p>
                         </Col>
                       </Row>
                     </Card.Body>
                   </Card>
                 );
               })}
               <Card
                 className="cardOdd text-center pt-5 pb-3"
                 style={{ width: "23rem" }}
               >
                 <img
                   src="/assets/images/staryellow.png"
                   className="d-inline-block cardStar"
                   alt="Image"
                 />
                 <Card.Body>
                   <span className="cardLetter">YOU</span>
                   <Card.Title>You could be here</Card.Title>

                   <ul className="p-0">
                     <li>$25,000 allocation </li>
                     <li>$50,000 next level </li>
                   </ul>

                   <ButtonComponent className="btnYellow mt-5 mb-4">
                     Start farming
                   </ButtonComponent>
                 </Card.Body>
               </Card>
             </div>
           </Col>
         </Row>
       </Container>
     </div>

     {/* Trading strategy builder */}

     <div className="trading bgyellowColor pt-5 pb-5">
       <Container>
         <Row className="mt-md-5 mb-5 mt-1">
           <Col md={7}>
             <div className="tokenRIght">
               <h3 className="headsame mb-3 mt-3">Trading strategy builder</h3>
               <p className="parasame mt-4">
                 Build your DeFi strategy with a drag and drop interface
                 allowing you to adapt fast to the dynamic world of DeFi and
                 secure your yield
               </p>
               <ButtonComponent
                 variant="colorBlack btn-outline"
                 className="mt-4"
               >
                 Build strategy
               </ButtonComponent>
             </div>
           </Col>
           <Col md={4} className="">
             <div className="tradingrightImg">
               <img
                 src="/assets/images/trading.png"
                 className="d-inline-block"
                 alt="Image"
               />
             </div>
           </Col>
         </Row>
       </Container>
     </div>

     {/* Don-key Tokens */}

     <div className="toekns pt-5 pb-5">
       <Container>
         <Row className="mt-5 mb-5">
           <Col md={4} className="mr-md-4">
             <div className="toeknImg">
               <img
                 src="/assets/images/token.png"
                 className="d-inline-block"
                 alt="Image"
               />
             </div>
           </Col>
           <Col md={7} className="ml-md-4">
             <div className="tokenRIght">
               <h3 className="headsame mb-3 mt-md-2 mt-5">DON Tokens</h3>
               <p className="parasame">
                 DON tokens are airdropped to all farmers based on monthly
                 trading results and take into account: ROI, Risk level, asset
                 exposer and more. the better you are , the more you get
               </p>
               <h5 className="mt-4">Yield and Dividend </h5>
               <p className="parasame">
                 DON tokens represents the farmer’s yield based on his own
                 stratagies, in addition to a proportionate monthly dividend
                 from DON’s total monthly yield
               </p>
               <h5 className="mt-4">Exchangeable</h5>
               <p className="parasame">
                 You can redeem your DON tokens at any time or hold on to them
                 and accumulate higher future coupons
               </p>
             </div>
           </Col>
         </Row>
       </Container>
     </div>

     {/*  Join the Don-key Community */}
     <div className="community pt-5 pb-5 text-center">
       <Container>
         <h4 className="mt-4 pt-3">Join the Don-key Community</h4>
         <p className="mt-5">Follow us Social Media</p>
         <ul className="pl-0 mt-3 pb-3">
           <li>
             <a href="#">
               <img
                 src="/assets/images/social/medium.png"
                 className="d-inline-block"
                 alt="Image"
               />
             </a>
           </li>
           <li>
             <a href="#">
               <img
                 src="/assets/images/social/telegram.png"
                 className="d-inline-block"
                 alt="Image"
               />
             </a>
           </li>
           <li>
             <a href="#">
               <img
                 src="/assets/images/social/twitter.png"
                 className="d-inline-block"
                 alt="Image"
               />
             </a>
           </li>
           <li>
             <a href="#">
               <img
                 src="/assets/images/social/github.png"
                 className="d-inline-block"
                 alt="Image"
               />
             </a>
           </li>
         </ul>
       </Container>
     </div>
     {/*  footer */}
     <footer className="pt-5 pb-5">
       <Container>
         <Row>
           <Col md={3}>
             <div className="footcol">
               <div className="footHead mb-md-5 mb-3">
                 <img
                   src="/assets/images/footerLogo.png"
                   className="d-inline-block"
                   alt="Image"
                 />
               </div>
               <p>
                 Start building your crypto <br /> investment portfolio with{" "}
                 <br /> a trusted partner
               </p>

               <p className="pt-5">2020</p>
             </div>
           </Col>

           <Col md={3}>
             <div className="footcol">
               <div className="footHead mb-md-5 mb-3">
                 <h4>Company</h4>
               </div>
               <ul className="pl-0">
                 <li>
                   <a href="#">About</a>
                 </li>
                 <li>
                   <a href="#">Blog</a>
                 </li>
                 <li>
                   <a href="#">Legal</a>
                 </li>
                 <li>
                   <a href="#">GDPR</a>
                 </li>
                 <li>
                   <a href="#">Partners</a>
                 </li>
               </ul>
             </div>
           </Col>

           <Col md={3}>
             <div className="footcol">
               <div className="footHead mb-md-5 mb-3">
                 <h4>For users</h4>
               </div>
               <ul className="pl-0">
                 <li>
                   <a href="#">Support Center</a>
                 </li>
                 <li>
                   <a href="#">Farmers free tier</a>
                 </li>
                 <li>
                   <a href="#">How to Withdraw</a>
                 </li>
                 <li>
                   <a href="#">How to Verify Your Account</a>
                 </li>
                 <li>
                   <a href="#">Customer Service</a>
                 </li>
               </ul>
             </div>
           </Col>

           <Col md={3}>
             <div className="footcol">
               <div className="footHead mb-md-5 mb-3">
                 <h4>Privacy and Regulation</h4>
               </div>
               <ul className="pl-0">
                 <li>
                   <a href="#"> Don-key Cookie Policy</a>
                 </li>
                 <li>
                   <a href="#">Privacy Policy</a>
                 </li>
                 <li>
                   <a href="#">Regulation & License</a>
                 </li>
                 <li>
                   <a href="#">General Risk Disclosure</a>
                 </li>
                 <li>
                   <a href="#">Terms & Conditions</a>
                 </li>
               </ul>
             </div>
           </Col>
         </Row>
       </Container>
     </footer>
   </div>
 );
};

export default LandingPage;
