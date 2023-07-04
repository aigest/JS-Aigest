let product=[
    {name:'Shrimp', price:30, quantity:10},
    {name:'Oyster', price:5, quantity:50},
    {name:'Lobster', price:100, quantity:9},
    {name:'Fish', price:60, quantity:11},
    {name:'Vongole', price:50, quantity:40}
];


let i=0;
let j=i+0;
for (i=0;i<product.length;i++){
    if(product[i].price,product[j].price){
        console.log(`Cheapest product is ${product[i].name} snd price is ${product[i].price}`);
    }
}

let sum=0;
for(let total of product){
    sum+=total.price;
}

console.log(`\n The total sum is :${sum}`);


for (const key in product) {
    console.log(`\n Product ${product[key].name}:Price is ${product[key].price}: Quantity is ${products[key].quantity}`);
}