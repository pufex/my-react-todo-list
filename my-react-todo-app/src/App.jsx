import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form.jsx";
import Header from "./Header.jsx";
import Filters from "./Filters.jsx";
import Todoitem from "./Todoitem.jsx";

const FILTER_MAP = {
  "All": () => true,
  "Unchecked": (task) => !task.checked,
  "Checked": (task) => task.checked,
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState(props.data);
  function addTask(name) {
    const newTask = {id: `todo-${nanoid()}`, name: name, completed: "false",}
    setTasks([...tasks, newTask]);
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);
    localStorage.setItem("notes", JSON.stringify(updatedTasks));
  }
  
  function deleteTask(id) {
    console.log("deleting...")
    const remainingTasks = tasks.filter(task => task.id !== id)
    setTasks(remainingTasks);
    localStorage.setItem("notes", JSON.stringify(remainingTasks));
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
    localStorage.setItem("notes", JSON.stringify(editedTaskList));
  }

  const filterList = FILTER_NAMES.map((name) => 
    <Filters key={name} name={name} setFilter = {setFilter}/>
  )
  
  const taskList = tasks?.filter(FILTER_MAP[filter]).map((task) => <Todoitem 
      id={task.id} 
      name={task.name} 
      checked={task.checked} 
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
      key={task.id}
    />
  );

  const taskNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${taskNoun}`;
  return (
    <>
      <Header headingName={headingText}/>
      <Form addTask={addTask}/>
      <div className="filters">
        {filterList}
      </div>
      <ul className="todos">
        {taskList}
      </ul>
    </>
  )
}

export default App
