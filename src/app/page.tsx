import Input from "@/components/input/Input";
import AddTodo from "@/components/todos/AddTodo";
import Todos from "@/components/todos/Todos";
import { TodoProps } from "@/types";
import prisma from "@/utils/prisma";
import Image from "next/image";

async function getTodos():Promise<TodoProps[]> {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center ">
      <span className="text-4xl font-extrabold uppercase mb-5">Todo App</span>

      <div className="flex justify-center flex-col items-center">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {/* Map todos */}
          {todos.map((todo, id)=> (
            <div className="w-full" key={id}>
              <Todos todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
