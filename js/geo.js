/* const $video = document.getElementById("video")

if (navigator.getUserMedia) {
    navigator.getUserMedia({video:true, audio:true}, (stream) => {
        let videoStream = URL.createObjectURL(stream)
        $video.src = videoStream
    }, (e) => {
        console.log(e)
    })
} else {
    alert("No es compatible getUserMedia")
} */

// StrokeRect dibuja en contorno de la figura
// fillRect Dibuja la figura con relleno de color
// clearRect borra el color de esa región seleccionada
// // Colores de Canvas
// strokeStyle da el color de la figura
// fillStyle declara el color interno de la figura
// globalAlpha declara la transparencia del color de la figura, funciona igual que en CSS (0, 1) respectivamente
// Gradientes lineales o gradiales
// createLinearGradient(x1, y1, x2, y2)
// createGradialGradient(x1, y1, r1, x2, y2, r2) r es el radio
// addColorStop(Posición, color) posición valores entre 0 y 1 determina donde comienza la degradación
// Trazados
// beginPath este método inicia un nuevo trazo
// closePath cierra el trazo, se puede omitir si el trazo es abierto con fill
// dibuja el trazado como un contorno sin rellenos
// fill usa el punto inicial y lo une con el final
// clip() Es el área de dibujo, todo lo que este afuera no se dibuja
// moveTo(X, Y) mueve el lapíz de dibujo, nos ayuda a evitar lineas continuas en la figura, y crear nuevos dibujos
// lineTo(x, y) crea una recta desde la posición inicial del lapíz
// rect(x, y, w, h) eje X, eje Y, Ancho, y Alto, sirve para dibujar un rectángulo
// arc(x, y, radio, ánguloInicial, ÁNGULOFinal, DIRECCION) eje X, eje y, lo otro se dice Solo pero DIRECCIONes true o false que indican la dirección según los sentidos del reloj
// quadraticCurveTo(cpx, cpy, x, y) Genera una curva Béizer cúbica

// const canvasId = document.getElementById('canvas')

// const canvas = canvasId.getContext('2d')

// function drawCanvas() {
//     canvas.beginPath();
//     canvas.moveTo(100, 200)
//     canvas.lineTo(300, 250)
//     canvas.lineTo(300, 250)
//     canvas.fill()
//     // canvas.closePath()
//     // canvas.stroke()
//     // let radianes = Math.PI / 180 * 45
//     // canvas.beginPath()
// }

// drawCanvas()
// const img = document.getElementById('image')
// function renderImage(url) {
//     img.setAttribute('src', url)
// }

// fetch('image/natgeo.jpg')
// .then((data) => {
//     return data.blob()
//     // console.log(data)
// })
// .then((data) => {
//     const newUrl = URL.createObjectURL(data)
//     renderImage(newUrl)
// })

const img_view = document.getElementById('view-img')
const overlay = document.getElementById('overlay')

img_view.addEventListener('click', (e) => {
    img_view.classList.add('cursor-img-out')
    overlay.classList.add('is-active')
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('is-active')
} )
