import React from 'react';
import axios from 'axios';

class CategoryList extends React.Component {
    state = {
        categories: []
    }
    handleClick = (category, event) => {
        event.preventDefault();
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => {
            this.props.onClick(res.data.meals);
        });
    }
    componentDidMount() {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then(res => {
            const categoriesList = res.data.meals;
            console.log(categoriesList);
            this.setState({
                categories: categoriesList
            })
        });
    }
    render() {
        return (
            <div>{this.state.categories.map(category => <button onClick={(event) => this.handleClick(category.strCategory, event)} key={category.strCategory}>{category.strCategory}</button>)}</div>
        );
    }
}

export default CategoryList;