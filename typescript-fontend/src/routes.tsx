import { createBrowserRouter } from "react-router";
import Tasks from "./pages/Tasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Tasks />,
  },
]);
