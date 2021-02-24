import React, { Component } from 'react';

import Aux from '../../../hoc/Auxalilry';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../authcontext/AuthContext'

class Person extends Component {
constructor(props){
  super(props);
  this.inputElementRef = React.createRef();
}
static contextType = AuthContext ;
componentDidMount(){
  this.inputElementRef.current.focus();
}

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        
        {
         this.context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>
        }
      
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          ref = {this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}


export default withClass(Person, classes.Person);
