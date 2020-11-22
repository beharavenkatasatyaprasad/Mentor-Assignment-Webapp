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

document.getElementById('ListMentorsBtn').addEventListener('click',()=>{
  window.location.href = "./listMentors.html";
})


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