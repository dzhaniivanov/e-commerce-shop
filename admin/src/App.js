import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css"
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
        <Route path="/user/:userId">
            <User />
          </Route>
      </div>
    </Router>
  );
}

export default App;
