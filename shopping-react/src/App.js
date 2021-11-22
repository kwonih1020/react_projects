/* eslint-disable */
import React, { useState } from "react";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
// import logo from "./logo.svg";
import "./App.css";
import Data from "./data.js";
import Detail from "./Detail";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoesChange] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shopping Mall</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div className="jumbotron m-3 background">
            <h1 className="display-4">20% Season Off</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>

            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </div>
          <div className="container">
            <div className="row">
              {shoes.map((a, i) => {
                return <Shoescard shoes={shoes[i]} i={i}></Shoescard>;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>

        <Route path="/:id">
          <div>Random</div>
        </Route>
        {/* <Route path='' component={Modal}></Route> */}
      </Switch>
    </div>
  );
}

function Shoescard(props) {
  return (
    <div className="col-md-4">
      <img
        className="shoesimage"
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }></img>
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & ${props.shoes.price}
      </p>
    </div>
  );
}

export default App;
