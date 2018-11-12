import React, { Component } from 'react';
import './App.css';
import MealList from './components/MealList';
import MealForm from './components/MealForm';
import axios from 'axios';

class App extends Component {
  state = {
    meals: []
  }
  addNewMeal = (mealInfo) => {
    console.log("meal info" + mealInfo);
    this.setState({
      meals: mealInfo
    });
  }
  render() {
    return (
      <div className="App" >
        <section className="Search Search-box">
          <h1>Show me yummy recipes 👩‍🍳</h1>
          <MealForm onSubmit={this.addNewMeal}/>
        </section>
        <section className="Search Search-results">
          <MealList meals={this.state.meals}/>
        </section>
      </div>
    );
  }
}


export default App;
