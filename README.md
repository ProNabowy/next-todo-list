# Task: Build a Todo List App with CRUD Functionality

## Commends
- install packages => npm install
- to run => npm run dev
- to build => npm run build

## Status: Task Completed
I have successfully built the Todo List application following the specified requirements and criteria. Below is a summary of the completed task.

## Objective:
The objective was to create a fully functional Todo List application using Nextjs, with CRUD (Create, Read, Update, Delete) capabilities. The app allows users to add, view, edit, delete, and toggle the status of todo items between "completed" and "pending".

## Requirements Completion:

### 1. User Interface:
- **Input Field:** Implemented a field for adding new todo items.
- **Todo List:** Successfully displays a list of todos with their statuses.
- **Todo Actions:**
  - **Edit:** Users can edit existing todos.
  - **Delete:** Todos can be deleted.
  - **Toggle Status:** Users can mark todos as "completed" or "pending".

### 2. Features:
- **Add Todo:** Users can add new todo items via the input field.
- **View Todos:** All todos are displayed with their current status.
- **Edit Todo:** The edit functionality works as expected.
- **Delete Todo:** Implemented a delete function with confirmation.
- **Toggle Status:** Todo status can be toggled between "completed" and "pending" via a switch.
- **Persist State:** Used `localStorage` to persist todo data, ensuring that todos remain after page reloads.

### 3. Additional Considerations:
- **State Management:** Used React's `useState` and custom hooks to manage the todo list state.
- **UI/UX:** The design is clean, simple, and user-friendly, with an intuitive interface.
- **Responsiveness:** The application is fully responsive and adapts to both mobile and desktop screens.
- **Error Handling:** Handled edge cases like empty input fields and confirmed deletions before action.

## Evaluation Criteria:
- **Component Design:** Separated components into `TodoForm`, `TodoList`, `TodoItem`, and other smaller components, ensuring a modular structure.
- **State Management:** Managed state using React hooks (`useState`, `useEffect`), and handled data persistence with `localStorage`.
- **Functionality:** All CRUD operations have been implemented successfully and tested.
- **User Experience:** The app provides a smooth, responsive, and easy-to-use experience.
- **Code Quality:** The code is clean, commented, and follows best practices for readability and maintainability.

## Delivery:
A dedicated branch was created with my changes, and all code has been pushed to the repository.
