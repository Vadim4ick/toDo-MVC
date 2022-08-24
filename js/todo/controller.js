// import Model from "./model.js";
// import View from "./view.js";

// const model = new Model();
// const view = new View(model.tasks);

// view.elements.form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const newTask = model.addTasks(view.elements.input.value);
//   view.renderTasks(newTask);
//   view.clearInput();
// });

// view.elements.tasksList.addEventListener("click", (e) => {
//   if (e.target.getAttribute("type") === "checkbox") {
//     const id = e.target.closest("li").dataset.id;
//     const task = model.findTask(id);
//     model.changeStatus(task);
//     view.changeStatus(task);
//   }

//   if (e.target.hasAttribute("data-delete")) {
//     const id = e.target.closest("li").dataset.id;
//     const task = model.findTask(id);
//     model.removeTasks(task);
//     view.removeTask(task);
//   }
// });
import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.tasks);

view.elements.form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = model.addTask(view.elements.input.value);
  view.renderTasks(task);
  view.clearInput();
});

view.elements.tasksList.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-delete")) {
    const taskId = e.target.closest("li").dataset.id;
    const task = model.findTask(taskId);
    model.removeTask(task);
    view.removeTask(task);
  }

  if (e.target.getAttribute("type") === "checkbox") {
    const taskId = e.target.closest("li").dataset.id;
    const task = model.findTask(taskId);
    model.changeStatus(task);
    view.changeStatus(task);
  }
});
