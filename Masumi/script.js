/**
 * Created by masumiupadhyay on 12/10/20.
 */
var age=prompt("Enter Your Age");
//document.write(age);
if(age>=1 && age<=40)
{
    window.location.href="21st.html";
}
else if(age>40 && age<=60)
{
    window.location.href="90s.html";
}
else if(age>60)
{
    window.location.href="60s.html";
}
else if(age==false)
{
    window.location.href="index.html";
}