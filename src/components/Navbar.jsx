import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbardiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: -5px;
  z-index: 2;
  height: 110px;
  min-height: 70px;
  background-color: #F6F6F6;
  box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 11%);
`

const NavLogo =styled.div`
  display: flex;
  width:250px;
  height:100px;
  margin-right: 100px;
  cursor: pointer;
  background-position: center;
  background-color: white;
  background-size: cover;
  border-color:white;
  background-image: url("img/logofile/facebook_cover_photo_1.png");
  :hover{
    transform: scale(1.03);
  }
`

const NavbarRightDiv = styled.div`
margin-left: 200px;
  width:300px;
  height:50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NavBtn = styled.button`
  width:120px;
  font-weight: bold;
  margin-right: 20px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 18px;
  height:50px;
  :hover{
    transform: scale(1.03);
    div{
    background-color: #F9758F;
        width:100%;
        height:10px;
        display: flex;
        justify-content: center;
        align-items: center;
  }
  }

`

function Navbar() {
  return (
    <Navbardiv>
      <Link to={{pathname:"/"}}>
        <NavLogo/>
      </Link>
      <NavbarRightDiv>
        <NavBtn>
          <Link to={{pathname : "/write"}}>
            새 글 쓰기
            <div/>
          </Link>
        </NavBtn>
        <NavBtn>
          <Link to={{pathname: "/login"}}>
            로그인
            <div/>
          </Link>
        </NavBtn>
      </NavbarRightDiv>
    </Navbardiv>
  )
}

export default Navbar;
