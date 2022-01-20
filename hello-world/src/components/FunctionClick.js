import React from 'react'

 function FunctionClick() {

    function clickHandler(){
        <h1>Button clicked</h1>
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
export default FunctionClick()
