function TaskList() {
  this.arr = [];
  this.addTask = function (myTask) {
    this.arr.push(myTask);
  };
  this.checkIndex = function (id) {
    return this.arr.findIndex(function (item) {
      return id === item.id;
    });
  };
  this.deleteTask = function (id) {
    if (this.checkIndex(id) !== -1) {
      this.arr.splice(this.checkIndex, 1);
    }
  };
  this.getTaskByID = function (id) {
    var pos = this.checkIndex(id);
    return this.arr[pos];
  };
  this.updateTask = function (task) {
    var pos = this.checkIndex(task.id);
    this.arr[pos] = task;
  };
}
