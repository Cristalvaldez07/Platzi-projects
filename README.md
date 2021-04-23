# Apuntes y recordatorios de PLATZI.

# Mi primera línea de código:

- alert( ) : Sirve para disparar un mensaje en la pantalla del navegador.
  
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

# Dibujar en canvas con las flechas del teclado

- Continuacion de aprendiendo a dibujar con Canvas.

# Funciones matemáticas y números aleatorios en JavaScript

- Math.floor() devuelve el número entero por debajo de los decimales.
- Math.ceil() devuelve el siguiente número entero arriba de los decimales
- Math.random() devuelve un número aleatorio de 0 a 0.999.
- Tile así se denomina la parte gráfica sobre la que se hace un video juego.
- Los números aleatorios en Javascript son decimales.
- La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
- Variables Locales: variables creadas dentro de una función, solo pueden ser accedidas desde dentro de la función.
- Variables Globales: podemos acceder a ellas desde cualquier parte del código.
  
# Uso y carga de imágenes en Canvas 

- En canvas puedes insertar imágenes.
- Debemos agregar la imagen en el evento load del objeto.
- Debemos usar el método .drawImage del canvas para insertar la imagen.
- Canvas dibuja siempre encima del último objeto.
- Debemos esperar que la imagen cargue antes de insertarla en canvas.

# División, módulo y residuo en JavaScript

- Para calcular el módulo puedes usar %
- Los programas dividen los programas complejos en problemas pequeños
- La operación lógica and (y) se escribe en JavaScript con &&
  
# Clases y Arrays en JavaScript

- Las clases son la definición de los objetos
- Array: Es como si una variable tuviera cajitas. 
- Constructor: Es un método llamado en el momento de la creación de instancias.
- Herencia: Una Clase puede heredar características de otra Clase.
- Encapsulamiento: Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.
- Abstracción: La conjunción de herencia compleja, métodos y propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.
- Polimorfismo: Diferentes Clases podrían definir el mismo método o propiedad.
- El in y el of te sirve para recorrer un objeto por dentro y en ocasiones para recorrer arrays que no conocemos.
  
# Diagrama de Flujo del Cajero Automático

- Algoritmo: Conjunto de instrucciones realizadas en orden para solucionar un problema.
- Diagrama de flujo:Un diagrama de flujo es un diagrama que describe un proceso, sistema o algoritmo informático.

# Implementación del Cajero Automático

- Document.write es una mala práctica.
- Una alternativa mas ventajosa es innerHTML.

# Modelo Cliente/Servidor

- Cliente: Es el navegador que abre tu archivo HTML o JS.
- El Backend actúa como contraseña de los datos de los demás usuarios, pero si el Frontend no tiene Backend los datos de los demas usuarios estarán expuestos a accederse.
- Servidor: Software que se encarga de hacer que corran todo el código Backend en el DB, así como un navegador hace lo mismo con el código Frontend, toma la url ingresada, procesa internamente la petición y devuelve los resultados.
- Puertos: son los canales utilizados para el intercambio de información, es completamente personalizable.
- GET: Envia al servidor unas variables a través de la URL para que las procese, no es un tipode envío de datos recomendado cuando se trata de enviar datos confidenciales ya que carece de seguridad y es fácilmente hackeable.
- POST: Es enviar datos a través de formularios, colocando los datos por debajo de la URL, a modo de ocultar los datos evitando su hackeo.
- Socket: Opción para transmitir datos cliente/servidor en tiempo real.

  ### Las tecnologías utilizadas en aplicaciones web son: 
- Bases de datos, MySQL es una base de datos relacionales y MongoDB es una base de datos no relacional.
- Backend, existen muchos lenguajes que puedes usar cómo Python, Ruby, JavaScript.
- Servidores, existen tecnologías como NGINX, Apache, Node.
- Frontend, son las tecnologías que corren en el navegador, HTML, CSS y JavaScript.
- A un grupo de tecnologías se les conoce como Stack.
  ### SERVIDORES CON PUERTO:
- Nginx
- Apache 
- NodeJS
### FRONTEND:
- Html 
- CSS 
- JS

# Primer servidor web con express

- $ indica que hay una terminal.
- Un framework es un conjunto de funcionalidades empaquetadas para poder realizar cosas.
- Un servidor es un ordenador encargado de suministrar información a una serie de clientes, que pueden ser tanto personas como otros dispositivos conectados a él.
- IP: Es el numero que identifica a un dispositivo en una red interna o externa.
- NPM: Sistema que ayuda a Node a instalar Librerías.
- Require: Es una función que busca dentro del equipo las dependencias pertenecientes a Express y las almacena en la instancia creada para el efecto.
- El punto y coma “;” en la programación con JS es opcional.
- Request: Petición realizada al servidor. 
- Response: Respuesta del Servidor al Request enviado.
  
# ¿Cómo funciona un circuito electrónico?

- Los circuitos electrónicos son la base de la tecnología moderna.
- Electricidad: Son el flujo constante de electrones a través de un cable. Se mide en voltaje y amperaje 
- Voltio: Intensidad con que la corriente se mueve por el cable.
- Resistencia: Controla la intensidad de la corriente eléctrica, son medidas en Ohmios.
- Circuito digital: Convierte la electricidad en 0 y 1.
- Memoria RAM: Almacena los 0 y 1 mientras tenga energía
- Discos Duros: Almacena los 0 y 1 aun sin energía
- El movimiento se crea con un motor eléctrico (que por dentro son electroimanes, que roban sobre su propio eje), los motores pequeños (servos) suelen ser muy precisos.
- La electricidad se vuelve sonido si se hace vibrar una membrana al ritmo de una honda eléctrica.
- Es la forma mas poderosa de usar la electricidad con informacion (almacenar datos, operaciones matemáticas, etc),
- Un circuito digital (cpu) convierte las hondas eléctricas en ceros (000…) y unos (111…), la memoria RAM guarda esos ceros y unos siempre que el circuito tenga energía, mientras que los discos duros los guardan con o sin energía.
- Los ceros y unos se llaman bites y ocho de estos juntos son un byte, el procesador toma los bytes y los convierte en otros con instrucciones.
* Los lenguajes encargados de dar las instrucciones son :
- Assembler
- Java
- C++ 
- C
* Note
- 1 byte = 1 caracter
- 1 kilo byte = 1024 bytes
- 1 megabyte = 1024 kilo bytes
- 1 gigabyte = 1024 megabytes
- 1 terabyte = 1024 gigabytes
  
# ¿Cómo programar un Arduino?

- Lenguajes de Bajo Nivel : Lenguajes cuyas interpretaciones están mas cerca al lenguaje maquina permitiendo tener una mayor interacción y velocidad con el hardware ej: C , C++.
- Lenguajes de Alto Nivel : Lenguajes con instrucciones mas fáciles de escribir y leer para una persona que requieren interpretes para convertirse en lenguaje maquina ej: Ruby , Python , JavaScript.
- C: Es un lenguaje de bajo nivel lo puedes ver en el curso de algoritmos. De este lenguaje se derivan Java, Javascript, C#, unity 3D, etc.
- Unity 3D: Funciona con JS o C#, puedes crear con el juegos como pokemon Go o juegos de VR. 
- Java: Se parece a JS pero es de menos nivel.
- Arduinos y Rasperry Pi: Son basicamente ordenadores muy pequeños que podemos programar desde 0. En arduino se programa con C.
- No necesitamos tener un arduino para programar en arduino.
  
  # Programación de circuitos con C, Arduino y Sketch
- Protoboard: Son formas en las que los cables estan organizados por dentro.
- Arduino se programa en el lenguanje Sketch que se deriva de C.
- Las entradas analogas permiten recibir electricidad del circuito.
- El puerto de 5v es el principal y GND es por donde llega la energia desde la perperctiva negativa.
- El chip es lo que guarda la RAM, el Disco Duro y el procesador de el circuito.
- El LED es un diodo y está formado por ánodo y cátodo, Ánodo se conecta a voltaje y Cátodo se conecta a tierra.
- Ánodo: Parte positiva (+)
- Cátodo: Parte negativa (-)
- - Para programar un arduino con javascript debemos instalar un framework o libreria en arduino (serie de instrucciones en C que le permiten al arduino conectarse con node JS y JS).
- JAVASCRIPT DEL NAVEGADOR (FRONTEND) no nos sirve hasta ahora.

# ¿Qué lenguaje de programación aprender primero?

No existe el mejor lenguaje de programación, cada uno de ellos pasa por etapas de mejoras y actualizaciones, que lo hacen mejor o peor en cada iteración. Esta situación debe sonarte familiar, a menos que seas de los que prefiere los lenguajes interpretados, como Javascript.

* Python

Es un lenguaje de alto nivel que, a mi parecer, es de los más intuitivos e ideal para empezar a programar. Guido van Rossum tuvo la idea de crear un lenguaje tan limpio y sencillo para que hasta un niño tuviera una curva de aprendizaje intuitiva. Viene por defecto en Linux y Mac y con opción de correrlo en Windows.

* Java

De segundo está Java. Sí, aquel lenguaje que amas u odias por ser estrictamente tipado y ser el corazón de mucho software corporativo. Sin embargo, muchos de los estándares y buenas prácticas de programación orientada a objetos nacieron de Java. Y es el encargado de traernos aplicaciones a Android.

* Ruby

Tenemos después a Ruby. He de confesar que no he tenido un acercamiento fuerte a este lenguaje; pero he visto muchas cosas interesantes en web gracias a Ruby on Rails.

* C++/C

La popularidad de este lenguaje no le hace justicia a su importancia. Es difícil de aprender, pero sin él muchos de los lenguajes actuales no existirían. Es el más fuerte de todos y, si algún día llegas a comprenderlo en su totalidad, entender los otros lenguajes será pan comido.

* JavaScript

El tan versátil JavaScript, que no sólo vive en los navegadores y nos permite crear todo el flujo de interacción de nuestros websites; sino que se puede usar en cualquier capa de un proyecto: Front-end, Backend, Bases de Datos, Internet of Things, etc.
  # “Programar es lo más cercano a tener superpoderes”  - Drew Houston, Dropbox






  


