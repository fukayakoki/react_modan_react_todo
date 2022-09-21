import React, { useState } from "react";
import "./styles.css";
import {InputTodo} from './components/InputTodo';
import {IncompleteTodos} from './components/IncompleteTodos';

export const App = () => {
    
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "bbbb"]);

  const [completeTodos, setcompleteTodos] = useState(["ccc", "ddd"]);
  
  const onChangeTodoText = (event) => {
      setTodoText(event.target.value);
  };
  
  const onClickdelete = (index) => {
      const newTodos = [...incompleteTodos];
      newTodos.splice(index,1);
      setIncompleteTodos(newTodos);
  }
  
  const onClickAdd = () => {
      if (todoText === "") return;
      const newTodos = [...incompleteTodos,todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
  };
  
  const onClickComplete = (index) => {
      const newIncompleteTodos = [...incompleteTodos];
      newIncompleteTodos.splice(index,1);
      //setIncompleteTodos(newIncompleteTodos);
      
      const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
      setIncompleteTodos(newIncompleteTodos);
      setcompleteTodos(newCompleteTodos);
  }
  
  const onClickBack = (index) => {
      const newCompleteTodos = [...completeTodos];
      newCompleteTodos.splice(index,1);
      
      const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
      setcompleteTodos(newCompleteTodos);
      setIncompleteTodos(newIncompleteTodos);
  }
  
  

  return (
    <>
      <InputTodo todoText={todoText} 
      onChange={onChangeTodoText} onClick={onClickAdd}
      disabled={incompleteTodos.length > 4}/>
      
      {incompleteTodos.length >= 5 && <p>上限です</p>}
      
      <IncompleteTodos todos={incompleteTodos} 
      onClickComplete={onClickComplete}
      onClickdelete={onClickdelete}
       />
      <div className="complete-area">
        <p className="title">完了のtood</p>
        <ul>
          {completeTodos.map((todo, index) => {
              return (
                  <div className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickBack(index)}>戻す</button>
            </div>                
            );      
          })}
        </ul>
      </div>
    </>
  );
};
