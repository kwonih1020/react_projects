import React from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {
  let state = useSelector((state) => state); // 첫번째 state은 redux에 있던 모든  state을 뜻함
  let dispatch = useDispatch();
  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Order#</th>
            </tr>
          </thead>
          <tbody>
            {state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quan}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch({ type: "addOrder", data: a.id });
                      }}>
                      +
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "deleteOrder", data: a.id });
                      }}>
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {props.alertState === true ? (
          <div className="my-alert2">
            <p>20% Sale</p>
            <button
              onClick={() => {
                props.dispatch({ type: "close" });
              }}>
              Close
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// function stateToProps(state) {
//   // redux store 데이터 가져와서 props 로 변환해주는 함수
//   return {
//     state: state.reducer, // state라는 이름의 props로 바꿔주세요 (여기가 props)
//     alertState: state.reducer2,
//   };
// }

// export default connect(stateToProps)(Cart);

export default Cart;
