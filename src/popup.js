import React from "react";
import InputForm from './InputForm';



const PopUp = ({togglePop, onItemChange, onDescriptionChange, onInputSubmit}) => {

  return (
    <div className="modal">
      <span>
        <br/>
        <InputForm 
          togglePop={togglePop}
          onItemChange={onItemChange}
          onDescriptionChange={onDescriptionChange}
          onInputSubmit={onInputSubmit}
        />
      </span>
    </div>
  );
}

export default PopUp;