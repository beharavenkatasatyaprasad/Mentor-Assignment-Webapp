document.getElementById('Mentorbtn').addEventListener('click',()=>{
    window.location.href = "./index.html";
})

document.getElementById('Studentbtn').addEventListener('click',()=>{
    window.location.href = "./addStudent.html";
})

document.getElementById('assignMentorbtn').addEventListener('click',()=>{
    window.location.href = "./AssignMentor.html";
})
document.getElementById('UpdateMentorbtn').addEventListener('click',()=>{
    window.location.href = "./UpdateMentor.html";
})

// let students = [];
// let mentors = [];
// // let selectedmentor

// async function getMentors() {
//     mentors.splice(0, mentors.length)
//     const res = await fetch('https://mentorassignment.herokuapp.com/mentor');
//     const response = await res.json();
//     response.forEach(mentor => {
//         mentors.push(mentor);    
//     })  
// }
// getMentors();

// async function getStudents() {
//     students.splice(0, students.length)
//     const res = await fetch('https://mentorassignment.herokuapp.com/student');
//     const response = await res.json();
//     response.forEach(student => {
//         students.push(student);    
//     })
// }
// getStudents();

// console.log(students)
// console.log(mentors)


function custom_alert(type, message) {
    let newAlert = $("#message");
    newAlert.html(`
    <div class="fade-in text-center m-0 alert alert-${type} alert-dismissible fade show" role="alert">
    ${message}
    <button type="button" class=" close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`);
    $("html, body").animate(
      {
        scrollTop: $("#message").offset().top,
      },
      500
    );
    setTimeout(() => {
      newAlert.html("");
    }, 3000);
  }