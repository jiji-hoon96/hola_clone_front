import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import { NavbarRightDiv,Navbardiv } from "./DivStyle/Divstyle";
import { NavBtn } from "./Btnstyle/NavbarBtn";

const NavLogo =styled.div`
 text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #353b48 0%,
    #273c75 29%,
    #7f8fa6 67%,
    #f5f6fa 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  :hover{
    transform: scale(1.05);
    transition-duration: 1s;
  }
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 35px;
  @keyframes textclip {
  to {
    background-position: 200% center;
  }
}
`

function Navbar() {
  const location= useLocation();
  return (
    <Navbardiv>
      <Link to={{pathname:"/"}}>
        <NavLogo>Organization</NavLogo> 
      </Link>
      <NavbarRightDiv>
        <Link to={{pathname : "/write"}}>
          <NavBtn>
            새 글 쓰기
            <div/>
          </NavBtn>
        </Link>
        {location.pathname === "/login" ?  <Link to={{pathname: "/sign"}}>
          <NavBtn>
            회원가입
            <div/>
          </NavBtn>
          </Link> :  <Link to={{pathname: "/login"}}>
            <NavBtn>
            로그인
            <div/>
            </NavBtn>
          </Link>}
      </NavbarRightDiv>
    </Navbardiv>
  )
}

export default Navbar;
