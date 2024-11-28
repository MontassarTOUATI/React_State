const SingleTask = ({ data, setTasksArr, TasksArr, index }) => {
  const { task, done, id } = data;
  const edit = () => {
    const tasksCopy = [...TasksArr];
    tasksCopy[index].done = !tasksCopy[index].done;
    setTasksArr(tasksCopy);
  };
  const supp = () => {
    const tasksCopy = TasksArr.filter((task) => task.id !== id);
    setTasksArr(tasksCopy);
  };
  return (
    <div className="single-task flex between">
      <div className="flex">
        <form className="checked">
          <input
            onChange={edit}
            type="checkbox"
            checked={done}
            className="state"
          />
        </form>
        <p className={done ? "lined" : ""}>{task}</p>
      </div>
      <button onClick={supp} className="delete">
        <img src="./images/icon-cross.svg" alt="icon-cross" />
      </button>
    </div>
  );
};

export default SingleTask;
