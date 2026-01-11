import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen min-h-screen bg-zinc-900 p-6 flex justify-center items-start pt-20">
      {/* Container centralizado horizontalmente */}
      <div className="w-[500px] space-y-4">
        
        {/* Header com botão voltar */}
        <div className="flex justify-center relative mb-6">
          <button  
            onClick={() => navigate(-1)} 
            className="absolute left-0 top-0 bottom-0 text-white"
          >
            <ChevronLeftIcon/>
          </button>
          <h1 className="text-3xl text-gray-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        {/* Card da tarefa */}
        <div
          className="space-y-4 p-6 rounded-md shadow flex flex-col"
          style={{ backgroundColor: "#2F3437" }}
        >
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
