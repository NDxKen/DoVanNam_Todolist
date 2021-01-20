function Validation() {
  this.checkEmpty = function (input, spanID, mess) {
    if (input === "") {
      document.getElementById(spanID).style.display = "block";
      document.getElementById(spanID).innerHTML = mess;
      return false;
    } else {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
  };

  this.checkDuplicated = function (input, spanID, mess, list) {
    var isExist = false;
    list.forEach(function (item) {
      if (input === item.taskName) {
        isExist = true;
      }
    });
    if (isExist) {
      document.getElementById(spanID).style.display = "block";
      document.getElementById(spanID).innerHTML = mess;
      return false;
    } else {
      document.getElementById(spanID).style.display = "none";
      document.getElementById(spanID).innerHTML = "";
      return true;
    }
  };
}
