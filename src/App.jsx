import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import AboutUs from "./components/aboutUs/aboutUs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutUs />
      {/* <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />

              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

              <Route path="/users" render={() => <UsersContainer />} />

              <Route path="/login" render={() => <LoginPage />} />
            </div>
          </div> */}{" "}
    </div>
  );
}

export default App;
