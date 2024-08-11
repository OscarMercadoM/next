"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  useEffect(() => {
    fetch(`/api/task/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
  }, []);
  const HandleSumit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const res = await fetch("http://localhost:3000/api/task/" + params.id, {
        method: "Put",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    } else {
      const res = await fetch("http://localhost:3000/api/task", {
        method: "Post",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    }
    router.refresh();
    router.push("/");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={HandleSumit}
        action=""
        className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
      >
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          id="description"
          name=""
          rows="3"
          className="text-black border border-gray-400 p-2 mb-4 w-full"
        ></textarea>
        <button
          type="submit"
          className="mr-4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
          Crear
        </button>
        {params.id && (
          <button
            onClick={async () => {
              await fetch(`http://localhost:3000/api/task/${params.id}`, {
                method: "DELETE",
              });
              router.push("/");
            }}
            type="button"
            className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          >
            Eliminar
          </button>
        )}
      </form>
    </div>
  );
}
