import { useMutation } from "@tanstack/react-query";
import { ITask } from "@/types/task.interface";
import { IResponse } from "@/types/response.interface";

const createTask = async (task: ITask) => {
  const response = await fetch("http://localhost:3001/tasks/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Network response not OK");
  }
  return await response.json();
};

export default function useCreateTask() {
  return useMutation({
    mutationFn: createTask,
    onSuccess: (response: IResponse<ITask>) => console.log(response),
    onError: (error) => console.log(error),
  });
}
