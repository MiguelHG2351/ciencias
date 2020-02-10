  var more_example = document.getElementById('toggle-more')
  var hidden_block = document.getElementById('hidden-process')
  var option = {
    rootMargin: '300px 0px 0px 0px',
    threshold: 1
  }
 
  function callback(entries, observer) {
    if(entries[0].isIntersecting){
	  hidden_block.classList.add('visible-display')
    }else{
	  hidden_block.classList.remove('visible-display')
    }
  }
 
  var observador = new IntersectionObserver(callback, option)
  observador.observe(more_example)
// function slide1() {
 // var elems = document.querySelecapaptorAll('.slider')
  // var instances = M.Slider.init(elems)
// }

// document.addEventListener('DOMContentLoaded', slide1)