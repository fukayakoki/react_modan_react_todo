import React from 'react';

export const IncompleteTodos = (props) => {
    const {todos ,onClickComplete,onClickdelete} = props;
    
    return (
         <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button  onClick={() => onClickComplete(index)}>完了</button>
                <button  onClick={() => onClickdelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
        
    )
}