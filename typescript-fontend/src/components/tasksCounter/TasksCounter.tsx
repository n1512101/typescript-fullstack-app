import { FC, ReactElement } from "react";
import { ITaskCounter } from "@/types/taskCounter.interface";

const TasksCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { status, count } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`p-6 border-solid border-4 rounded-full mb-4 ${
          status === "todo" && "border-red-500"
        } ${status === "inProgress" && "border-orange-500"} ${
          status === "completed" && "border-green-500"
        }`}
      >
        <div className="min-w-10 min-h-10 text-center text-white text-3xl leading-10">
          {count}
        </div>
      </div>
      <div className="text-white text-xl ">
        {status === "todo" && "Todo"}
        {status === "inProgress" && "In-Progress"}
        {status === "completed" && "Completed"}
      </div>
    </div>
  );
};

export default TasksCounter;
