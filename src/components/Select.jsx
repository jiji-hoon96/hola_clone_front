import { AnimateSharedLayout,motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from 'styled-components'

const skillArr = [
    {name: "Popular", value: ["타입스크립트","스프링"]},
    {name: "Front-End", value: ["자바스크립트","리엑트","뷰"]},
    {name: "Back-End", value: ["Spring","자바"]},
    {name: "Mobile/App", value: ["Flutter","ReactNative"]},
    {name: "Etc", value: ["AWS","Docker"]},
    {name: "Total", value: ["전부다","토탈"]},
]



const SelectDiv= styled.div`
    width:100%;
    height:300px;
`
const SelectBar = styled.div`
    display: flex;
`

const SelectBtn = styled.button`
    width: 100%;
    height:60px;
    border:none;   
    font-size: 24px;
    cursor: pointer;
    :hover{
        transform: scale(1.03);
    }
    div{
        background-color: #F9758F;
        width:100%;
        height:10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const ShowDiv = styled.div`
    width:100px;
    height:50px;
    font-size: 24px;
    color:black;
`


function Select(){
    const [currentTab, setCurrentTab] = useState(0);
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };
    return (
        <SelectDiv>
            <SelectBar>
            {skillArr.map((ele,index)=>{
                return (
                    <SelectBtn key={index} onClick={()=>selectMenuHandler(index)}>
                        {ele.name}
                        {index === currentTab && (
                            <div/>
                        )}                        
                    </SelectBtn>
                )
            })}
            </SelectBar>
            <ShowDiv>
                {skillArr[currentTab].value[0]}
                {skillArr[currentTab].value[1]}
                {skillArr[currentTab].value[2]}
            </ShowDiv>
        </SelectDiv>
        
    )
}

export default Select