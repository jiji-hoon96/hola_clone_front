import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useState } from "react";
import styled from 'styled-components'
import dataSkill from './data/dataSkill'
import { FaFolderOpen,FaBookOpen } from "react-icons/fa";
import { SelectDiv,ShowDiv,ShowItemDiv,ResultDiv,ResultSelectBtnDiv,SelectBarDiv,ShowSelectListDiv ,ShowSelectListItemDiv} from "./DivStyle/Divstyle";
import { SelectBtn ,ResetBtn,ResultSelectBtn } from "./Btnstyle/Btnstyle";
import {ResultBox} from "./Boxstyle/Boxstyle"


function Select(){
    const [currentTab, setCurrentTab] = useState(0);
    const [selectSubject , setSelectSubject] = useState(false);
    const [returnitem, setReturnItem] = useState("");
    const newArray= []
    const onResetBtn = () =>{
        setReturnItem("")
    }
    const onClickSubject= ()=>{
        setSelectSubject((prev)=>!prev)
    }
    localStorage.setItem("skill",returnitem);
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };
    const newList = dataSkill[currentTab].value;
    const onClick = (data) =>{
       setReturnItem([...returnitem,data])
       const deduplication = returnitem.includes(data);
       if(deduplication){
           setReturnItem([...returnitem])
       }
    }
    const onDelete = (x)=>{
        const deleteItem = returnitem.indexOf(x);
        const cutone =returnitem.slice(0,deleteItem);
        const cuttwo =returnitem.slice(deleteItem+1,returnitem.length)
        newArray.push(...cutone)
        newArray.push(...cuttwo)
        setReturnItem(newArray)
    }
    return (
        <>
        <SelectDiv>
            <SelectBarDiv>
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
            </SelectBarDiv>
            <ShowDiv>
               {newList.map((ele,index)=>{
                   return (
                       <ShowItemDiv  key={index} onClick={()=>onClick(ele)} >
                           {ele}
                       </ShowItemDiv>
                   )
               })}
            </ShowDiv>
            {returnitem === "" ? null  : (
                <>
                    <ShowSelectListDiv>
                        {returnitem === "" ? null : 
                            returnitem.map((x)=> <ShowSelectListItemDiv key={Math.random()} onClick={()=>onDelete(x)}>{x}<FontAwesomeIcon icon={faX} style={{marginLeft:10}}/></ShowSelectListItemDiv>)}
                    </ShowSelectListDiv>
                    <ResetBtn onClick={onResetBtn}>
                        Reset
                    </ResetBtn>
                </>
            )}
        </SelectDiv>
        <ResultDiv>
            <ResultSelectBtnDiv>
                <ResultSelectBtn onClick={onClickSubject}>
                    프로젝트
                    {selectSubject ? <div/> :null}
                </ResultSelectBtn>
                <ResultSelectBtn onClick={onClickSubject}>
                    스터디 
                    {selectSubject ?  null:<div/>}
                </ResultSelectBtn>
            </ResultSelectBtnDiv>
            <ResultBox>

            </ResultBox>
        </ResultDiv>
        </>
        
    )
}

export default Select