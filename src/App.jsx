import { useState } from "react";
import ThemeSwicher from "./components/ThemeSwicher";
import Addtask from "./components/Addtask";
import TasksWrap from "./components/TasksWrap";
import Filters from "./components/Filters";

const App = () => {
  const [TasksArr, setTasksArr] = useState([]);
  const [Filter, setFilter] = useState("all");
  const [dark, setDark] = useState(false);

  console.log({ dark });

  return (
    <div className={`wrap ${dark ? "light-theme" : ""}`}>
      <div className="center">
        <ThemeSwicher dark={dark} setDark={setDark} />
        <main>
          <Addtask setTasksArr={setTasksArr} />
          <section id="tasks-management">
            <TasksWrap
              Filter={Filter}
              TasksArr={TasksArr}
              setTasksArr={setTasksArr}
            />
            <hr />
            <Filters
              setFilter={setFilter}
              TasksArr={TasksArr}
              setTasksArr={setTasksArr}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
