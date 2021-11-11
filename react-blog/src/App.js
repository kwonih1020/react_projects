import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [blogName, blogNameChange] = useState([
    "Popular Menu",
    " from Sisters Thai",
  ]); // 이렇게 쓰면 array가 남고, [a,b]
  // blogName 는 -> Popular Menu ,  blogNameChange 는 -> Popular Menu state 정정해주는 함수
  // es6 destructing 문법, array, object 에 있던 자료를 변수에 쉽게 담고 싶을 때

  // let posts = "Virginia Resturants";

  // let cssStyle = { color: "blue", fontSize: "30px" };

  // function random() {
  //   return 100;
  // }'=

  return (
    <div className="App">
      <div className="black-nav">
        <div>Blog</div>
        {/* <div style={cssStyle}>Blog</div> */}
      </div>
      <div className="list">
        <h3>{blogName[0]}</h3>
        <p>Date: Feb. 17th</p>
        <hr />
      </div>
      {/* <img src={logo} /> */}
    </div>
  );
}

export default App;

// 리액트는 데이퍼 바인딩이 쉬움
// { 변수명 } { 함수 } { 이미지 } 등
// src, id, href 등의 속성에도 { 변수명, 함수 등 } 가능
// JSX에서 style 속성 집어 넣을때 style = { object자료형으로 만듬 }, camelCase 작명습관에 속성명을 바꿔주세요.
// style 또한 변수에 넣어서 { styel변수 이름 } 넣어서 간단하게 만들수 있습니다.

// 데이터는 1. 변수에  넣거나 , 2. state에 넣거나
// state 는 1. 변수 대신 쓰는 데이터 저장 공간 / 2. useState() 을 이용해 만들어야함 / 3. 문자, 숫자, array, object 다 저장 가능합니다.
// state 에 데이터 저장 해놓는 이유: 웹이 app 처럼 동작하게 만들고 싶어서
//      state는 변경되면 HTML이 자동으로 재렌더링 됩니다. (새로고침 없이도 스므수하게 렌더링 됨)
