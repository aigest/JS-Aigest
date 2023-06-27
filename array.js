
let student =['Aigest','Iva','Katerina','Verdi','Zerina'];
let studentLength = student.length;
comnsole.log(`\n length of the array: ${studentLength}`);


let removeLastStudent = student.pop();
console.log(`\n removed last student :${removeLastStudent}`);
console.log(student);

let addLastStudent=student.push('Zerina');
console.log(`\n add last student :${addLastStudent}`);
console.log(student);

let removeFirstStudent=student.shift()
console.log(`\n remove first student :${removeFirstStudent}`);
console.log(student);

let addFirstStudent=student.unshift('Aigest');
console.log(`\ add first student:${addFirstStudent}`);
console.log(student);

let addRemoveStudent=student.splice(1,2,'Thoma','Perikli');
console.log(`\n removeand add student :${addRemoveStudent}`);
console.log(student);

let isJohnIncluded=student.includes('John');
console.log(`\n is student John included? :${isJohnIncluded}`);
console.log(student);

let newStudent=student.splice(1,2,'Kate');
console.log(student);

let reverseStudent=student.reverse();
console.log(`\n reversed student string:${reverseStudent}`);
console.log(student);

let firstStudent=student[0];
console.log(firstStudent);
let lastStudentIndex=student.length-1;
console.log(`\n index number of last student:${lastStudentIndex}`);
let lastIndexValue=student[5];
 console.log(`\n length of array:${studen.length}`);

 let compareFirstLast=firstStudent===lastIndexValue;
 console.log(`\n are they equal? :${compareFirstLast}`);
