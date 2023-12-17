//SelectMeal.js
import React, { forwardRef } from "react";

const SelectMeal = forwardRef(({ selectedMeal, handleCloseDetails }, ref) => {
  return (
    selectedMeal && (
      <div className="meal-details" ref={ref}>
        <h2>{selectedMeal.strMeal}</h2>
        <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
        <p>Category: {selectedMeal.strCategory}</p>
        <h3>Ingredients</h3>
        <div className="instructions">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
            const ingredient = selectedMeal[`strIngredient${i}`];
            const measure = selectedMeal[`strMeasure${i}`];
            return ingredient && measure ? (
              <div key={i}>{`${measure} ${ingredient}`}</div>
            ) : null;
          })}
        </div>
        <h3>Instructions</h3>
        <p>{selectedMeal.strInstructions}</p>
      </div>
    )
  );
});

export default SelectMeal;
