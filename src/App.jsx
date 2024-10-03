import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import FullStack from "./components/FullStack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/*the heading */}
        <NavLink className="nav-link" exact to="/">
          <h1 className="text-center mt-3">Courses</h1>
        </NavLink>

        {/*the navbar items */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  activeClassName="active"
                >
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/full-stack"
                  activeClassName="active"
                >
                  Full Stack Development
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/data-science"
                  activeClassName="active"
                >
                  Data Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/cyber-security"
                  activeClassName="active"
                >
                  Cyber Security
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/career"
                  activeClassName="active"
                >
                  Career
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/full-stack" element={<FullStack />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
