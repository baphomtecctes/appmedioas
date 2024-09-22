function validarusuario(){
       const usuario = document.getElementById('usuario').value; 
       var url = '/usuarios/'+usuario;
       fetch(url)
       .then(res => res.json())
       .then(function(res){
              if (res.mensaje == "Usuario Existente") {
                     alert(' Debe Ingresar Otro Nombre de Usuario');
                     this.document.getElementById('usuario').value='';
                     this.document.getElementById('usuario').focus();
              }
                
       })
      
      
       
}

function validaremail(){
       const email = document.getElementById('email').value; 
       var url = '/email/'+email;
       fetch(url)
       .then(res => res.json())
       .then(function(res){
              if (res.mensaje == "Email Existente") {
                     alert(' Debe Ingresar Otro Email');
                     this.document.getElementById('email').value='';
                     this.document.getElementById('email').focus();
              }
                
       })
      
      
       
}

function validarusuarioempresa(){
       const usuario = document.getElementById('usuarioempresa').value; 
       var url = '/usuariosempresa/'+usuario;
       fetch(url)
       .then(res => res.json())
       .then(function(res){
              if (res.mensaje == "Usuario Existente") {
                     alert(' Debe Ingresar Otro Nombre de Usuario');
                     this.document.getElementById('usuarioempresa').value='';
                     this.document.getElementById('usuarioempresa').focus();
              }
                
       })
      
      
       
}

function validaremailempresa(){
       const email = document.getElementById('emailempresa').value; 
       var url = '/emailempresa/'+email;
       fetch(url)
       .then(res => res.json())
       .then(function(res){
              if (res.mensaje == "Email Existente") {
                     alert(' Debe Ingresar Otro Email');
                     this.document.getElementById('emailempresa').value='';
                     this.document.getElementById('emailempresa').focus();
              }
                
       })
      
      
       
}

function categorias(){
      var categoria = document.getElementById('empleados'); 
     
     
       var url = '/datacategorias';
       fetch(url)
       .then(res => res.json())
       .then(data => mostrar(data))
       .catch(error => console.log(error))

       const mostrar = (data) =>{
              data.forEach(element => {
                    
                     $("#empleados").append('<option value="'+element.id+'">'+element.descripcion+'</option>');
              });
       }
      
      
       
}


function leertodo(){
        var url = '/dataservi';
        fetch(url)
        .then(res => res.json())
        .then(data => mostrar(data))
        .catch(error => console.log(error))
 
        const mostrar = (data) =>{
               data.forEach(element => {
                     
                      $("#contenido").append(
                            "<div class='card listado' style='width: 400px;'>"+
                           " <img src='' class='card-img-top' >"+
                           " <div class='card-body'>"+
                              "<h5 class='card-title' style=''>"+element.descripcion+"</h5>"+
                              "<p class='card-text'>"+element.detalle+"</p>"+
                              "<ul class='list-group list-group-flush ' style='display=  inline'>"+
                              "<li class='list-group-item' style='display=  inline'>"+element.facebook+"</li>"+
                             " <li class='list-group-item' style='display= inline'>"+element.instagram+"</li>"+
                             " <li class='list-group-item'>"+element.telefono+"</li>"+
                          "  </ul>"+
                       
                            "</div>"+
                         " </div>"
                      );
               });
        }
       
       
        
 }
 
 function servicios(){
        var url = '/dataservicios';
        fetch(url)
        .then(res => res.json())
        .then(data => mostrar(data))
        .catch(error => console.log(error))
 
        const mostrar = (data) =>{
               data.forEach(element => {
                     
                      $("#servicios").append(
                            '<option value="'+element.id+'">'+element.descripcion+'</option>'
                            );
               });
        }
       
       
        
 }
 