import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { useState } from "react";

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalForm = styled.div`
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

const ToggleDiv= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:100px;
`
const ToggleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  width:200px;
  height:50px;
  margin: 10px;
  cursor: pointer;
  :hover{
    transform: scale(1.1);
  }
  div{
    width:170px;
    height:10px;
    margin-top: 5px;
    background-color:#F9758F ;
  }
`

const BtnDiv = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  box-shadow: 2px 2px 2px 2px gray;
`

const GoogleBtn = styled.div`
  width: 200px;
  height: 66px;
  background-color: transparent;
  background-image: url("img/logofile/googleimage.png");
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  cursor: pointer;
  margin: 10px 20px;
  :hover {
    transform: scale(1.04);
  }
`;

const GithubBtn = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 20px;
  background-image: url("img/logofile/gitimage.png");
  background-position: center;
  background-color: white;
  background-size: cover;
  border-color:white;
  cursor: pointer;
  margin: 10px 20px;
  
  :hover {
    transform: scale(1.04);
  }
`;
const KaKaoBtn = styled.div`
  width: 140px;
  height: 140px;
  background-image: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fem7IrN%2Fbtq7snvbsK4%2FEKApcyLKGqBGWr8tmsbkXK%2Fimg.png");
  background-position: center;
  background-repeat: none;
  background-size: cover;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 20px;
  :hover {
    transform: scale(1.04);
  }
`;


const Form = styled.form`
  display: flex;
  font-weight: 100;
  justify-content: center;
  height: 500px;
  align-items: center;
  flex-direction: column;
  input {
    font-size: 18px;
    cursor: pointer;
    width: 250px;
    height: 50px;
    margin: 10px;
    border: 1px solid "#fd8f8c";
    color: "#fd8f8c";
    border-radius: 10px;
    text-align: center;
    font-weight: 100;
    color: "#fd8f8c";
    :focus {
      
      font-weight: bolder;
      transform: scale(1.09);
      
    }
  }
  span {
    color: red;
  }
`;
const SubmitBtn = styled.input`
  :hover{
    transform: scale(1.1);
    
  }
`
const LoginImg = styled.div`
  display: flex;
  justify-content: center;
  width:450px;
  height:100px;
  cursor: pointer;
  background-position: center;
  background-color: white;
  background-size: cover;
  border-color:white;
  background-image: url("img/logofile/facebook_cover_photo_1.png");
`
const LoginTitle = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
`

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({mode:"onChange"});
  const [login, setLogin] = useState("")
  const [logintoggle,setLoginToggle] =useState(false);
  const onSubmitValid=(data)=>{
    setLogin(data)
    reset()
  }
  const onToggle = (boolean) =>{
    setLoginToggle(boolean)
  }
  return (
    <>
      <Navbar/>
      <LoginTitle>Organiztion에 오신 것을 환영합니다!</LoginTitle>
        <LoginForm>
        <ModalForm>
          <ToggleDiv>
            <ToggleBtn onClick={()=>onToggle(true)}>
              소셜 계정으로 로그인하기
              {logintoggle ? <div/> : null}
            </ToggleBtn>
            <ToggleBtn onClick={()=>onToggle(false)}>
              ID/PW 으로 로그인하기
              {logintoggle ? null:  <div/> }
            </ToggleBtn>
          </ToggleDiv>
          {logintoggle ? 
          <>
            <BtnDiv style={{backgroundColor:"white"}}>
              <GoogleBtn/>
            </BtnDiv>
            <h1>Google 로그인</h1>  
            <BtnDiv style={{backgroundColor:"#1B1F23"}}>
              <GithubBtn/>
            </BtnDiv>
            <h1>Github 로그인</h1>        
            <BtnDiv  style={{backgroundColor:"#FAE300"}}>
              <KaKaoBtn/>
            </BtnDiv>
            <h1>KaKao 로그인</h1>        
          </> : 
          <>
          <Form onSubmit={handleSubmit(onSubmitValid)}>
              <input
              {...register("username", {
                 required: "아이디를 입력해주세요",
                })}
                type="text"
                placeholder="아이디를 입력해주세요"
              />
              <span>{errors.username?.message}</span>
              <input
              {...register("password", {
              required: "비밀번호를 입력해주세요",
              })}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              />
              <span>{errors.password?.message}</span>
              <SubmitBtn type="submit" value="로그인" style={{ fontWeight: "bolder" }}/>
          </Form>
          </>}
         
  
        </ModalForm>
        </LoginForm>
    </>
  )
}

export default Login;
