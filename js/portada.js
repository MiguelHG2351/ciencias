$('document').ready(function () {
   console.time()
    const image = $('#image');
    const image_2 = $('#image_2');
    const image_3 = $('#image_3');
    const fondoBlanco = $('#fondo_2')
    const body = $('#body')
    const fondoMulti = $('#multi')
    const defecto = $('#default')
  
  fondoBlanco.click(function() {
    body.removeClass('body')
    body.addClass('bg-light')
  })
  
  defecto.click(function() {
    body.removeClass('multiBg')   
    body.removeClass('bg-light')
    body.addClass('body')
  })
  
  fondoMulti.click(function() {
    body.removeClass('body')
    body.removeClass('bg-light')
    body.addClass('multiBg')
  })
  

  
  image.attr('src', 'image/loader.gif');
  image_2.attr('src', 'image/loader.gif');
  image_3.attr('src', 'image/loader.gif');
  
  setTimeout(function () {
    image.attr('src', 'image/matemáticas-álgebra-geometría-trigonometría-43517626.jpg'); 
    image_2.attr('src', 'image/mayas-desaparicion.jpg'); 
    image_3.attr('src', 'image/Tetravalencia del Carbono.jpg');
  },5000)
console.timeEnd()
})