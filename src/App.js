import React from 'react'
// import NumberGame from './NumberGame';
// import NumbersList from './NumbersList';
// import Toggler from './Toggler.js'
// import Circle from './ColoredCircles/Circles';
// import ColorCircle from './ColoredCircles/ColoredCircles';
// import Dice from './DieGame/Dice';
import ShoppingList from './ShoppingList/ShoppingList';
import "./App.css"
import UserForm from './Forms/UserForm';
import SimpleForm from './SimpleForm/SimpleForm';

function App() {
  return (
    <div className="App">
      <ShoppingList />
      <UserForm />
      <SimpleForm />
    </div>
  );
}

export default App;
