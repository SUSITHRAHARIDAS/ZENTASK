//REST COUNTRY API
var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send()
request.onload = function () {

    var data = JSON.parse(this.response)
    console.log(data)
}

var url ='https://restcountries.eu/rest/v2/all'
fetch (url)
.then(res=>res.json())
.then(data=>console.log(data))  

//OPEN API
var request = new XMLHttpRequest()
request.open('GET', 'https://dog.ceo/api/breeds/list/all', true)
request.send()
request.onload = function () {
    var data = JSON.parse(this.response)
    console.log(data)
}

var url ='https://dog.ceo/api/breeds/list/all'
fetch (url)
.then(res=>res.json())
.then(data=>console.log(data))


//CROS API
var request = new XMLHttpRequest()
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true)
request.send()
request.onload = function () {

    var data = JSON.parse(this.response)
    console.log(data)
}

var url ='https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com'
fetch (url)
.then(res=>res.json())
.then(data=>console.log(data))

//AUTH API
var request = new XMLHttpRequest()
request.open('GET','http://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&appid=4d28367ef9a7022ee96d046c2a1f2b5f' , true)
request.send()
request.onload = function () {

    var data = JSON.parse(this.response)
    console.log(data)
}
var url ='http://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&appid=4d28367ef9a7022ee96d046c2a1f2b5f'
fetch (url)
.then(res=>res.json())
.then(data=>console.log(data))
