import { useMutation } from "@tanstack/react-query";
import { ITask } from "@/types/task.interface";
import { IResponse } from "@/types/response.interface";
import { IUpdateTask } from "@/types/updateTask.interface";

const updateTask = async (task: IUpdateTask) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}tasks/update`, {
    method: "PATCH",
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

export default function useUpdateTask() {
  return useMutation({
    mutationFn: updateTask,
    onSuccess: (response: IResponse<ITask>) => console.log(response),
    onError: (error) => console.log(error),
  });
}
