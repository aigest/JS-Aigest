//spread1
let data1 = [1,2,3]
let data2 = [4,5,6]
let newData = [...data1, ...data2]
console.log (newData);

//spread2
let array1 = ['London', 'Roma', 'Paris'];
let array2 = ['Tirana', 'Athena', 'Vienna'];
let array3 = [...array2,...array1];
console.log(array3);

//spread3
let basicInfo = {
    firstName : 'Aigest',
    lastName : 'Tani',
    age : 30,
    gender : 'male',  
}
let interest = {
    cars : ['Bmw', 'Bmw', 'Range Rover'],
}
 let userProfile = {...basicInfo, ...interest};
 console.log(userProfile);

//spread4
let arrayx = [2,5,9,7,6,3,4,1,8];



 //spread5
 let capitals = ['London', 'Roma','Paris','Tirana','Athena','Vienna' ]
 let sortedCapitals = capitals.sort();
 console.log(sortedCapitals);


