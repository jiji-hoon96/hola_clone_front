import { AnimateSharedLayout,motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import dataSkill from './data/dataSkill'

const SelectDiv= styled.div`
    width:100%;
    height:100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const SelectBar = styled.div`
    display: flex;
`

const SelectBtn = styled.button`
    width: 120px;
    height:50px;
    border:none; 
    background-color: white;
    margin  : 10px 20px ;
    font-size: 18px;
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

const ShowDiv = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
    margin-bottom: 40px;
    width:1000px;
    height:100%;
    font-size: 24px;
    background-color: white;
    color:black;
`
const ShowItem= styled.li`
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
        background-color: #FD8E8B;
        color:white;
    }
`

const ShowSelectList = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 200px;
`

const ShowSelectListItem = styled.div`
    font-size: 16px;
    border: 1px solid black;
`

function Select(){
    const [currentTab, setCurrentTab] = useState(0);
    const [returnitem, setReturnItem] = useState([]);
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };
    const newList = dataSkill[currentTab].value;
    const onsubmit = (data) =>{
       setReturnItem([returnitem,...data])
    }
    return (
        <SelectDiv>
            <SelectBar>
            {dataSkill.map((ele,index)=>{
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
               {newList.map((ele,index)=>{
                   return (
                       <ShowItem key={index} onClick={()=>onsubmit(ele)}>
                           {ele}
                       </ShowItem>
                   )
               })}
            </ShowDiv>
            <ShowSelectList>
                {returnitem}
            </ShowSelectList>
        </SelectDiv>
        
    )
}

export default Select