/**
 * Created by sampathkumar on 12/10/20.
 */

function validateForm() {
    
    var age= document.forms["Name"]["age"].value;
    if (age == "") {
        alert("Age must be filled out");
        return false;
    }
    while (age < 30){
        window.location.replace("younger.html");
        return false;
    }
    while (age >= 30){
        window.location.replace("description.html");
        return false;


    }

}


/*var age=prompt("enter your age");
var year=2020-age;
if(year<=2020 && year>=2000)
{
    location.replace("younger.html");
}
else if(year<2000 && year>=1975)
{
    location.replace("adult.html");
}*/
document.getElementById("myButton").onclick = function () {
    location.href = "welcome.html";
}
  


/*function centuryFromYear(year) {
    var x = year % 100 === 0 ? year/100 : Math.floor(year/100) + 1;
    return x;
}
document.write('2000 => ', centuryFromYear(2000));
document.write('2001 => ', centuryFromYear(2001));*/