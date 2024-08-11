"use client"
import { useRouter } from "next/navigation"

export const TaskCard = ({ task, index }) => {
    const router = useRouter()
    return (
        <div className="bg-sky-400 p-3 rounded cursor-pointer" onClick={() => router.push('/form/task/' + task.id)}>
            <div className="font-bold text-2xl mb-2">{task.id} {task.title}</div>
            <div>{task.description}</div>
        </div>
    )
}
