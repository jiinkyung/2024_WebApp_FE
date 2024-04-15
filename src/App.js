import './App.css';
import Todo from './Todo';
import React, { useState } from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from './AddTodo';

function App() {
  const[items, setItems] = useState([]);

  const addItem = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;
    setItems([...items, item]); // items 배열에 item 원소 추가 => 리렌더링
    console.log("items: ", items);
  }

  const deleteItem = (item) => {
    // 삭제할 아이템을 찾는다.
    const newItems = items.filter(e => e.id !== item.id);

    // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
    setItems([...newItems]);
  }

  const editItem = () => {
    setItems([...items]);
  };

  // JSX 결과를 변수에 저장
  let todoItems =items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem}/>
        ))}
      </List>
    </Paper>
  );
  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className='App'>
          {todoItems}
        </div>
      </Container>
    </div>
  );
}

export default App;
