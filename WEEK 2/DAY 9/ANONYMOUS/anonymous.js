//Print odd numbers in an array 



var odd = function (arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i])
        }
    }
}

var ans = odd([1,2,3,4])


//Convert all the strings to title caps in a string array


var uppercase = function (arr) {
    for (i = 0; i < arr.length; i++) {
        
       console.log(arr[i].toUpperCase())
        }
    
}
var ans = uppercase(["Chennai","trichy"])



 
//Sum of all numbers in an array

   

 var sum = function (arr) {
        var sum = 0
        for (i = 0; i < arr.length; i++) {
            sum =sum+arr[i];
    
        }
        console.log(sum)
        }

 var ans = sum([1,2,3,4])
  
//Return all the palindromes in an array 
var palindrome = function (num) {
    var str = String(num)
    var arr = str.split('').map((val)=>Number(val))
    
    var len = (arr.length)-1
    var alen = arr.length
    var count =0
    for (i = 0; i < arr.length; i++) {
        if(arr[i]===arr[len-i])
        count++
    }
    if(count==alen)
    return true
    else
    return false
    
    }

var arr = [2,67,878,9009]
var palindromearray = arr.filter(palindrome)
console.log(palindromearray)


//Return all the prime numbers in an array
function Prime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0) return 0;
    }
    return 1;
}
var arr = [2,67,878,9009]
var primearray = arr.filter(Prime)
console.log(primearray)

//Remove duplicates from an array
function removeduplicates (arr)
{
    uniquearr = new Set(arr);
    console.log(uniquearr)
}

var ans = removeduplicates([1,8,9,2,5,8,9,2,6,9,0])

//Rotate an array by k times and return the rotated array
var rotate = function(arr, k){
    var splittedArr = arr.splice(0, k);
    console.log( arr.concat(splittedArr));
}
var ans = rotate([1,2,3,4],2)

//Return median of two sorted arrays of same size 
var median = function(arr1,arr2){
    var finalarr = arr1.concat(arr2)
    var len = finalarr.length
    console.log(finalarr[len/2-1],finalarr[len/2])
};
var arr1 = [1,2,3];
var arr2 = [1,2,3]
var ans = median(arr1,arr2)

