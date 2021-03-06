import React,{Component} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends Component() {

    static contextType = ThemeContext;
    render(){
        return (
        <div>
            <ThemeContext.Consumer>{(context)=>{
                 const {isLightTheme,light,dark} = this.context;
                 const theme = isLightTheme ? light : dark;
            <nav style={{background:theme.ui , color:theme.syntax}}>
                <h1>Context App</h1>
                    <ul>
                        <li> Home </li>
                        <li> About </li>
                        <li> Contact </li>
                    </ul>                
            </nav>
            }}</ThemeContext.Consumer>
        </div>
    )
    }
}
export default Navbar;
