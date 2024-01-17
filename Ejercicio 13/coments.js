const axios = require('axios');
const moment = require('moment');
const lodash = require('lodash');

// ID del usuario que deseas consultar (puedes cambiarlo)
const userId = 1;

// Realizar la solicitud para obtener los últimos 5 comentarios del usuario en sus publicaciones
axios.get(`url`)
  .then((commentsResponse) => {
    let comments  // Obtener los últimos 5 comentarios

    // Realizar la solicitud para obtener las publicaciones del usuario
    axios.get(`url`)
      .then((postsResponse) => {
        let posts // traer los post

        // Ordenar los comentarios por fecha de creación en orden descendente
        let commentsSorted = 

        // Mostrar los últimos 5 comentarios con detalles
        console.log(`Últimos 5 comentarios del usuario con ID :`); // Poner numero de Id
        commentsSorted.forEach((comment) => {
          let post // Buscar post segubn Id
          let formattedDate // Dar formato de fecha
          
          console.log('Comentario:');
          console.log('Publicación:');
          console.log('Fecha de Creación:');
          console.log('---');
        });
      })
      .catch((error) => {
        console.error('Error al obtener datos de publicaciones:');
      });
  })
  .catch((error) => {
    console.error('Error al obtener datos de comentarios:');
  });
