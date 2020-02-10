  const robot = document.getElementById('robotitus')
  const robotText = document.getElementById('textoRobot')
  const timeInterval = 25000
  const  $interceptado = document.getElementById('interceptado')
  const option = {
    rootMargin:'0px 0px 0px 0px',
    threshold:0.5
  }
  
  function callback(entries, observer) {
    if(entries[0].isIntersecting){
      robot.classList.add('animationAlert')
      robotText.classList.add('is-active')
    }else{
      console.log('No se ha intersectado el elemento')
      robot.classList.remove('animationAlert')
      robotText.classList.remove('is-active')
    }
  }
  
  const InterSection = new IntersectionObserver(callback, option)
  InterSection.observe($interceptado)
  
  // Otro código por si parece mejor se ejecuta en un intervalo de tiempo
  
 // setInterval(() => {
  //  robot.classList.add('animationAlert')
 // }, timeInterval)
  
 // setInterval(() => {
   // robot.classList.remove('animationAlert')
 // }, timeInterval+=2500)
  