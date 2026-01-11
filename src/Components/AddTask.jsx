import { useState } from "react";
import Input from "./Input";



function AddTasks({onAddTaskSubmit}){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    
    return(
    <div className="space-y-4 p-6 rounded-md shadow flex flex-col"
    style={{ backgroundColor: '#2F3437' }}
    >

        <Input 
        type="text" 
        placeholder="Digite o titulo da tarefa" 
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />

        <Input 
        type="text" 
        placeholder="Digite a descrição da tarefa" 
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        />

        <button onClick={() => {
            if(!title.trim() || !   description.trim()){
                return alert("Preencha os campos")
            }
            onAddTaskSubmit(title, description)
            setTitle("")
            setDescription("")
        }}
            className="bg-[#1A73E8] text-white px-4 py-2 rounded-md font-medium"
            style={{
            transition: 'background-color 0.2s',
            }}

            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1669C1'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1A73E8'}
            >
                
            Adicionar 
        </button>
    </div>
    )
}

export default AddTasks;