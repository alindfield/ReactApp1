import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import authorisationContext from '../context/authorisation-context';

//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("App Constructor");
  }

  /* creation lifecycle */
  
  static getDerivedStateFromProps(props, state) {
    console.log("App getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) { 
    console.log("App shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  /* update props */

  /* update state */

  state = {
    persons: [
      { id: 1, name: 'Tom', age: 99},
      { id: 2, name: 'Malcolm', age: 55},
      { id: 3, name: 'Freddie', age: 82}
    ],
    showPersons: false,
    changeCounter: 0
  }

  togglePeronsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    /* set state is not guaranteed immediate but scheduled */
    this.setState({persons: persons});
    //this.setState((prevState, props) => {
    //  persons: persons
    //  changeCounter: prevState.changeCounter + 1
    //});
  }

  render() {
       
    /*let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler}
          />
      );
    }*/
 
    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          toggle={this.togglePeronsHandler}
        />
        <Persons
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      </div>
    );

    }
}
//        {persons}
export default App;