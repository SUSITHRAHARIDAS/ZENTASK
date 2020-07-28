//PROBLEM 1
var object = {name: "RajiniKanth", age: 33, hasPets : false};
function printAllValues(obj) {
   let b= Object.values(obj);
   return b }
var output1=printAllValues(object)
console.log(output1)

//PROBLEM 2
var a={name : 'RajiniKanth', age : 25, hasPets : true}
function printAllKeys(obj) {
    let b=Object.keys(obj)
    return b
   }
var output2=printAllKeys(a)
console.log(output2)

//PROBLEM 3
var object = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
let b=Object.entries(obj);
return b;
   }
var output3 = convertListToObject(object)
console.log(output3)

//PROBLEM 4
var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
   let obj = {}
   obj[arr[0]] = arr[arr.length-1]
   return obj;
}
var output4 = transformFirstAndLast(arr)
console.log(output4)

//PROBLEM 5

var students = [
   {name: 'Siddharth Abhimanyu', age : 21}, { name: 'Malar', age: 25},
   {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
   {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
   {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
   {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
   {name: 'Devdas',age: 56} 
];
var less20 = students.filter((val)=>val.age<20)
console.log(less20);

//PROBLEM 6
function fromListToObject(arr) {
   var newObject = {};
   arr.forEach(data => newObject[data[0]] = data[1]);
   return newObject
}

//PROBLEM 7
function transformEmployeeData(arr) {
   var tranformEmployeeList = [];
   arr.forEach(innerArr =>{
       let obj = {}
       innerArr.forEach(data =>{
           obj[data[0]] = data[1];
       });
       tranformEmployeeList.push(obj);
   });
   return tranformEmployeeList;
}

//PROBLEM 8
function assertObjectsEqual(actual, expected, testName){
   let obj1 = JSON.stringify(actual);
   let obj2 = JSON.stringify(expected);
   return (obj1 == obj2)? 'PASSED': 'FAILED';
}

//PROBLEM 9

var securityQuestions = [
   {
   question: 'What was your first pet’s name?',
   expectedAnswer: 'FlufferNutter'
   },
   {
   question: 'What was the model year of your first car?',
   expectedAnswer: '1985'
   },
   {
   question: 'What city were you born in?',
   expectedAnswer: 'NYC'
   }
];
var ques = 'What was your first pet’s name?';
var ans  =  'FlufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status);