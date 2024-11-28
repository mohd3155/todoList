# Todo List Application 🚀

A simple and fully responsive Todo List application built using React with TypeScript and styled with Tailwind CSS. This project emphasizes functionality, mobile-first design, and testing to deliver a robust solution for managing tasks.

### Live Link : 
https://mohd-todolist.netlify.app/

## Features 📋
- Add a New Todo: Easily add tasks to your list.
- Mark as Complete: Mark tasks as completed to track your progress.
- Delete Todos: Remove tasks that are no longer needed.
- Filter Options: View tasks by:
  * All
  * Active
  * Completed

## Technology Stack 🛠️
  - **Framework**: Vite (React TypeScript template)
  - **Language**: TypeScript
  - **Package Manager**: Yarn
  - **Styling**: Tailwind CSS
  - **Linting**: ESLint (basic setup)
  - **Testing**:
    * **Jest** for unit testing
    * **Playwright** for end-to-end testing

  ## Design Requirements 🎨
  - **Mobile-First Design**: The application is optimized for mobile screens using Tailwind CSS utilities.
  - **Responsiveness**: Scales seamlessly across various screen sizes.

  ## State Management 🗂️
  - Local state or tools such as React reducer and Context API manage application state. No backend or API is used.

  ## Testing 🧪
  ### Unit Testing:
  - **Jest**: Dispatches the ADD action when the form of adding a new task is submitted.
  ### End-to-End Testing:
  - **Playwright** : Add a new task and change its status to completed and verify it appears in the completed tasks list.

  ## Installation and Setup 🛠️

  1- Clone the Repository:
  ```bash
  git clone https://github.com/mohd3155/todoList.git
  cd todoList
  ```
  2- Install Dependencies:
  ```bash
  yarn 
  ```
  3- Run the Application:
  ```bash
  yarn dev
  ```
  4- Run Unit Tests:
  ```bash
  yarn test AddTask.test.tsx
  ```
  5- Run End-to-End Tests:
  ```bash
  yarn playwright test
  ``` 

