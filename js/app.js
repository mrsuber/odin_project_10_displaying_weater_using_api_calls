// IDBDatabase
let database={
  page_title:" Weather Report",
  place_holder:"Enter Location For Weather Report"


}
//function to hit api and return json data
// search Form

const pageTitle = document.createElement('title')
const pageContainer = document.createElement('div')
const mealWrapper = document.createElement('div')
const mealSearch = document.createElement('div')



const mealSearchBox = document.createElement('div')
const searchInput = document.createElement('input')
const searchInputBtn = document.createElement('button')
const searchInputBtnIcon = document.createElement('i')




pageTitle.innerText=database.page_title;
pageContainer.classList.add('container');
mealWrapper.classList.add('meal-wrapper')

mealSearch.classList.add('meal-search')
mealSearchBox.classList.add('meal-search-box')
searchInput.classList.add('search-control')
searchInput.id="search-input"
searchInput.type = "text"
searchInput.placeholder=database.place_holder
searchInputBtn.classList.add('search-btn')
searchInputBtn.id="search-btn"
searchInputBtn.classList.add('btn')
searchInputBtnIcon.classList.add('fa')
searchInputBtnIcon.classList.add('fa-search')


// append it the html
const pageHead = document.querySelector('head')
const body = document.querySelector('body')
pageHead.appendChild(pageTitle)


body.appendChild(pageContainer)
pageContainer.appendChild(mealWrapper)
mealWrapper.appendChild(mealSearch)


mealSearch.appendChild(mealSearchBox)
mealSearchBox.appendChild(searchInput)
mealSearchBox.appendChild(searchInputBtn)
searchInputBtn.appendChild(searchInputBtnIcon)


// querySelector
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', requestWeatherData);

async function requestWeatherData(event){
  // event.preventDefault();
  let searchInputTxt = document.getElementById('search-input').value.trim();
  if (searchInputTxt===""){
    alert("Enter location")
  }
  // console.log(searchInputTxt)
  // const place = "buea"
  const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q='+searchInputTxt)

  const responseData = await response.json()
  console.log(responseData.current)

}
