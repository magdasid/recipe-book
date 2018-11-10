import React from 'react';

const Meal = (props) => {
    return(
        <div>
            <h2>{props.strMeal}</h2>
            <img src={props.strMealThumb} width="300" alt="meal_picture"/>
            <p>{props.strInstructions}</p>
        </div>
    );
}

export default Meal;

