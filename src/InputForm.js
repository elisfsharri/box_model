import React from 'react';

const InputForm = () => {

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
                        required
                    />
                </label>
                <br/>
                <input type="submit" value="Add" className="w-25 pa2 ma3 br3 ba bw1" />
                <input type="button" value="Cancel" className="w-25 pa2 ma3 br3 ba bw1" />
            </form>
        </div>
    );
}

export default InputForm;