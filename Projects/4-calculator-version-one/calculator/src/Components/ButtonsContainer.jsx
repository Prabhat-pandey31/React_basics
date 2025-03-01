import styles from "./ButtonsContainer.module.css";

const ButtonContainer = () =>{

  const buttonNames =['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

  return(
    <>
    <div className={styles.buttonContainer}></div>
    {buttonNames.map(buttonName=><button className={styles.button}> {buttonName}</button>)}
      </>
  )

};
export default ButtonContainer;