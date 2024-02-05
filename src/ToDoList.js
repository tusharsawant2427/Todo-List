import ToDOTask from "./ToDoTask";

const ToDoList = ({ taskList, onClickRemoveTask }) => {
  return (
    <div className="flow-root mt-5">
      <ul className="divide-x divide-gray-200">
        {taskList.map((task, i) => (
          <ToDOTask
            key={i}
            name={task.name}
            id={task.id}
            onClickRemoveTask={onClickRemoveTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
