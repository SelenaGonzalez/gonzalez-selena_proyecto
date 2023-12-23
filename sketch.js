let columnas, filas; // Declaración de variables columnas y filas.
let scl = 35; // Tamaño de cada cuadro
let flying = 0; // Variable que se utiliza para modificar el ruido en el eje Y

function setup() {
  createCanvas(windowWidth, windowHeight);
  columnas = windowWidth / scl; // Calculo  del número de columnas en la cuadrícula
  filas = windowHeight / scl; // Calculo del número de filas en la cuadrícula
}

function draw() {
  background(0);
  stroke(255);

  flying -= 0.02; // Ajuste de la velocidad de cambio del ruido en el eje Y

  let yoff = flying; // variable yoff con el valor actual de flying
  for (let y = 0; y < filas; y++) {
    let xoff = 0; // variable xoff para el ruido en el eje X
    for (let x = 0; x < columnas; x++) {
      let index = x + y * columnas; //Calculo de índice para cada posición en la cuadrícula
      let size = map(noise(xoff, yoff), 0, 1, -10, 25); // Generación de tamaño basado en el ruido

      // Dibujo de las cruces
      drawCruz(x * scl, y * scl, size); //angle

      xoff += 0.04; // Ajuste de la suavidad de la transición entre valores de ruido en el eje X
    }
    yoff += 0.04; // Ajuste de la suavidad de la transición entre valores de ruido en el eje Y
  }
}

function drawCruz(x, y, size) {
  push();
  translate(x, y); // Translación del origen a la posición (x, y)
  line(-size, 0, size, 0); // línea horizontal de la cruz
  line(0, -size, 0, size); // línea vertical de la cruz
  pop(); //Restauración de la configuración de transformación previa
}
