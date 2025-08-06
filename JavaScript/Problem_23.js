// Simple task manager

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  // Add a new task
  addTask(task) {
    this.tasks.push({ 
      id: Date.now(), 
      text: task, 
      completed: false 
    });
    console.log(`Added: "${task}"`);
  }

  // Mark task as complete
  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      console.log(`Completed: "${task.text}"`);
    } else {
      console.log("Task not found!");
    }
  }

  // Remove a task
  removeTask(id) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      const [removed] = this.tasks.splice(index, 1);
      console.log(`Removed: "${removed.text}"`);
    } else {
      console.log("Task not found!");
    }
  }

  // Show all tasks
  showTasks() {
    console.log("\n--- YOUR TASKS ---");
    if (this.tasks.length === 0) {
      console.log("No tasks yet!");
      return;
    }

    this.tasks.forEach(task => {
      const status = task.completed ? "✓" : "◻";
      console.log(`${status} ${task.text} (ID: ${task.id})`);
    });
  }
}

// Example usage
const myTasks = new TaskManager();

myTasks.addTask("Buy milk");
myTasks.addTask("Call mom");
myTasks.addTask("Pay bills");

myTasks.showTasks();
/* Output:
--- YOUR TASKS ---
◻ Buy milk (ID: 123456789)
◻ Call mom (ID: 123456790)
◻ Pay bills (ID: 123456791)
*/

myTasks.completeTask(123456790);
// Output: Completed: "Call mom"

myTasks.removeTask(123456791);
// Output: Removed: "Pay bills"

myTasks.showTasks();
/* Output:
--- YOUR TASKS ---
◻ Buy milk (ID: 123456789)
✓ Call mom (ID: 123456790)
*/