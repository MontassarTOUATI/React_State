import React from "react";

const Filters = ({ setFilter, TasksArr, setTasksArr }) => {
  return (
    <div className="filters flex between">
      <span className="items-left">
        {TasksArr.filter((v) => !v.done).length}
      </span>

      <div className="filter-btn">
        <button
          onClick={() => {
            setFilter("all");
          }}
          className="all"
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("active");
          }}
          className="active"
        >
          Active
        </button>
        <button
          onClick={() => {
            setFilter("completed");
          }}
          className="completed"
        >
          Completed
        </button>
      </div>

      <button
        className="clear-completed"
        onClick={() => {
          setTasksArr([...TasksArr].filter((v) => !v.done));
        }}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Filters;
