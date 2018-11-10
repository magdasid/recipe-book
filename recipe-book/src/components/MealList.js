import React from 'react';
import Meal from './Meal';

const MealList = (props) => {
    return (
        <div>
            {props.meals.map((meal) => <Meal key={meal.idMeal} {...meal}/>)}
        </div>
    );
};

export default MealList;
