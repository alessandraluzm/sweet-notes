import React, { Component } from 'react'
import "./style.css"

class FormCreate extends Component{

    constructor(props){
        super(props)
        this.title= ""
        this.text= ""
    }

    _handleChangeTitle(event){
        event.stopPropagation();
        this.title = event.target.value;
      }
    
    _handleChangeText(event){
        event.stopPropagation();
        this.text= event.target.value;
    }

    _handleCreate(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.handleCreate(this.title, this.text);
    }

    render(){
        return(
            <form className="form" onSubmit={this._handleCreate.bind(this)}>
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="Title"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                    
                <textarea
                    rows={10}
                    className="form-input" 
                    placeholder="Write your note" 
                    onChange={this._handleChangeText.bind(this)}
                />
                    
                <button className="form-input form-submit">Create</button>
            </form>
        )
    }
}

export default FormCreate