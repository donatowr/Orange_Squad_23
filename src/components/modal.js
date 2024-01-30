import React, { useState } from "react";
import "./style.css";
import { Button } from "@mui/material";

const ContentModal = () =>{
    const [ismodalVisible, setIsModalVisible] = useState();
    return <div className="windown_modal_addProject" id="modal">
    <div className="modal">
      <h1>Janela Modal</h1>
      <p1>
        “O único lugar que o sucesso vem antes do trabalho é no
        dicionário”</p1>
        <Button
        onClick={() => setIsModalVisible(false)}
          className="closed_modal"
          variant="contained"
          color="primary"
          size="large"          
          >
          CANCELAR
        </Button>
        {setIsModalVisible(false) ? "hidden" : null}
      
    </div>
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
