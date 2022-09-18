import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "bbbb"]);

  const [completeTodos, setcompleteTodos] = useState(["ccc", "ddd"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="入力" />
        <button>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のtood</p>
        <ul>
          <div className="list-row">
            <li>タスク</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
