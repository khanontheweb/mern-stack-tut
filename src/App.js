import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";  
import "bootstrap/dist/css/bootstrap.min.css";

import TodosList from "./components/todos-list.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";

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
        
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
