import React from 'react';
import axios from 'axios';

class CategoryList extends React.Component {
    state = {
        categories: []
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
            <ul>{this.state.categories.map(category => <li key={category.strCategory}>{category.strCategory}</li>)}</ul> 
        );
    }
}

export default CategoryList;