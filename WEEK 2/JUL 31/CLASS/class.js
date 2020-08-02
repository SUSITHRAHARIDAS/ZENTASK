//MOVIE
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(){
        if(this.rating = 'PG13') 
        return 'Yes'
        else
        return 'No';
}
}

    var  Movie1 = new Movie("Casino Royale", "Eon Production", "PG13");


    //TV
    
class TV{
    constructor(brand,channel=1,price,inches,ONOFFStatus,volume="50"){
            this.brand = brand
            this.channel = channel
            this.price=price
            this.inches=inches
            this.ONOFFStatus = ONOFFStatus
            this.volume =volume;
    }

   IncVolume(){
        if(0< this.volume ) 
        this.volume++;
    }
    DecVolume(){
        if( this.volume < 100) 
        this.volume--;
    }


   SetChannel(){
    if(value > 50)
    return this.channel = 50;
    }

    reset(){
        this.channel =1;
        this.volume = 50;
    }

    status(){
        return this.brand + ' at channel ' + this.channel + ', volume' + this.volume;
    }

  
    }


    class LEDTV{
        constructor(screenthickness, energyuse, lifespan, refreshrate){
            super(args);
            this.screenthickness = screenthickness;
            this.energyuse = energyuse;
            this.lifespan = lifespan;
            this.refreshrate = refreshrate;
        }
    
        viewingAngel()
        { return this.viewingAngel;}
        backLight()
        { return this.backLight;}
        display()
        { return  "ScreenThickness:"+ this.screenthickness +"EnergyUse:" +this.energyuse +"LifeSpan:"+this.lifespan +"RefreshRate:"+this.refreshrate }
    }
    
    
    class PlasmaTv{
        constructor(screenthickness, energyuse, lifespan, refreshrate){
            super(args);
            this.screenthickness = screenthickness;
            this.energyuse = energyuse;
            this.lifespan = lifespan;
            this.refreshrate = refreshrate;
        }
    
        viewingAngel()
        { return this.viewingAngel;}
        backLight()
        { return this.backLight;}
        display()
        { return  "ScreenThickness:"+ this.screenthickness +"EnergyUse:" +this.energyuse +"LifeSpan:"+this.lifespan +"RefreshRate:"+this.refreshrate }
    }

    //CIRCLE
    class CIRCLE{
        constructor(radius,color,...arg){
            this.radius = radius
            this.color = color;

        }
        getRadius()
        {return this.radius;}
        getcolor()
        {return this.color;}
        setRadius(value)
        {this.radius = value;}
        setColor(value)
        {this.color = value;}
        toString()
        {return  "Radius is" + this.radius + "Colour is"+ this.color;}
        getArea()
        { return  2 *3.14 * this.radius;}
    }
    
    var cir1 = new CIRCLE();
    var cir2 = new CIRCLE(5);
    var cir3 = new CIRCLE(8, "blue");

    //BANK
    class Bank{
        
        constructor(code, address){
            this.code = code;
            this.address = address;
        }
    
        manages(){}
        maintains(){}
    }
    class Customer{
        constructor(name,address,dob,cardNumber,pin, name,address,dob,cardNumber,pin)
        {
        this.name =name
        this.address = address
        this.dob=dob
        this.cardNumber=cardNumber
        this.pin=pin
        }
        
        verifypassword(){}
       
    }
    
    class Account{
        constructor(number,balance){
        this.number=number;
        this,balance=balance;
    }
        deposit(){}
        withdraw(){}
        createTransaction(){}
    }
    
    class ATM{
        constructor(location,managedby){
        this.location = location;
        this.managedby=managedby;
        }
        idenfies(){}
        transaction(){}
    }
    
    class ATM_Transaction{
        constructor(transactionId,date,type,postBalance){
        this.transactionId =transactionId;
        this.date=date;
        this.type=type;
        this.amount=amount;
        this.postBalance=postBalance;}
        modifies(){}
    }
    
    class CurrentAccount extends Account{
    }
    
    class SavingAccount extends Account{
        
    }

    