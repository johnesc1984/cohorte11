var datos = []


// Notiflix.Notify.success('Sol lucet omnibus');
// Notiflix.Notify.failure('Qui timide rogat docet negare');
// Notiflix.Notify.warning('Memento te hominem esse');
// Notiflix.Notify.info('Cogito ergo sum');

function Registrar(){
    
    var nombre = document.getElementById("nombre").value.trim()
    var email = document.getElementById("email").value.trim()
    var pass = document.getElementById("pass").value.trim()

    console.log(nombre)
    console.log(email)
    console.log(pass)

    if(nombre == ""){
         Notiflix.Notify.info('El campo Nombre es Obligatorio');
         return false
    }

    if(email.trim() == ""){
         Notiflix.Notify.info('El campo Email es Obligatorio');
         return false
    }

    const x = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(x.test(email) == false){
            Notiflix.Notify.info('El campo Email no es valido');
            return false
    }

     if(pass == ""){
         Notiflix.Notify.info('El campo Password es Obligatorio');
         return false
    }


    var posicion = datos.findIndex((item) => item.email == email)
    if(posicion ==  -1){
        datos.push({ nombre:nombre, email:email, pass:pass })
        Notiflix.Notify.success('Usuario Registrado');
    }
    else{
        Notiflix.Notify.failure('El email ya existe intente con otro');
    }
    console.log(datos)




}

