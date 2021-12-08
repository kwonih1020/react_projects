/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.css";
import { stockscontext } from "./App";

import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

// css을 입혀놓은 components
let Box = styled.div`
  padding: 20px;
`;

let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.colors};
`;

// components life cycle
// class Detail2 extends React.Component {
//   componentDidMount() {
//     // when components mount
//   }

//   componentWillUnmount() {
//     // when components ends
//   }
// }

function Detail(props) {
  let [alert, alertChange] = useState(true);
  let [inputData, inputDataChange] = useState("");
  let stocks = useContext(stockscontext);
  let [tabs, tabsChange] = useState(0);
  let [switchs, switchsChange] = useState(false);

  // useEffect(()=>{
  //   axios.get();
  // })

  useEffect(() => {
    // component가 mount ot update될때...실행되는...
    let timer = setTimeout(() => {
      alertChange(false);
    }, 2000);

    return function unMount() {
      //  컴포넌트가 사라질때 코드를 실행시킬 수도 있음
      clearTimeout(timer);
      // detail component가 사라질때 타이머 해제 스킬
    };
  }, [alert]); //  alert가 실행 될때만 useEffect가 실해되게 하는 조건식 [] 대괄호 안에 넣어야함, 그 뒤에 계속 넣을수 있음.
  // 빈칸일때는, detail 페이지가 처음 들어올때만 실행되는 트릭.

  // useEffect 는 여러개라도 상관없음.

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

      {alert === true ? (
        <div className="my-alert">
          <p>Out of stock soon!</p>
        </div>
      ) : null}

      <input
        onChange={(e) => {
          inputDataChange(e.target.value);
        }}></input>

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
          <Stockinfo stocks={props.stocks}></Stockinfo>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.stocksChange([9, 11, 12]);
              props.dispatch({
                type: "order",
                data: { id: products.id, name: products.title, quan: 1 },
              });
              history.push("/cart");
            }}>
            Order
          </button>
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
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              tabsChange(0);
              switchsChange(false);
            }}>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              tabsChange(1);
              switchsChange(false);
            }}>
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            onClick={() => {
              tabsChange(2);
              switchsChange(false);
            }}>
            Option 3
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={switchs} classNames="wow" timeout={500}>
        <TabContent tabs={tabs} switchsChange={switchsChange}></TabContent>
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.switchsChange(true);
  });
  if (props.tabs === 0) {
    return <div>0</div>;
  } else if (props.tabs === 1) {
    return <div>1</div>;
  } else if (props.tabs === 2) {
    return <div>2</div>;
  }
}

function Stockinfo(props) {
  return <p>Stocks : {props.stocks[0]}</p>;
}

function stateToProps(state) {
  // redux store 데이터 가져와서 props 로 변환해주는 함수
  return {
    state: state.reducer, // state라는 이름의 props로 바꿔주세요 (여기가 props)
    alertState: state.reducer2,
  };
}

// export default Detail;
export default connect(stateToProps)(Detail);
