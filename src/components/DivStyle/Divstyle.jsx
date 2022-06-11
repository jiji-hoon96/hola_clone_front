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

export const PopUpDiv= styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100px;
    height:100px;
    border-radius: 50%;
    background-color: #353b48;
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
    background-color: #F6F6F6;
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
    background-color: white;
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
border: 1px solid grey;
border-radius: 10px;
:hover{
    cursor: pointer;
    transform: scale(1.05);
    background-color: #b1acac;
    color:white;
}
`

export const ResultDiv =styled.div`
    height:100%;
    background-color: white;
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
    background-color: #F6F6F6;
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
    background-color: white;
    border-radius: 10px;
`

export const ShowSelectListDiv = styled.div`
display: flex;
flex-wrap: wrap;
column-gap: 20px;
justify-content: center;
align-items: center;
width: 800px;
background-color: white;
border-radius: 10px;
height: 200px;
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
    background-color:  white;
    color:black;
    border: 1px solid black;
    :hover{
        cursor: pointer;
        transform: scale(1.05);
        background-color: #b1acac;
        color: black;
    }
`