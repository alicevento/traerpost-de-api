//En desarrollo web, es muy importante trabajar consumiendo datos desde diversas fuentes, entre ellas APIs. En este desafío consumirás datos desde la siguiente API, la cual nos devuelve un arreglo con “posts” de ejemplo. Al pulsar sobre un botón, realizaremos la llamada a la API y mostraremos los datos de los post obtenidos.
//URL: https://jsonplaceholder.typicode.com/posts

//Realizar un request (consulta) a la API usando async-await.
const obtenerPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url);
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error('Error al obtener los posts:', error);
      throw error;
    }
  };
  
//Mostrar el resultado del request en HTML.

function mostrarPosts(posts) {
    const lista = document.getElementById('post-data');
    lista.innerHTML = '';
    posts.forEach((post) => {
      const listItem = document.createElement('li');
      const titleElement = document.createElement('strong');
      listItem.textContent = post.title;
      listItem.appendChild(titleElement); 
      listItem.innerHTML += `<br>${post.body}`;
      lista.appendChild(listItem);
    });
  }

// Manejar los posibles errores con try-catch.
const obtenerYMostrarPosts = async () => {
    try {
      const posts = await obtenerPosts();
      mostrarPosts(posts);
    } catch (error) {
      console.error('Error al obtener y mostrar los posts:', error);
    }
  };
  
  // Agregar un evento de clic al botón para llamar a la función obtenerYMostrarPosts al hacer clic.
  const btnTraerPosts = document.querySelector('button');
  btnTraerPosts.addEventListener('click', obtenerYMostrarPosts);

  //