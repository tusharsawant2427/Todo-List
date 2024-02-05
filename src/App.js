import "./App.css";
import ToDo from "./ToDo.js";
import { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList") == null)
      ? []
      : JSON.parse(localStorage.getItem("taskList"))
  );
  const [dangeAlert, setDangrAlert] = useState({ state: false, message: "" });

  const setTaskValue = (value) => {
    setTaskName(value);
  };

  const addTask = () => {
    const list = [...taskList];
    showAlert(false);
    const toFindDuplicates = taskList.filter((task) => task.name == taskName);
    if (toFindDuplicates.length > 0) {
      showAlert(true, "Duplicate Task Not Allowed");
    } else if (taskName == "") {
      showAlert(true, "Task Name Required");
    } else {
      list.push({ id: Math.random(), name: taskName });
      localStorage.setItem("taskList", JSON.stringify(list));
      setTaskList(list);
    }
  };

  const showAlert = (state, message = "") => {
    setDangrAlert({ state: state, message: message });
  };
  const removeTask = (taskId) => {
    const list = taskList.filter((task) => task.id != taskId);
    localStorage.setItem("taskList", JSON.stringify(list));
    setTaskList(list);
  };

  return (
    <main className="d-flex">
      <ToDo
        taskValue={taskName}
        onChange={setTaskValue}
        taskList={taskList}
        onClickAddTask={addTask}
        onClickRemoveTask={removeTask}
        dangeAlert={dangeAlert}
      />
    </main>
  );
}

export default App;
