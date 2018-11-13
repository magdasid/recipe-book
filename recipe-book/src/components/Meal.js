import React from 'react';
import '../styles/Meal.css';
import ReactHtmlParser from 'react-html-parser';

const Meal = (props) => {
    return(
        <div className="Recipe-box">
            <h2>{props.strMeal}</h2>
            <div className="Recipe-description">
                <div>
                    <img src={props.strMealThumb} width="300" alt="meal_picture"/>
                </div>
                <div className="Recipe-info">
                    <h3>meal category: {props.strCategory}</h3>
                    <h3>origin: {props.strArea}</h3>
                </div>
            </div>
            <div className="Recipe-instructions">
                <h4>Instructions</h4>
                { ReactHtmlParser(props.strInstructions.replace(/(?:\r\n|\n)/g, '<br><br>')) }
            </div>
        </div>
    );
}

export default Meal;

