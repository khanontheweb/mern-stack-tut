import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";  
import "bootstrap/dist/css/bootstrap.min.css";

import CreativesList from "./components/creatives-list.component";
import CreateCreative from "./components/create-creative.component";
import EditCreative from "./components/edit-creative.component";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">ACN Directory</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Directory</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Submit Entry</Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <Route path="/" exact component={CreativesList} />
        <Route path="/edit/:id" component={EditCreative} />
        <Route path="/create" component={CreateCreative} />
      </div>
    </Router>
  );
}

export default App;
