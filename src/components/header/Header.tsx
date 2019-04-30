import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Header.css";
import Background from "../../img/hero.jpg";

interface Props {
  title: string;
}

class Header extends Component<Props> {
  render() {
    return (
      <header style={headerStyles}>
        <h1>{this.props.title}</h1>
        <p>In your imagination you can go anywhere you want</p>
        <Link to="/">Find out more</Link>
      </header>
    );
  }
}

const headerStyles = {
  backgroundImage: `url( ${Background} )`,
  height: "50vh",
  backgroundSize: "cover"
};

export default Header;
