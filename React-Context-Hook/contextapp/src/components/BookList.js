import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

 class BookList extends Component {
    render() {
        const {isLightTheme,light,dark} = this.context
            const theme = isLightTheme ? light : dark
        return (
             <div className='book-list'>
                <ul>
                    <li>the way is the king</li>
                    <li>hellooo</li>
                    <li>final part</li>
                </ul>
            </div>
        )
    }
}
export default BookList;
