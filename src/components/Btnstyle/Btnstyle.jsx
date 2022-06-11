import styled from 'styled-components'

const BtnShape =styled.button`
      width:120px;
    font-weight: bold;
    margin-right: 20px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    font-size: 18px;
    height:50px;
`
export const SelectBtn = styled(BtnShape)`
    :hover{
        transform: scale(1.03);
    }
    div{
        background-color: #353434;
        width:100%;
        margin-top: 5px;
        height:5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const NavBtn = styled(BtnShape)`
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

export const BannerBtn = styled.div`
    width: 250px;
    height:250px;
    background-color: #F6F6F6;
    border: none;
    text-align: center;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    border-radius: 50%;
    cursor: pointer;
    line-height: 40px;
    :hover{
        transform: scale(1.05); 
        transition-duration: 0.5s;
        background-color: grey;
    }
`

export const PopupSubmitBtn = styled.input`
    width:100px;
    height:40px;
    border-radius:15px;
    background-color: transparent;
    cursor: pointer;
    :hover{
        transform: scale(1.05);
    }
`

export const ResetBtn =styled.div`
    background-color: red;
    color:white;
    width:150px;
    height:70px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    border-radius: 20px;
    :hover{
        transform: scale(1.1);
    }
    `
    
export const ResultSelectBtn =styled.div`    
    font-size: 28px;
    display: flex;
    justify-content: center;
    margin:10px 60px;
    flex-direction: column;
    cursor: pointer;
    :hover{
        transform: scale(1.1);
    }
    div{
            background-color: #353434;
            width:100%;
            height:5px;
            margin-top: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
    }
`