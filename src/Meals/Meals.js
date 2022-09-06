import React from "react";
import MealSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";
import classes from './Meals.module.css';

const Meals = () => {
  return (
    <div className={classes.meals}>
      <MealSummary />
      <AvailableMeals />
    </div>
  );
};

export default Meals;
