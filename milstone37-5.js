const student = {
  number: 1,
  name: "Shimul",
  isPass: true,
  car: [1, 2, 4],
  math: {
    name: "math",
    marks: 85,
  },
  exam : function(){
    return {
        name : this.name,
        pass :this.isPass,
        car: this.car
    }
  }
};


console.log(student.exam().name);