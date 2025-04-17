import { FC, ReactElement, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ITask } from "@/types/task.interface";
import useUpdateTask from "@/hooks/useUpdateTask.hook";

const Task: FC<ITask> = (props: ITask): ReactElement => {
  const { title, description, status, priority, dueDate, _id } = props;
  const [progress, setProgress] = useState(false);
  const { mutate, isSuccess } = useUpdateTask();

  useEffect(() => {
    if (status === "inProgress") {
      setProgress(true);
    }
  }, [status]);

  let formattedData = new Date(dueDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleProgressChange = (value: boolean) => {
    setProgress(value);
    if (_id) {
      mutate({ _id: _id, status: value ? "inProgress" : "todo" });
    }
  };

  const handleTaskCompleted = () => {
    if (_id) {
      mutate({ _id: _id, status: "completed" });
    }
  };

  return (
    <Card className="mb-8 w-full">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="basis-2/3 leading-8">{title}</CardTitle>
        <div>
          <Badge className="mr-2" variant="outline">
            {formattedData}
          </Badge>
          {priority === "normal" && (
            <Badge className="bg-sky-800" variant="outline">
              {priority}
            </Badge>
          )}
          {priority === "high" && (
            <Badge className="bg-red-800" variant="outline">
              {priority}
            </Badge>
          )}
          {priority === "low" && (
            <Badge className="bg-green-800" variant="outline">
              {priority}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <Switch
            id="in-progress"
            checked={progress}
            onCheckedChange={handleProgressChange}
          />
          <Label className="ml-4" htmlFor="in-progress">
            In Progress
          </Label>
        </div>
        <Button onClick={handleTaskCompleted}>Completed</Button>
      </CardFooter>
    </Card>
  );
};

export default Task;
