import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "pages/Login";
import { Dashboard } from "pages/Dashboard";
import { User } from "pages/User";
import { Protocol } from "pages/Protocol";
import { Strategy } from "pages/Strategy";
import { ProtocolsEdit } from "pages/ProtocolsEdit";
import { UserEdit } from "pages/UserEdit";
import { ProtocolCategories } from "pages/ProtocolCategories";
import { ProtocolCategoriesEdit } from "pages/ProtocolCategoriesEdit";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/users" component={User} />
        <Route exact path="/users/edit/" component={UserEdit} />
        <Route path="/users/edit/:id" component={UserEdit} />
        <Route exact path="/protocols" component={Protocol} />
        <Route exact path="/protocols/edit/" component={ProtocolsEdit} />
        <Route path="/protocols/edit/:id" component={ProtocolsEdit} />
        <Route exact path="/categories/" component={ProtocolCategories} />
        <Route exact path="/categories/edit/" component={ProtocolCategoriesEdit} />
        <Route path="/categories/edit/:id" component={ProtocolCategoriesEdit} />
      
        <Route exact path="/strategies" component={Strategy} />
      </Switch>
    </Router>
  );
}
