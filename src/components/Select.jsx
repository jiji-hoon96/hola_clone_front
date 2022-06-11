import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useState } from "react";
import dataSkill from './data/dataSkill'
import { SelectDiv,ShowDiv,ShowItemDiv,ResultDiv,ResultSelectBtnDiv,SelectBarDiv,ShowSelectListDiv ,ShowSelectListItemDiv} from "./DivStyle/Divstyle";
import { SelectBtn ,ResetBtn,ResultSelectBtn } from "./Btnstyle/Btnstyle";
import {ResultBox} from "./Boxstyle/Boxstyle"


function Select(){
    const [currentTab, setCurrentTab] = useState(0);
    const [selectSubject , setSelectSubject] = useState(0);
    const [returnitem, setReturnItem] = useState("");
    const newArray= []
    const onResetBtn = () =>{
        setReturnItem("")
    }
    const onClickSujectPrev=()=>{
        setSelectSubject(1)
    }

    const onClickSubjectCur=()=>{
        setSelectSubject(0)
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
                <ResultSelectBtn onClick={onClickSubjectCur}>
                    프로젝트
                    {selectSubject===0 ? <div/> :null}
                </ResultSelectBtn>
                <ResultSelectBtn onClick={onClickSujectPrev}>
                    스터디 
                    {selectSubject===1 ?  <div/> :null}
                </ResultSelectBtn>
            </ResultSelectBtnDiv>
            <ResultBox>

            </ResultBox>
        </ResultDiv>
        </>
        
    )
}

export default Select