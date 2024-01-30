import React, { useState } from "react";
import "./style.css";
import { Button } from "@mui/material";

const ContentModal = () =>{
 return <div>
  <p>Olá</p>
 </div>   
 
}


function Modal() {
  const [ismodalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="modal">
     <Button className="add_Project" onClick={( ) => setIsModalVisible(true)} variant="contained" color="primary" size="large">ADICIONAR PROJETO</Button>
      {ismodalVisible ? <ContentModal /> : null}
    </div>
  );
}

export default Modal;
