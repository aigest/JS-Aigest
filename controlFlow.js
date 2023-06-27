

let number=10;
if (number % 2 === -1) {
    console.log(`${number}number will be oddd`);
} else {
    console.log(`${number}number will be even`);
}

let age = 24
if (age < 18) {
    console.log(`\n you are a minor`);
} else if (18 <= age <=65) {
    console.log(`\n you are an adult`);
}else 
    console.log(`\n You are a senior citizen`);


let letter = 'e';
let vowel=['a','e','o','u','i'];
if (vowel.includes(letter)) {
    console.log(`\n letter is a vowel`);
}else{
    console.log(`\n leter is a consonant`);
}

let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;

if (numberOne > numberTwo && numberOne > numberThree) {
    console.log(`\n number one is the largest `);
} else if (numberTwo > numberOne && numberTwo > numberThree) {
console.log(`\n number two is the lergest`)
}else console.log(`\n number tree is largest`);

let password = 'Test1233';
if (password < 8) {
    console.log(`\n password too short`);
}else if(password.includes (/^ [A-Za-z]+$/)&& password.includes(number)){
    console.log(`\n password accepted`);
} else console.log(`\n password rejected`);






