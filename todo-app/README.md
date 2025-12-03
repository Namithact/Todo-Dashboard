# Todo Dashboard

GitHub Repository: https://github.com/Namithact/Todo-Dashboard  
Deployed URL: https://todo-dashboard-sigma.vercel.app/

------------------------------------------------------------
HOW TO RUN THIS PROJECT LOCALLY
------------------------------------------------------------

1. Clone the repository:
   git clone https://github.com/Namithact/Todo-Dashboard.git

2. Navigate to the project folder:
   cd Todo-Dashboard/todo-app

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

The project will run at:
http://localhost:5173/

FEATURES IMPLEMENTED
--------------------

1. Responsive 3-panel layout
   - Desktop view: Sidebar, Task List, and New Task Panel.
   - Mobile view: Only the Task List is visible initially, with buttons to open the Sidebar and New Task Panel.

2. Task management
   - Users can add tasks with label, priority, due date, and  subtasks.
   - All added tasks are displayed in the Task List.

3. Due date calculations
   - Automatically calculates and displays overdue days or number of days remaining.

4. Subtask logic
   - Completing all subtasks automatically marks the main task as completed.

5. Complete All option
   - The “Complete All” checkbox marks all tasks and all subtasks as completed.

6. Edit and delete functionality for main tasks
   - Users can edit only the task title.
   - Users can delete a task by clicking the three-dots menu on the right side of each task item.

7. Dark/Light mode
   - A toggle allows switching between dark and light themes.

8. Local storage persistence
   - Tasks and theme preference (dark/light mode) are stored in localStorage.

9. Task highlighting
   - Overdue tasks and completed tasks are visually highlighted.

10. New Task Panel functionality
   - The “Add Task” button is enabled only after entering a task name.
   - Users can set priority, label, due date, and subtasks.
   - The subtask gets added only when the "Add" button of subtask is clicked.
   - Subtask checkboxes and a notes section are included based on the design.
11. Fallback Screens
   - When no tasks are added, a clean empty-state screen is displayed.
   - When search results return no matches, a "No tasks found" screen is shown.

------------------------------------------------------------

LIMITATIONS
-----------

1. The sidebar does not have any functionality because nothing was specified in the document. It is included only to match the design visually.

2. The “Today” dropdown in the Task List was changed to a static title “Task” because no filtering instructions were provided. Implementing filtering would increase the assignment scope.

3. The three-dots icon near the search bar has no functionality because no behavior was mentioned in the document.

4. The preset subtask checkboxes and the notes section in the New Task Panel are UI-only. These were included to match the design but moved to the bottom because the expected functionality was unclear.

5. Minor alignment differences on real mobile devices:
   - Some panels or elements may appear slightly misaligned on physical mobile devices compared to browser dev tools.
   - This is due to differences in pixel density, scrollbars, and browser rendering on real devices.
   - The overall functionality and layout remain correct.
