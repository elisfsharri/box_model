import React from 'react';

const InputForm = ({togglePop, onItemChange, onDescriptionChange, onInputSubmit}) => {

  return (
    <div className="tc bg-lightest-blue-70 w-60 center pa2 ma5 pv5 br4 shadow-1">
      <form>
        <label>
          Item
          <br/>
          <input
            name="item"
            type="text"
            className="w-60 pa2 ma2 br3 ba bw1"
            onChange={onItemChange}
            required
          />
        </label>
        <br/>
        <label>
          Description
          <br/>
          <textarea
            name="description"
            className="w-60 h4 pa2 ma2 br3 ba bw1"
            onChange={onDescriptionChange}
            required
          />
        </label>
        <br/>
        <input
          type="button" 
          value="Add" 
          className="w-25 pa2 ma3 br3 ba bw1" 
          onClick={onInputSubmit}
        />
        <input 
          type="button" 
          value="Cancel" 
          className="w-25 pa2 ma3 br3 ba bw1" 
          onClick={togglePop} 
        />
        </form>
    </div>
  );
}

export default InputForm;