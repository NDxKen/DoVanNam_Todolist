var taskList = new TaskList();
var valid = new Validation();
getLocalStorage();
document.getElementById("addItem").addEventListener("click", function () {
  var input = document.getElementById("newTask").value;

  //   check empty
  var isValid = true;
  isValid &=
    valid.checkEmpty(input, "notiInput", "(*) Vui lòng nhập task") &&
    valid.checkDuplicated(
      input,
      "notiInput",
      "(*) task đã tồn tại",
      taskList.arr
    );
  if (!isValid) return;

  var task = new Task(input);
  taskList.addTask(task);
  alert("Added successfully!");
  createTable(taskList.arr);
  setLocalStorage(taskList.arr);
});

function createTable(arr) {
  var todo = "",
    completed = "";

  arr.forEach(function (item) {
    if (item.status == "todo") {
      todo += `
      <li>
          <span>${item.taskName}</span>
          <div class="buttons">
              <button class="btn-deleteTask" onclick="deleteTask(${item.id})"><i class="fas fa-trash-alt"></i></button>
              <button class="btn-changeStatus" onclick="changeStatus(${item.id})"><i class="far fa-check-circle"></i></button>
          </div>
      </li>     
      `;
    } else if (item.status == "completed") {
      completed += `
          <li>
              <span>${item.taskName}</span>
              <div class="buttons">
                  <button class="btn-deleteTask" onclick="deleteTask(${item.id})"><i class="fas fa-trash-alt"></i></button>
                  <button class="btn-changeStatus" onclick="changeStatus(${item.id})"><i class="fas fa-check-circle"></i></button>
              </div>
          </li>     
        `;
    }
  });
  document.getElementById("todo").innerHTML = todo;
  document.getElementById("completed").innerHTML = completed;
}

function deleteTask(id) {
  taskList.deleteTask(id);
  setLocalStorage(taskList.arr);
  createTable(taskList.arr);
}

function changeStatus(id) {
  var pos = taskList.checkIndex(id);
  if(taskList.arr[pos].status == "todo") {
    taskList.arr[pos].status = "completed";
  } else {
    taskList.arr[pos].status = "todo";
  }
  
  createTable(taskList.arr);
  setLocalStorage(taskList.arr);
}

function setLocalStorage(taskList) {
  var list = JSON.stringify(taskList);
  localStorage.setItem("TaskList", list);
}

function getLocalStorage() {
  var temp = localStorage.getItem("TaskList");
  if (temp) {
    taskList.arr = JSON.parse(temp);
    createTable(taskList.arr);
  }
}
