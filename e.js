var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload = function()
{
    var data = request.response
    var result = JSON.parse(data)
    var result1 = result.filter((ele)=>{
    for(var i in ele.currencies)
    {
        if(ele.currencies[i].code=="USD")
        {
            console.log(ele.name);
        }
    }
})

}