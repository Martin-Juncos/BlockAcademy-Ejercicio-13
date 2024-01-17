const axios = require("axios");
const moment = require("moment");

const apiUrl = "https://api.bluelytics.com.ar/v2/evolution.json";
// Obtener la fecha de hoy
const toDay = moment().format("YYYY-MM-DD");
// Realizar la solicitud HTTP
axios
  .get(apiUrl)
  .then((response) => {
    const data = response.data;
    // Filtrar los datos del dollar Blue
    const dollarData = data
      .filter((entry) => entry.source === "Blue")
      .filter((entry) => entry.date < toDay)
      .slice(0, 15);
    // Crear la tabla para mostrar el resultado
    console.log("Variacion del dolar Blue en los ultimos 15 dias");
    console.table(dollarData, ["date", "value_sell"]);
  })
  .catch((error) => {
    console.error(error);
  });
