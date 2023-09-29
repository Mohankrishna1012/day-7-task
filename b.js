var request = new XMLHttpRequest();
       request.open('GET','https://restcountries.com/v2/all', true);
       request.send();
       request.onload = function(){
       var data = JSON.parse(request.response);
        const population = data.filter((element)=>{return element.population<200000;})
    console.log(population);}
