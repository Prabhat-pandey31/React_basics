import styles from "./Items.module.css";  // Import the CSS module

const Items = ({ healthyFood,bought, handleBuyButton}) => {

  const handleOnClickEvent =(event)=>{
    console.log(event);
    console.log(`${healthyFood} Item being bought`)
  }
  return (
    <li className={`list-group-item pp-items ${bought && 'active'}`}>
      <span className="pp-span">{healthyFood}</span>
      <button className={`${styles.button} btn btn-info`}
     onClick={handleBuyButton}
    // onClick={()=>alert("Buy button Clicked")}


      >Buy</button> {/* Use styles.button */}
    </li>
  );
}

export default Items;
