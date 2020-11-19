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
    ChangeMentorField.style.display = 'none';
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
    AssignStudents()
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

    const MentorId = document.getElementById('MentorId').value;
    const MentorName = document.getElementById('MentorName').value;
    const MentorContact = document.getElementById('MentorContact').value;
    const Form = document.getElementById('mentorForm');
    const message = document.getElementById('message1');

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
        alertmsg.className = 'alert alert-danger alert-dismissible fade fade-in show'
        alertmsg.innerHTML = 'Please Fill out All The Fields!!';
        alertmsg.appendChild(closebtn);
        message.appendChild(alertmsg);
    }

    else{
        let data = {
            id: MentorName,
            name: MentorId,
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
        successmsg.className = 'alert alert-success alert-dismissible fade fade-in show'
        successmsg.innerHTML = 'Data Added Successfully..';
        successmsg.appendChild(closebtn);
        message.appendChild(successmsg);
        console.log(data);
        Form.reset();

    }  
}


async function createStudent() {

    const StudentId = document.getElementById('studentId').value;
    const StudentName = document.getElementById('StudentName').value;
    const Batch = document.getElementById('Batch').value;
    const StudentContact = document.getElementById('StudentContact').value;
    const Form = document.getElementById('Studentform');
    const message = document.getElementById('message2');
    
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
        alertmsg.className = 'alert alert-danger alert-dismissible fade fade-in show'
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
        successmsg.className = 'alert alert-success alert-dismissible fade fade-in show'
        successmsg.innerHTML = 'Data Added Successfully..';
        successmsg.appendChild(closebtn);
        message.appendChild(successmsg);
        console.log(data);
        Form.reset();
    }  
}

function AssignStudents(){  
    async function getMentors() {
        const res = await fetch('https://mentorassignment.herokuapp.com/mentor');
        const response = await res.json();
        console.log(response);
    }
    getMentors();
}