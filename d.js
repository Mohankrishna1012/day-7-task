var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all', true);
request.send();
request.onload = function(){
var data = JSON.parse(request.response);
const population=data.reduce((acc,curr)=>{
         return acc+curr.population;
     },0)
console.log(population);}