import React,{useState} from 'react'

export default function HookCounterTwo() {

    const initialCount =0
    const [count,setCount] = useState(0)

    const incrementFive = ()=>{
        for(let i = 0; i< 5; i++){
            setCount(x => x+1)
        }
    }

    return (
        <div>
        Count : {count}
        <button onClick={()=> setCount(initialCount)}>Reset</button>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment5</button>
        </div>
    )
}
