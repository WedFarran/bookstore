function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//real time clock
function showTime(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day =d.getDay();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    switch(month){
        case 1:
            month="January";
            break;
        case 2:
            month="February";
            break;
        case 3:
            month="March";
            break;
        case 4:
            month="April";
            break;
        case 5:
            month="May"
            break;
        case 6:
            month="June"
            break;
        case 7:
            month="July"
            break;
        case 8:
            month="August"
            break;
        case 9:
            month="September"
            break;
        case 10:
            month="October"
            break;
        case 11:
            month="November"
            break;
        case 12:
            month="December"
            break;
        default:

    }

    switch(day){
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        case 7:
            day="Sunday";
            break;
        default:   
    }


    //console.log("old: ", hour);
    var MV = "AM";
    if(hour == 12){
        MV = "PM";
    }
    if(hour > 12){
        hour = hour % 12;
        MV = "PM";
    }
    //console.log("new: ", hour);

    hour = ("0" + hour).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);

    //console.log("mod: ",hour);

    document.getElementById("clock").innerHTML = "<b>Today is:</b> "+day+" "+date+"th "+month+" "+year+", "+hour+":"+min+":"+sec+" "+MV;
}
    
setInterval(showTime,1000);



/* --------------------------------------------------for the form page ---------------------------------------*/
 // Defining a function to display error message this function use to print error 
 function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.feedback.name.value;
    var email = document.feedback.email.value;
    var subject = document.feedback.sub.value;
    var feedback = document.feedback.subject.value;
    

    // Defining error variables with a default value
    var nameErr = emailErr = subErr = subjecterr  = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }



    // Validate subject if selsct then you dont slected 
    if (subject == "Select") {
        printError("subErr", "Please select your subject");
    } else {
        printError("subErr", "");
        subErr = false;
    }

    // Validate feedback , user should be enter feedback
    if (feedback == "") {
        printError("subjecterr", "Please select your feedback");
    } else {
        printError("subjecterr", "");
        subjecterr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || subErr || subjecterr ) == true) {
        return false;
    } else {
    // go to home page after feedback

        window.open('form.html')
    }
};
/* --------------------------------------------------for the shop page ---------------------------------------*/
 
function shopping() {
    window.open('books.html')/*back to home page */


} 
/* --------------------------------------------------for the signin page ---------------------------------------*/
function Cancel()/*function to get empty filed*/
{
    /*the following code checkes whether the entered userid and password are not emty */
    if (uname.value != "" && psw.value != "") {
        uname.value = " ";
        psw.value = "";
    } 
} 

function checkforblank()
{
if(document.getElementById('name').value==""){

    alert("please enter the username .");
    return false;
}
else if (document.getElementById('password').value=="") {
    alert("please enter the password .");
    return false;
}
else
window.open('profile.html')
return true;

 } 

/* --------------------------------------------------for the profile page ---------------------------------------*/
function check(form) {
    window.open('signin.html')/*Go back */


}  
