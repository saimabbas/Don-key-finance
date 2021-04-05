import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import {Onboarding} from "../Pages/Onboarding";
import Login from "../Pages/Login";
import ResourcePage from "../Pages/ResourcePage";
import FarmersPage from "../Pages/FarmersPage";
import TeamPage from "../Pages/TeamPage";
import MyAccount from "../Pages/MyAccount";
import NotificationPage from "../Pages/NotificationPage";
import Builder from "../Pages/Builder";
import SelectTemplate from "../Pages/SelectTemplate";
import StrategyConfirmation from "../Pages/StrategyConfirmation";
import { ProtectedRoute } from "components/ProtectedRoute";
import { MyAccountNew } from "Pages/MyAccountNew/MyAccountNew";
import { Onboarding1 } from "Pages/Onboarding/Onboarding1";
import { Onboarding2 } from "Pages/Onboarding/Onboarding2";
import { Onboarding3 } from "Pages/Onboarding/Onboarding3";
import { Onboarding4 } from "Pages/Onboarding/Onboarding4";
import { Onboarding5 } from "Pages/Onboarding/Onboarding5";
import { Onboarding6 } from "Pages/Onboarding/Onboarding6";
import { Onboarding7 } from "Pages/Onboarding/Onboarding7";
import { Onboarding8 } from "Pages/Onboarding/Onboarding8";
import { Onboarding9 } from "Pages/Onboarding/Onboarding9";
import { Onboarding10 } from "Pages/Onboarding/Onboarding10";
import { Onboarding11 } from "Pages/Onboarding/Onboarding11";
import { Onboarding12 } from "Pages/Onboarding/Onboarding12";
import { DashboardPage } from "Pages/DashboardPage/DashboardPage";
import { InvestmentPage } from "Pages/InvestmentPage/InvestmentPage";


export default function Routes() {


  return (
    <Router>
        <Switch>
          <Route exact path="/" children={<LandingPage />} />
          <Route exact path="/dashboard" children={<DashboardPage />} />
          <Route exact path="/strategy" children={<InvestmentPage />} />
          <Route exact path="/onboarding" children={<Onboarding />} />
          <Route path="/onboarding/1" children={<Onboarding1 />} />
          <Route path="/onboarding/2" children={<Onboarding2 />} />
          <Route path="/onboarding/3" children={<Onboarding3 />} />
          <Route path="/onboarding/4" children={<Onboarding4 />} />
          <Route path="/onboarding/5" children={<Onboarding5 />} />
          <Route path="/onboarding/6" children={<Onboarding6 />} />
          <Route path="/onboarding/7" children={<Onboarding7 />} />
          <Route path="/onboarding/8" children={<Onboarding8 />} />
          <Route path="/onboarding/9" children={<Onboarding9 />} />
          <Route path="/onboarding/10" children={<Onboarding10 />} />
          <Route path="/onboarding/11" children={<Onboarding11 />} />
          <Route path="/onboarding/12" children={<Onboarding12 />} />
          <Route path="/login" children={<Login />} />
          <ProtectedRoute path="/strategy/build" children={<Builder />} />
          <Route path="/resource" children={<ResourcePage />} />
          <ProtectedRoute path="/farmers" children={<FarmersPage />} />
          <ProtectedRoute path="/team" children={<TeamPage />} />
          <ProtectedRoute path="/myaccount" children={<MyAccount />} />
          <Route path="/myaccount_new"><MyAccountNew /></Route>
          <Route path="/strategy/new" children={<SelectTemplate />} />
          <Route path="/strategy/confirmation" children={<StrategyConfirmation />} />
          <Route path="/notification" children={<NotificationPage />} />
        </Switch>
    </Router>
  );
}
