const inputElement = document.querySelector("#tarefa");
const addTaskBtn = document.querySelector("#enviar-btn");
const taskContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }




  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");


  const taskContent = document.createElement("p");
  taskContent.classList.add('item')
  taskContent.innerText = inputElement.value;





  taskContent.addEventListener('click', () => handleClick(taskContent))


  const deleteItem = document.createElement("i");
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");


  deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer, taskContent))



  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);
  taskContainer.appendChild(taskItemContainer);

  inputElement.value = ''
};
const handleClick = (taskContent) => {

  var item = taskContent
  var classe = item.getAttribute("class")


  if (classe === "item") {
    item.classList.add("completed")
  } else {
    item.classList.remove("completed");
  }

}

const handleDeleteClick = (taskItemContainer, taskContent) => {
  var item = taskContent
  var itemContainer = taskItemContainer
  item.remove();
  itemContainer.remove()
}

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }


};

addTaskBtn.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());
