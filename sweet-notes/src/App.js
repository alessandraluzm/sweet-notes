import React, { Component } from 'react'
import Notes from './components/notes/'
import FormCreate from './components/form-create/'
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();

    this.state = {
      notes:[]
    }
  }

  handleCreate(title, text){
    const newNote = {title, text};
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes:newNotesArray
    }
    this.setState(newState)
  }

  render(){
    return (
      <>
      <section className="wrapper" >
      <FormCreate handleCreate={this.handleCreate.bind(this)}/>
      
      <Notes notes={this.state.notes} />

      </section>
      </>
    );
  }
}

export default App;
