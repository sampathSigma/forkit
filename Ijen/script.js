function validateForm() {
    var age = document.forms["ageform"]["age"].value;
    if (age == "") {
      alert("Age must be filled out");
      return false;
    }
    while (age <= 50){
        window.location.replace("file:///home/ijenghadiya/Documents/js/forkit/Ijen/young.html");
        return false;
    }
    while (age >= 50){
        window.location.replace("file:///home/ijenghadiya/Documents/js/forkit/Ijen/old.html");
        return false;
    }
    
  }

document.getElementById("myButton").onclick = function () {
    location.href = "file:///home/ijenghadiya/Documents/js/forkit/Ijen/index.html";
}