// export default class View {
//   constructor(tasks) {
//     tasks.forEach((el) => {
//       this.renderTasks(el);
//     });
//   }

//   elements = {
//     input: document.getElementById("newTask"),
//     form: document.getElementById("form"),
//     tasksList: document.getElementById("tasksList"),
//   };

//   renderTasks(taskObj) {
//     const completeClass = taskObj.status === "done" ? "completed" : "";
//     const checked = taskObj.status === "done" ? "checked" : "";

//     const taskHTML = `
//       <li class="todo-item" data-id="${taskObj.id}">
//       	  <label class="todo-item-label">
//       	    <input class="checkbox" type="checkbox" ${checked} />
//       		  <span class="${completeClass}">${taskObj.text}</span>
//       		<button class="btn btn-secondary btn-sm" data-delete>Удалить</button>
//       	</label>
//       </li>
//    `;

//     this.elements.tasksList.insertAdjacentHTML("beforeend", taskHTML);
//   }

//   clearInput() {
//     this.elements.input.value = "";
//   }

//   changeStatus(taskObj) {
//     const taskEl = this.elements.tasksList.querySelector(
//       `[data-id="${taskObj.id}"]`
//     );
//     const tackElText = taskEl.querySelector("span");

//     if (taskObj.status === "done") {
//       tackElText.classList.add("completed");
//     } else {
//       tackElText.classList.remove("completed");
//     }
//   }

//   removeTask(taskObj) {
//     const taskEl = this.elements.tasksList.querySelector(
//       `[data-id="${taskObj.id}"]`
//     );
//     taskEl.remove();
//   }
// }

export default class View {
  constructor(tasks) {
    tasks.forEach((el) => {
      this.renderTasks(el);
    });
  }

  elements = {
    form: document.getElementById("form"),
    tasksList: document.getElementById("tasksList"),
    input: document.getElementById("newTask"),
  };

  renderTasks(task) {
    const checked = task.status === "done" ? "checked" : "";
    const completeClass = task.status === "done" ? "completed" : "";

    const markup = `
    <li class="todo-item" data-id="${task.id}">
      <label class="todo-item-label">
        <input class="checkbox" type="checkbox" ${checked}/>
        <span class="${completeClass}">${task.text}</span>
        <button class="btn btn-secondary btn-sm" data-delete>
          Удалить
        </button>
      </label>
    </li>
    `;

    this.elements.tasksList.insertAdjacentHTML("afterbegin", markup);
  }

  clearInput() {
    this.elements.input.value = "";
  }

  removeTask(task) {
    const taskEl = this.elements.tasksList.querySelector(
      `[data-id="${task.id}"]`
    );
    taskEl.remove();
  }

  changeStatus(task) {
    const taskEl = this.elements.tasksList.querySelector(
      `[data-id="${task.id}"]`
    );
    const taskText = taskEl.querySelector("span");
    console.log(task.status);
    if (task.status === "done") {
      taskText.classList.add("completed");
    } else {
      taskText.classList.remove("completed");
    }
  }
}
