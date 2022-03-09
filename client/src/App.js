import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import NavBar from "./components/views/NavBar/NavBar";
import About from "./components/views/AboutPage/About";
import Play from "./components/views/MinigamePage/Hangman";
import Board from "./components/views/BoardPage/Board";
import Footer from "./components/views/Footer/Footer";
//page

import HomeScreen from "./components/views/ShoppingPage/HomeScreen";
import ProductScreen from "./components/views/ShoppingPage/ProductScreen";
import MyPage from "./components/views/MyPage/MyPage";
import AuthBoard from "./components/views/AuthBoard/AuthBoard";
import Profile from "./components/views/ProfilePage/Profile";

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ marginTop: "9.6vh" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          {/* <Route exact path="/about" component={Auth(About, null)} />
          <Route exact path="/authboard" component={Auth(AuthBoard, true)} /> */}
          <Route
            exact path="/product"
            component={Auth(HomeScreen, true)}
          />
          <Route
            exact path="/product/:id"
            component={Auth(ProductScreen, true)}
          />
          <Route exact path="/mypage" component={Auth(MyPage, true)} />
          <Route exact path="/profile/:id" component={Auth(Profile, true)} />
          <Route exact path="/play" component={Auth(Play, true)} />
          {/* <Route exact path="/board" component={Auth(Board, null)} /> */}
          <Route exact path="/article/:articleId" />
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default observer(App);
