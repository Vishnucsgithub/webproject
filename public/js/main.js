
const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name'); 
const temp_status = document.getElementById("temp_status")      ;
const temp_real_val = document.getElementById("temp_real_val")      ;
const dataHide = document.querySelector('.middle_layer');

// city_nAME = get output here wala


const getInfo =async (event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    console.log(cityVal);
    
    if(cityVal === ""){

        city_name.innerText = "Plz write the city name before search";
        dataHide.classList.add('data_hide');


    }else{



        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=657a56329b684bff8c91ee7377ff85ea` 
            const response = await fetch(url);
            console.log(response);
            const data  = await response.json()
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main

            if (tempMood == "Clear") {
                temp_status.innerHTML =
                  "<i class='fa fa-sun '  style = 'color: #eccc68'></i>";
              } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                  "<i class='fa fa-cloud '  style = 'color: #eccc68'></i>";
              } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                  "<i class='fa fa-cloud-rain '  style = 'color: #eccc68'></i>";
              } else {
                temp_status.innerHTML =
                  "<i class='fa fa-cloud '  style = 'color: #eccc68'></i>";
              }

              dataHide.classList.remove('data_hide');



        }catch{
            city_name.innerText = "Plz enter correct city name before search";
        dataHide.classList.add('data_hide');


        }
        
        
    }
}

submitBtn.addEventListener('click', getInfo);