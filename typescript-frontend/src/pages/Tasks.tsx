import { FC, ReactElement } from "react";
import TasksCounter from "@/components/tasksCounter/TasksCounter";
import Task from "@/components/task/Task";
import TaskSidebar from "@/components/taskSidebar/TaskSidebar";
import useFetchTasks from "@/hooks/useFetchTasks.hook";

function todaysDate() {
  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatDate = today.toLocaleDateString("en-GB", options);
  return formatDate;
}

const Tasks: FC = (): ReactElement => {
  const { data, isSuccess, isError } = useFetchTasks({});

  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-4/5 p-4">
          <h1 className="text-white font-bold text-2xl mb-8">
            {`Tasks as on ${todaysDate()}`}
          </h1>
          <div className="flex justify-around mb-12">
            <TasksCounter
              status="todo"
              count={
                data && data.meta && "todoTasks" in data.meta
                  ? (data.meta.todoTasks as number)
                  : 0
              }
            />
            <TasksCounter
              status="inProgress"
              count={
                data && data.meta && "inProgressTasks" in data.meta
                  ? (data.meta.inProgressTasks as number)
                  : 0
              }
            />
            <TasksCounter
              status="completed"
              count={
                data && data.meta && "completedTasks" in data.meta
                  ? (data.meta.completedTasks as number)
                  : 0
              }
            />
          </div>

          {data &&
            Array.isArray(data.data) &&
            data.data.map((item) => (
              <Task
                key={item._id}
                _id={item._id}
                title={item.title}
                description={item.description}
                status={item.status}
                priority={item.priority}
                dueDate={item.dueDate}
              />
            ))}
        </div>
      </section>
      <section className="flex basis-1/3">
        <TaskSidebar />
      </section>
    </section>
  );
};

export default Tasks;
