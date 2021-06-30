import React, { Component } from 'react'
import Notes from './components/notes/'
import FormCreate from './components/form-create/'
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  render(){
    return (
      <>
      <section className="wrapper" >
      <FormCreate />
      
      <Notes />
      </section>
      </>
    );
  }
}

export default App;
