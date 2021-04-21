# Mi primera línea de código (NOTE)

- alert( ) > Sirve para disparar un mensaje en la pantalla del navegador.
  
  # ¿Qué es HTML/CSS/JS?

- HTML es el lenguaje donde se define la información o el contenido del documento, el formato de los archivos es .html
- CSS es el lenguaje donde se especifica el diseño del documento, maneja todo lo relacionado con la parte visual, el formato de los archivos es .css
- JavaScript, el lenguaje que hace que todo sea interactivo, es realmente el lenguaje de programación que nos permite crear sitios web, el formato de los archivos es .js

# JavaScript no es Java

- Java es un lenguaje para servidores, aplicaciones de escritorio y aplicaciones Android
- JavaScript es el lenguaje de la web, servidores, robots, etc.
  ( JavaScript != Java)

# Primeros pasos en el navegador con alert

alert('Hola mamá, estoy programando');

- alert es una orden.

- Las comillas son para delimitar un texto libre" o sea una cadena de texto.

- Funciones son colecciones de códigos que hacen algo y van dentro de paréntesis.

- Los Parámetros son la información que una función necesita para lograr algo, y van dentro de los paréntesis y con comillas.

- Punto y coma ; la gran mayoría de líneas de código terminan en punto y coma, y es para decirle al navegador que hasta ahí termina la instrucción que le dimos.

- Los Bloques de código son los que no terminan en punto y coma ; sólo las líneas independientes.

¿Que es var? Var es la forma de declarar una variable.

-Primero escribes var al declarar la variable:
var
-Despues nombramos la variable seguido de un igual:
var x =
-Despues asignamos un valor a la variable (este no es un paso obligatorio, ya que solamente podemos declarar la variable con la finalidad de mas adelante asignarle un valor):
var x = 10;
O en caso de que mas adelante sea asignado el valor:
var x;

# HTML, CSS, JavaScript de verdad

- strong = Negrita
- p= Parrafo
- Estructura principal = html
- head = Cabezera
- title = titulo
- body = cuerpo
- style = estilo
- background color: = Fondo
- Font-Family = fuente
- script = Para ejecutar funciones
- document.write = Escribe una cadena de texto
- Doctype html = estandar de html 5
- Type= atributo de una etiqueta

# Peso en otro planeta

En JavaScript tenemos funciones especiales que manipulan numeros una de esas funciones se llama parseInt, esta me permite redondear un numero con muchos decimales.

# Obteniendo datos del usuario

- Prompt(); es una función similar a alert(); pero esta nos muestra una caja rellenable de información.
- ParseFloat(); es para obtener valores con decimales.

# Flujo y condicionales

Las condicionales manejan una condición para distinguir entre una opción u otra. 

* =: asignación.
* ==: comparación.
* if(): Sí
* else: Sí no
* else if(): Sí no, sí
  
# El DOM: nuestro lugar de trabajo en la web

- Objectos: son nombres especiales que tienen por dentro: funciones, atributos, variables y entre otros.
- Navigator: Contiene las funciones especiales del navegador y puedes acceder también al sistema operativo con este objeto.
- Window: Maneja las ventanas y tabs del navegador.
- Document: Contiene todos los elementos que se encuentran dentro de una página web. Controla internamente cada componente visual con el que los usuarios interactúan.
- DOM (Document Object Model): es la forma en que internamente el navegador organiza todo el HTML dentro de una estructura de árbol.

# Window y Document:

- Métodos: funciones dentro de un objeto
- Atributo o propiedad: variables internas que almacenan valores

# Dibujando en el DOM

- canvas = etiqueta de dibujo
- getContext: es un método del objeto Canvas que obtiene el área dónde se va a dibujar.
- beginPath: un método que inicia un trazo.
- strokeStyle: variable para guardar el color de la línea.
- moveTo: método para mover el lápiz desde dónde va a dibujar la línea en las coordenadas especificadas.
- lineTo: traza una línea hasta las coordenadas especificadas.
- stroke: función que dibuja la línea con un estilo especificado.
- closePath: cierra el camino del trazo, es como levantar el lápiz.

# Funciones en JavaScript

- Funciones = Son herramientas utilizadas en cualquier lenguaje, con la finalidad de reutilizar código, con lo cual se evita reescribir varias veces el código, en el caso que un cierto bloqyue del mismo deba repetirse en varias secciones del código.
- Dentro de una función se pueden crear y utilizar variables locales, es decir, se crean, utilizan y destruyen dentro de la función, esto se logra pasando a la función como parámetros del mismo según lo que necesite la función.
* Ejemplo: 
  function nombreFuncion(parametros) {
 //Código que ejecuta la función
}

# Ciclos while y for en JavaScript

- Los ciclos son piezas de código que se repiten hasta que se cumple una condición.
- El ciclo Infinito sucede cuando se invoca a un ciclo sin determinar una condición limitante, el ciclo se repite infinitamente.
- Un ciclo DO WHILE ejecuta una secuencia especificada hasta que se cumpla una condición determinada que actúa de limitante, como primero se ejecuta la sentencia y luego se evalúa la condición, este se ejecuta como mínimo una vez.

# Eventos y Formularios en HTML y JavaScript

- Los eventos son funciones que suceden cuando algo ocurre,  sucesos cómo un click, pulsar una tecla, colocar el mouse sobre un botón, etc.
  
# Detectar eventos del teclado con JavaScript

- Podemos hacer que nuestro dibujo reaccione al teclado.
- Ctrl+Shift+I => Abre la ventana inspect (inspeccionar)
- SWITCH es una estructura de control generalmente utilizada para evitar el uso excesivo de IF anidados, haciendo de este modo un código más limpio y fácil de leer.
- Si tenemos constantes o variables que no van a cambiar usamos MAYUSCULAS para hacerlo notar.
- Eventos aprendidos: keyup y keydown.


  




