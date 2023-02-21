function changeDate() {
    let now = new Date();
    let first = now.getDate();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let second = days[now.getDay()];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let third = months[now.getMonth()];
    let showToday = document.querySelector("#today");
    showToday.innerHTML = `${second}, ${third} ${first}`;
  }
  
  changeDate();
  
  /*function citySearch(event) {
    event.preventDefault();
    let inputSearch = document.querySelector("#search");
    let titleCity = document.querySelector("#titleCity");
    titleCity.innerHTML = `${inputSearch.value}`;
  }*/
  
  function displayWeatherCondition(response) {
    document.querySelector("#titleCity").innerHTML = response.data.name;
    document.querySelector("#principal").innerHTML = `${Math.round(
      response.data.main.temp
    )}°`;
    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;
  }
  
  function searchCity(city) {
    let apiKey = "2718952144ed077c12e7c160fb6fc351";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search").value;
    searchCity(city);
  }
  
  let searchForm = document.querySelector("#searching");
  searchForm.addEventListener("click", handleSubmit);
  
  searchCity("Miami");
  