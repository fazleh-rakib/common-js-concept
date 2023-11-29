/* problem 1 */

const company = {
  employee: {
    name: "rahman ali",
    salary: 20000,
    post: "web developer",
  },
  array: [1, 5, 3, 4],
  morning: function () {
    return {
      employee: this.employee.name,
      salary: this.employee.salary,
      array: this.array,
      post: this.employee.post,
      morning: this.morning,
    };
  },
};
const nameAli = company.employee.name;
const salary = company.employee.salary;
const arrayVAlue = company.array[1];
/*------- problem 2-----
---------------------  */

const stringVari = `Highest Salary Gose to ${nameAli} .And his salary is ${salary} . here is 1st index of array ${arrayVAlue}`;
// console.log(stringVari);

// const result = (company.morning())
// const result2 = stringVari
// console.log(result );

// 3.1 problem
const no = () => 89;
// console.log(no());

// 3.2 problem

const div = (num) => {
  let reminder = num / 17;
  return reminder;
};
// console.log(div(1000));
// problem -3.3

const sum = (a, b) => {
  return (a + b) / 2;
};

// console.log(sum(2,10));

// problem 3.4

const add = (a, b) => {
  let x = a + 7;
  let y = b + 7;
  const adding = x + y;
  return adding;
};

// console.log(add(10,16));

// problem - 4

const array = [5, 6, 3, 7, 8];
const newArray = [];
const arrayResult = array.map((i) => {
  // console.log(i);
  let div = i / 7;

  newArray.push(Number(div.toFixed(2)));
});
// console.log(newArray);

// problem 6 
const[a,c,b]= [23, 3, 4, 6, 7];
const balance = c
console.log(balance);