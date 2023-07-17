// 2. Write a function groupBy that takes an array of objects and a property name as parameters. The function should group the objects based on the values of the given property and return an object where the keys are unique property values and the values are arrays of objects with matching property values. For example:

const students = [
    {
      name: "Alice",
      age: 20,
    },
    {
      name: "Bob",
      age: 21,
    },
    {
      name: "Charlie",
      age: 20,
    },
    {
      name: "David",
      age: 21,
    },
  ];
  
  const ans = students.reduce((result, student) => {
    const age = student.age;
  
    if (!result[age]) {
      result[age] = [];
    }
  
    result[age].push(student);
    return result;
  }, {});
  
  console.log(ans);