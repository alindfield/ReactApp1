import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    //static getDerivedStateFromProps(props, state) {
    //    console.log("Persons getDerivedStateFromProps");
    //    return state;
    //}

    //shouldComponentUpdate(nextProps, nextState) {
    //    console.log("Persons shouldComponentUpdate");
    //    //return (nextProps.persons !== this.props.persons);
    //    console.log(nextProps.persons);
    //    console.log(this.props.persons);
    //    console.log(nextProps.persons !== this.props.persons);
    //    return true;
    //}

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Persons getSnapshotBeforeUpdate");
    }

    componentDidUpdate() {
        console.log("Persons componentDidUpdate");
    }

    getDisplayPersons() {

        let displayPersons = null;

        /*if (this.state.showPersons) {
        persons = (
            <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler}
            />
        );
        }*/

        if (this.props.showPersons) {
            displayPersons = (this.props.persons.map((person, index) => {
                return <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    change={(event, id) => this.props.changed(event, person.id)}
                />
                })
            )
        }

        return displayPersons;
    }

    render() {
        console.log("Persons render");
        return (<div>{this.getDisplayPersons()}</div>)
        /*return (
            props.persons.map((person, index) => {
                return <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age}
                    click={() => props.clicked(index)}
                    change={(event, id) => props.changed(event, person.id)}
                />
                }
            )
        )*/
    };
}

export default Persons;