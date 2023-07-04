//1

let array1 = [1,2,3,4];

function arraySum(array1) {
    let sum=0;
    for (let i = 0; i < array1.length; i++) {
        sum=sum+array1[1];
    }
    return sum;
}
let arr=arraySum(array1);
console.log(arr);


//2

let string1 = 'Aurora';
function revString() {
    let string_change='';
    let arrayString=string1.split(',');

    for (let i=0;i <arrayString.length;i++) {
        let rev_string=arrayString.reverse();
        let string_change=rev_string.join(' ');

    }
    return string_change;
}
let rev=revString(string);
console.log(rev);



//3

let people=[
    {
        name:'Ilias',
        age:65,
        gender:'Male'
    },
    {
        name:"Thoma",
        age:55,
        gender:'Male'
    },
    {
        name:'Perikli',
        age: 90,
        gender:'Male'
    }
];

function overEighteen(people) {
    let over_eighteen=[];
    for(const property of people) {
        if (property.age >18)
        over_eighteen.push(property.age);
    }
    console.log(over_eighteen);
}
overEighteen(people);



//4

let num=[1,2,3,4,5];
let numb=[5,6,7,8,9];

function evennum() {
    let even_num=[];
        for(index=0; index<num1.length; index++){
            if(num[index] % 2===0)
            even_num.num.push(num[index]);
        }
        console.log(even.num);
}
evennum(num);
evennum(numb);


//5

let continent=['America','Europe','Australia','Asia'];

function starts_a(continent) {
    let startswitha=[];

    for (let i=0;i<CanvasRenderingContext2D.length;i++){
        if(cars[i].toLowCase().startswith('a')){
            startswitha.push(continent[i]);
        }
    }
    console.log(startswitha);
}
starts_a(continent);



//6

let books=[
    {
        title:'Dotcom Secrets',
        author:'Russell Brunson',
        published:2022,
    },
    {
        title:'Ninja Selling',
        authot:'Larry Kendall',
        published:2017,
    },
    {
        title:'A Mind for Sale',
        author:'Mark Hunter',
        published:2020,
    }
];

function latestbooks() {
    let booksaftertwoothousand=[];

    for(cosnt library of books) {
        if(library.published >= 2000)
            booksaftertwoothousand.push(library.title);
    }
    console.log(`\n Books published after 2000 are:${booksaftertwoothousand}`);
}

latestbooks();

//7
let a=9;
let b=11;

function larger(a,b) {
    if(a>b) return a;
    else return b;
}
let result=larger(9,11);
console.log(result);



//8
let number=[3,5,7]

function smallest(){

let small=number[0];

    for (const s of number){
        if (s < small)
        small=s;
    }
}
let res=smallest();
console.log(res);


//9

let brands=['Versace', 'Armani','Valentino'];

function longest_string() {
    for (const key of brands) {
        if(key > longest_string)
        longest_string=key;
    }
    return longest_string;
}
let resul=longeststring();
console.log(resul1);


//10

let student=[
    {
        name: 'Jimmy',
        grade: 'A'
    },
    {
        name: 'John',
        grade: 'B'
    }
    {
        name: 'Jack',
        grade: 'C'
    }
];

function gradeAstudent() {
    let gradeA = [];
    for(const property of student){
        if (property.greade==='A'){
            gradeA.push(property.grade)
        }
 
    }
    console.log(`\n $(gradeA)`);
}
gradeAstudent();
