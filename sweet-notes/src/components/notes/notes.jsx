import React, { Component } from 'react'
import CardNote from '../card-note'
import "./style.css"

class Notes extends Component{
    render(){
        return(
            <ul className="list-notes">
                {this.props.notes.map((note, index) => {
                    return(
                        <li className="list-notes-item" key={index}>
                            <CardNote title={note.title} text={note.text} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Notes