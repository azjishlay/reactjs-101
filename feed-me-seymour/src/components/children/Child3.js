import React, { Component } from 'react';

class Child3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calories: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.feedSeymour(this.state.calories);
  }
  render() {
    return (
      <div className="Child">
        <h4>Organic tofu</h4>
        <p className="num">{this.state.calories}</p>
        <img className="Child-img"
          onClick={ (e) => this.handleClick(e) }
          src="http://afcsoyfoods.com/media/2014/02/afc-organic-tofu-firm-14oz.png"
          alt="tofu" />
      </div>
    );
  }
}

export default Child3;
