## Welcome! 👋

Thanks for checking out this repo [Mentor-Assignment-Webapp](https://github.com/beharavenkatasatyaprasad/Mentor-Assignment-Webapp/).

## Mentor-Assignment-Webapp

Click [here](https://mentor-assignment-webapp.netlify.app/) to preview the app in action.

### Technologies Used:

<code><img height="25" src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" alt="nodejs"></code>
<code><img height="25" src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" alt="nodepackagemanager"></code>
<code><img height="26" src="https://img.icons8.com/color/144/000000/mongodb.png" alt="MongodB"></code>

### node modules used:
- cors
- express
- mongodb

### Endpoints:

#### To Get Mentors `/mentor` (GET)
```javascript
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://mentorassignment.herokuapp.com/mentor", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

#### To Get Students `/student`(GET)
```javascript
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://mentorassignment.herokuapp.com/student", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

#### To Add New Student `/student` (POST)
```javascript
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"id":7,"batch":"17","name":"Krishna","contact":"8745562210"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://mentorassignment.herokuapp.com/student", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

#### To Add New Mentor `/mentor` (POST)
```javascript
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"id":407,"name":"Kiran","contact":"7874414712",studentList:[]});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://mentorassignment.herokuapp.com/mentor", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

#### To Assign Mentor to a Student.`/mentor/assignStudent`(PUT)
```javascript
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"mentor":"Andrew","studentName":"David"});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://mentorassignment.herokuapp.com/mentor/assignStudent", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

#### To Update Mentor to a Student.`/mentor/UpdateMentor` (PUT)
```javascript
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"OldMentor":"Andrew","NewMentor":"Amy","studentName":"David"});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://mentorassignment.herokuapp.com/mentor/UpdateMentor", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```

##### Links
 - ``Webapplication Deployment URL: https://mentor-assignment-webapp.netlify.app/``
 - ``Webapplication GitHub Repo Link: https://github.com/beharavenkatasatyaprasad/Mentor-Assignment-Webapp``
 
<img  src="https://github.com/beharavenkatasatyaprasad/beharavenkatasatyaprasad/blob/main/gifs/bars.gif" alt=""/>
