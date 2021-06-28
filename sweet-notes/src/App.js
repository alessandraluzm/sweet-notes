import React, { Component } from 'react'
import Notes from './components/notes'
import FormCreate from './components/form-create'

class App extends Component {
  render(){
    return (
      <>
      <FormCreate />
      
      <Notes />
      </>
    );
  }
}

export default App;
