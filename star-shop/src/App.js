import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import nameData from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import Detail from './Detail';

function App() {
  //서버에서 가져왔다고 가정하자 'ㅅ'
  //중요한 데이터는 state로 관리해욥
  // eslint-disable-next-line
  let [items, itemsFunc] = useState(nameData);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar variant="dark" className="nav-wrap">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>별이월드 ⭐️</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail/1')}}>Detail</Nav.Link>
            <Nav.Link onClick={() => {navigate('/event')}}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="bg-color">
        <h2>Hello World</h2>
        <p>지금은 리액트 쇼핑몰 만들기 프로젝트 공부 중입니다.</p>
        <p>리액트 짱이 될 거야. 🐥</p>
        <Button variant="dark">more</Button>{' '}
      </div>

      <Routes>
        <Route path="/" element={<div className="container">
          <div className="contain-wrap">
            <div className="title-wrap">
              <h2 className="subject">GAME ICON ✨</h2>
              <span className="subject-s">그랜드 마스터가 될 거예요. 🕶</span>
            </div>
            <div className="row">
              {
                items.map((item, i) => {
                  return (
                    <Item item={items[i]} i={i} key={i} />
                  );
                })
              }
            </div>
          </div>
        </div>} />
        <Route path="/detail/:id" element={<Detail items={items} />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일 기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </div>
  );
}

function Item(props) {
  return (
    <>
      <div className="item col-md-4">
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
      </div>
    </>
  );
}

function Event() {
  return (
    <>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </>
  )
}

export default App;
