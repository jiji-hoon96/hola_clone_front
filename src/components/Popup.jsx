import styled from "styled-components";
import { FcSurvey } from "react-icons/fc";
import { useState } from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    display: "flex",
    justifyContent:"center",
    alignsItem : "center",
    flexDirection:"column",
    textAlign:"center",
    
    },
  };

const PopUpDiv= styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100px;
    height:100px;
    border-radius: 50%;
    background-color: #acac97;
    left:20px;
    bottom: 20px;   
    cursor: pointer;
    :hover{
        transform: scale(1.1);
    }
`

const ModalTitle =styled.div`
    width:400px;
    height: 50px;
    font-size: 24px;
    color:black;
    font-weight: bold;
`

const ModalSubTitle= styled.div`
    width:400px;
    height: 50px;
    font-size: 12px;
    color: grey;
    font-weight: 300;
`

function Popup (){
    const [modalOpen,setModalOpen] = useState(false);
    const openModal = ()=>{
        setModalOpen(true);
    }
    const closeModal = ()=>{
        setModalOpen(false)
    }
    return (
        <>
        <PopUpDiv onClick={openModal}><FcSurvey style={{fontSize:"70px"}}/></PopUpDiv>
        <Modal 
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal">
             <ModalTitle>Organization에 만족하셨나요?</ModalTitle>
             <ModalSubTitle>더 좋은 서비스를 위해서 평가를 남겨주시면 감사하겠습니다!</ModalSubTitle>
        </Modal>
        </>
    )
}

export default Popup;