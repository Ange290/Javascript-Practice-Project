// Define Task and Category objects
class Task {
    constructor(title, description, category) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.completed = false;
    }
}

class Category {
    constructor(name) {
        this.name = name;
    }
}

// ToDo list
let todoList = [];

// Function to add tasks
function addTask(title, description, category) {
    const task = new Task(title, description, category);
    todoList.push(task);
}

// Function to display tasks grouped by categories
function displayTasksByCategory() {
    const tasksByCategory = {};
    todoList.forEach(task => {
        if (!tasksByCategory[task.category]) {
            tasksByCategory[task.category] = [];
        }
        tasksByCategory[task.category].push(task);
    });

    for (const category in tasksByCategory) {
        console.log(`Category: ${category}`);
        tasksByCategory[category].forEach(task => {
            console.log(`  - ${task.title} (${task.completed ? 'Completed' : 'Pending'})`);
        });
    }
}


//function to mark task as Completed


function markAstaskCompleted (title){
  const task =  todoList.find(task => task.title === title);
  if(task){
    task.completed = true;
    console.log(`The task ${title} marked as completed `);
    
  }
  else{
    console.log(`The task ${title} is no completed`);
  }
}


//remove task from list


function removeTask (title){
  const index = todoList.findIndex(task => task.title === title)
    if(index){
      todoList.splice(index,1);
      console.log(`The task ${title} is removed`);
    }
    else{
      console.log(`The task ${title} not found`);
    }
  
}

// Example usage
addTask("To do homework of javascript","solve all question and understand it","personal");
addTask("To go to the market to buy fruits","banana,orange,avocadoes and maango","me and aunt");
addTask("To visit our freind ","at 10:00 am we go to visist our freind","team");
addTask("Go on Pharumacy","to buy my mom medecine","personal");

console.log("List of work to do:");
displayTasksByCategory();

markAstaskCompleted("To visit our freind");

console.log("\nList of work to do after marking task as completed:");
displayTasksByCategory();

removeTask("Go on Pharumacy");

console.log("\nList of work to do after removing task:");
displayTasksByCategory();


