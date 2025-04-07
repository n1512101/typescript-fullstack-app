import { inject, injectable } from "inversify";
import { UserController } from "../user/user.controller";
import { Request, Response } from "express";
import { ITask } from "./task.interface";
import { Task } from "./task.schema";
import { Document } from "mongoose";

@injectable()
export class TasksController {
  constructor(@inject(UserController) private userController: UserController) {}

  public handleGetTasks() {
    return [
      {
        title: "this is a title",
        description: "task description",
      },
    ];
  }

  public async handlePostTasks(req: Request<{}, {}, ITask>, res: Response) {
    const task: Document<unknown, any, ITask> = new Task(req.body);
    await task.save();
    return task;
  }

  public handlePatchTasks() {
    return {
      title: "This is a title",
      description: "Task description",
    };
  }
}
