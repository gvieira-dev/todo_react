import { useEffect, useState } from "react";
import AddTasks from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("alteração");
  }, [tasks]);

  // API (mantida apenas como exemplo técnico)
  useEffect(() => {
    async function fetchTasksFromApi() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );

        const data = await response.json();

        const formattedTasks = data.map((task) => ({
          id: task.id,
          title: task.title,
          description: "Tarefa vinda da API",
          isCompleted: task.completed,
        }));

        setTasks(formattedTasks);
      } catch (error) {
        console.error("Erro ao buscar tarefas da API:", error);
      }
    }

    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    }

    // fetchTasksFromApi(); // desativado intencionalmente
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen min-h-screen bg-zinc-900 flex justify-center p-6">
      <div className="w-[500px] space-y-8">
        <h1 className="text-3xl text-gray-100 font-bold text-center mb-6">
          Minhas Tarefas
        </h1>

        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
