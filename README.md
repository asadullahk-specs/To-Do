# 📝 To-Do List

A simple, responsive, and user-friendly **To-Do List web application** built with **HTML, CSS, and JavaScript**. The application allows users to create, view, edit, delete, and filter tasks while keeping task data stored locally in the browser.

## ✨ Features

* ➕ **Add Tasks**

  * Add a task name
  * Add a detailed description
  * Set a due date
  * New tasks are automatically marked as **Pending**

* 👀 **View Tasks**

  * Display all tasks in a structured table
  * View task name, description, due date, status, and remaining time

* ✏️ **Edit Tasks**

  * Load an existing task using its task number
  * Update the task name
  * Update the description
  * Change the due date
  * Change task status between **Pending** and **Completed**

* 🗑️ **Delete Tasks**

  * Select a task using its task number
  * Preview the task details before deletion
  * Permanently remove the selected task

* 🔎 **Task Filtering**

  * View **All** tasks
  * View only **Pending** tasks
  * View only **Completed** tasks

* ⏳ **Due-Date Tracking**

  * Automatically calculates the remaining time for each task
  * Displays:

    * `Due Today`
    * `1 Day Left`
    * `X Days Left`
    * `Overdue!`

* 📊 **Task Statistics**

  * Total tasks
  * Completed tasks
  * Pending tasks

* 🌙 **Dark Mode**

  * Toggle between light and dark themes

* 📱 **Responsive Design**

  * Works across desktop, tablet, and mobile screen sizes
  * Responsive navigation menu
  * Mobile-friendly task display

* 💾 **Local Storage**

  * Tasks are saved using the browser's `localStorage`
  * Data remains available after refreshing or reopening the page in the same browser

## 🛠️ Technologies Used

* **HTML5** – Application structure
* **CSS3** – Styling, responsive layout, animations, and dark mode
* **JavaScript (Vanilla JS)** – Application logic and DOM manipulation
* **LocalStorage API** – Persistent task storage
* **Google Fonts (Poppins)** – Typography

## 📂 Project Structure

```text
To-Do-main/
│
├── index.html      # Main application interface
├── style.css       # Styling and responsive design
├── script.js       # Task management and application logic
└── README.md       # Project documentation
```

## 🚀 How to Run

No installation or backend server is required.

### 1. Download or Clone the Project

Clone the repository:

```bash
git clone <your-repository-url>
```

Or download the project files as a ZIP archive and extract them.

### 2. Open the Application

Open:

```text
index.html
```

in any modern web browser.

That's it! The application runs entirely in the browser.

## 📖 How to Use

### Add a Task

1. Navigate to **Add**.
2. Enter the task name.
3. Enter a description.
4. Select a due date.
5. Click **Add**.

The task will appear in the **Current Tasks** section with a `Pending` status.

### Edit a Task

1. Navigate to **Edit**.
2. Enter the task number.
3. Click **Load Task Details**.
4. Modify the task information.
5. Change the status if required.
6. Click **Update Task**.

### Delete a Task

1. Navigate to **Delete**.
2. Enter the task number.
3. Click **Load Task Details**.
4. Review the displayed task information.
5. Click **Delete Task**.

### Filter Tasks

Use the filter buttons to display:

* **All** – Every task
* **Pending** – Tasks that still need to be completed
* **Completed** – Finished tasks

### Change Theme

Click **Dark Theme** in the navigation menu to switch to dark mode. Click **Light Theme** to return to the light theme.

## 💾 Data Storage

This application does not use a database or backend server.

Tasks are stored in the browser using:

```javascript
localStorage
```

Each task contains information similar to:

```javascript
{
    id: 123456789,
    name: "Complete Assignment",
    desc: "Finish the web development assignment",
    dueDate: "2026-09-15",
    status: "Pending"
}
```

Because the data is stored locally, tasks are specific to the browser and device where they were created.

## 📱 Responsive Design

The application includes responsive layouts for different screen sizes.

On smaller screens:

* The navigation changes into a hamburger menu.
* Filters can be opened through a dedicated filter menu.
* The task table transforms into a mobile-friendly card-like layout.
* Forms and buttons adapt to the available screen width.
* Statistics are displayed vertically for easier reading.

## 🎯 Project Purpose

This project was created to practice building a complete front-end application using **vanilla JavaScript**.

Rather than relying on frameworks or a backend, the project focuses on understanding core web-development concepts such as:

* DOM manipulation
* JavaScript event handling
* Form handling
* Arrays and objects
* Filtering data
* CRUD operations
* Browser local storage
* Responsive CSS
* Dynamic UI updates

## 🔮 Future Improvements

Possible improvements for future versions include:

* [ ] Add task search functionality
* [ ] Add task priorities
* [ ] Add categories/tags
* [ ] Add task sorting
* [ ] Add automatic theme preference persistence
* [ ] Add task completion directly from the task list
* [ ] Add notifications for approaching deadlines
* [ ] Add drag-and-drop task organization
* [ ] Add backend/database support
* [ ] Add user authentication
* [ ] Add cloud synchronization

## 👨‍💻 Author

**Sultan Khan**

BSCS Undergraduate & MERN Stack Developer

Interested in building practical software solutions and exploring technologies such as **Python, Data Science, and modern web development**.

---

⭐ If you found this project useful, consider giving it a star!
