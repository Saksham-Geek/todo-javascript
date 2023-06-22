let input = document.querySelector("input");
let todoContainer = document.querySelector(".container");
let editTodo = document.querySelector(".editButton");
let deleteTodo = document.querySelector(".deleteButton");
// console.log(input);
let addBtn = document.querySelector(".addButton");

function addTodo() {
  if (input.value == "") {
    alert("Please enter something to save a todo");
  } else {
    inputVal = input.value;

    let wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("wrapper");
    todoContainer.appendChild(wrapperDiv);
    // creating container to add todo
    let dynamicContainer = document.createElement("div");
    dynamicContainer.classList.add("container");
    dynamicContainer.classList.add("item_input");
    dynamicContainer.classList.add("item");

    dynamicContainer.innerText = inputVal;
    // appending our created dynamic container in HTML container
    wrapperDiv.appendChild(dynamicContainer);

    input.value = "";
    // Edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("editButton");
    wrapperDiv.appendChild(editBtn);
    editBtn.addEventListener("click", () => {
      input.value = inputVal;
      wrapperDiv.remove();
    });

    // delete button

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteButton");
    wrapperDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      // console.log("Item deleted");
      wrapperDiv.remove();
    });
  }
}

// Executing the function
addBtn.addEventListener("click", addTodo);
