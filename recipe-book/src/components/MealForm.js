import React from 'react';
import axios from 'axios';

class MealForm extends React.Component {
    state = {
        mealName: ''
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.mealName}`)
        .then(res => {
            console.log(res.data.meals);
            this.props.onSubmit(res.data.meals);
            //this.setState({ mealName: '' });
        });
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value = {this.state.mealName}
                        onChange={(event)=>this.setState({mealName: event.target.value}) }
                        placeholder="find a meal" />
                    <button type="submit">Find</button>
                </form>
            </div>
        );
    }
}

export default MealForm;

