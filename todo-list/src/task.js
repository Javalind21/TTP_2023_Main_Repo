import React from "react";

function Task() {
  return (
    <div>
    <div className="todo list">
      <h1> Todo List </h1>
      <form>
        <h2>
        <label>
          What needs to be done today
        </label>
        </h2>
        <input 
          type="text"
          id="new-todo-item"
          name="todo-list-item"
        />
        <button type="submit">Add</button>
      </form>
    </div>
    <h2>  Tasks </h2>
   <ul className="task-list">
   </ul>
    </div>
  );
}

export default Task;