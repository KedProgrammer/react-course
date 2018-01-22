import React, { Component } from 'react';
import './App.css';
import Person from '../Components/Persons/Person/Person';
import Radium from 'radium'


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28, id: 1 },
      { name: 'Manu', age: 29,id: 2},
      { name: 'Stephanie', age: 26,id: 3 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (event , id) => {
   const personIndex = this.state.persons.findIndex(p => {
    return id === p.id
   });

   const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({persons: persons})
  }

 deletePersonHandler = (index) => {
  const persons = [...this.state.persons];
  persons.splice(index,1);
  this.setState({persons: persons})
 }
  show = () => {
    this.setState({show: !this.state.show})
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    if (this.state.show){
      persons = 
      this.state.persons.map((person,index) => {
        return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} key={index} changed={(event) => this.switchNameHandler(event, person.id)} />
      })
     
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.show}>Switch Name</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
