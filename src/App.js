import React from 'react'
import ButtonComponent from './components/ButtonComponent'
import CounterComponent from './components/CounterComponent'
import ApiExample from './components/ApiExample'

const App = () => {
  const handleButtonClick = () => {
   alert(
      "Button Clicked!"
   )
    console.log("Button Clicked!");
  };
  return (
    <div>
      <ButtonComponent label="CLick Me" onClickHandler={handleButtonClick }/>
      <CounterComponent/>
      <ApiExample/>
    </div>
  )
}

export default App