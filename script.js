let courses

function loadPage() {
fetch("courses.json")
    .then(response => response.json())
    .then(json => {console.log(json)
                  courses = json
                  createCards()})
    .catch(err => console.error(err))
//createCards()
}
function createCards() {
let container = document.createElement('div')
container.innerHTML = courses.map(course =>
    `<div class = ${course.Department}>
<h3>${course.Course}<h3>
<p>${course.Teacher}<p>
</div>` ).join('')
document.querySelector('article')
    .append(container)
}
