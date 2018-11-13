import React, { Component } from 'react';
import './App.css';
import MealList from './components/MealList';
import MealForm from './components/MealForm';
import CategoryList from './components/CategoryList';
import axios from 'axios';

class App extends Component {
  state = {
    meals: []
  }
  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => {
      const meal = res.data.meals;
      this.setState({
        meals: meal
      })
    });
  }
  addNewMeal = (mealInfo) => {
    this.setState({
      meals: mealInfo
    });
  }
  render() {
    return (
      <div className="App" >
        <section className="Search Search-box">
          <h1>Show me yummy recipes 👩‍🍳</h1>
          <CategoryList onClick={this.addNewMeal}/>
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
