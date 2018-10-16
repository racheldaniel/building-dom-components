const students = [
  {
      name: "Chris Miller",
      class: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      class: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      class: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      class: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      class: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      class: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      class: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      class: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      class: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      class: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      class: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      class: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]

// const h1 = (...props) => {
//   return `<h1 class= "xxlarge ${props[1]}">${props[0]}</h1>`
// }
// const section = (...props) => {
//   return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
// }

// const aside = (...props) => {
//   return `<aside class="${props[1]}">${props[0]}</aside>`
// }
const studentArticle = document.getElementById("container")

const element = (elem, content, ...classes) => {
  console.log(classes)
  let style = ""
  classes.forEach(function(classID){
    style += `${classID} `; 
  });
  return `<${elem} class="${style}"> ${content}</${elem}>`
}


for (student of students) {
  let studentDiv =  document.createElement("div");
  studentDiv.className = "student"
  studentArticle.appendChild(studentDiv)
  let studentElem = ""
  if (student.score >= 60) {
    studentElem += element("h1", student.name, "xxlarge", "passing")
  } else {
    studentElem += element("h1", student.name, "xxlarge", "failing")
  }
  studentElem += element("section", student.class, "bordered", "dashed", "section--padded" )
  studentElem += element("aside", student.info, "pushRight")
  studentDiv.innerHTML = studentElem
}


console.log(element("h1", "name", "bold", "moreStuff"))