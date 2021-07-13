let lat,long;
let key='5b637bffc6ea5f50625e92128dba5007';
navigator.geolocation.getCurrentPosition(sucess,err);

function sucess(pos){
     lat  = pos.coords.latitude;
     long  = pos.coords.longitude;
    getUsersData(lat,long);




}
function err(){

}

function getWeatherDetails(){

}

function getUsersData(lat,long){
    let apiKey="5b637bffc6ea5f50625e92128dba5007";
    var xhr=new XMLHttpRequest();
    xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var p=xhr.responseText;
            var parseUser=JSON.parse(p);   
  
        
            document.getElementById("desc").innerHTML=`${parseUser.weather[0].description} °C`;
            document.getElementById("temp").innerHTML=`${parseUser.main.temp} °C`;
          
        document.getElementById("max").innerHTML=`${parseUser.main.temp_max} °C`;
            document.getElementById("min").innerHTML=`${parseUser.main.temp_min} °C`;
            document.getElementById("win-speed").innerHTML=`${parseUser.wind.speed}`;
        document.getElementById("c").innerHTML=`${parseUser.name}`;


        }
    };

    xhr.send();
}



