/**
 * Created by root on 12/10/20.
 */

function validate(){
    var age=parseInt(prompt("Enter your age"));
    if(age<=18) {
        location.href="child.html";
    }
    else if(age>18 && age<=60) {
        location.href="adult.html";
    }
    else {
        location.href="elderly.html";
    }
}

validate();