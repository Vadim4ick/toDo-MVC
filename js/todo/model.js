// export default class Model {
//   constructor() {
//     this.tasks = [];
//     this.loadFromLocalStorage();
//   }

//   loadFromLocalStorage() {
//     const data = localStorage.getItem("tasks");
//     if (data) {
//       this.tasks = JSON.parse(data);
//     }
//   }

//   saveToLocalStorage() {
//     localStorage.setItem("tasks", JSON.stringify(this.tasks));
//   }

//   addTasks(text) {
//     let id = 1;

//     if (this.tasks.length > 0) {
//       id = this.tasks[this.tasks.length - 1]["id"] + 1;
//     }

//     const newTask = {
//       id: id,
//       status: "active",
//       text: text,
//     };

//     this.tasks.push(newTask);
//     this.saveToLocalStorage();

//     return newTask;
//   }

//   findTask(id) {
//     const task = this.tasks.find((item) => {
//       if (item.id === parseInt(id)) {
//         return true;
//       }
//     });

//     return task;
//   }

//   changeStatus(task) {
//     if (task.status === "active") {
//       task.status = "done";
//     } else {
//       task.status = "active";
//     }
//     this.saveToLocalStorage();
//   }

//   removeTasks(task) {
//     const index = this.tasks.indexOf(task);
//     this.tasks.splice(index, 1);
//     this.saveToLocalStorage();
//   }
// }

export default class Model {
  constructor() {
    this.tasks = [];
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem("task");
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem("task", JSON.stringify(this.tasks));
  }

  addTask(text) {
    let id = 1;
    if (this.tasks.length > 0) {
      id = this.tasks[this.tasks.length - 1]["id"] + 1;
    }

    const newTask = {
      id: id,
      text: text,
      status: "active",
    };

    this.tasks.push(newTask);
    this.saveToLocalStorage();

    return newTask;
  }

  changeStatus(task) {
    if (task.status === "active") {
      task.status = "done";
    } else {
      task.status = "active";
    }

    this.saveToLocalStorage();
  }

  findTask(id) {
    const task = this.tasks.find((item) => {
      if (item.id === parseInt(id)) {
        return true;
      }
    });

    return task;
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.saveToLocalStorage();
  }
}
