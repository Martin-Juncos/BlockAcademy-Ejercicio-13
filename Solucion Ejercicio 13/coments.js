const axios = require('axios');
const moment = require('moment');
const _ = require('lodash');

// Realizar la solicitud para obtener las últimas 5 publicaciones
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((postsResponse) => {
    const posts = postsResponse.data.slice(-5); // Obtener las últimas 5 publicaciones

    // Realizar la solicitud para obtener los primeros 5 usuarios
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((usersResponse) => {
        const users = usersResponse.data.slice(0, 5); // Obtener los primeros 5 usuarios

        // Ordenar las publicaciones por fecha de creación en orden descendente
        const postsSorted = _.orderBy(posts, ['id'], ['desc']);

        // Mostrar las publicaciones y sus detalles
        console.log('Últimas 5 publicaciones:');
        postsSorted.forEach((post) => {
          const user = users.find((u) => u.id === post.userId);
          const formattedDate = moment(post.createdAt).format('DD-MM-YYYY, HH:mm:ss');
          
          console.log('Título:', post.title);
          console.log('Cuerpo:', post.body);
          console.log('Usuario:', user.name);
          console.log('Fecha de Creación:', formattedDate);
          console.log('---');
        });
      })
      .catch((error) => {
        console.error('Error al obtener datos de usuarios:', error);
      });
  })
  .catch((error) => {
    console.error('Error al obtener datos de publicaciones:', error);
  });
