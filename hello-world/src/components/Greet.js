import React from 'react'

// export default function Greet() {
//     return (
//         <h1>Hello Iti</h1>
//     )
// }

const Greet = ({name,heroname}) => {
    
    return (
    <div>
        <h1>Hello {name} has friend {heroname}</h1>
    
    </div>)
}

export default Greet