var prod = ["rice","dal","salt"];
var quant = [2,3,1];
var prc =[60,50,20];
var arr =[];
for(var i=0;i<prod.length;i++){
    var obj ={};
    obj.name = prod[i];
    obj.quantity = quant[i];
    obj.price = prc[i];
    arr.push(obj);
}
//console.log(arr);
var obj1 ={};
obj1.data = arr;
//console.log(obj1)
obj1.total = function (){
    var sum=0
   for(var j=0;j<arr.length;j++){
sum+=  arr[j].quantity * arr[j].price;
   }
   console.log(sum);
}
obj1.total();
