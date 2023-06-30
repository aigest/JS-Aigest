let book=[
    {title:'The Great Gatsby'},
    {title:'Harry Potter'},
    {title:'P.S I Love You'}
];

let titleBooks=books.map(function(book){
    return book.title;
});

console.log(titleBooks);

function titleBooks(){
    let titlebook=[];
    for (const key in books) {
        titleBooks.push(books[key]);
    }
    console.log(titleBooks);
}

let product=[
    {item:'in stock', name:'waches'},
    {item:'in stock', name:'glasses'},
    {item:'not in stock', name:'wallet'},
    {item:'not in stock', name:'ring'}
];
let inStockItems=product.filter(function(prod) {
    return prod.item==='In stock';
});
console.log(inStockItems);


let users=[
    {user: 'amanda@gmail.com'},
    {user: 'stephani@gmail.com'},
    {user: 'nina@gmail.com'},
    {user: 'yassenia@gmail.com'}
];

let gmailadress=users.find(function (user){
    return users.user==='iris@gmail.com';
})
console.log(gmailadress);



let tasks=[
    {task:'complete'},
    {task:'complete'},
    {task:'uncomplete'}
];

let taskcomplete=tasks.filter(function(task){
    if (tasks.task==='complete')
    return true;
    else
    return false;
});
console.log(taskscomplete);



let products=[

    {purchaise: 3000},
    {purchaise: 5000},
    {purchaise: 9000},
];
 
let totalsum=products.map(function(sum){
    return products.sum;
});
console.log(totalsum);



let numb=[1,3,5,7,9];
let sumofnumb=numb.map(function(numb){
    return numb.sum;
})
console.log(sumofnumb);



let city=['New York','Chicago','Miami','Los Angelos',];

let uppercase=city.map(function(city){
    return city.toUpperCase();
});
console.log(uppercase);



let num=[1,3,6,4,9,8,7,];

let evennum=num.filter(function(num){
    return num % 2===0;
});
console.log(evennum);


let names=['John','Jimmy','Jerry','Bob','Joseph'];
let lengthMaxFour=names.filter(function(names){
    return names.length <= 4;
});
console.log(lengthMaxFour);