  var elems = document.querySelectorAll('.sidenav');  
document.addEventListener('DOMContentLoaded', function() {

   var instances = M.Sidenav.init(elems);
 });
 // $('document').ready(function () {
 //  $('.materialboxed').materialbox()
   // $('.scrollspy').scrollSpy()
 // })
 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed')
  var instances = M.Materialbox.init(elems)
 });
 
  //const overlay = document.querySelector('#overlayL')
  //const inputL = document.querySelectorAll('input')
 
  //function focus(event) {
   // overlay.classList.add('is-active')
   // event.target.classList.add('is-active')
  //}
  // function blur(event) {
    // overlay.classList.remove('is-active')
    // event.target.classList.remove('is-active')
    // elems.classList.remove('activeL')
    // document.write(event.target)
  // }
 
  // inputL.forEach( inputL => {
    // inputL.addEventListener('focus', focus)
    // inputL.addEventListener('blur', blur)
  // })