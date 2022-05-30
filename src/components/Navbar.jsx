import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbardiv = styled.div`
  width: 100%;
  height:100px;
  margin: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavLogo =styled.div`
  width:250px;
  height:100px;
  margin-right: 100px;
  cursor: pointer;
  background-position: center;
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
  }
  
`

function Navbar() {
  return (
    <Navbardiv>
      <NavLogo/>
      <NavbarRightDiv>
        <NavBtn>
          <Link to={{pathname : "/write"}}>
            새 글 쓰기
          </Link>
        </NavBtn>
        <NavBtn>
          <Link to={{pathname: "/login"}}>
            로그인
          </Link>
        </NavBtn>
      </NavbarRightDiv>
    </Navbardiv>
  )
}

export default Navbar;
