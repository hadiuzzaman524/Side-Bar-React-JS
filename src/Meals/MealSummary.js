import React from "react";
import classes from './MealSummary.module.css';

const MealSummary= ()=>{
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Deliver to You</h2>
            <p>
                Choose your favorite meal from our brand selection of available meals and enjoy
                delicious lunch for dinner at home. 
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and of curse by
                experienced chefs!
            </p>
        </section>
        
    );
}

export default MealSummary;