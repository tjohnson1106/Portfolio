import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/services/Services";
import Header from "./components/header/Header";

import "./App.css";

interface Props {
  logoTitle: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <Router>
      <div>
        <nav>
          <h2 className="logo">{props.logoTitle}</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/services/">Services</Link>
            </li>
            <li>
              <Link to="/portfolio/">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
        <Header title="portfolio" />

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/portfolio/" component={Portfolio} />
        <Route path="/services/" component={Services} />
      </div>
    </Router>
  );
};

export default App;
