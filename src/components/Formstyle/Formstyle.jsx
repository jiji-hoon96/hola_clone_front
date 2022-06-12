import styled from "styled-components";
export const PopupForm = styled.form`
  display: flex;
  font-weight: 100;
  justify-content: center;
  margin-top: 20px;
  height: 100%;
  align-items: center;
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginModalForm = styled.div`
width: 500px;
height: 650px;
  display: flex;
  flex-direction: column;
  color: ${(props)=>props.theme.fontColor};
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 1px solid ${(props)=>props.theme.fontColor};
  border-radius: 10px;
`;

export const LoginInputForm = styled.form`
display: flex;
font-weight: 100;
justify-content: center;
height: 400px;
color: ${(props)=>props.theme.fontColor};
align-items: center;
flex-direction: column;
input {
  font-size: 18px;
  cursor: pointer;
  width: 300px;
  height: 50px;
  margin: 10px;
  margin-bottom: 20px;
  color: ${(props)=>props.theme.fontColor};
  border-radius: 10px;
  text-align: center;
  font-weight: 100;
  :focus {
    font-weight: bolder;
    transform: scale(1.09);
  }
}
span {
  font-weight: bold;
  font-size:18px;
  color:${(props)=>props.theme.reset};
}
`;

export const WriteForm = styled.form`
  display: flex;
  margin-left: 70px;
  margin-bottom: 30px;
  font-weight: 100;
  justify-content: center;
  color: ${(props)=>props.theme.fontColor};
  align-items: center;
  flex-direction: column;
  input,select{
    font-size: 18px;
    cursor: pointer;
    width: 400px;
    color: ${(props)=>props.theme.fontColor};
    background-color:  ${(props)=>props.theme.submitBtnColor};
    border: 1px solid  ${(props)=>props.theme.fontColor};
    height: 60px;
    margin: 10px 0px 15px 0px;
    border-radius: 10px;
    text-align: center;
    font-weight: 100;
    :focus {
      font-weight: bolder;
      transform: scale(1.09);
    }
  }
  option{
    color: ${(props)=>props.theme.fontColor};
    background-color:  ${(props)=>props.theme.submitBtnColor};
  }
`;