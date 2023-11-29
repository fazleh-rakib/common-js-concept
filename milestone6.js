const company ={
 employee : {
    name : 'rahman ali',
    salary: 20000,
    post : 'web developer'
 },
 array : [1,2,3,4],
 morning : function(){
    return {
        employee :this.employee.name,
        employee :this.employee.salary,
        array: this.array
    }
 }

}
const nameAli = company.employee.name
const salary = company.employee.salary

const stringVari = `Highest Salary Gose to ${nameAli} .And his salary is ${salary}`
console.log(stringVari);


const result = (company.morning())
// console.log(result);