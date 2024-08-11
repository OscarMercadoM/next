"use client"
import { useEffect, useState } from "react";
import { TaskCard } from "./components/Taskcard";
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadTask() {
      // Obteniendo de la base de datos
      // Haciendo una petición http /api/task
      const req = await fetch("http://localhost:3000/api/task");
      const data = await req.json();
      setData(data);
    }

    loadTask();
  }, []);

  return (
    <div className="container mx-auto">
       <div className="grid grid-cols-3 mt-10 gap-3">
        {data.map((item, index) => (
          <>
            <TaskCard task={item} index={index}/>
          </>
        ))}
      </div>
    </div>
  );
}
