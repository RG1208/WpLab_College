let students = [];


function addStudent() {

    const name = document.getElementById("studentName").value;
    const score = parseFloat(document.getElementById("studentScore").value);

    // Validation to ensure both fields are filled and score is valid
    if (name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("Please enter a valid name and score between 0 and 100.");
        return;
    }

    const student = {
        name: name,
        score: score,
        grade: calculateGrade(score)
    };
    students.push(student);

    displayStudents();
    calculateAverageScore();


    document.getElementById("studentName").value = "";
    document.getElementById("studentScore").value = "";
}

function calculateGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

function displayStudents() {
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = "";


    students.forEach((student, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${student.name} - Score: ${student.score}, Grade: ${student.grade}`;
        studentList.appendChild(li);
    });
}

function calculateAverageScore() {
    if (students.length === 0) {
        document.getElementById("averageScore").textContent = "No students yet.";
        return;
    }

    const totalScore = students.reduce((sum, student) => sum + student.score, 0);
    const average = totalScore / students.length;

    document.getElementById("averageScore").textContent = `Average Score: ${average.toFixed(2)}`;
}
