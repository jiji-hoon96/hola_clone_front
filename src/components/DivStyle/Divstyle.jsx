import styled from 'styled-components'

export const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;   
`

export const NavbarRightDiv = styled.div`
margin-left: 200px;
  width:300px;
  height:50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const Navbardiv = styled.div`
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