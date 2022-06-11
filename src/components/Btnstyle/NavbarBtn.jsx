import styled from "styled-components";

export const NavBtn = styled.button`
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
        background-color: #353434;
        width:100%;
        height:5px;
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
  }
  }
`