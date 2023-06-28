
let Employee = {
    name: 'Aigest'
    age: 30,
    salary: 100000,
    jobTitle: 'IT',
    work: function(){
        console.log(`\n studying sdet`);
    },
    takeabreake : function() {
        console.log(`\n I will take a brake at 13:00`);
    },
    attendameeting : function(){
        console.log(`\n i have a zoom meeting`);
    },
}

Employee.work();
Employee.takeabreake();
Employee.attendameeting();



let bankAccount = {
    accountNumber : 123456789,
    balance : 999999999,
    accountType : 'Savings',

    deposit : function () {
        console.log(`\n deposit 1000 dollars`);
    },
    withdrow : function () {
        console.log(`\n withdrow 500 dollars weekly`);
    },
    transfer : function () {
        console.log(`\n trasfer 500 dollars monthly`);
    },
}
console.log(`\n actual balance is:${bankAccount.balance}`);
console.log(`\n account number is:${bankAccount.accountNumber} `);
bankAccount.deposit();
bankAccount.withdrow();
bankAccount.transfer();

let dog = {
    breed : 'pitbull',
    age : 12,
    color : 'grey',
    bark:function(){
        console.log(`\n This dog barks when he dont regonise the home visitors`);
    },
    wegtail:function(){
        console.log(`\n Dog is happy `);
    },
    fetch:function(){
        console.log(`\n One way to play with the dog`);
    }
}

console.log(`\n Dog is :${dog.breed}`);
console.log(`\n Dog color is :${dog.color}`);



let newProduct = {
    name: 'Wine Bottle',
    price: 100,
    manufacturer: 'Thoma Cellar',
    category: 'Red Wine',
}
newProduct.description='Wine is made with Teroldego Grape';
console.log(`\n ${newProduct.description}`);

newProduct.price= (newProduct.price+10);
console.log(`\n New price is :${newProduct.price}`);

delete newProduct.description;




const blogPosts = [
{
    title:"The Importance of Regular Exercise",
    author:"John Doe",
    date:"2022-02-28",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
},
{
    title: "Tips for Eating Healthy on a budget",
    author:"Jane Smith",
    date:"2022-02-15",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
}
]
let emptyFieldObject=[];
for(let blogObject of blogPosts) {
    if (blogObject.date===''){
        emptyFieldObject.push(blogObject.date);
    }
}
console.log(`\n date empty is :${emptyFieldObject}`);
console.log(emptyFieldObject);



