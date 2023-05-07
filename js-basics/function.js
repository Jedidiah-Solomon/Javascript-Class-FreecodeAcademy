alert('You are about checking your eligibility!');


function eligle_student () {
    let admitted_student;
    let Number(intake_age) = prompt(How old are you?, "");
   let student_course = (document.getElementById('intake_course').value);
    if (isNaN(intake_age) || (intake_age === null) ) {
        admitted_student = "Input is not a number";
      } 
      else if (intake_age < 10)  {
        admitted_student = "You are not eligible"; 
      }
      else {
            admitted_student = "Your cousre is " + student_course + " and you are eligible";
      }
    document.getElementById("admin_status").innerHTML = admitted_student + " to be admitted";
}



