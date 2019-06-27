import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    //useEffect(() => {
    //    console.log("Cockpit useEffect");
    //    return () => {}
    //});

    let buttonClass = '';

    let applyclasses = [];

    if(props.showPersons) {
        buttonClass = classes.Red;
    }

    if(props.personsLength <= 2) {
      applyclasses.push(classes.red);
    }

    if(props.personsLength <= 1) {
      applyclasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm Jeff</h1>
            <p className={applyclasses.join(' ')}>This is really working!</p>
            <button 
                className={buttonClass}
                onClick={props.toggle}>
                Switch Name
            </button>
        </div>
    );
}

/* React.memo - keeps snapshot based on props */

export default React.memo(cockpit);