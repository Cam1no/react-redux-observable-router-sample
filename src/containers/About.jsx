import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render(){
    return(
      <div>
        <Link to='/'>TOPに戻る</Link>
        <h1>
          HelloWorld!!!!!
        </h1>
      </div>
    );
  }
}


export default About;
