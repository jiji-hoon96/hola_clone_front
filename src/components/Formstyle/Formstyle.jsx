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
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const LoginInputForm = styled.form`
display: flex;
font-weight: 100;
justify-content: center;
height: 400px;
align-items: center;
flex-direction: column;
input {
  font-size: 18px;
  cursor: pointer;
  width: 300px;
  height: 50px;
  margin: 10px;
  margin-bottom: 20px;
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
  color: red;
}
`;
