import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleinput(event) {
    setNewTask(event.target.value);
  }

  function handlebutton() {
    const list = {
      id: todoList.length,
      item: newTask,
      complete: false,
    };
    setTodoList([...todoList, list]);
  }

  function handlebuttondelete(id) {
    const arr = todoList.filter(function (ele) {
      if (id === ele.id) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(arr);
  }

  function handlecomplete(id) {
    const upd = todoList.map(function (ele) {
      if (id === ele.id) {
        return { ...ele, completed: !ele.completed };
      }
      return ele;
    });
    setTodoList(upd);
  }

  return (
    <div className="App">
      <div>
        <input type="text" className="input" onChange={handleinput} />
        <button className="button" onClick={handlebutton}>
          Add the tasks
        </button>
      </div>
      <div className="box">
        {todoList.map(function (element) {
          return (
            <List
              id={element.id}
              complete={element.complete}
              item={element.item}
              handlecomplete={handlecomplete}
              handlebuttondelete={handlebuttondelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
