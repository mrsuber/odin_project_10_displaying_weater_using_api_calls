// IDBDatabase
let database={
  page_title:" Weather Report",
  place_holder:"Enter Location For Weather Report"


}
//function to hit api and return json data
// search Form
//
// document.body.style.backgroundImage = "no-repeat center center fixed"
//

function searchfield(){
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


}
searchfield()
// querySelector
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', requestWeatherData);


function tableDisplay(data){
  // table creation
  const table = document.createElement('table')
  const tableHead = document.createElement('thead')
  const tableHeadRow = document.createElement('tr')
  const tableheadColomn1 = document.createElement('th')
  const tableheadColomn2 = document.createElement('th')
  const tableheadColomn3 = document.createElement('th')
  const tableheadColomn4 = document.createElement('th')
  const tableBody = document.createElement('tbody')
  const tableBodyRow = document.createElement('tr')
  const tableBodyColomn1 = document.createElement('td')
  const tableBodyColomn2 = document.createElement('td')
  const tableBodyColomn3 = document.createElement('td')
  const tableBodyColomn4 = document.createElement('td')

  tableheadColomn1.innerText = "Location"
  tableheadColomn2.innerText = "Temperature"
  tableheadColomn3.innerText = "Condition"
  tableheadColomn4.innerText = "Imagine"

  tableBodyColomn1.innerText = data.location.name+"/ "+data.location.country
  tableBodyColomn2.innerText = data.current.temp_c+"C / "+data.current.temp_f+"F"
  tableBodyColomn3.innerText = data.current.condition.text
  // document.body.style.backgroundImage = "url('"+data.current.condition.icon+')";
  // tableBodyColomn4.innerText =
  tableBodyColomn4.innerHTML='<img src="'+data.current.condition.icon+'" alt="cloud" style="width:65%; height:auto;">'
  const mealWrapper= document.querySelector('.meal-wrapper')
  mealWrapper.appendChild(table)
  table.appendChild(tableHead)
  tableHead.appendChild(tableHeadRow)
  tableHeadRow.appendChild(tableheadColomn1)
  tableHeadRow.appendChild(tableheadColomn2)
  tableHeadRow.appendChild(tableheadColomn3)
  tableHeadRow.appendChild(tableheadColomn4)

  table.appendChild(tableBody)
  tableBody.appendChild(tableBodyRow)
  tableBodyRow.appendChild(tableBodyColomn1)
  tableBodyRow.appendChild(tableBodyColomn2)
  tableBodyRow.appendChild(tableBodyColomn3)
  tableBodyRow.appendChild(tableBodyColomn4)

}

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
  console.log(responseData)
  tableDisplay(responseData)

}
