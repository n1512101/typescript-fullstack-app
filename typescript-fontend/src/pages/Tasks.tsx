import { FC, ReactElement } from "react";
import TasksCounter from "@/components/tasksCounter/TasksCounter";
import Task from "@/components/task/Task";

const Tasks: FC = (): ReactElement => {
  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-4/5 p-4">
          <h1 className="text-white font-bold text-2xl mb-8">
            Task as on: Saturday, 1 Mar 2025
          </h1>
          <div className="flex justify-around mb-12">
            <TasksCounter status="todo" count={12} />
            <TasksCounter status="inProgress" count={10} />
            <TasksCounter status="completed" count={15} />
          </div>
          <Task
            title="Test Title"
            description="Test Description"
            status="inProgress"
            priority="normal"
            dueDate="2025-01-02T12:00:00.000Z"
          />
          <Task
            title="Test Title2"
            description="Test Description2"
            status="todo"
            priority="high"
            dueDate="2025-01-02T12:00:00.000Z"
          />
        </div>
      </section>
      <section className="flex basis-1/3 bg-pink-300">
        Create Task Section
      </section>
    </section>
  );
};

export default Tasks;
