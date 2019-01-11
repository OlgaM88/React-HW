import React, {Component} from 'react';

export default class NoteEditor extends Component {
    state = {
        text : ' '
    }
   
    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name] : value})
    }
    handleSubmit =(evt) => {
        evt.preventDefault();
         this.props.onSubmit(this.state.text);
        
    }
    render(){
        const {text} = this.state;
        return (
        <form onSubmit = {this.handleSubmit}>
            <input type = "text" value={text} name = "text" onChange = {this.handleChange}/>
            <button type = "submit"> Добавить заметку</button> 
          </form>
          )
  
}};

