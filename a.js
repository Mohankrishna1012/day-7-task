var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var restcountries = JSON.parse(request.response);
        
   console.log(restcountries.filter((Element)=>Element.region=="Asia"));
};