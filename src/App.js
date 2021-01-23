import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
            {/*
            
            //Right Side----> Original Instagram

            //Left Side---->Insta clone made with ReactJS By Me.

            //So just try some navigation into the application

            
            */}
          </Route>
          <Route
            exact
            path="/auth/:auth_type"
            render={(props) => {
              let login = true;
              if (props.match.params.auth_type === "register") {
                login = false;
              }

              /*
              How the Authentication Page Render

              if a client visit /auth/authentication_type(lOGIN/Register)
              based on auth_type we render auth page

              /auth(static_part)/auth_type(dynamic)
              
              */
              return <Auth login={login} />;
            }}
          />

          <Route
            exact
            path="/explore"
            render={(props) => {
              // How i show Explore Page
              /**
               *
               * if user visit /explore then just return the <Explore/> Component
               */
              return <Explore />;
            }}
          />

          <Route
            path="/direct/inbox/"
            render={(props) => {
              /**
               * How Messag page works
               *
               * if client visit /direct/inbox then just return the <Messages/>
               */
              return <Messages />;
            }}
          />

          <Route
            exact
            path="/profile/:profile_name"
            render={(props) => {
              const uname = props.match.params.profile_name;
              /**
               *
               * At last how profile page render
               *
               * if client visit /profile/profile_name
               * /profile(static)/profile_name(dynamic)
               * Just return <Profile/> Component->Page
               */
              return <Profile uname={uname} />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
