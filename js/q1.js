


//PART I - Populate Array

// variable assigned

let largNumber1 = 7;
let largNumber2 = 100;
let smallNumber1 = 3;
let smallNumber2 = 61;

//  Loop through the employeeList Array

for(employee of employeeList) { 
  var noOftests = Math.floor(Math.random() * (7 - 3 + 1) ) + 3;
  for (i = 0; i < noOftests; i++) {
       var score = Math.floor(Math.random() * (100 - 61 + 1) ) + 61;
       employee.scores.push(score);
         }
   }
  console.log(employeeList);

 

//PART II - Summary Data

const filter = (EmpList, funct) => EmpList.filter(funct);

const results = EmpList.map(employee => {
  return {
    
  }
})



 

//PART III - Output the results

console.log(results)