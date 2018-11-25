import React, { Component } from 'react';
import Notelist from './Notelist';
import NoteEditor from './NoteEditor';
import NoteFilter from './NoteFilter';


const filterNotes = (filter, notes) => {
return notes.filter(note => 
  note.text.toLowerCase().includes(filter.toLowerCase()));
}
export default class App extends Component {
  state = {
    notes : [],
    filter: ''
  }
  handleAddNote = text => {
    this.setState(prevState => ({
      notes :[{id : Date.now(), text }, ...prevState.notes]
    }));   
  }
  handleDeleteNote = id => {
    this.setState(prevState =>({
      notes : prevState.notes.filter(note => note.id !== id)
    }))
  }
  handleFilterChange = evt =>{
    
    this.setState({
    filter : evt.target.value
    })
  }
  render(){
    const {notes, filter} = this.state;
    const filteredNotes = filterNotes(filter, notes);
    return (
      <div>
        <NoteEditor onSubmit = {this.handleAddNote}/>
        <NoteFilter filter = {filter} onFilterChange = {this.handleFilterChange}/>
        <Notelist notes = {filteredNotes} onDeleteNote = {this.handleDeleteNote}/>
       

      </div>
    )
  }
}
/*
export default class App extends Component {
  state = {
    : 0
  };

  handleChangeStep = () => {
    this.setState(prevState => ({
      counterStep: prevState.counterStep + 1
    }));
  };

  render() {
    const { counterStep } = this.state;

    return (
      <div>
        <StepChanger
          currentStep={counterStep}
          onUpdateStep={this.handleChangeStep}
        />
        <Counter step={counterStep} initialValue={10} />
      </div>
    );
  }
}

const tech = [
  { id: 'id-1', name: 'JS' },
  { id: 'id-2', name: 'React' },
  { id: 'id-3', name: 'React Router' },
  { id: 'id-4', name: 'Redux' }
];

const App = () => (
    <div>
        <Panel title = "Techlist">
          <TechList items = {tech}/>
          </Panel>

        <Panel title ="secton title">
        <ProductList products = {products}/>
        </Panel>
    </div>
);

export default App;
*/