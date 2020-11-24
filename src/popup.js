import React from'react';

const Popup = () => {
    return (
        <div className='tc bg-lightest-blue w-60 center pa2 ma5 pv5'>
            <form>
                <label>
                    <input type="text" value='item' className='w-50 pa2 ma2'/>
                </label>
                <br/>
                <label>
                    <input type="text" value='description' className='w-50 h4 pa2 ma2' />
                </label>
                <br/>
                <input type="submit" value="Submit" className='w-50 pa2 ma3'/>
            </form>
        </div>
    )
}

export default Popup;