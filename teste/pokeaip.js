const url = 'https://pokeapi.co/api/v2/pokemon/1/';
fetch(url)

 .then(response => response.json()) 

 .then(data => {

  console.log('Nome do Pokémon:', data.name);

  console.log('Altura do Pokémon:', data.height);

 })

 .catch(error => {

  console.error('Ocorreu um erro:', error);

 });