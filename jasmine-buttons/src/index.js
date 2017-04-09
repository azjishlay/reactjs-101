// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// No ES6 *************
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var MyComponentClass = React.createClass({
//   name: 'Jasmine',
//   alertGreet: function() {
//     alert("Hello world!");
//   },
//   render: function() {
//     return (
//       <button onClick={this.alertGreet}>My name is {this.name}</button>
//     )
//   }
// })
//
// ReactDOM.render(
//   <MyComponentClass />,
//   document.getElementById("root")
// )

// ES6 *************
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// class MyComponentClass extends React.Component{
//   constructor(props) { 
//     super(props); 
//     this.state = {
//       name: 'Jasmine'
//     }
//   };
//   alertGreet() { 
//     alert('Hello world!'); 
//   } 
//   render() { 
//     return ( 
//       <button onClick={this.alertGreet}>My name is {this.state.name}</button> 
//     ); 
//   } 
// };
//
// ReactDOM.render(
//   <MyComponentClass />,
//   document.getElementById('root')
// );

// Parent/Child *************
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ParentComponent extends React.Component {
  constructor(props) { 
    super(props); 
    this.state = {
      name: 'Jasmine'
    }
  }
  alertGreet(name) { 
    alert('Hello ' + name); 
  } 
  render() { 
    return ( 
      <div className="main">
        <button onClick={(e) => this.alertGreet(this.state.name)}>I am {this.state.name}</button> 
        <ChildComponent alertGreet={this.alertGreet} name={this.state.name} />
      </div>

    ); 
  } 
}

class ChildComponent extends React.Component {
  constructor(props) { 
    super(props); 
    this.state = {
      name: 'Jasmine\'s Child'
    }
  }
  handleClick(name) {
    this.props.alertGreet(name + "'s Child")
  }
  render() {
    return (
      <button onClick={(e) => this.handleClick(this.props.name)}>I am  {this.state.name}</button>
    )
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.getElementById('root')
)
