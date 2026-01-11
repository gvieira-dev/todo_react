import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul
      className="space-y-4 p-6 rounded-2xl"
      style={{ backgroundColor: "#2F3437" }} // Fundo principal Notion
    >
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center rounded-xl transition-all duration-200"
          style={{ backgroundColor: "#373C3F" }}
        >
          {/* Botão da tarefa */}
          <button
            onClick={() => onTaskClick(task.id)}
            className="flex-1 text-left px-4 py-5 rounded-lg font-medium"
            style={{
              color: task.isCompleted ? "#979A9B" : "#FFFFFF",
              backgroundColor: "#373C3F",
              textDecoration: task.isCompleted ? "line-through" : "none",
            }}
          >
            {task.title}
          </button>

          {/* Container dos botões detalhes + delete */}
          <div className="flex items-center">
            {/* Botão detalhes */}
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="p-2 rounded-lg transition-colors duration-200 relative"
              style={{
                color: "#FFFFFF",
                backgroundColor: "#373C3F",
                left: "-20px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#3F4448")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#373C3F")
              }
            >
              <ChevronRightIcon />
            </button>

            {/* Botão delete */}
            <button
              onClick={() => onDeleteTask(task.id)}
              className="p-2 rounded-lg text-white transition-colors duration-200 relative"
              style={{
                backgroundColor: "#BE524B",
                left: "-10px", 
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#A84643")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#BE524B")
              }
            >
              <Trash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
