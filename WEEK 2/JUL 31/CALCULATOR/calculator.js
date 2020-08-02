class cal{
    constructor(a,b){
        this.a =a;
        this.b =b;
    }
    
        add () { return this.a+this.b}
        sub (){ return this.a-this.b}
        mul (){ return this.a*this.b}
        div (){ return this.a/this.b}  
    }
var calculator = new cal(6,6)
console.log(calculator.add())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())