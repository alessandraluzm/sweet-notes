import React, { Component } from 'react'
import CardNote from './card-note'

class Notes extends Component{
    render(){
        return(
            <ul>
                <li>
                   <CardNote />
                </li>
                <li>
                    <CardNote />
                </li>
            </ul>
        )
    }
}

export default Notes