import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";

import HomePage from "./homepage/HomePage"
import FooterSection from "./homepage/FooterSection"
import SkillSet from "./homepage/SkillSet"
import RecentWorks from "./homepage/RecentWorks"
import Intro from "./homepage/Intro"
import HeaderTopBar from "./layout/HeaderTopBar"

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);
  return (
    <Router>
      {/* <TopBar user={currentUser} /> */}
      <HeaderTopBar/>
      <Layout>
        <Content>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/users/new" component={RegistrationForm} />
            <Route exact path="/user-sessions/new" component={SignInForm} />
          </Switch>
          <Intro/>
          <SkillSet/>
          <RecentWorks/>
        </Content>
      <Footer>
        <FooterSection/>
      </Footer>
    </Layout>
    </Router>
  );
};

export default hot(App);
