import { format } from 'date-fns'

let today = format(new Date(), 'E-do')
const todaysDateDisplay = document.querySelector('.todaysDate')
console.log(today)

//DATE and DATE FORMATING ---------------------------------------------

function updateTodaysDate(today) {
  let todayArr = today.split('-')
  let todaysDate = `${todayArr[0]} ${todayArr[1]}`
  todaysDateDisplay.innerText = todaysDate
}

function formatDate(date) {
  let dateArr = date.split('-')
  let year = Number(dateArr[0])
  let month = Number(dateArr[1]) - 1
  let day = Number(dateArr[2])

  let newDate = new Date(year, month, day)
  let formattedDate = format(newDate, 'E-dd-MM-yyyy')
  //console.log(formattedDate)
  return formattedDate
}

export {updateTodaysDate, formatDate}