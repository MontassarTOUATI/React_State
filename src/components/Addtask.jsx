import { useState } from "react";

const Addtask = ({ setTasksArr }) => {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTasksArr((prev) => [...prev, { task, done: false, id: count }]);

        setTask("");
        setCount((prev) => prev + 1);
      }}
      className="flex"
    >
      <span></span>
      <input
        onChange={(e) => {
          setTask(e.target.value);
        }}
        type="text"
        id="add"
        placeholder="Create new todo ...."
        value={task}
      />
    </form>
  );
};

export default Addtask;
