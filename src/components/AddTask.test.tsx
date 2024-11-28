import { render, fireEvent } from "@testing-library/react";
import AddTask from "../components/AddTask";
import { TasksProvider } from "../contexts/tasksContexts";

describe("AddTask Component", () => {
  it("dispatches the ADD action when the form is submitted", () => {
    const { getByPlaceholderText, getByRole } = render(
      <TasksProvider>
        <AddTask />
      </TasksProvider>
    );

    fireEvent.change(getByPlaceholderText("Task Title"), {
      target: { value: "Test Task" },
    });
    fireEvent.change(getByPlaceholderText("Description"), {
      target: { value: "Test Description" },
    });
    fireEvent.change(getByRole("status"), {
      target: { value: "active" },
    });

    fireEvent.click(getByRole("button"));

 
  });
});
