var amazon = [
    {name:"Speakers", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation",price:20000, rating:5}
];
var sum=0;
var min = Infinity;
var ans;
for(var i=0;i<amazon.length;i++){
    console.log(amazon[i].name,amazon[i].price,amazon[i].rating);
    sum+=amazon[i].rating;
if(min>amazon[i].price){
    min=amazon[i].price;
    ans=amazon[i].name;
}
}
console.log("average is",sum/amazon.length);
console.log("lowest priced item is",ans);
