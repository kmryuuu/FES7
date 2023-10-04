import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

function App() {
  // BrowserRouter 안에 Routes가 들어가야함.
  return (
    // a 태그 : 전혀 다른 페이지로 갈때 (새로고침 된다)
    // Link to : 페이지 안에서 전환이 일어나는것 처럼 보여주고 싶다 (새로고침 안된다) ex) 네이버에서 네이버로
    <BrowserRouter>
      <a href="/cart">카트 페이지 이동</a>
      <Link to="/">홈</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트! */}
        {/* <Route path="/users/*" element={<Outlet/>}> */}
        <Route path="/users/*" element={<Users />}>
          {/* 이 안에 중첩할 라우트 들이 들어갑니다~! */}
          {/* 여기 주소는 /users */}
          {/* <Route path="" element={<Users/>}/> */}
          {/* /users/coupon */}
          <Route path="coupon" element={<CouponPage />} />
          {/* /users/question */}
          <Route path="question" element={<QuestionPage />} />
          {/* /users/notice */}
          <Route path="notice" element={<NoticePage />} />
        </Route>
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route
          path="/products/:id/notice"
          element={<ProductDetailNoticePage />}
        />
      </Routes>
      {/* /users로 이동하는 버튼! useNavigate 이용하기 */}
      <Button />
    </BrowserRouter>
  );
}

function Button() {
  const navigate = useNavigate();
  // useNavigate : 자바스크립트 함수로 페이지를 이동하고 싶을 때 (onClick 이벤트를 통해서 가능하다.)
  // 이것도 새로고침이 안된다.
  return <button onClick={() => navigate("/users")}>유저보기</button>;
}

function ProductDetailNoticePage() {
  const { id } = useParams();
  return <h1>{id}번 상품 상세 알림? 페이지</h1>;
}

function CouponPage() {
  return <h1>쿠폰</h1>;
}

function NoticePage() {
  return <h1>알림</h1>;
}

function QuestionPage() {
  return <h1>?</h1>;
}

function ProductDetailPage() {
  const { id } = useParams();
  return <h1>{id}번 상품 입니다~!</h1>;
}

function Cart() {
  return <h1>카트</h1>;
}

function Users() {
  return (
    <div>
      <h1>유저들</h1>
      {/* Outlet은 여기서도 사용 가능하다. */}
      <Outlet />
    </div>
  );
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

export default App;
