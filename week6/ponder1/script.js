
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

const grades = ['A','B','C']

const list = document.getElementById("studentList")

// array functions
students.forEach((person, i) => {
    person.grade=grades[i];
    convert(person.grade)
    console.log(person.first, person.last, ':', person.grade);

    const li = document.createElement("li");
    li.textContent = `${person.first} ${person.last}: ${person.grade} (${points} points)`;
    list.appendChild(li);
});

// document.body.p = (person.first, person.last, ' : ', person.grade, ' = ',points );
