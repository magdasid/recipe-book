import React, { Component } from 'react';
import './App.css';
import MealList from './components/MealList';
import MealForm from './components/MealForm';


class App extends Component {
  state = {
    meals: []
  }
  addNewMeal = (mealInfo) => {
    console.log("meal info" +mealInfo);
    this.setState({
      meals: mealInfo
    });
    //console.log(this.state.meals);
  }
  render() {
    return (
      <div className="App">
        <h1>Find a receipe</h1>
        <MealForm onSubmit={this.addNewMeal}/>
        <MealList meals={this.state.meals}/>
      </div>
    );
  }
}


export default App;
