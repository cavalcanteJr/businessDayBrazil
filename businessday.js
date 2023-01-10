import fetch from "node-fetch";

function addBusinessDays(date, numDays) {
  var newDate = new Date(date.getTime());

  while (numDays > 0) {
    newDate.setDate(newDate.getDate() + 1);
    if (isBusinessDay(newDate)) {
      numDays--;
    }
  }
  return newDate;
}

function isBusinessDay(date) {
  var dayOfWeek = date.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return false;
  }
  if (isUKBankHoliday(date)) {
    return false;
  }
  return true;
}

function isUKBankHoliday(date) {
  // Faça a solicitação HTTP GET à API de feriados
  fetch("https://brasilapi.com.br/api/feriados/v1/2023")
    .then((response) => response.json())
    .then((data) => {
      // Armazene a lista de feriados em uma array
      var bankHolidays = [];
      data.forEach((event) => {
        bankHolidays.push(new Date(event.date));
      });

      if (
        bankHolidays.find((holiday) => holiday.getTime() === date.getTime())
      ) {
        return true;
      } else {
        return false;
      }
    });
}

// O objetivo é adicionar dias uteis a data atual
var date = new Date();
var bussinesDay = 3;
var newDate = addBusinessDays(date, bussinesDay);

console.log(
  date.toLocaleDateString("pt-BR", {
    timeZone: "America/Manaus",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);
console.log(
  newDate.toLocaleDateString("pt-BR", {
    timeZone: "America/Manaus",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);
