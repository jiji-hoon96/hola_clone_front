import Navbar from "../components/Navbar";
import styled from 'styled-components'
import { RiNumber1 ,RiNumber2 } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { type } from "@testing-library/user-event/dist/type";

const WriteDiv= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  margin: 30px;
`
const WriteTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  width:100%;
  height:100px;
  font-size: 24px;
  font-weight: 600;
  text-decoration-line: underline;
  text-decoration-style: dashed;
  text-underline-position : under;
`
const Form = styled.form`
  display: flex;
  margin-left: 70px;
  margin-bottom: 30px;
  font-weight: 100;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input,select{
    font-size: 18px;
    cursor: pointer;
    width: 400px;
    height: 60px;
    margin: 10px 0px 15px 0px;
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
const SmallTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`

function Write() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({mode:"onChange"});
  const onSubmitValid=(data)=>{
    console.log(data)
    reset()
  }
  return (
    <>
      <Navbar/>
      <WriteDiv>
        <WriteTitle>
          <RiNumber1 style={{backgroundColor:"orangered" ,borderRadius:"50%", width:"30px",height:"30px",padding:"5px", marginRight:"5px"}}/>
          프로젝트 기본 정보를 입력해주세요.
          </WriteTitle>
      </WriteDiv>
      <Form onSubmit={handleSubmit(onSubmitValid)}>
          <SmallTitle>모집 구분</SmallTitle>
          <select {...register("selecttitle")}>
            <option value="none" hidden>프로젝트/스터디</option>
            <option value="프로젝트">프로젝트</option>
            <option value="스터디">스터디</option>
          </select>
          <SmallTitle>모집 인원</SmallTitle>
          <select {...register("selectperson")}>
          <option value="none" hidden>미정 ~ 10명이상</option>
            <option value="1명">1명</option>
            <option value="2명">2명</option>
            <option value="3명">3명</option>
            <option value="4명">4명</option>
            <option value="5명">5명</option>
            <option value="6명">6명</option>
            <option value="7명">7명</option>
            <option value="8명">8명</option>
            <option value="9명">9명</option>
            <option value="10명">10명</option>
            <option value="인원미정">인원미정</option>
          </select>
          <SmallTitle>진행 방식</SmallTitle>
          <select {...register("selectonoff")}>
          <option value="none" hidden>온라인/오프라인</option>
            <option value="온라인">온라인</option>
            <option value="오프라인">오프라인</option>
          </select>
          <SmallTitle>진행 기간</SmallTitle>
          <select {...register("selectperiod")}>
          <option value="none" hidden>기간 미정 ~ 6개월 이상</option>
            <option value="기간미정">기간미정</option>
            <option value="1개월">1개월</option>
            <option value="2개월">2개월</option>
            <option value="3개월">3개월</option>
            <option value="4개월">4개월</option>
            <option value="5개월">5개월</option>
            <option value="6개월 이상">6개월 이상</option>
          </select>
          <SmallTitle>시작 예정일</SmallTitle>
          <input {...register("selectstart")} type="date"/>
          <SmallTitle>연락 방법</SmallTitle>
          <select {...register("selectContact")}>
          <option value="none" hidden>연락방법</option>
            <option value="kakaotalk">카카오톡 오픈채팅</option>
            <option value="email">Email</option>
            <option value="GoogleForm">GoogleForm</option>
          </select>
          <WriteTitle>
          <RiNumber2 style={{backgroundColor:"orangered" ,borderRadius:"50%", width:"30px",height:"30px",padding:"5px", marginRight:"5px"}}/>
          프로젝트에 대해 소개해주세요.
          </WriteTitle>
          <SmallTitle>제목</SmallTitle>
          <input {...register("selectname")} type="text" placeholder="글 제목을 입력해주세요"/>
          <SubmitBtn type="submit" value="글 등록" style={{ fontWeight: "bolder" }}/>
          </Form>
    </>
  )
}

export default Write;
