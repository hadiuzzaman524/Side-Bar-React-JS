import React from "react";

import classes from "./AvailableMeals.module.css";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const ctx = useContext(CartContext);

  const addItem = () => {
    console.log("Click");
    ctx.addItem({
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    });
  };

  const mealList = DUMMY_MEALS.map((meal) => (
    <section className={classes.meal}>
      <span>
        <h2>{meal.name}</h2>
        <h1>{meal.price}</h1>
      </span>
      <span>
        <p>{meal.description}</p>
        <button onClick={addItem}>Add to Cart</button>
      </span>
    </section>
  ));

  return <ul>{mealList}</ul>;
};

export default AvailableMeals;
