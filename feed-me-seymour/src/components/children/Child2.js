import React, { Component } from 'react';

class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calories: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.feedSeymour(this.state.calories);
  }
  render() {
    return (
      <div className="Child">
        <h4>Frog livers</h4>
        <p className="num">{this.state.calories}</p>
        <img className="Child-img"
          onClick={ (e) => this.handleClick(e) }
          src="http://www.cellphonetaskforce.org/wp-content/uploads/2012/01/frog-left.jpg"
          alt="frog" />
      </div>
    );
  }
}

export default Child2;
