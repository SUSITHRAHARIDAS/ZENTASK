var pro = new Promise (function(resolve,reject){

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200)
    {resolve(request.responseText)}
    if(this.readyState==4 && this.status!=200)
    {reject("Error")}
}

request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true)
request.send()
})


pro.then(function(data){ var restcountries =JSON.parse(data);console.log(restcountries);



for(i=0;i<restcountries.length;i++){
var outer = document.createElement('div')
outer.setAttribute('class','container');
var card = document.createElement('div');
card.setAttribute('class','card');
var cardtitle = document.createElement('div');
cardtitle.setAttribute('class','card-title');
cardtitle.innerText = restcountries[i]["name"]

var list =document.createElement('ul')
list.setAttribute('class','list-group list-group-flush')
var capital =document.createElement('li')
capital.setAttribute('class','list-group-item')
capital.innerText=restcountries[i]["capital"]
var region =document.createElement('li')
region.setAttribute('class','list-group-item')
region.innerText=restcountries[i]["region"]
var lat =document.createElement('li')
lat.setAttribute('class','list-group-item')
lat.innerText=restcountries[i]["latlng"]
var currency =document.createElement('li')
currency.setAttribute('class','list-group-item')
currency.innerHTML=restcountries[i]["currencies"]

var flag = document.createElement('img')
flag.setAttribute('src',restcountries[i]["flag"])
flag.setAttribute('style','height:100px;width:200px')
flag.setAttribute('class',"card-img-bottom")



list.append(capital,region,lat)


card.append(cardtitle,list,flag)
outer.append(card)
document.body.append(outer)







}
})