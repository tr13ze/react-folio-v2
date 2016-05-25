import React from 'react';
import { Link } from "react-router";
export default class Header extends React.Component {
  render(){
    return (
      <header>
      <Link to="home">home</Link>
    <Link to="about">about</Link>
  <Link to="works">works</Link>
<Link to="contact">contact</Link>
</header>
    )
  }
}
