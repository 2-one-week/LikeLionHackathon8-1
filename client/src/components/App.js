import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import ApplyPage from "./views/ApplyPage/ApplyPage";
import ApplySuccessPage from "./views/ApplyPage/ApplySuccessPage";
import MyPage from "./views/MyPage/MyPage";
import ContactPage from "./views/ContactPage/ContactPage";
import PostUploadPage from "./views/PostUploadPage/PostUploadPage";
import PostAllPage from "./views/PostAllPage/PostAllPage";
import PostDetialPage from "./views/PostDetailPage/PostDetailPage";
import EditMyPage from "./views/MyPage/EditMyPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/apply" component={Auth(ApplyPage, true)} />
          <Route
            exact
            path="/apply/success"
            component={Auth(ApplySuccessPage, true)}
          />
          <Route exact path="/mypage" component={Auth(MyPage, true)} />
          <Route exact path="/editmypage" component={Auth(EditMyPage, true)} />
          <Route exact path="/contact" component={Auth(ContactPage, null)} />
          <Route
            exact
            path="/post/upload"
            component={Auth(PostUploadPage, true)}
          />
          <Route exact path="/post/all" component={Auth(PostAllPage, null)} />
          <Route
            exact
            path="/post/:postId"
            component={Auth(PostDetialPage, null)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
