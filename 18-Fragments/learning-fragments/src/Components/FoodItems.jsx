import { useState } from "react";
import Items from "./Items";

const FoodItems = ({items})=>{

  let [activeItems,SetActiveItems] = useState([]);

  let onBuyButton = (item, event)=> 
    {
  let newItems =[...activeItems,item];
  SetActiveItems(newItems);
}  
return(
    <ul className="list-group">
      {items.map((item) => (
        <Items
          key={item}
          bought={activeItems.includes(item)}
          healthyFood={item} handleBuyButton={(event)=>onBuyButton(item,event)}></Items>))}
</ul>

  );

}

export default FoodItems;