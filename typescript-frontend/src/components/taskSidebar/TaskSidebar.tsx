import { FC, ReactElement } from "react";
import { Card } from "@/components/ui/card";
import UserProfile from "../userProfile/UserProfile";
import CreateTaskForm from "../createTaskForm/CreateTaskForm";
import Logout from "../logout/Logout";
import styles from "./style.module.css";

const TaskSidebar: FC = (): ReactElement => {
  return (
    <section className={`fixed top-4 right-4 ${styles.sideBarHeight}`}>
      <Card className="flex flex-col w-full h-full p-6 justify-between">
        <UserProfile firstName="Mark" />
        <CreateTaskForm />
        <Logout />
      </Card>
    </section>
  );
};

export default TaskSidebar;
