//1

class Animal{

    name='Lesi'
    speak(){
        console.log(`\n my name is:${this.name}`);
    }
}
module.export=Animal;
let object1=new Animal();
object1.speak();


//2

class Person{
    name='Iris';
    age=10;
    greet(){
        console.log(`\n Hello, my name is ${this.name} and i am ${this.age} years old`);
    };
}
let object2=new Person();
object2.greet();


//3

class car {
    make='Bmw';
    model='535';
    year=2011;
    start(){
        console.log(`\n The ${this.make} ${this.model} is starting`);
    };
}
module.exports=car;
let obj1 = new car();
obj1.start();


//4

class Rectangle{
    width=15;
    height=20;
    getarea(){
        return this.width*this.height;
    }
}
let object3=new Rectangle();
let area=object3.getarea();
console.log(`\n area of the rectangle is :${area}`);


//5

class Square extends Rectangle{
    sideLength=7;
    getarea(){
        return this.sideLength*this.sideLength;
    };
}
let object4=new Square();
let area1=object4.getarea();
console.log(`\n The area pf the new rectangle is:${area1}`);


//6

class Bankaccount{
    accountNumber=123456789;
    accountHolderName='Nick';
    balance=100;
    deposit(amount){
        return amount + this.balance;
    };
}
let object5=new Bankaccount();
let amount2=object5.deposit(20000);
console.log(`\n the amount is :${amount2}`);



//7

class Person1 {
    name='John';
    email='john123@gmail.com';
    sendemail(message){
        return message;
    };
}
let object6 = new Person1();
 let mess=object6.sendemail(`Hello`);
  console.log(`\nMessage from email is :${mess}`);


  //8

  class Product{
    name='grape';
    price= 5;
    description='merlot';
    discount(price){
        return this.price*4;
    };
  }

  let object7 = new Product();
  let fruit = object7.discount();
  console.log(`\nthe discount price is :${fruit}`);