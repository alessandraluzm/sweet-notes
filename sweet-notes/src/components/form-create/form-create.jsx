import React, { Component } from 'react'
import "./style.css"

class FormCreate extends Component{
    render(){
        return(
            <form className="form">
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="Title"/>

                <textarea
                    rows={10}
                    className="form-input" 
                    placeholder="Write your note" />
                    
                <button className="form-input form-submit">Create</button>
            </form>
        )
    }
}

export default FormCreate