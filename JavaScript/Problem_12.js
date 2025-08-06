// Highlight the Overdue tasks

// Tasks by the user
const tasks = [
  { name: 'Submit report', dueDate: '2025-06-20', completed: false },
  { name: 'Pay bills', dueDate: '2025-06-28', completed: true },
  { name: 'Call client', dueDate: '2025-06-29', completed: false },
  { name: 'Design logo', dueDate: '2025-06-25', completed: false },
  { name: 'Update website', dueDate: '2025-07-02', completed: false },
  { name: 'Renew domain', dueDate: '2025-07-10', completed: false },
  { name: 'Fix server issue', dueDate: '2025-06-15', completed: true },
  { name: 'Plan marketing campaign', dueDate: '2025-07-12', completed: false },
  { name: 'Organize files', dueDate: '2025-06-27', completed: false },
  { name: 'Backup database', dueDate: '2025-06-30', completed: false },
  { name: 'Team meeting', dueDate: '2025-07-01', completed: false },
  { name: 'Refactor codebase', dueDate: '2025-07-15', completed: false },
  { name: 'Create invoice', dueDate: '2025-06-26', completed: true },
  { name: 'Clean workspace', dueDate: '2025-07-05', completed: false },
  { name: 'Send newsletter', dueDate: '2025-06-18', completed: false },
  { name: 'Social media update', dueDate: '2025-07-03', completed: false },
  { name: 'Follow up leads', dueDate: '2025-06-22', completed: true },
  { name: 'Product demo', dueDate: '2025-07-08', completed: false },
  { name: 'Hire freelancer', dueDate: '2025-06-23', completed: false },
  { name: 'Test new feature', dueDate: '2025-07-11', completed: false }
];


// Function that checks the dueDate and completed status and returns the dueTasks
function getOverdueTasks(tasks, today) {
  return tasks
    .filter(task => 
      !task.completed && 
      new Date(task.dueDate) < new Date(today)
    )
    .map(task => task.name);
}

// Function that checks the dueDate and completed status and returns the completed tasks
function getCompletedTasks(tasks) {
    return tasks
            .filter(
                task => (task.completed === true)
            )
            .map(task => task.name);
}

console.log('Over due tasks are ----\n', getOverdueTasks(tasks, '2025-07-07'));
console.log('Completed tasks are ----\n', getCompletedTasks(tasks));
