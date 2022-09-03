const botonRegistrar=document.getElementById('btn-registrar');

//function imprimirDatos(){
//}

//Funcion de flecha, función mas actual
const imprimirDatos =  ()=>{
    let nombre=document.getElementById('txt-nombre').value;
    let apellidos=document.getElementById('txt-apellido').value;
    let correo=document.getElementById('txt-correo').value;
    let direccion=document.getElementById('txt-direccion').value;
    let ciudad=document.getElementById('txt-ciudad').value;
    let provincia=document.getElementById('slt-provincia').value;
    let codigoPostal=document.getElementById('text-zip').value;

    console.log('El nombre es: ',nombre, apellidos);
    console.log('El correo es: ',correo);
    console.log('La dirección es: ', ciudad,provincia,direccion);
    console.log('El codigo postal es: ',codigoPostal);

};

botonRegistrar.addEventListener('click', imprimirDatos);
