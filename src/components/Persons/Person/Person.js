import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

//<div className={classes.Person}>

/* <Aux> or <React.Fragment> */

class Person extends Component {
    constructor() {
        super();
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    render() {
        return <Aux>
            <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p key="i2">{this.props.children}</p>
            <input ref={this.inputElementRef} key="i3" type="text" onChange={this.props.change} value={this.props.name}></input>
        </Aux>
    }
}

export default withClass(Person, classes.Person);