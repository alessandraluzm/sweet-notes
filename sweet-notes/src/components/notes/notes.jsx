import React, { Component } from 'react'
import CardNote from '../card-note/card-note'
import "./style.css"

class Notes extends Component{
    render(){
        return(
            <ul className="list-notes">
                {Array.of("Trabalho","Estudo","Outro").map((category, index) => {
                    return(
                        <li className="list-notes-item" key={index}>
                            <CardNote />
                        </li>
                    )
                })}
                
            </ul>
        )
    }
}

export default Notes