const CreateMentorButton = document.getElementById('Mentorbtn');
const CreateStudentButton = document.getElementById('Studentbtn');
const AssignMentorsButton = document.getElementById('assignMentorbtn');
const ChangeMentorbtn = document.getElementById('ChangeMentorbtn');


const WelcomePage = document.getElementById('welcomepage');
const addmentorFields = document.getElementById('addmentor');
const addstudentFields = document.getElementById('addstudent')
const AssignMentorsField = document.getElementById('AssignMentorsField');
const ChangeMentorField = document.getElementById('ChangeMentorField');


function createMentorbtn(){ 
    CreateStudentButton.classList.remove('active');
    AssignMentorsButton.classList.remove('active');
    ChangeMentorbtn.classList.remove('active')
    ChangeMentorField.style.display = 'none';
    AssignMentorsField.style.display = 'none';
    WelcomePage.style.display = 'none';
    addstudentFields.style.display = 'none';

    CreateMentorButton.classList.add('active');
    addmentorFields.style.display = 'block';
}

function createStudentbtn(){
    CreateMentorButton.classList.remove('active');
    AssignMentorsButton.classList.remove('active');
    ChangeMentorbtn.classList.remove('active')
    ChangeMentorField.style.display = 'none';
    WelcomePage.style.display = 'none';
    AssignMentorsField.style.display = 'none';
    addmentorFields.style.display = 'none';

    CreateStudentButton.classList.add('active');
    addstudentFields.style.display = 'block';
}

function assignMentorBtn(){
    CreateMentorButton.classList.remove('active');
    CreateStudentButton.classList.remove('active');
    ChangeMentorbtn.classList.remove('active')
    ChangeMentorField.style.display = 'none';
    WelcomePage.style.display = 'none';
    addstudentFields.style.display = 'none';
    addmentorFields.style.display = 'none';
    
    AssignMentorsButton.classList.add('active');
    AssignMentorsField.style.display = 'block';
    AssignMentor()
}

function ChangeMentorBtn(){
    CreateMentorButton.classList.remove('active');
    CreateStudentButton.classList.remove('active');
    AssignMentorsButton.classList.remove('active');
    WelcomePage.style.display = 'none';
    addstudentFields.style.display = 'none';
    addmentorFields.style.display = 'none';
    AssignMentorsField.style.display = 'none';

    ChangeMentorbtn.classList.add('active')
    ChangeMentorField.style.display = 'block';
}


async function createMentor() {
    const submitBtn = document.getElementById('MentorSubmitBtn');
    submitBtn.innerHTML = 'Loading...'
    const MentorId = document.getElementById('MentorId').value;
    const MentorName = document.getElementById('MentorName').value;
    const MentorContact = document.getElementById('MentorContact').value;
    const Form = document.getElementById('mentorForm');
    const message = document.getElementById('message');

    if(!MentorContact || !MentorName || !MentorId){
        message.innerHTML = "";
        const alertmsg = document.createElement('div');
        const closebtn = document.createElement('button');
        closebtn.type = 'button';
        closebtn.className = 'close';
        closebtn.setAttribute('data-dismiss','alert');
        closebtn.setAttribute('aria-label','Close');
        const span = document.createElement('span');
        span.setAttribute('aria-hidde','true');
        span.innerHTML = '&times;'
        closebtn.appendChild(span);
        alertmsg.className = 'alert alert-danger m-0 alert-dismissible fade fade-in show'
        alertmsg.innerHTML = 'Please Fill out All The Fields!!';
        alertmsg.appendChild(closebtn);
        message.appendChild(alertmsg);
    }

    else{
        let data = {
            id: MentorId,
            name: MentorName,
            contact: MentorContact,
            students: []
        };
        await fetch("https://mentorassignment.herokuapp.com/mentor", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        message.innerHTML = "";
        const successmsg = document.createElement('div');
        const closebtn = document.createElement('button');
        closebtn.type = 'button';
        closebtn.className = 'close';
        closebtn.setAttribute('data-dismiss','alert');
        closebtn.setAttribute('aria-label','Close');
        const span = document.createElement('span');
        span.setAttribute('aria-hidde','true');
        span.innerHTML = '&times;'
        closebtn.appendChild(span);
        successmsg.className = 'alert m-0 alert-success alert-dismissible fade fade-in show'
        successmsg.innerHTML = 'Data Added Successfully..';
        successmsg.appendChild(closebtn);
        message.appendChild(successmsg);
        console.log(data);
        Form.reset();
        getMentors();
    }  
    submitBtn.innerHTML = 'Submit' 
}


async function createStudent() {
    const submitBtn = document.getElementById('StudentSubmitBtn');
    submitBtn.innerHTML = 'Loading...'
    const StudentId = document.getElementById('studentId').value;
    const StudentName = document.getElementById('StudentName').value;
    const Batch = document.getElementById('Batch').value;
    const StudentContact = document.getElementById('StudentContact').value;
    const Form = document.getElementById('Studentform');
    const message = document.getElementById('message');
    
    if(!StudentId || !StudentName || !Batch || !StudentContact){
        message.innerHTML = "";
        const alertmsg = document.createElement('div');
        const closebtn = document.createElement('button');
        closebtn.type = 'button';
        closebtn.className = 'close';
        closebtn.setAttribute('data-dismiss','alert');
        closebtn.setAttribute('aria-label','Close');
        const span = document.createElement('span');
        span.setAttribute('aria-hidde','true');
        span.innerHTML = '&times;'
        closebtn.appendChild(span);
        alertmsg.className = 'alert alert-danger m-0 alert-dismissible fade fade-in show'
        alertmsg.innerHTML = 'Please Fill out All The Fields!!';
        alertmsg.appendChild(closebtn);
        message.appendChild(alertmsg);
    }

    else{
        let data = {
            id: StudentId,
            name: StudentName,
            contact: StudentContact,
            batch: Batch,
            mentorAssigned: false,
            mentorName: "Not Assigned"
        };
        await fetch("https://mentorassignment.herokuapp.com/student", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        message.innerHTML = "";
        const successmsg = document.createElement('div');
        const closebtn = document.createElement('button');
        closebtn.type = 'button';
        closebtn.className = 'close';
        closebtn.setAttribute('data-dismiss','alert');
        closebtn.setAttribute('aria-label','Close');
        const span = document.createElement('span');
        span.setAttribute('aria-hidden','true');
        span.innerHTML = '&times;'
        closebtn.appendChild(span);
        successmsg.className = 'alert alert-success m-0 alert-dismissible fade fade-in show'
        successmsg.innerHTML = 'Data Added Successfully..';
        successmsg.appendChild(closebtn);
        message.appendChild(successmsg);
        Form.reset();
        getStudents();
    }
    submitBtn.innerHTML="Submit"
    
}


let students = [];
let mentors = [];
let selectedmentor


async function getMentors() {
    mentors.splice(0, mentors.length)
    const res = await fetch('https://mentorassignment.herokuapp.com/mentor');
    const response = await res.json();
    response.forEach(mentor => {
        mentors.push(mentor);    
    })  
}

getMentors();

async function getStudents() {
    students.splice(0, students.length)
    const res = await fetch('https://mentorassignment.herokuapp.com/student');
    const response = await res.json();
    response.forEach(student => {
        students.push(student);    
    })
}
getStudents();

console.log(students)
console.log(mentors)
const selectedStudentName = document.getElementById("selectedStudentName");


function AssignMentor(){
    const MentorsTable = document.getElementById('MentorsTable');
    MentorsTable.innerHTML = '';
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
        // const noOfStudents = document.createElement('td')
        // noOfStudents.className = 'align-middle';
        // noOfStudents.innerHTML = mentor.studentList.length;
        // mentorRow.appendChild(noOfStudents);
        const Assigncol = document.createElement('td')
        Assigncol.className = 'align-middle';
        const AssignBtn = document.createElement('button');
        AssignBtn.type = 'button';
        AssignBtn.className = 'btn btn-primary btn-sm'
        AssignBtn.innerHTML = 'Add Student';
        Assigncol.appendChild(AssignBtn);
        mentorRow.appendChild(Assigncol);
        MentorsTable.appendChild(mentorRow);

        AssignBtn.addEventListener('click',()=>{
            const SelectGroup = document.getElementById('selectGroup');
            SelectGroup.style.display = 'block'
            SelectGroup.classList.add('fade-in')
            const SelectedMentorName = document.getElementById('SelectedMentor');
            SelectedMentorName.style.textTransform = 'capitalize';
            SelectedMentorName.innerHTML =  mentor.name;
            selectedmentor = mentor.name;
            listStudentsToSelect()
        })
    })
}


function listStudentsToSelect(){
    selectedStudentName.innerHTML="";
    students.forEach(student=>{
        if(student.mentorAssigned === false){
            const option = document.createElement("option");
            option.value = student.name;
            option.innerHTML = student.name;
            selectedStudentName.appendChild(option);
        }
    })
    getStudents();
}

async function UpdateMentor() {
    let data = {
        mentor: selectedmentor,
        studentName: selectedStudentName.value
    }
    await fetch('https://mentorassignment.herokuapp.com/mentor/assignStudent', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('success')
}

function selectedStudents_(){
    const submitBtn = document.getElementById('assignTheseStudents');
    submitBtn.innerHTML = "Loading..."
    const Form = document.getElementById('selectGroupForm');
    const message = document.getElementById('message');
    if(selectedStudentName.value === 'default'){ 
        message.innerHTML = "";
        const alertmsg = document.createElement('div');
        const closebtn = document.createElement('button');
        closebtn.type = 'button';
        closebtn.className = 'close';
        closebtn.setAttribute('data-dismiss','alert');
        closebtn.setAttribute('aria-label','Close');
        const span = document.createElement('span');
        span.setAttribute('aria-hidde','true');
        span.innerHTML = '&times;'
        closebtn.appendChild(span);
        alertmsg.className = 'alert alert-danger m-0 alert-dismissible fade fade-in show'
        alertmsg.innerHTML = 'Please Select A Student !!!';
        alertmsg.appendChild(closebtn);
        message.appendChild(alertmsg);

    }else{
        UpdateMentor();
        message.innerHTML = "";
        const successmsg = document.createElement('div');
        const closebtn = document.createElement('button');
        closebtn.type = 'button';
        closebtn.className = 'close';
        closebtn.setAttribute('data-dismiss','alert');
        closebtn.setAttribute('aria-label','Close');
        const span = document.createElement('span');
        span.setAttribute('aria-hidden','true');
        span.innerHTML = '&times;'
        closebtn.appendChild(span);
        successmsg.className = 'alert alert-success m-0 alert-dismissible fade fade-in show'
        successmsg.innerHTML = 'Data Added Successfully..';
        successmsg.appendChild(closebtn);
        message.appendChild(successmsg);
        Form.reset();
    }
    submitBtn.innerHTML = "Assign"
}
