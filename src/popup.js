import React from "react";
import InputForm from './InputForm';



const PopUp = ({togglePop, onItemChange, onDescriptionChange, onInputSubmit, formRequest}) => {

  return (
    <div className="modal">
      <span>
        <br/>
        <InputForm 
          togglePop={togglePop}
          onItemChange={onItemChange}
          onDescriptionChange={onDescriptionChange}
          onInputSubmit={onInputSubmit}
          formRequest={formRequest}
        />
      </span>
    </div>
  );
}

export default PopUp;