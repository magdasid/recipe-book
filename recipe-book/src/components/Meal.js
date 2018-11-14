import React from 'react';
import '../styles/Meal.css';
import ReactHtmlParser from 'react-html-parser';

const Meal = (props) => {
    return(
        <div className="Recipe-box Search Search-results">
            <h2>{props.strMeal || props.info}</h2>
            <div className="Recipe-description">
                <div>
                    { props.strMealThumb != null ?<img src={props.strMealThumb} width="300" alt="meal_picture"/>: ''}
                </div>
                <div className="Recipe-info">
                    { props.strCategory != null ?<h3>Category: {props.strCategory}</h3>: ''}
                    { props.strArea != null ?<h3>Origin: {props.strArea}</h3>: ''}
                </div>
            </div>
            <div className="Recipe-instructions">
                { props.strInstructions != null ? <h4>Instructions</h4>: ''}
                { props.strInstructions != null ? ReactHtmlParser(props.strInstructions.replace(/(?:\r\n|\n)/g, '<br><br>')): '' }
            </div>
        </div>
    );
}

export default Meal;

