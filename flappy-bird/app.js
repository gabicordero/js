// El código envuelve todo dentro de un evento 'DOMContentLoaded'. Este evento se dispara cuando 
// el contenido HTML de la página ha sido completamente cargado y está listo para ser manipulado.
// Se utilizan las funciones document.querySelector para seleccionar elementos del documento HTML 
// mediante sus selectores de clase. Las selecciones se asignan a las siguientes variables:

document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird')
  const gameDisplay = document.querySelector('.game-container')
  const ground = document.querySelector('.ground')
  const gameOverText = document.querySelector('.gameovertext')

  // birdLeft: Indica la posición horizontal inicial del pájaro.
  // birdBottom: Indica la posición vertical inicial del pájaro.
  // gravity: Indica la cantidad de gravedad aplicada al pájaro en cada frame.
  // isGameOver: Es una bandera que indica si el juego ha terminado.
  // gap: Es la distancia vertical entre los obstáculos.

  let birdLeft = 220
  let birdBottom = 100
  let gravity = 2
  let isGameOver = false
  let gap = 430

  // Se define la función startGame, que se llamará en cada frame del juego. 
  // En esta función, se actualiza la posición vertical del pájaro (birdBottom) 
  // aplicando la gravedad y se actualizan las propiedades CSS del elemento bird 
  // para reflejar su posición en la pantalla.

  const startGame = () => {
    birdBottom -= gravity
    bird.style.bottom = birdBottom + 'px'
    bird.style.left = birdLeft + 'px'
  }
  // Se utiliza setInterval para llamar a la función startGame cada 20 milisegundos. 
  // Esto crea un bucle continuo que actualiza la posición del pájaro en cada frame.

  let gameTimerId = setInterval(startGame, 20)

  // Se define la función jump, que se llama cuando se suelta una tecla. 
  // Esta función incrementa la posición vertical del pájaro (birdBottom) en 50 unidades 
  // si su posición actual es menor a 500. Luego, se actualiza la propiedad CSS bottom del 
  // elemento bird para reflejar su nueva posición.

  const jump = () => {
    if (birdBottom < 500) birdBottom += 50
    bird.style.bottom = birdBottom + 'px'
  }

  document.addEventListener('keyup', jump)

  // Se define la función generateObstacle que se encarga de crear obstáculos en el juego. 
  // Dentro de esta función, se definen variables para controlar la posición y altura del obstáculo.

  const generateObstacle = () => {
    let obstacleLeft = 500
    let randomHeight = Math.random() * 60
    let obstacleBottom = randomHeight

    // Se crean dos elementos div utilizando document.createElement. Estos elementos 
    // representan el obstáculo y el obstáculo superior (que forma un espacio por el que 
    // el pájaro puede volar). Se les aplican clases CSS para darles estilo.

    const obstacle = document.createElement('div')
    const topObstacle = document.createElement('div')
    if (!isGameOver) {
      obstacle.classList.add('obstacle')
      topObstacle.classList.add('topObstacle')
    }
    // Se agregan al elemento 'gameDisplay'
    gameDisplay.appendChild(obstacle)
    gameDisplay.appendChild(topObstacle)
    obstacle.style.left = obstacleLeft + 'px'
    topObstacle.style.left = obstacleLeft + 'px'
    obstacle.style.bottom = obstacleBottom + 'px'
    topObstacle.style.bottom = obstacleBottom + gap + 'px'

    // Se define la función moveObstacle, que se llama en cada frame del juego y 
    // se encarga de mover los obstáculos hacia la izquierda.

    const moveObstacle = () => {
      obstacleLeft -= 2
      obstacle.style.left = obstacleLeft + 'px'
      topObstacle.style.left = obstacleLeft + 'px'

      // se verifican dos condiciones. Primero, si el obstáculo ha salido de la 
      // pantalla (obstacleLeft es igual a -60), se detiene el movimiento del obstáculo 
      // y se eliminan los elementos obstáculo y obstáculo superior del gameDisplay.

      if (obstacleLeft === -60) {
        clearInterval(timerId)
        gameDisplay.removeChild(obstacle)
        gameDisplay.removeChild(topObstacle)
      }

      // Segundo, se verifica si el pájaro ha chocado con alguno de los obstáculos. 
      // Si hay una colisión, se llama a la función gameOver para terminar el juego.

      if (
        obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
        (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap - 200) ||
        birdBottom === 0
      ) {
        gameOver()
        clearInterval(timerId)
      }
    }

    // Se utiliza setInterval para llamar a la función moveObstacle cada 20 milisegundos. 
    //Esto crea un bucle continuo que mueve los obstáculos en cada frame.
    let timerId = setInterval(moveObstacle, 20)
    if (!isGameOver) setTimeout(generateObstacle, 3000);
  }

  generateObstacle()

  // En esta función, se detiene el intervalo de juego (gameTimerId), se muestra el texto de 
  // "Game Over" en pantalla, se actualizan las clases CSS para mostrar el texto, se actualiza la bandera isGameOver y se realiza limpieza de event listeners y estilos CSS.
  
  const gameOver = () => {
    clearInterval(gameTimerId)
    console.log('game over')
    gameOverText.classList.remove('hidden')
    gameOverText.classList.add('show')
    isGameOver = true
    document.removeEventListener('keyup', jump)
    ground.classList.add('ground')
    ground.classList.remove('ground-moving')

  }
})