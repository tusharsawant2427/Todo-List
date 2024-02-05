import ToDoList from "./ToDoList";
import AlertDanger from "./components/AlertDanger";
import AlertInfo from "./components/AlertInfo";

const ToDo = ({
  taskValue,
  onChange,
  taskList,
  onClickAddTask,
  onClickRemoveTask,
  dangeAlert,
}) => {
  return (
    <>
      <div className="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow mt-10 ml-auto mr-auto">
        <form className="max-w-xl mx-auto mb-10">
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {" "}
              Your Task
            </label>
            <input
              type="text"
              id="task"
              value={taskValue}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
              placeholder="test task....."
              onChange={(e) => {
                onChange(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-nonefont-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={(e) => {
              onClickAddTask();
            }}
          >
            Add Task
          </button>

          {
            <AlertDanger
              state={dangeAlert.state}
              message={dangeAlert.message}
            />
          }
        </form>
        <span>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            TODO LIST
          </h5>
        </span>
        <div>
          {taskList.length > 0 ? (
            <ToDoList
              taskList={taskList}
              onClickRemoveTask={onClickRemoveTask}
            />
          ) : (
            <AlertInfo state={true} message="No Task Found" />
          )}
        </div>
      </div>
    </>
  );
};

export default ToDo;
