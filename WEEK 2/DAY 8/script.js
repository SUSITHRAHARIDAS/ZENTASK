/*Write a function called “addFive”.Given a number, “addFive” returns 5 added to that number.*/
function addFive(a) {
    c = Math.abs(a)
    b = c + 5;
    return b
}
var out1 = addFive(5);
var out2 = addFive(0);
var out3 = addFive(-5);
console.log(out1)
console.log(out2)
console.log(out3)

/*Write a function called “getOpposite”.Given a number, return its opposite*/
function getOpposite(a) {
    if (Number.isInteger(a))
        console.log(a * (-1))
    else
        console.log(-1)
}
var out1 = getOpposite(5);
var out2 = getOpposite(0);
var out3 = getOpposite(-5);
var out4 = getOpposite("5a");
var out5 = getOpposite(5.5);;

/*Fill in your code that takes an number minutes and converts it to seconds.*/
function toSeconds(a) {
    b = a * 60;
    return b
}
var out1 = toSeconds(5)
var out2 = toSeconds(3)
var out3 = toSeconds(2)
console.log(out1)
console.log(out2)
console.log(out3)

/*Create a function that takes a string and returns it as an integer.*/
function toInteger(a) {
    b = parseInt(a)
    return b
}
var out1 = toInteger("6")
var out2 = toInteger("1000")
var out3 = toInteger("12")
console.log(out1)
console.log(out2)
console.log(out3)

/*Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/
function nextNumber(a) {
    a++
    return a
}
var out1 = nextNumber(0)
var out2 = nextNumber(9)
var out3 = nextNumber(-3)
console.log(out1)
console.log(out2)
console.log(out3)

/*Create a function that takes an array and returns the first element.*/
function getFirstElement(a) {
    b = a[0]
    return b
}
var out1 = getFirstElement([1, 2, 3])
var out2 = getFirstElement([80, 5, 100])
var out3 = getFirstElement([-500, 0, 50])
console.log(out1)
console.log(out2)
console.log(out3)

/*Convert Hours into Seconds*/
function hrtoSeconds(a) {
    b = a * 3600;
    return b
}
var out1 = hrtoSeconds(2)
var out2 = hrtoSeconds(10)
var out3 = hrtoSeconds(24)
console.log(out1)
console.log(out2)
console.log(out3)

/*Find the Perimeter of a RectangleCreate a function that takes height and width and finds the perimeter of a rectangle.*/
function findPerimeter(a, b) {
    c = 2 * (a + b)
    console.log(c)
}
var out1 = findPerimeter(6, 7)
var out2 = findPerimeter(20, 10)
var out3 = findPerimeter(2, 9)

/*Less Than 100? Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.*/
function lessThan100(num1, num2) {
    a = num1 + num2;
    if (a < 100)
        console.log(true)
    else
        console.log(false)
}
var res = lessThan100(22, 15)
var les = lessThan100(83, 34)
/*There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.*/
function remainder(num1, num2) {
    c = num1 % num2
    console.log(c)
}
var res = remainder(1, 3)
var res = remainder(3, 4)
var res = remainder(-9, 45)
var res = remainder(5, 5)

/*Old macdonald had a farm:
MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.*/
function CountAnimals(tur, horse, pigs) {
    var a = ((tur * 2) + (horse * 4) + (pigs * 4))
    console.log(a)
}
var legs = CountAnimals(2, 3, 5)
var legs = CountAnimals(1, 2, 3)
var legs = CountAnimals(5, 2, 8)
/*Frames Per SecondCreate a function that returns the number of frames shown in a given number of minutes for a certain FPS.*/
function frames(num1, num2) {
    var a = num1 * num2 * 60
    console.log(a)
}
var fps = frames(1, 2)
var fps = frames(1, 1)
var fps = frames(10, 1)
var fps = frames(10, 25)
/*Check if an Integer is Divisible By FiveCreate a function that returns true if an integer is evenly divisible by 5, and false otherwise*/
function divisibleByFive(num1) {
    if (num1 % 5 == 0)
        console.log(true)
    else
        console.log(false)
}
var divisible = divisibleByFive(5)
var divisible = divisibleByFive(37)
var divisible = divisibleByFive(-55)
/*Write a function called “isEven”.Given a number, “isEven” returns whether it is even.*/
function isEven(num) {
    var a = Number(num) 
    {
        if (isNaN(a))
            console.log(-1)
        else if (a % 2 == 0)
            console.log(true)
        else if (a % 2 != 0)
            console.log(false)
    }
}
var even = isEven(5)
var even = isEven(12);
var even = isEven(0);
var even = isEven(11);
var even = isEven("11h");
/*Write a function called “areBothOdd”.Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.*/
function areBothOdd(num1, num2) {
    if ((num1 % 2 != 0) && (num2 % 2 != 0))
        console.log(true)
    else
        console.log(false)
}
var a = areBothOdd(1, 3);
var a = areBothOdd(1, 4);
var a = areBothOdd(2, 3);
var a = areBothOdd(0, 0);

/* Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.*/
function getFullName(firstName, lastName) {

    {
        var a = '\" ' + firstName + " " + lastName + '\" '
    }


    console.log(a)
}
var out = getFullName("GUVI", "GEEK");
var out = getFullName("GUVI", " ");
var out = getFullName(" ", "GEEK");
var out = getFullName("", "");

/*Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length*/
function isSameLength(word1, word2) {
    a = word1.length
    b = word2.length
    if (a == b)
        console.log(true)
    else
        console.log(false)
}
var out = isSameLength("GUVI", "GEEK")
var out = isSameLength("GUVI", "ZEN")

/*Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.*/
function getNthElement(arr, N) {
    console.log(arr[N])
}
var res = getNthElement([1, 3, 5], 1)
var res = getNthElement(1)
/*Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.*/
function getLastElement(arr) {
    if (arr.length == 0)
        console.log(-1)
    else
        console.log(arr[(arr.length) - 1])
}
var res = getLastElement([1, 2, 3, 4]);
var res = getLastElement([1, 2, 3, 4])
var res = getLastElement([])
/*Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.*/
var obj = {
    mykey: "value"
};

function getProperty(obj, key) {
    console.log(obj[key])
}
var res = getProperty(obj, "mykey");
var res = getProperty(obj, "dummykey");

/*Write a function called “addProperty”.
Given an object and a key, “addProperty” adds a new property on the given object with a value of true.*/
function addProperty(obj, key) {
    obj[key] = true

}
var obj = {}

var res = addProperty(obj, "mykey");
console.log(obj)

/*Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.*/

function removeProperty(obj, key) {
    delete obj[key]
    console.log(obj)
}
var obj = {
    1: "name",
    "name": "susi"
}

var res = removeProperty(obj, "name");


  

/*Create a function that receives an array of numbers and returns an array containing only the positive numbers*/
function getPositives(ar)
{var ar2=[]
for(i=0;i<ar.length;i++)
 {if(ar[i]>=0)
 ar2.push(ar[i])};
return ar2}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);
/*Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).*/
function powersOfTwo(n)
{var res=1;
for(i=1;i<=n;i++)
{res = res*2}
    return res;
}
console.log(powersOfTwo(4))
/*Find the maximum number in an array of numbers*/
function findMax(ar)
{var ar2=[]
ar2=ar.sort(function (a,b) {return b-a})
max=ar2[0];
return max
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max:"+" " + max);
/*Reverse a string*/
function reverseString(s)
{
   b=s.split("");
   c=b.reverse();
   d=c.join("")
   return d;
}
var s = reverseString("Java Script");
console.log(d)
/*Create a function that will merge two arrays and return the result as a new array*/
function mergeArrays(ar1, ar2)
{
 var result = []
 result=ar1.concat(ar2);
return result}
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
/*Calculate the sum of numbers received in a comma delimited string*/
function sumCSV(s)
{
  b=s.split(",").map(val=>parseFloat(val))
  sum=0;
  for(i=0;i<b.length;i++)
  {sum=sum+b[i]}
  return sum
}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
console.log(sumCSV("1,2,3,4,5"));






/*Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.*/

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var
    ar2 = function countPositivesSumNegatives(arr) {
        var sump = 0
        var sumn = 0
        var resarr = []
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > 0)
                sump = sump + arr[i]
            else
                sumn = sumn + arr[i]
        }
        resarr[0] = sump;
        resarr[1] = sumn;
        return resarr

    }
console.log(ar2(arr));
console.log((ar2([1, 2, 3, -1, -2, -3])))




/*Create a function to calculate the distance between two points defined by their x, y coordinates*/
function getDistance(x1, y1, x2, y2) {
    var c = []
    a =(x1*x1)+(y1*y1);
    a1=Math.sqrt(a)
    b = (x2*x2)+(y2*y2);
    b1=Math.sqrt(b)
    c.push(a1);
    c.push(b1);
    return c
}
console.log(getDistance(100, 100, 400, 300));


/*Print the first 100 prime numbers*/

function printprime(num) {
    var res = [];
    for (let i = 0; i < 1000; i++) {
        if (isprime(i)) {
            res.push(i)
        if(res.length==num)
        break
        }
    }




    console.log(res)

}

function isprime(n) {
    if (n <= 1) {
        return false
    }
    if (n == 2) {
        return true
    }
    if (n > 2) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0)
                return false
        }
    }
    return true
}

var b = printprime(100)



/*Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”*/
function isprime(n) {
    if (n <= 1) {
        return false
    }
    if (n == 2) {
        return true
    }
    if (n > 2) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0)
                return false
        }
    }
    return true
}
function getprimes(N,startAt) {
    var res = [];
    for (let i = startAt; i < 1000; i++) {
        if (isprime(i)) {
            res.push(i)
        if(res.length==N)
        break
        }
    }
console.log(res)

}


var out=getprimes(10, 100);
