import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useState } from "react";
import { LoginForm,LoginModalForm } from "../components/Formstyle/Formstyle";
import { LoginToggleBtn,GoogleBtn,GithubBtn,KaKaoBtn,LoginSubmitBtn } from "../components/Btnstyle/Btnstyle";
import {LoginToggleDiv,LoginBtnDiv} from '../components/DivStyle/Divstyle'
import { SmallLoginTitle,SmallTitle,LoginTitle } from "../components/Titlestyle/Titlestyle";
import {LoginInputForm} from '../components/Formstyle/Formstyle'

const LoginLogo =styled.div`
    margin: 30px 0px 10px 0px;
    text-align: center;
    font-size: 55px;
    height:70px;
    font-weight: 600;
`

const SeperateDiv = styled.div`
  display: flex;
  width:100%;
  margin-bottom:10px;
  justify-content: space-evenly;
`
const SeperateDivTitle= styled.div`
  margin:auto;
  margin-bottom: 20px;
  color:${(props)=>props.theme.loginColor};
`

const InputTitle= styled.p`
  margin:10px 0px;
  color:${(props)=>props.theme.loginColor};
`

const Inputs = styled.input`
    font-size: 18px;
  cursor: pointer;
  height: 50px;
  border:none;
  border-bottom: 1px solid ${(props)=>props.theme.loginColor};
  margin: 10px;
  color: ${(props)=>props.theme.fontColor};
  text-align: center;
  font-weight: 100;
  :focus {
    border:none;
    border-bottom: 2px solid ${(props)=>props.theme.loginColor};
  }
`

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({mode:"onChange"});
  const [login, setLogin] = useState("")
  const onSubmitValid=(data)=>{
    setLogin(data)
    reset()
  }
  return (
    <>
      <Navbar/>
        <LoginForm>
        <LoginModalForm>
          <LoginLogo>Login</LoginLogo> 
          <LoginInputForm onSubmit={handleSubmit(onSubmitValid)}>
              <InputTitle>Username</InputTitle>
              <Inputs
              {...register("username", {
                 required: "Usename 을 반드시 입력해주세요",
                })}
                type="text"
                placeholder="Type your Username"
              />
              <span>{errors.username?.message}</span>
              <InputTitle>Password</InputTitle>
              <Inputs
              {...register("password", {
              required: "Password 를 반드시 입력해주세요",
              })}
              type="password"
              placeholder="Type your Password"
              />
              <span>{errors.password?.message}</span>
              <LoginSubmitBtn type="submit" value="로그인" style={{ fontWeight: "bolder" }}/>   
          </LoginInputForm>
              <SeperateDivTitle>Or Sign Up Using Platform</SeperateDivTitle>
              <SeperateDiv>
                <LoginBtnDiv style={{backgroundColor:"white"}}>
                  <GoogleBtn/>
                </LoginBtnDiv>
                <LoginBtnDiv style={{backgroundColor:"#1B1F23"}}>
                  <GithubBtn/>
                </LoginBtnDiv>
                <LoginBtnDiv  style={{backgroundColor:"#FAE300"}}>
                  <KaKaoBtn/>
                </LoginBtnDiv>
              </SeperateDiv>
             
        </LoginModalForm>
        </LoginForm>
    </>
  )
}

export default Login;
