import React, { Component } from 'react';

class Child1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calories: 15
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.feedSeymour(this.state.calories);
  }
  render() {
    return (
      <div className="Child">
        <h4>Human flesh</h4>
        <p className="num">{this.state.calories}</p>
        <img className="Child-img"
          onClick={ (e) => this.handleClick(e) }
          src="http://www.toxel.com/wp-content/uploads/2011/10/fear08.jpg"
          alt="scared girls" />
      </div>
    );
  }
}

export default Child1;
