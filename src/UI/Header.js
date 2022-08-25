import React from "react";

import classes from './Header.module.css';
import mealsImage from '../Assets/meals.jpg'
const Headers = (props) => {
    return(
        <>
        <header className={classes.header}> 
        <h1>Meals Item</h1>
        <button>Cart</button>
        </header>

        <div className={classes['main-image']}>
            <img src={mealsImage} alt=" A table full of delicious food!"/>
        </div>
        </>
    );
}

export default Headers;