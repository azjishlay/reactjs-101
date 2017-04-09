import React, { Component } from 'react';
import Child1 from './children/Child1';
import Child2 from './children/Child2';
import Child3 from './children/Child3';

class Seymour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calories: 0,
      maxCalories: 200
    };
    this.feedMeSeymour = this.feedMeSeymour.bind(this);
  }
  feedMeSeymour(food) {
    // this.setState({
    //   calories: this.state.calories + food
    // })

    var totalCalories = this.state.calories + food;

    if (totalCalories >= this.state.maxCalories) {
      alert("Great, Seymour is full!");
      this.setState({
        calories: 0
      })
    } else {
      this.setState({
        calories: totalCalories
      })
    }
  }
  render() {
    return (
      <div className="Seymour">
        <img
          className="Seymour-img"
          src="https://media.giphy.com/media/pBj0EoGSYjGms/giphy.gif"
          alt="Seymour" />
        <h1>Calorie intake: {this.state.calories}</h1>
        <div className="Menu">
          <Child1 feedSeymour={this.feedMeSeymour} />
          <Child2 feedSeymour={this.feedMeSeymour} />
          <Child3 feedSeymour={this.feedMeSeymour} />
        </div>
      </div>
    );
  }
}

export default Seymour;
