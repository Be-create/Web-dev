var e_commerce = {
    products : ["earphone","headphone","earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
    total_price : function(){
        var sum=0;
for(i=0;i<this.products.length;i++){
    
    sum+= this.quantity[i]*this.price[i];
}
console.log(sum);
    }
   
}
e_commerce.total_price()
