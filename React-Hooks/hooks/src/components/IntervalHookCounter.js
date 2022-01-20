import React,{useState,useEffect} from 'react'

export default function IntervalHookCounter() {

    const [count,setCount] = useState(0)

    const tick = () =>
    {
        setCount(count +1)
    }

    useEffect(() => {
        const Interval = setInterval(tick,1000)
        return () => {
            clearInterval(Interval)
        }
    },[])
    return (
        <div>
           {count} 
        </div>
    )
}
