import React, {Component} from 'react'

export default class Welcome extends Component{
    render(){
        const{name,heroname} = this.props
        
    return <h1>Welcome {name} has friend{heroname}</h1>
    }
}