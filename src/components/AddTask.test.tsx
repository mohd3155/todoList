import { render, screen } from "@testing-library/react";
import AddTask from "./AddTask";
import { TasksProvider } from "../contexts/tasksContexts";


describe("Page renders", () => {
  it("renders Add Task form", async () => {
    render(<TasksProvider>
        <AddTask/>
        </TasksProvider>)
    
    const element = await screen.findByRole("form")

    expect(element).toBeInTheDocument();
  })
})

// // Mock the React context
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useContext: jest.fn(),
// }));

// // Mock the `react-hook-form` module
// jest.mock("react-hook-form", () => ({
//   useForm: jest.fn(),
// }));


// describe("AddTask Component", () => {
//   test("dispatches the correct action when the form is submitted", () => {
//     // Mock the dispatch function
//     const mockDispatch = jest.fn();

//     // Mock context value
//     const mockContext = {
//       tasks: [],
//       dispatch: mockDispatch,
//     };

//     // Mock `useContext` to return the mocked context
//     jest.spyOn(React, "useContext").mockImplementation(() => mockContext);

//     // Mock `useForm` hooks
//     const mockHandleSubmit = jest.fn((callback) => () =>
//       callback({
//         id: 1,
//         task: "Test Task",
//         description: "Test Description",
//         status: "active",
//       })
//     );
//     const mockRegister = jest.fn();
//     const mockReset = jest.fn();

//     jest.mocked(require("react-hook-form").useForm).mockReturnValue({
//       handleSubmit: mockHandleSubmit,
//       register: mockRegister,
//       reset: mockReset,
//     });

//     // Render the AddTask component
//     const { getByPlaceholderText, getByRole } = render(<AddTask />);

//     // Simulate user input
//     fireEvent.change(getByPlaceholderText("Task Title"), {
//       target: { value: "Test Task" },
//     });
//     fireEvent.change(getByPlaceholderText("Description"), {
//       target: { value: "Test Description" },
//     });

//     fireEvent.change(getByRole("combobox"), {
//         target: { value: "active" },
//       });
//     // Simulate form submission
//     fireEvent.click(getByRole("button"));
//     // fireEvent.click(submitButton);

//     // Assert that `dispatch` was called with the correct action
//     expect(mockDispatch).toHaveBeenCalledWith({
//       type: "ADD",
//       task: {
//         id: expect.any(Number), // The ID is randomly generated
//         task: "Test Task",
//         description: "Test Description",
//         status: "active",
//       },
//     });

//     // Assert that `reset` was called to clear the form
//     expect(mockReset).toHaveBeenCalled();
//   });
// });
