/* eslint-disable */
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.css";

// css을 입혀놓은 components
let Box = styled.div`
  padding: 20px;
`;

let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.colors};
`;

function Detail(props) {
  let { id } = useParams();
  let products = props.shoes.find(function (product) {
    return product.id == id;
  });
  let history = useHistory();

  return (
    <div className="container">
      <Box>
        {/* <Title colors="red">Title
        </Title> */}
        <Title className="red">Title</Title>
      </Box>
      <div className="my-alert">
        <p>Out of stock soon!</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{products.title}</h4>
          <p>{products.content}</p>
          <p>${products.price}</p>
          <button className="btn btn-danger">Order</button>
          &nbsp;
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
