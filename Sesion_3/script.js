//1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado.
// Ejemplo: "hola a todos" => "Hola A Todos"
 
// let frase = "hola a todos" // "Hola a todos"
 
// function capitalizar(cadena){ //"hola a todos"
//     let array = cadena.split(" ") // ["hola", "a", "todos"]
//     let cadenaCapitalizada = []
//     for(const index in array){
//         cadenaCapitalizada.push((array[index].charAt(0).toUpperCase() + array[index].slice(1))) // h   a   t
//     }
//     return cadenaCapitalizada.join(" ")
// }
 
//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.
 
// let persona = { nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}
 
// function verificarYLlenar(objeto) {
//     for(const index in objeto) {
//         if (objeto[index] === "") {
//             objeto[index] = prompt(`El campo ${index} está vacío, por favor llenalo: `)
//         }
//     }
//     return objeto
// }
 
//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.
 
//4. Te enviaron una base de datos de usuarios:
 
// let users = [
//     {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
//     {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
//     {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
//     {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
//     {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
//     {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
// ]
 
// for(const index in users){
//     verificarYLlenar(users[index])
// }
 
// console.log(users)
 
// let users = [objeto1, objeto2, objeto3, objeto4]
 
 
 
// Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.
 
//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.
 
// function ordenar(objeto) {
//     objeto.sort((a, b) => a.edad - b.edad)
//     return objeto
// }
 
// let users = [
//     {nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer"},
//     {nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor"},
//     {nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico"},
//     {nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador"},
//     {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
//     {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
// ]
 
//6. Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:
// 1. Recorrer el arreglo users
// 2. Obtener los valores de cada llave
// 3. Formar la frase nombre apellido tiene edad años y es profesion
// 4. Escribir esta frase en el navegador linea por linea
// Ejemplo: "Andres Soto tiene 28 años y es profesor"
 
// for(const index in users){
//     let nombre = users[index].nombre
//     let apellido = users[index].apellido
//     let edad = users[index].edad
//     let profesion = users[index].profesion
 
//     let frase = `${nombre} ${apellido} tiene ${edad} años y es ${profesion}`
//     document.write(frase)
//     document.write("<br>")
// }
 
//7. Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista
// ordenada.
    // 1. Crear una funcion que reciba un parametro.
    // 2. Ordenar nuestra lista segun ese parametro.
    // 3. Retorna la lista ordenada.
 
    // function ordenar(parametro){
    //     if (typeof users[parametro] === "number"){
    //         return users.sort((a,b) => a[parametro]-b[parametro])
    //     } else {
    //         return users.sort((a,b) => a[parametro].localeCompare(b[parametro]))
    //     }
    // }
 
 
//8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click mande una alerta que diga: "De acuerdo!"
 
// 1. Seleccionar un elemento del DOM en donde vamos a pegar nuestro boton.
// 2. Crear un elemento "boton"
// 3. Añadir el elemento "boton" al elemento previamente seleccionado del DOM.
// 4. Añadir la palabra "aceptar" a nuestro boton.
// 5. Agregar un EventListener que cuando se haga click al boton muestre una alerta con el mensaje "De acuerdo!"
 
// const root = document.getElementById("root")
// const boton = document.createElement("button")
// boton.textContent = "Aceptar"
// boton.addEventListener("click",() => {
//     alert("De acuerdo!")
// })
 
// root.append(boton)
 
 
//9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, el boton desaparezca.
// boton.addEventListener("mouseover", () =>{
//     boton.style.display = "none"
// })
 
 
 


//10. Crear una funcion que te permita ingresar en un prompt la informacion de un usuario de la siguiente manera:
// "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)"
// El usuario digitara: Andres, Perez, 28, ingeniero.
// La informacion debe ser guardada como objeto dentro del array users asignadole un id unico a cada registro.

//let datos = prompt("Ingrese la informacion del usuario (nombre, apellido, edad, profesion)")

//function capitalizar(datos){ //"hola a todos"
//let array = datos.split(" ") // ["hola", "a", "todos"]
//return array
//}


//11. Utilizando el objeto Date, añadir la propiedad created_date de manera interna en donde se registre el
// momento en que ese registro fue creado.
 


//12
 
let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
    ]
    function ingreseUsuario(){ //"hola a todos"
    const datos = prompt('Ingrese la informacion del usuario (nombre, apellido, edad, profesion)')
    let array = datos.split(", ")
    let user = {}
    user.nombre = array[0]
    user.apellido = array[1]
    user.edad = array[2]
    user.profesion = array[3]
    user.id = users.length + 1
    
    // ["hola", "a", "todos"]
    return user
    }
    
    console.log(ingreseUsuario())

    console.log(users.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))) 
 
// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)




//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.
 

let mes=+prompt("ingrese mes");
let anio=+prompt("ingrese año");

function filtrarUsuarios(year, month) {
    month = month - 1;
  
    const usersFilter = users.filter((element) => {
      let fecha = element.created_at;
      // console.log(fecha);
  
      let nuevoDate = new Date(fecha);
      // console.log(nuevoDate);
  
      let mes = nuevoDate.getMonth();
      // console.log(mes);
  
      let anio = nuevoDate.getFullYear();
      // console.log(anio);
  
      if (anio === year && mes === month) {
        // console.log("heh");
        return true;
      }
    });
    console.log(usersFilter);
  }
  filtrarUsuarios(anio, mes);
//14. Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:
// CREATE
// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10.
 
// READ
// El admin debe poder visualizar en pantalla los registros que estan siendo creados.
 
// UPDATE
// El admin, al presionar un boton: "Modificar registro" en la parte inferior de la lista de registros, debe
// ver un prompt que le pida que ingrese el id del registro que desea modificar, en caso no ingrese ninguno,
// debe volver a la pagina inicial. Si elige modificar alguno, debe aparecer nuevamente el prompt del ejercicio 10
// OJO: Cuando el admin modifique el registro, no se debe modificar la fecha de creacion, en su lugar debe aparecer
// un nuevo campo de fecha de modificacion.
 
// DELETE
// El admin, al presionar un boton: "Borrar registro" en la parte inferior de la lista de registros, debe ver
// un prompt que le pida ingresar el id del registro que desea borrar. Al dar click, debe aparecer un prompt
// que le pregunte: "Esta usted seguro? Si/No" y al escribir Si, deberia borrarlo. En cualquier otro caso
// deberia volver a la pagina inicial sin que se haya borrado ningun registro.
 
// OPCIONAL1: Añadir a la tabla la funcionalidad de ordenar los registros al hacer click en los encabezados
// (como en el caso de Pokemon). Sin embargo, al momento de hacer click nuevamente en el encabezado, los datos
// deben ordenarse de manera inversa. Ejemplo: Si al hacer click se ordenan de menor a mayor, al volver a hacer
// click deben ordenarse de mayor a menor.
 
// OPCIONAL2: Crear un selector que permita filtrar los datos por fecha.
 

