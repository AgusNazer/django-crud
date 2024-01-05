import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "../components/TaskCard";

export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadList() {
      const res = await getAllTasks();
      console.log(res);
      setTasks(res.data);
    }
    loadList();
  }, []);
  return (
    <div className="lg:grid lg:grid-cols-3 grid-cols-1 gap-3 p-3 ">
      {tasks.map((task) => (
        <div  key={task.id}>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}
