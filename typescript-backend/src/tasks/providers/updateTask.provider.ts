import { injectable, inject } from "inversify";
import { IPartialTaskWithId, ITask } from "../task.interface";
import { TaskService } from "../tasks.service";
import { Document } from "mongoose";

@injectable()
export class UpdateTaskProvider {
  constructor(@inject(TaskService) private taskService: TaskService) {}

  public async updateTask(
    update: IPartialTaskWithId
  ): Promise<Document | never> {
    const task: (Document & ITask) | null = await this.taskService.findById(
      update._id
    );

    if (!task) {
      throw new Error("Task does not exist");
    }

    task.title = update.title ? update.title : task.title;
    task.description = update.description
      ? update.description
      : task.description;
    task.status = update.status ? update.status : task.status;
    task.priority = update.priority ? update.priority : task.priority;
    task.dueDate = update.dueDate ? update.dueDate : task.dueDate;

    return await task.save();
  }
}
