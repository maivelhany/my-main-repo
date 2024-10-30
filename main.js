const studentList = document.getElementById('studentList');
const addStudentButton = document.getElementById('addStudentButton');


const isAdmin = true; 


function loadStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    studentList.innerHTML = ''; 
    students.forEach((student, index) => {
        const listItem = document.createElement('tr');
        listItem.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>
                ${isAdmin ? `<button class="btn btn-danger" onclick="removeStudent(${index})">مسح</button>` : ''}
            </td>
        `;
        studentList.appendChild(listItem);
    });

    
    addStudentButton.style.display = isAdmin ? 'inline-block' : 'none';
}


function addStudent() {
    const name = prompt('أدخل اسم الطالب:');
    if (name) {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.push({ name: name });
        localStorage.setItem('students', JSON.stringify(students)); 
        loadStudents(); 
    }
}


function removeStudent(index) {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1); 
    localStorage.setItem('students', JSON.stringify(students)); 
    loadStudents(); 
}

loadStudents();

addStudentButton.addEventListener('click', addStudent);
