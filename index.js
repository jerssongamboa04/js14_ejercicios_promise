
// =================== Ejercicio 1 =================================
// Para realizar estos ejercicios, usaremos la API de Star Wars.

// Haz una petición a la API y consigue una lista de los personajes de Stars Wars.

// const starPersonajes = fetch("https://swapi.dev/api/people");

// starPersonajes
//     .then(response => response.json())
//     .then(data => console.log(data))
// console.log(starPersonajes);

// =================== Ejercicio 2 =================================

// Busca cómo conseguir hacer una petición para que te llegue sólo
// la información de Darth Vader, y muéstrala por consola.

// const starVader = fetch("https://swapi.dev/api/people/?search=Darth%20Vader");

// starVader
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.results[0]);
//     });

// const starVader = fetch("https://swapi.dev/api/people");
// let vader = "";

// starVader 

//     .then(response => response.json())
//     .then(data => {

//         data.results.forEach(element => {
//             if ( element.name == "Darth Vader"){
//                 console.log(element);
//             }
//         });
//     });


// =================== Ejercicio 3 =================================
// 3. Muestra por consola la lista de películas en las que aparece 
// el personaje de `Luke Skywalker`.

// const luke = fetch('https://swapi.dev/api/people/');
// luke
//     .then(response => response.json())
//     .then(data => {
//         let title = [];

//         data.results.forEach(element => {

//             console.log(element.name);
//             if (element.name == "Luke Skywalker") {
//                 title = element.films
//             }
//         });
//         console.log(title);

//         title.forEach(element => {
//             const movies = fetch(element)
//             movies
//                 .then(response => response.json())
//                 .then(links => {
//                     // console.log(links);
//                     console.log(links.title);
//                 })
//         });
//     })

// =================== Ejercicio 4 =================================

// 4. Busca el personaje de `Leia Organa` y consigue que se muestre
//  por consola la información de su planeta natal: `Alderaan`.

// const LeiaOrgana = fetch('https://swapi.dev/api/people')
// // console.log(LeiaOrgana);

// LeiaOrgana
//     .then(response => response.json())
//     .then(data => {
//         let personaje = [];

//         data.results.forEach(element => {
//             // console.log(element);
//             if (element.name == 'Leia Organa') {
//                 personaje = element.homeworld
//                 console.log(personaje);
//             }
//         });
//         const mundo = fetch(personaje)
//         mundo
//             .then(response => response.json())
//             .then(local => {

//                 console.log(local);
//             })
//     });

// =================== Ejercicio 5  =================================

// En este ejercicio, debes conseguir el resultado final encadenando varios
// métodos then(). Obtén la lista de personajes, haz una petición para C-3PO, 
// encuentra las películas en las que aparece, y haz una petición por cada
// película para mostrar por consola su información. Para hacer esto último,
//  deberás usar un forEach que itere sobre la lista de urls de películas y que,
//   en cada iteración, haga una petición con dicha url.



const c = fetch('https://swapi.dev/api/people/');
c
    .then(response => response.json())
    .then(data => {
        let title = [];

        data.results.forEach(element => {

            console.log(element.name);
            if (element.name == "C-3PO") {
                title = element.films
            }
        });
        console.log(title);

        title.forEach(element => {
            const movie = fetch(element)
            movie
                .then(response => response.json())
                .then(newMovies => {
                    // console.log(newMovies);
                    console.log(newMovies.title);
                })
        })
    })