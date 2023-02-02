//Link to = a href

import { Link, NavLink, Outlet } from "react-router-dom";
// 스타일 지정하는곳
const activeStyle = ({ isActive }) => ({
  color: isActive ? "green" : "",
  fontSize: isActive ? "2rem" : "",
});

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* NavLink : 선택한 컴포넌트에 스타일 지정이 가능하다. */}
            <NavLink to="/" style={activeStyle}>
              Home
            </NavLink>
          </li>

          <li>
            {/* <a>요소는 전체를 모드 렌더링하므로 <Link> 또는 <NavLink>을 사용한다. */}
            {/* <a href="/dashboard">Dashboard</a> */}
            <NavLink to="/dashboard" style={activeStyle}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/nothing-here" style={activeStyle}>
              Nothing here
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      {/* <Outlet>같은 path로 연결되어있는 element를 출력할수있게함 */}
      <Outlet />
    </div>
  );
};

export default Layout;
