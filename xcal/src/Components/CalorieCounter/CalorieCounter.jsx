import React, { useState } from 'react';
import styles from './CalorieCounter.module.css'

function CalorieCounter(){

    const [meals, setMeals] = useState(["apple", "banana", "orange"]);
    const [newMeal, setNewMeal] = useState([]);

    function handleInputChange(event){
        setNewMeal(event.target.value);
    }

    function addMeal(){

        if(newMeal.trim() !== ""){

            setMeals(m => [...m,  newMeal]);
            setNewMeal("");

        }
    }

    function deleteMeal(index){

        const updatedMeals = meals.filter((element, i) => i !== index)
        setMeals(updatedMeals);
    }



    return(
        <div className={styles.container}>

            <p className={styles.up}>type in your meal !</p>
            <br></br>
            <input type='text'
            className={styles.inputText}
            placeholder='Enter a meal...' 
            value={newMeal}
            onChange={handleInputChange}>
            </input>
            <input type='number'
            className={styles.inputText}
            placeholder='Enter calories...' 
            >
            </input>
            <br/>
            <button className={styles.addButton} 
            onClick={addMeal}>add</button>

            {/* printing out array*/}
            <ol>
                {meals.map((meal, index) => 
                    <li key={index}>
                        <span className={styles.text}>{meal}</span>
                        <button className={styles.deleteButton} onClick={() => deleteMeal(index)}>delete</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default CalorieCounter