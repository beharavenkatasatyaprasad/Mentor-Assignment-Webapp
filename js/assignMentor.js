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

let mentors = [];
let students = [];
let selectedmentor

getMentors()

async function getMentors() {
    mentors.splice(0, mentors.length)
    const res = await fetch('https://mentorassignment.herokuapp.com/mentor');
    const response = await res.json();
    response.forEach(mentor => {
        mentors.push(mentor);    
    })  
    AssignMentorTable()
}

console.log(mentors)

async function getStudents() {
    students.splice(0, students.length)
    const res = await fetch('https://mentorassignment.herokuapp.com/student');
    const response = await res.json();
    response.forEach(student => {
        students.push(student);    
    })
}
getStudents();

const modaldiv = document.getElementById("Container");
const modalSelect = document.createElement('div');
modalSelect.className ='modal'
modalSelect.id = 'SelectModal'
modalSelect.innerHTML = `
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Assign Student to <span id="SelectedMentor"> ${selectedmentor}</span></h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div id="SelectStudentsToAssign" class="modal-body">
            Modal body..
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>

    </div>
</div>

`
console.log(modaldiv)
// getStudents();
modaldiv.appendChild(modalSelect)
// listStudentsToSelect()
function AssignMentorTable(){
    const MentorsTableDiv = document.getElementById('AssignMentorsField')

    MentorsTableDiv.innerHTML = ''
    const MentorsTable =document.createElement('table');
    MentorsTable.className = 'col-sm-12 table table-hover text-center table-dark';
    const TableHead = document.createElement('thead');
    TableHead.innerHTML = `
                    <th scope="col">Mentor ID</th>
                    <th scope="col">Mentor Name</th>
                    <th scope="col">Mbl Number</th>
                    <th scope="col">Add Student</th>
    `
    MentorsTable.appendChild(TableHead)
    

    mentors.forEach(mentor=>{
        const mentorRow = document.createElement('tr');
        const mentorid = document.createElement('td')
        mentorid.className = 'align-middle';
        mentorid.innerHTML = mentor.id
        mentorRow.appendChild(mentorid);
        const mentorName = document.createElement('td')
        mentorName.className = 'align-middle';
        mentorName.innerHTML = mentor.name
        mentorRow.appendChild(mentorName);
        const mentorMbl = document.createElement('td')
        mentorMbl.className = 'align-middle';
        mentorMbl.innerHTML = mentor.contact;
        mentorRow.appendChild(mentorMbl);
        const Assigncol = document.createElement('td')
        Assigncol.innerHTML =  `
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#SelectModal">
             Add Student
        </button>
        `
        mentorRow.appendChild(Assigncol);
        MentorsTable.appendChild(mentorRow);
        
        Assigncol.addEventListener('click',()=>{
            const SelectedMentorName = document.getElementById('SelectedMentor');
            SelectedMentorName.style.textTransform = 'capitalize';
            SelectedMentorName.innerHTML =  mentor.name;
            selectedmentor = mentor.name;
            document.getElementById('SelectStudentsToAssign').innerHTML='Loading...'
            listStudentsToSelect()
        })
    })
    MentorsTableDiv.appendChild(MentorsTable)
}

let selectedStudentName

function listStudentsToSelect(){
    const selectGroupForm = document.getElementById('SelectStudentsToAssign');
    selectGroupForm.innerHTML="";
    students.forEach(student=>{
        if(student.mentorAssigned === false){
            const option = document.createElement("div");
                option.className = 'form-group'
                option.innerHTML = ` 
                    <button type="button" data-dismiss="modal" value="${student.name}" id="{student.name}" onclick="selectedStudent_(this.value)" style="letter-spacing: 3px;" class="btn btn-primary form-control">
                        ${student.name}
                    </button>
                `
                selectGroupForm.appendChild(option);
            }
        })
}

async function addStudenttoMentor() {
    let data = {
        mentor: selectedmentor,
        studentName: selectedStudentName
    }
    await fetch('https://mentorassignment.herokuapp.com/mentor/assignStudent', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    custom_alert("success", "Student Successfully Assigned to "+` ${selectedmentor}`+"...");
    // console.log('success')
}

function selectedStudent_(student){
    selectedStudentName = student;
    const message = document.getElementById('message');
    // console.log(SelStudentName.value)
    custom_alert("success", "Assigned " + `${selectedStudentName}` + " to " + `${selectedmentor}` );
    addStudenttoMentor();
    getMentors()
}
