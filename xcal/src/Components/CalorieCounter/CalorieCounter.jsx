import React, { useEffect, useState } from 'react';
import styles from './CalorieCounter.module.css'

function CalorieCounter(){

    const [meals, setMeals] = useState([]);
    const [newMeal, setNewMeal] = useState('');
    const [newCalories, setNewCalories] = useState('');
    const[kcalSum, setKcalSum] = useState(0);

    function handleMealInputChange(event){
        setNewMeal(event.target.value);
    }

    function handleCaloriesInputChange(event){
        setNewCalories(event.target.valueAsNumber);
    }

    function addMeal(){

        if(newMeal.trim() !== ""){

            setMeals(m => [...m,
            { name: newMeal, calories: newCalories, id: new Date().getTime() }
            ]);

            setNewMeal("");
            setNewCalories("");
        }
    }

    function deleteMeal(id){
        const updatedMeals = meals.filter((element) => element.id !== id)
        setMeals(updatedMeals);

    }

    useEffect(() => {let temp = 0; 
        
        meals.map((meal) => temp += meal.calories)

        setKcalSum(temp)}, [meals])

    return(
        <div className={styles.container}>

            <p className={styles.up}>type in your meal !</p>
            <br></br>
            <input type='text'
            className={styles.inputText}
            placeholder='Enter a meal...' 
            value={newMeal}
            onChange={handleMealInputChange}>
            </input>
            <input type='number'
            className={styles.inputText}
            placeholder='Enter calories...' 
            value={newCalories}
            onChange={handleCaloriesInputChange}
            >
            </input>
            <br/>
            <button className={styles.addButton} 
            onClick={addMeal}>add</button>

            {/* printing out array*/}
            <ol>
                {meals.map((meal, index) => 
                    <li key={index}>
                        <span className={styles.text}>{meal.name} - {meal.calories} kcal</span>
                        <button className={styles.deleteButton} onClick={() => deleteMeal(meal.id)}>delete</button>
                    </li>
                )}
            </ol>

            <span>total kcal: {kcalSum}</span>
        </div>
    );
}

export default CalorieCounter