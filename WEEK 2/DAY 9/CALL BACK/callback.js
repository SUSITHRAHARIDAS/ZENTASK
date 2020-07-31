var operator = [add, sub, mul, div]

function multi(num, operator) {
    val1 = 10;
    val2 = 20;
    var c = operator[num];
    var f = c(val1, val2)
    return f
}

function add(d, e) {
    return d + e
}

function sub(d, e) {
    return d - e
}

function mul(d, e) {
    return d * e
}

function div(d, e) {
    return d / e
}

var addition = multi(0, operator);
var subraction = multi(1, operator)
var multiplication = multi(2, operator);
var division = multi(3, operator);
console.log(addition)
console.log(subraction)
console.log(multiplication)
console.log(division)









var add =function(a,b,c) {
    
   return a+b+c
}

 

 var a = add(20,30)// 20+30+10 =60




