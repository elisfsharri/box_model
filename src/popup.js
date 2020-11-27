import React from "react";
import InputForm from './InputForm';



const PopUp = ({toggle}) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <div className="modal">
      <span onClick={handleClick}>
        <br/>
        <InputForm/>
      </span>
    </div>
  );
}

export default PopUp;