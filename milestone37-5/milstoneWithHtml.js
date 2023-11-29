const student = {
  number: 1,
  name: "Shimul",
  isPass: true,
  car: [1, 2, 4],
  math: {
    sub: "math",
    marks: 85,
  },
  exam: function () {
    return {
      name: this.name,
      pass: this.isPass,
    };
  },
};

const divContainer = document.getElementById("div-container");
const div = document.createElement("div");
div.innerHTML = `
   <h2>Name: ${student.name}</h2>
   <h2>Number: ${student.number}</h2>
   <h2>Is he pass : ${student.isPass}</h2>
   <h2>His Subject ${student.math.sub}</h2>
   <h2>His Marks : ${student.math.marks}</h2>
   <h2>He Has ${student.car[1]} car</h2>
   `;
divContainer.appendChild(div);

function singleCar() {
  student.car.forEach((car) => {
    console.log(car);
    const divCompo = document.getElementById("ul-component");
    const ul = document.createElement("ul");
    ul.innerHTML = `
     <li>Car :${car}</li>
     `;
    divCompo.appendChild(ul);
  });
}
singleCar();

const funcComponent = document.getElementById("func-component");
const funcDiv = document.createElement("div");
funcDiv.innerHTML = `
   <h2>Name : ${student.exam().name}</h2>
   <h2>He Pass the exam : ${student.exam().pass}</h2>

`
funcComponent.appendChild(funcDiv)
;

