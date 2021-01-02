import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import SendMail from "./components/send-mail/SendMail";

import Login from "./pages/login/Login";
import Mail from "./pages/mail/Mail";
import EmailList from "./pages/email-list/EmailList";

import { auth } from "./firebase/firebase";

import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import { selectSendMessageIsOpen } from "./features/mailSlice";

import "./App.css";

const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
        
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route exact path="/mail" component={Mail} />
              <Route exact path="/" component={EmailList} />
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
};

export default App;
