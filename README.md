![](../Logo_Yellow.png)

# Ejercicio de promesas (then / catch)

Para realizar estos ejercicios, usaremos la [API de Star Wars](https://swapi.dev/).

1. Haz una petición a la API y consigue una lista de los personajes de Stars Wars. 
2. Busca cómo conseguir hacer una petición para que te llegue sólo la información de `Darth Vader`, y muéstrala por consola.
3. Muestra por consola la lista de películas en las que aparece el personaje de `Luke Skywalker`.
4. Busca el personaje de `Leia Organa` y consigue que se muestre por consola la información de su planeta natal: `Alderaan`.
5. En este ejercicio, debes conseguir el resultado final encadenando varios métodos `then()`. Obtén la lista de personajes, haz una petición para `C-3PO`, encuentra las películas en las que aparece, y haz una petición por cada película para mostrar por consola su información. Para hacer esto último, deberás usar un `forEach` que itere sobre la lista de urls de películas y que, en cada iteración, haga una petición con dicha url.

Una vez hayas terminado los ejercicios, prueba a repetir el `ejercicio nº 2`, pero esta vez introduce los resultados en el DOM para que podamos ver en el navegador el nombre, la fecha de nacimiento y la altura de `Darth Vader`.