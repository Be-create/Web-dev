var rectangle = {}
    
rectangle.length = 22;
rectangle.breadth = 50;
rectangle.perimeter = function (){
    var p = 2*(rectangle.length+rectangle.breadth);
    console.log(p);
}
rectangle.area = function (){
var a = rectangle.length*rectangle.breadth;
console.log(a);
}
rectangle.perimeter();
rectangle.area();
