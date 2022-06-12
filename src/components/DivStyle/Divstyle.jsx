import styled from 'styled-components'

export const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;   
`

export const NavbarRightDiv = styled.div`
  margin-left: 200px;
  width:400px;
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
  background-color: ${(props)=>props.theme.bgColor};
  box-shadow:${(props)=>props.theme.nav};
`

export const PopUpDiv= styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100px;
    height:100px;
    border-radius: 50%;
    background-color: ${(props)=>props.theme.underLineColor};
    left:20px;
    bottom: 20px;   
    cursor: pointer;
    :hover{
        transform: scale(1.05);
    }
`

export const SelectDiv= styled.div`
    width:100%;
    height:100%;
    background-color: ${(props)=>props.theme.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ShowDiv = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width:1000px;
    height:100%;
    font-size: 24px;
    color:black;
    background-color: ${(props)=>props.theme.bgColor};
    color:${(props)=>props.theme.fontColor};
    border-radius: 10px;
    margin:20px;
    justify-content: center;
    align-items: center;
`

export const ShowItemDiv= styled.li`
display: flex;
align-items: center;
justify-content: center;
width:150px;
height:50px;
margin: 5px;
border: 1px solid ${(props)=>props.theme.underLineColor};
border-radius: 10px;
:hover{
    cursor: pointer;
    transform: scale(1.05);
    background-color: ${(props)=>props.theme.bannerHover};
    color:${(props)=>props.theme.boxFontHoverColor};
}
`

export const ResultDiv =styled.div`
    height:100%;
    background-color: ${(props)=>props.theme.bgColor};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px 40px;
`
export const ResultSelectBtnDiv= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props)=>props.theme.bannerBtnColor};
    width:500px;
    height:100px;
    margin:20px;
    border-radius: 10px;
`

export const SelectBarDiv = styled.div`
    display: flex;
    height:60px;
    margin: 15px 0px;
    align-items: center;
    justify-content: center;
    background-color: ${(props)=>props.theme.bgColor};
    border-radius: 10px;
`

export const ShowSelectListDiv = styled.div`
display: flex;
flex-wrap: wrap;
column-gap: 20px;
justify-content: center;
align-items: center;
width: 800px;
background-color: ${(props)=>props.theme.bgColor};
border-radius: 10px;
height: 200px;
color:${(props)=>props.theme.fontColor};
margin-bottom: 20px;
`

export const ShowSelectListItemDiv = styled.div`
    font-size: 24px;
    width: 150px;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px 0px 0px;
    border-radius: 10px;
    background-color: ${(props)=>props.theme.bgColor};
    color:${(props)=>props.theme.fontColor};
    border: 1px solid ${(props)=>props.theme.fontColor};
    :hover{
        cursor: pointer;
        transform: scale(1.05);
        background-color: ${(props)=>props.theme.bannerHover};
        color:${(props)=>props.theme.fontColor};
    }
`

export const LoginToggleDiv= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:100px;
`


export const LoginBtnDiv = styled.div`
  border-radius: 10px;
  display: flex;
  width:300px;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  box-shadow: 2px 2px 2px 2px gray;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`
export const WriteDiv= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  margin: 30px;
`

export const WriteBtnDiv = styled.div`
display: flex;
align-items: center;
`