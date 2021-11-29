import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {props.state.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quan}</td>
                  <td>Table cell</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

function stateToProps(state) {
  // redux store 데이터 가져와서 props 로 변환해주는 함수
  return {
    state: state, // state라는 이름의 props로 바꿔주세요
  };
}

export default connect(stateToProps)(Cart);

// export default Cart;
