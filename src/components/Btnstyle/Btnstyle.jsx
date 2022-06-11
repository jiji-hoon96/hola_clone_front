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
const LoginShape = styled.div`
      background-position: center;
  background-repeat: none;
  background-size: cover;
  border-radius: 20px;
  background-color: white;
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
export const LoginToggleBtn = styled(BtnShape)`
    width:230px;
    height:60px;
    margin: 0px 10px;
    :hover{
        transform: scale(1.05);
    }
    div{
        height:5px;
        margin-top: 5px;
        background-color: #353434;
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

export const GoogleBtn = styled(LoginShape)`
  width: 200px;
  height: 66px;
  background-color: transparent;
  background-image: url("img/logofile/googleimage.png");
  margin: 10px 20px;
`;

export const GithubBtn = styled(LoginShape)`
  width: 80px;
  height: 80px;
  background-image: url("img/logofile/gitimage.png");
  margin: 10px 20px;
`;
export const KaKaoBtn = styled(LoginShape)`
  width: 80px;
  height: 80px;
  background-image: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fem7IrN%2Fbtq7snvbsK4%2FEKApcyLKGqBGWr8tmsbkXK%2Fimg.png");
  font-size: 16px;
  margin: 10px 20px;
`;

export const LoginSubmitBtn = styled.input`
    background-color: white;
  :hover{
    transform: scale(1.05);
    background-color: #353434;
    color:white;
  }
`