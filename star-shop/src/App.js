import React, { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import nameData from './data.js';

function App() {
  //서버에서 가져왔다고 가정하자 'ㅅ'
  //중요한 데이터는 state로 관리해욥
  let [items, itemsFunc] = useState(nameData);

  return (
    <div className="App">
      <Navbar variant="dark" className="nav-wrap">
        <Container>
          <Navbar.Brand href="#home">별이월드 ⭐️</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">category1</Nav.Link>
            <Nav.Link href="#pricing">category2</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="bg-color">
        <h2>/* Hello World * /</h2>
        <p>지금은 리액트 쇼핑몰 만들기 프로젝트 공부 중입니다.</p>
        <p>리액트 짱이 될 거야. 🐥</p>
        <Button variant="dark">more</Button>{' '}
      </div>

      <div className="container">
        <div className="contain-wrap">
          <div className="title-wrap">
            <h2 className="subject">GAME ICON ✨</h2>
            <span className="subject-s">그랜드 마스터가 될 거예요. 🕶</span>
          </div>
          <div className="row">
            {/* <div className="item col-md-4">
              <img src={itemImg1} width="100%" alt="상품 이미지1" />
              <h3>{item[0].title}</h3>
              <p>{item[0].content}</p>
              <h4>
                {item[0].price}
                <span>원</span>
              </h4>
            </div>
            <div className="item col-md-4">
              <img src={itemImg2} width="100%" alt="상품 이미지2" />
              <h3>{item[1].title}</h3>
              <p>{item[1].content}</p>
              <h4>
                {item[1].price}
                <span>원</span>
              </h4>
            </div>
            <div className="item col-md-4">
              <img src={itemImg3} width="100%" alt="상품 이미지3" />
              <h3>{item[2].title}</h3>
              <p>{item[2].content}</p>
              <h4>
                {item[2].price}
                <span>원</span>
              </h4>
            </div> */}
            {items.map((item, i) => {
              return <Item item={items[i]} i={i} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <>
      <ul className="item col-md-4">
        <li>
          <img
            src={'./img/item' + (props.i + 1) + '.png'}
            width="50%"
            alt="상품 이미지"
          />
          <h3>{props.item.title}</h3>
          <p>{props.item.content}</p>
          <h4>
            {props.item.price}
            <span>원</span>
          </h4>
        </li>
      </ul>
    </>
  );
}
export default App;
