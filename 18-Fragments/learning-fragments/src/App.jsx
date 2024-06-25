import React, { useState } from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
function App() {

    // let healthyFood =["SAbzi","Greenvegetable","Roti","Salad","Milk"];

    let [healthyFood,setFoodItems]=useState([]);
   // console.log(`${textToShow}`);


    const onKeyDown =(event)=>{

      if(event.key==='Enter'){
        let newFoodItem = event.target.value;
        let newItems =[...healthyFood,newFoodItem];
        setFoodItems(newItems);
        console.log('Food value entered is ' + newFoodItem);
      }
    };
   

  // if(healthyFood.length===0){
  //   return <h3>I am still hungry</h3>
  // }
  return (
    <>
    <Container>
     <h1 className="pp-heading">Healthy Foods </h1>
     
      
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={healthyFood}></ErrorMessage>
      {/* //<p>{textToShow}</p> */}
      <FoodItems items={healthyFood}></FoodItems>
      </Container>

      {/* <Container>
            <p>
              Above is the list of healthy foods that are good for your health and well being.
            </p>
      </Container> */}
      </>
  );
  
}

export default App;
