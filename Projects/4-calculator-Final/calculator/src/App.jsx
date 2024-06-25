import Display from "./Components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonsContainer";
import React, { useState } from "react";
function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };



  return(
    <center>
    <div className={styles.calculator}>
      <Display dispVal={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div></center>

  );
};

export default App
