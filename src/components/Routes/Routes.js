import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UsersPage from "../UsersPage/UsersPage";
import Home from "../Home/Home";
import Navbar from "../Header/Navbar";
import Businesses from "../Businesses/Businesses";
import HowItWorksUsers from "../How_It_Works/HowItWorksUsers";
import HowItWorksBusinesses from "../How_It_Works/HowItWorksBusinesses";
import Contact from "../Contact/Contact";
import FAQ from "../FAQ/FAQ";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

const Routes = (props) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Userspage" component={UsersPage} />
        <Route path="/Businesses" component={Businesses} />
        <Route path="/HowItWorksUsers" component={HowItWorksUsers} />
        <Route path="/HowItWorksBusinesses" component={HowItWorksBusinesses} />
        <Route path="/Contact" component={Contact} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
      </Switch>
    </Router>
  );
};

export default Routes;
