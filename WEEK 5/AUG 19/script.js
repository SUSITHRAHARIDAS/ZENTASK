async function restcountry(){
    try{
    var countriesraw =await fetch("https://restcountries.eu/rest/v2/all")
    var restcountries = await countriesraw.json();
    console.log(restcountries);
for(i=0;i<restcountries.length;i++){

var outer = document.createElement('div')
outer.setAttribute('class','container');
outer.setAttribute('style','width:300px')

var row =document.createElement('row')
row.setAttribute('class','row');

var col =document.createElement('col')
col.setAttribute('class','col-4');




//card
var card = document.createElement('div');
card.setAttribute('class','card');
//header
var cardheader = document.createElement('div');
cardheader.setAttribute('class','card-header');
cardheader.setAttribute('style','background-color:khaki;text-align:center;font-size:40px');
cardheader.innerText = restcountries[i]["name"]
//img
var flag = document.createElement('img')
flag.setAttribute('src',restcountries[i]["flag"])
flag.setAttribute('style','height:100px;width:200px')
flag.setAttribute('class',"card-img-top")

//card body
var cardbody = document.createElement('div');
cardbody.setAttribute('class','card-body');

//list of details
var list =document.createElement('ul')
list.setAttribute('class','list-group list-group-flush')
var capital =document.createElement('li')
capital.setAttribute('class','list-group-item')
capital.innerText= "Capital :"+ " " +restcountries[i]["capital"]
var region =document.createElement('li')
region.setAttribute('class','list-group-item')
region.innerText="Region :"+ " " +restcountries[i]["region"]
var latlng =document.createElement('li')
latlng.setAttribute('class','list-group-item')
latlng.innerText= "LatLng :"+ " " +restcountries[i]["latlng"]

 lat = restcountries[i]["latlng"][0]
 lon = restcountries[i]["latlng"][1]
var code =document.createElement('li')
code.setAttribute('class','list-group-item')
code.innerText= "CountryCode :"+ " " +restcountries[i]["alpha3Code"]




//button
var button =document.createElement('button')
button.setAttribute('class','btn-primary')


button.setAttribute('onclick',"weather(lat,lon)")


button.innerText = "Click For Weather"


list.append(capital,region,latlng,code)
cardbody.append(list,button)
card.append(cardheader,flag,cardbody)


outer.append(card)
document.body.append(outer)




}


}

catch{console.log("Error")}
}


restcountry()

async function weather(x,y){
    var apifetch =await fetch("http://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=4d28367ef9a7022ee96d046c2a1f2b5f")
    var openweather = await apifetch.json();
    console.log(openweather);
    alert(openweather.weather[0]['description']+openweather.main)

}



