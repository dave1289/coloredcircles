import React, { useState } from "react";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { v4 as uuid } from 'uuid';

const ShoppingList = () => {
   const INITIAL_STATE = [
      { id: 1, name: 'Peanut Butter', qty: 2 },
      { id: 2, name: 'Milk', qty: 1 }
   ]
   const addItem = (newItem) => {
      setItems(items => [...items, {...newItem, id: uuid()}])
   }
   const [items, setItems] = useState(INITIAL_STATE)
   return (
      <div>
         <h3 className="display-4">Shopping List</h3>
         <div>
            {items.map(({ id, name, qty }) => <Item name={name} qty={qty} key={id} />)}
         </div>
         <NewItemForm addItem={addItem} />
      </div>
   )
}

export default ShoppingList