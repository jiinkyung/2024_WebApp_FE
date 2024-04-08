import './App.css';
import Todo from './Todo';
import React, { useState } from "react";


function App() {
  const[items, setItems] = useState([
    {
      id: "0",
      title: "Hello World!",
      done: true 
    }, {
      id: "1",
      title: "Hello World!2",
      done: false 
    },{
      id: "2",
      title: "Hello World!3",
      done: false 
    }]
  );

  // JSX 결과를 변수에 저장
  let todoItems =
    items.length > 0 &&
    items.map((item) => <Todo item={item} key={item.id} />);

  return(
    <div className='App'>
     {/* <Todo item={item[0]}/>
      <Todo item={item[1]}/> */}
      {todoItems}

    </div>
  )
}

export default App;
