import Display from "./Components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonsContainer";
function App() {
  return(
    <center>
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div></center>

  );
};

export default App
