import { useLocation, useParams } from "react-router-dom"
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { ProjectUnderLine } from "../components/DivStyle/Divstyle";

const InfoDiv =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px;
    padding:50px;
`
const InfoTitleDiv =styled.div`
    display: flex;
`

const InfoSubTitleDivSeperate =styled.div`
    display: flex;
    margin:20px;
`
const InfoSubTitleDiv= styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    grid:10px;
    font-size: 24px;
`

const InfoTitle = styled.div`
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 50px;
`

const InfoTitleWrite = styled.div`
    font-size: 32px;
    text-align: center;
    margin: 0px 20px;
    color:#9c9c9e;
`

const InfoSubListTitle = styled.div`
    color: grey;
    margin: 10px;
`

const InfoSubListObject = styled.div`
    font-weight: bold;
    margin:10px;
`


export function Info(){
    const location = useLocation();
    const projectlist = location.state?.project
    const studylist = location.state?.study
    const listdata = projectlist=== undefined? studylist : projectlist
    return (
        <>
            <Navbar/>
            <InfoDiv>
                <InfoTitle>{listdata.title}</InfoTitle>
                <InfoTitleDiv>
                    <InfoTitleWrite>{`작성자 : ${listdata.write} `}</InfoTitleWrite>
                    <InfoTitleWrite>{`시작일 : ${listdata.year}`}</InfoTitleWrite>
                </InfoTitleDiv>
                <ProjectUnderLine style={{margin:"60px"}}/>
                <InfoSubTitleDiv>
                    <InfoSubTitleDivSeperate>
                        <InfoSubListTitle>모집 구문</InfoSubListTitle>
                        <InfoSubListObject>{listdata.type}</InfoSubListObject>
                    </InfoSubTitleDivSeperate>
                    <InfoSubTitleDivSeperate>
                        <InfoSubListTitle>진행 방식</InfoSubListTitle>
                        <InfoSubListObject>{listdata.tag[0].slice(1)}</InfoSubListObject>
                    </InfoSubTitleDivSeperate>
                    <InfoSubTitleDivSeperate>
                        <InfoSubListTitle>모집 인원</InfoSubListTitle>
                        <InfoSubListObject>{listdata.tag[1].slice(1)}</InfoSubListObject>
                    </InfoSubTitleDivSeperate>
                    <InfoSubTitleDivSeperate>
                        <InfoSubListTitle>시작 예정</InfoSubListTitle>
                        <InfoSubListObject>{listdata.year}</InfoSubListObject>
                    </InfoSubTitleDivSeperate>
                    <InfoSubTitleDivSeperate>
                        <InfoSubListTitle>연락 방법</InfoSubListTitle>
                        <InfoSubListObject>{listdata.contact}</InfoSubListObject>
                    </InfoSubTitleDivSeperate>
                    <InfoSubTitleDivSeperate>
                        <InfoSubListTitle>예상 기간</InfoSubListTitle>
                        <InfoSubListObject>{listdata.tag[2].slice(1)}</InfoSubListObject>
                    </InfoSubTitleDivSeperate>
                    <InfoSubTitleDivSeperate>
                        <InfoSubListTitle>사용 언어</InfoSubListTitle>
                        <InfoSubListObject>{listdata.skills.join(",")}</InfoSubListObject>
                    </InfoSubTitleDivSeperate>
                </InfoSubTitleDiv>
            </InfoDiv>
        </>
        
    )


}
