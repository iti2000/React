import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFeching() {

        const[post,setPost] = useState({})
        const[id,setId] = useState(1)
        const[botton,setButton] =useState(1)

        const buttonClicked=()=>{
            setButton(id)
        }

        useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/posts/${botton}`)
            .then(res=>{
                    setPost(res.data)
            })
            .catch(err =>{

            })
        },[botton])


    return (
        <div>
            <input type="text"value={id} onChange={e=>setId(e.target.value)}/>
            <button type="button"onClick={buttonClicked}>Fetched Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post=><li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFeching
