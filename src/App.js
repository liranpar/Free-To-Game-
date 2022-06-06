import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { AppHeader } from "./cmps/AppHeader";
import { GameApp } from "./pages/GameApp";
import { Favorites } from "./pages/Favorites";
import { Details } from "./pages/Details";
import AppFooter from "./cmps/AppFooter";
import styles from "./style/styles.scss";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-app-container">
        <div className="main-layout-height">
          <AppHeader />
          <Switch>
            <Route exact component={About} path="/about" />
            <Route exact component={Favorites} path="/favorites" />
            <Route exact component={Details} path="/game/:gameId" />
            <Route exact component={GameApp} path="/" />
          </Switch>
        </div>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
