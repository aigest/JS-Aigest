coder = 'I am a good programmer';
console.log(l`\n type of the variable is :${typeof coder}`);

let coderLength = coder.length;
console.log(`\n length of the variable is :${coderLength}`);

let convertUppercase = coder.toUpperCase();
console.log(`\n string in upercase :${convertUppercase}`);

let convertLowercase = coder.toLowerCase();
console.log(`\n string in lowercase :${convertLowercase}`);

let includeGood = coder.includes('good');
console.log(`\n is word good included :${includeGood}`);

let stripOutProgrammer = coder.replace('programmer', '');
console.log(`${stripOutProgrammer}`);

let endsWithProgrammer = coder.endsWith('programmer');
console.log(`\n does program ends with :${endsWithProgrammer}`);

let splitVar = coder.split('good');
console.log(`${splitVar}`);


