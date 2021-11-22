import React, { useState } from "react";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./App.css";

function Detail() {
  let history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">Detail</h4>
          <p>Product Detail</p>
          <p>$120000</p>
          <button className="btn btn-danger">Order</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
              //   history.push("/");
            }}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
