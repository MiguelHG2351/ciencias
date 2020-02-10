var form = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

form.addEventListener('submit', function (e) {
 e.preventDefault();
 
 var datos = new FormData()
 console.log(datos);
   
});

    fetch('php.php', {
      method:'POST',
      body:datos    
    })
    then( res => res.json())
    then(data => {
      if(data === 'error') {
        respuesta.innerHTML = `
        <div class="alert alert-danger" role="alert" >
        
        </div>
        `     
      }else {
      respuesta.innerHTML = `   
      <div class="alert alert-primary" role="alert" >
          ${respuesta}
      </div>
      `
      
      }
       
    })


