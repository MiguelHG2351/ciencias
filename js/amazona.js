 window.addEventListener('load', () => {
  setTimeout(carga, 1500)
  
  function carga(){
    document.getElementById('circulo').className = 'hide'
    document.getElementById('mostrar').className = 'animated wobble'
    var fondo = document.getElementById('body').className = 'white'
  }
 });
 
//   document.addEventListener('DOMContentLoaded', function() {
  // var elems = document.querySelectorAll('.slider');
   //var instances = M.Slider.init(elems, {
    // interval: 3000
   //});
  // });
 const videoPlay = document.getElementById('videoPlay')
 
 var optionVideo = {
   rootMargin:'0px 0px 5px 0px',
   threshold:.5
 }
 
 function callbackVideo(entries, observer) {
   if(entries[0].isIntersecting){
     videoPlay.play()
   } else{
     videoPlay.pause()
   }
 }
 
 const observerVideo = new IntersectionObserver(callbackVideo, optionVideo)
 observerVideo.observe(videoPlay)

 
 console.log(observerVideo)
