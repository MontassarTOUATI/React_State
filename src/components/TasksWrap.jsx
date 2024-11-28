import React from "react";
import SingleTask from "./SingleTask";

const TasksWrap = ({ Filter, TasksArr, setTasksArr }) => {
  const toDisplay = () => {
    switch (Filter) {
      case "active":
        return TasksArr.filter((v) => !v.done);
      case "completed":
        return TasksArr.filter((v) => v.done);
      default:
        return TasksArr;
    }
  };
  return (
    <div id="tasks-wrap">
      {toDisplay().map((v, i) => (
        <SingleTask
          key={v.id}
          data={v}
          index={i}
          setTasksArr={setTasksArr}
          TasksArr={TasksArr}
        />
      ))}
    </div>
  );
};

export default TasksWrap;
