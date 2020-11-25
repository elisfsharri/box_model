import React from 'react';

const InputForm = () => {
    return (
    <div className="tc bg-lightest-blue w-60 center pa2 ma5 pv5 min-vh-50 ">
        <form>
            <label>
                Item
                <br />
                <input type="text" className="w-50 pa2 ma2" />
            </label>
            <br />
            <label>
                Description
                <br />
                <input type="text" className="w-50 h4 pa2 ma2" />
            </label>
            <br />
            <input type="submit" value="Submit" className="w-50 pa2 ma3" />
        </form>
    </div>
    );
}

export default InputForm;